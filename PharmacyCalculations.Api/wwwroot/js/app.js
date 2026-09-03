// ===============================
// ORAL SYRINGE PRACTICE
// ===============================

// Get the HTML elements
const syringeTargetVolume =
    document.getElementById(
        "syringeTargetVolume"
    );

const syringeLiquid =
    document.getElementById(
        "syringeLiquid"
    );

const selectedSyringeVolumeText =
    document.getElementById(
        "selectedSyringeVolumeText"
    );

const checkSyringeButton =
    document.getElementById(
        "checkSyringeButton"
    );

const newSyringeProblemButton =
    document.getElementById(
        "newSyringeProblemButton"
    );

const showSyringeAnswerButton =
    document.getElementById(
        "showSyringeAnswerButton"
    );

const resetSyringeScoreButton =
    document.getElementById(
        "resetSyringeScoreButton"
    );

const syringeResult =
    document.getElementById(
        "syringeResult"
    );

const syringeScoreDisplay =
    document.getElementById(
        "syringeScoreDisplay"
    );

const syringeMarks =
    document.querySelectorAll(
        ".syringe-mark"
    );


// ===============================
// SYRINGE STATE
// ===============================

let currentSyringeTarget = null;

let selectedSyringeVolume = null;

let syringeScoreCorrect = 0;

let syringeScoreAttempts = 0;

let syringeProblemAnswered = false;


// ===============================
// UPDATE SCORE
// ===============================

function updateSyringeScore() {

    syringeScoreDisplay.textContent =
        `${syringeScoreCorrect} / ${syringeScoreAttempts}`;
}


// ===============================
// SET SYRINGE LIQUID LEVEL
// ===============================

function setSyringeLiquidLevel(volume) {

    const percentage =
        (volume / 5) * 100;

    syringeLiquid.style.width =
        `${percentage}%`;
}


// ===============================
// CLEAR SELECTED MARKS
// ===============================

function clearSyringeMarks() {

    syringeMarks.forEach(
        (mark) => {

            mark.classList.remove(
                "selected"
            );
        }
    );
}


// ===============================
// SELECT A SYRINGE MARK
// ===============================

syringeMarks.forEach(
    (mark) => {

        mark.addEventListener(
            "click",
            () => {

                clearSyringeMarks();

                mark.classList.add(
                    "selected"
                );


                selectedSyringeVolume =
                    Number(
                        mark.dataset.volume
                    );


                setSyringeLiquidLevel(
                    selectedSyringeVolume
                );


                selectedSyringeVolumeText.textContent =
                    `Selected volume: ${selectedSyringeVolume} mL`;


                syringeResult.innerHTML = "";
            }
        );
    }
);


// ===============================
// GENERATE NEW SYRINGE PROBLEM
// ===============================

function generateSyringeProblem() {

    const volumes = [
        0.5,
        1,
        1.5,
        2,
        2.5,
        3,
        3.5,
        4,
        4.5,
        5
    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            volumes.length
        );


    currentSyringeTarget =
        volumes[randomIndex];


    syringeTargetVolume.textContent =
        currentSyringeTarget;


    selectedSyringeVolume = null;

    syringeProblemAnswered = false;


    syringeLiquid.style.width =
        "0%";


    selectedSyringeVolumeText.textContent =
        "Selected volume: None";


    syringeResult.innerHTML = "";


    clearSyringeMarks();
}


// ===============================
// CHECK SYRINGE ANSWER
// ===============================

checkSyringeButton.addEventListener(
    "click",
    () => {

        if (
            currentSyringeTarget === null
        ) {

            syringeResult.textContent =
                "Click New Problem first.";

            return;
        }


        if (
            selectedSyringeVolume === null
        ) {

            syringeResult.textContent =
                "Select a measurement line.";

            return;
        }


        const isCorrect =
            selectedSyringeVolume ===
            currentSyringeTarget;


        if (
            !syringeProblemAnswered
        ) {

            syringeScoreAttempts++;


            if (isCorrect) {

                syringeScoreCorrect++;
            }


            syringeProblemAnswered = true;


            updateSyringeScore();
        }


        if (isCorrect) {

            syringeResult.innerHTML = `
                <strong>Correct!</strong>

                <br><br>

                You selected
                ${selectedSyringeVolume} mL.
            `;
        }

        else {

            syringeResult.innerHTML = `
                <strong>Try Again.</strong>

                <br><br>

                Check the measurement lines
                and try again.
            `;
        }
    }
);


// ===============================
// SHOW SYRINGE ANSWER
// ===============================

showSyringeAnswerButton.addEventListener(
    "click",
    () => {

        if (
            currentSyringeTarget === null
        ) {

            syringeResult.textContent =
                "Click New Problem first.";

            return;
        }


        clearSyringeMarks();


        syringeMarks.forEach(
            (mark) => {

                const markVolume =
                    Number(
                        mark.dataset.volume
                    );


                if (
                    markVolume ===
                    currentSyringeTarget
                ) {

                    mark.classList.add(
                        "selected"
                    );
                }
            }
        );


        setSyringeLiquidLevel(
            currentSyringeTarget
        );


        selectedSyringeVolume =
            currentSyringeTarget;


        selectedSyringeVolumeText.textContent =
            `Correct volume: ${currentSyringeTarget} mL`;


        syringeResult.innerHTML = `
            <strong>Answer:</strong>

            <br><br>

            Fill the syringe to the
            ${currentSyringeTarget} mL line.
        `;
    }
);


// ===============================
// NEW PROBLEM BUTTON
// ===============================

newSyringeProblemButton.addEventListener(
    "click",
    generateSyringeProblem
);


// ===============================
// RESET SCORE BUTTON
// ===============================

resetSyringeScoreButton.addEventListener(
    "click",
    () => {

        syringeScoreCorrect = 0;

        syringeScoreAttempts = 0;


        updateSyringeScore();


        syringeResult.textContent =
            "Score reset.";
    }
);


// ===============================
// INITIAL SETUP
// ===============================

updateSyringeScore();