// ===============================
// METRIC CONVERSION
// ===============================

const conversionType =
    document.getElementById(
        "conversionType"
    );

const conversionValue =
    document.getElementById(
        "conversionValue"
    );

const convertButton =
    document.getElementById(
        "convertButton"
    );

const conversionResult =
    document.getElementById(
        "conversionResult"
    );


convertButton.addEventListener(
    "click",
    () => {

        const value =
            Number(
                conversionValue.value
            );

        const type =
            conversionType.value;


        if (
            conversionValue.value === "" ||
            value < 0 ||
            Number.isNaN(value)
        ) {

            conversionResult.textContent =
                "Please enter a valid amount.";

            return;
        }


        let answer = 0;
        let explanation = "";


        switch (type) {

            case "g-mg":

                answer =
                    value * 1000;

                explanation =
                    `${value} g × 1000 = ` +
                    `${answer} mg`;

                break;


            case "mg-g":

                answer =
                    value / 1000;

                explanation =
                    `${value} mg ÷ 1000 = ` +
                    `${answer} g`;

                break;


            case "mg-mcg":

                answer =
                    value * 1000;

                explanation =
                    `${value} mg × 1000 = ` +
                    `${answer} mcg`;

                break;


            case "mcg-mg":

                answer =
                    value / 1000;

                explanation =
                    `${value} mcg ÷ 1000 = ` +
                    `${answer} mg`;

                break;


            case "l-ml":

                answer =
                    value * 1000;

                explanation =
                    `${value} L × 1000 = ` +
                    `${answer} mL`;

                break;


            case "ml-l":

                answer =
                    value / 1000;

                explanation =
                    `${value} mL ÷ 1000 = ` +
                    `${answer} L`;

                break;
        }


        conversionResult.innerHTML = `
            <strong>Answer:</strong>
            ${answer}

            <br><br>

            <strong>Work:</strong>
            ${explanation}
        `;
    }
);


// ===============================
// TABLET DOSAGE CALCULATOR
// ===============================

const orderedDose =
    document.getElementById(
        "orderedDose"
    );

const availableDose =
    document.getElementById(
        "availableDose"
    );

const quantity =
    document.getElementById(
        "quantity"
    );

const calculateDoseButton =
    document.getElementById(
        "calculateDoseButton"
    );

const doseResult =
    document.getElementById(
        "doseResult"
    );


calculateDoseButton.addEventListener(
    "click",
    () => {

        const ordered =
            Number(
                orderedDose.value
            );

        const available =
            Number(
                availableDose.value
            );

        const quantityAvailable =
            Number(
                quantity.value
            );


        if (
            orderedDose.value === "" ||
            availableDose.value === "" ||
            quantity.value === "" ||
            ordered <= 0 ||
            available <= 0 ||
            quantityAvailable <= 0
        ) {

            doseResult.textContent =
                "Please enter valid values.";

            return;
        }


        const amountToGive =
            (ordered / available) *
            quantityAvailable;


        doseResult.innerHTML = `
            <strong>Answer:</strong>
            ${amountToGive} tablet(s)

            <br><br>

            <strong>Formula:</strong>

            <br>

            ${ordered}
            ÷
            ${available}
            ×
            ${quantityAvailable}

            <br><br>

            =
            ${amountToGive} tablet(s)
        `;
    }
);


// ===============================
// LIQUID MEDICATION CALCULATOR
// ===============================

const liquidOrderedDose =
    document.getElementById(
        "liquidOrderedDose"
    );

const liquidAvailableDose =
    document.getElementById(
        "liquidAvailableDose"
    );

const liquidVolume =
    document.getElementById(
        "liquidVolume"
    );

const calculateLiquidButton =
    document.getElementById(
        "calculateLiquidButton"
    );

const liquidResult =
    document.getElementById(
        "liquidResult"
    );


calculateLiquidButton.addEventListener(
    "click",
    () => {

        const ordered =
            Number(
                liquidOrderedDose.value
            );

        const available =
            Number(
                liquidAvailableDose.value
            );

        const volume =
            Number(
                liquidVolume.value
            );


        if (
            liquidOrderedDose.value === "" ||
            liquidAvailableDose.value === "" ||
            liquidVolume.value === "" ||
            ordered <= 0 ||
            available <= 0 ||
            volume <= 0
        ) {

            liquidResult.textContent =
                "Please enter valid values.";

            return;
        }


        const amountToGive =
            (ordered / available) *
            volume;


        liquidResult.innerHTML = `
            <strong>Answer:</strong>
            ${amountToGive} mL

            <br><br>

            <strong>Formula:</strong>

            <br>

            ${ordered}
            ÷
            ${available}
            ×
            ${volume}

            <br><br>

            =
            ${amountToGive} mL
        `;
    }
);


// ===============================
// PRACTICE MODE
// ===============================

const practiceQuestion =
    document.getElementById(
        "practiceQuestion"
    );

const practiceAnswer =
    document.getElementById(
        "practiceAnswer"
    );

const checkAnswerButton =
    document.getElementById(
        "checkAnswerButton"
    );

const newProblemButton =
    document.getElementById(
        "newProblemButton"
    );

const showSolutionButton =
    document.getElementById(
        "showSolutionButton"
    );

const practiceResult =
    document.getElementById(
        "practiceResult"
    );


let currentOrderedDose = 0;

let currentAvailableDose = 0;

let currentVolume = 0;

let currentCorrectAnswer = 0;


function generatePracticeProblem() {

    const problems = [

        {
            ordered: 250,
            available: 125,
            volume: 5
        },

        {
            ordered: 500,
            available: 250,
            volume: 5
        },

        {
            ordered: 300,
            available: 150,
            volume: 5
        },

        {
            ordered: 200,
            available: 100,
            volume: 5
        },

        {
            ordered: 750,
            available: 250,
            volume: 5
        },

        {
            ordered: 125,
            available: 250,
            volume: 5
        }
    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            problems.length
        );


    const problem =
        problems[randomIndex];


    currentOrderedDose =
        problem.ordered;

    currentAvailableDose =
        problem.available;

    currentVolume =
        problem.volume;


    currentCorrectAnswer =
        (
            currentOrderedDose /
            currentAvailableDose
        ) *
        currentVolume;


    practiceQuestion.innerHTML = `
        <strong>Dose Ordered:</strong>
        ${currentOrderedDose} mg

        <br><br>

        <strong>Dose Available:</strong>
        ${currentAvailableDose} mg

        <br><br>

        <strong>Volume Available:</strong>
        ${currentVolume} mL

        <br><br>

        How many mL should be administered?
    `;


    practiceAnswer.value = "";

    practiceResult.innerHTML = "";

    practiceAnswer.focus();
}


checkAnswerButton.addEventListener(
    "click",
    () => {

        if (
            currentCorrectAnswer === 0
        ) {

            practiceResult.textContent =
                "Click New Problem first.";

            return;
        }


        const studentAnswer =
            Number(
                practiceAnswer.value
            );


        if (
            practiceAnswer.value === "" ||
            studentAnswer < 0 ||
            Number.isNaN(
                studentAnswer
            )
        ) {

            practiceResult.textContent =
                "Please enter an answer.";

            return;
        }


        if (
            Math.abs(
                studentAnswer -
                currentCorrectAnswer
            ) < 0.01
        ) {

            practiceResult.innerHTML = `
                <strong>Correct!</strong>

                <br><br>

                ${studentAnswer} mL
            `;
        }

        else {

            practiceResult.innerHTML = `
                <strong>Try Again.</strong>

                <br><br>

                Check your calculation and
                enter another answer.
            `;
        }
    }
);


showSolutionButton.addEventListener(
    "click",
    () => {

        if (
            currentCorrectAnswer === 0
        ) {

            practiceResult.textContent =
                "Click New Problem first.";

            return;
        }


        practiceResult.innerHTML = `
            <strong>Solution:</strong>

            <br><br>

            Amount to give =
            Dose Ordered ÷ Dose Available
            × Volume Available

            <br><br>

            ${currentOrderedDose}
            ÷
            ${currentAvailableDose}
            ×
            ${currentVolume}

            <br><br>

            =
            <strong>
                ${currentCorrectAnswer} mL
            </strong>
        `;
    }
);


newProblemButton.addEventListener(
    "click",
    generatePracticeProblem
);


// ===============================
// DOSING SPOON PRACTICE
// ===============================

const targetVolume =
    document.getElementById(
        "targetVolume"
    );

const spoonLiquid =
    document.getElementById(
        "spoonLiquid"
    );

const selectedVolumeText =
    document.getElementById(
        "selectedVolumeText"
    );

const checkDeviceButton =
    document.getElementById(
        "checkDeviceButton"
    );

const newDeviceProblemButton =
    document.getElementById(
        "newDeviceProblemButton"
    );

const showDeviceAnswerButton =
    document.getElementById(
        "showDeviceAnswerButton"
    );

const resetDeviceScoreButton =
    document.getElementById(
        "resetDeviceScoreButton"
    );

const deviceResult =
    document.getElementById(
        "deviceResult"
    );

const deviceScoreDisplay =
    document.getElementById(
        "deviceScoreDisplay"
    );

const measurementLines =
    document.querySelectorAll(
        ".measurement-line"
    );


let currentTargetVolume = null;

let selectedDeviceVolume = null;

let deviceScoreCorrect = 0;

let deviceScoreAttempts = 0;

let deviceProblemAnswered = false;


function updateDeviceScore() {

    deviceScoreDisplay.textContent =
        `${deviceScoreCorrect} / ` +
        `${deviceScoreAttempts}`;
}


function setSpoonLiquidLevel(
    volume
) {

    let liquidHeight = "0%";


    if (volume === 1) {

        liquidHeight = "18%";
    }

    else if (volume === 2.5) {

        liquidHeight = "42%";
    }

    else if (volume === 5) {

        liquidHeight = "75%";
    }


    spoonLiquid.style.height =
        liquidHeight;
}


function clearSelectedLines() {

    measurementLines.forEach(
        (line) => {

            line.classList.remove(
                "selected"
            );
        }
    );
}


measurementLines.forEach(
    (line) => {

        line.addEventListener(
            "click",
            () => {

                clearSelectedLines();


                line.classList.add(
                    "selected"
                );


                selectedDeviceVolume =
                    Number(
                        line.dataset.volume
                    );


                setSpoonLiquidLevel(
                    selectedDeviceVolume
                );


                selectedVolumeText.textContent =
                    `Selected volume: ` +
                    `${selectedDeviceVolume} mL`;


                deviceResult.innerHTML = "";
            }
        );
    }
);


function generateDeviceProblem() {

    const volumes = [
        1,
        2.5,
        5
    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            volumes.length
        );


    currentTargetVolume =
        volumes[randomIndex];


    targetVolume.textContent =
        currentTargetVolume;


    selectedDeviceVolume = null;

    deviceProblemAnswered = false;


    spoonLiquid.style.height =
        "0%";


    selectedVolumeText.textContent =
        "Selected volume: None";


    deviceResult.innerHTML = "";


    clearSelectedLines();
}


checkDeviceButton.addEventListener(
    "click",
    () => {

        if (
            currentTargetVolume === null
        ) {

            deviceResult.textContent =
                "Click New Problem first.";

            return;
        }


        if (
            selectedDeviceVolume === null
        ) {

            deviceResult.textContent =
                "Select a measurement line.";

            return;
        }


        const isCorrect =
            selectedDeviceVolume ===
            currentTargetVolume;


        if (
            !deviceProblemAnswered
        ) {

            deviceScoreAttempts++;


            if (isCorrect) {

                deviceScoreCorrect++;
            }


            deviceProblemAnswered = true;


            updateDeviceScore();
        }


        if (isCorrect) {

            deviceResult.innerHTML = `
                <strong>Correct!</strong>

                <br><br>

                You selected
                ${selectedDeviceVolume} mL.
            `;
        }

        else {

            deviceResult.innerHTML = `
                <strong>Try Again.</strong>

                <br><br>

                Look carefully at the
                measurement lines.
            `;
        }
    }
);


showDeviceAnswerButton.addEventListener(
    "click",
    () => {

        if (
            currentTargetVolume === null
        ) {

            deviceResult.textContent =
                "Click New Problem first.";

            return;
        }


        clearSelectedLines();


        measurementLines.forEach(
            (line) => {

                const lineVolume =
                    Number(
                        line.dataset.volume
                    );


                if (
                    lineVolume ===
                    currentTargetVolume
                ) {

                    line.classList.add(
                        "selected"
                    );
                }
            }
        );


        setSpoonLiquidLevel(
            currentTargetVolume
        );


        selectedVolumeText.textContent =
            `Correct volume: ` +
            `${currentTargetVolume} mL`;


        deviceResult.innerHTML = `
            <strong>Answer:</strong>

            <br><br>

            Fill the dosing spoon to the
            ${currentTargetVolume} mL line.
        `;
    }
);


newDeviceProblemButton.addEventListener(
    "click",
    generateDeviceProblem
);


resetDeviceScoreButton.addEventListener(
    "click",
    () => {

        deviceScoreCorrect = 0;

        deviceScoreAttempts = 0;


        updateDeviceScore();


        deviceResult.textContent =
            "Score reset.";
    }
);


updateDeviceScore();


// ===============================
// ORAL SYRINGE PRACTICE
// ===============================

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


let currentSyringeTarget = null;

let selectedSyringeVolume = null;

let syringeScoreCorrect = 0;

let syringeScoreAttempts = 0;

let syringeProblemAnswered = false;


// ===============================
// SYRINGE SCORE
// ===============================

function updateSyringeScore() {

    syringeScoreDisplay.textContent =
        `${syringeScoreCorrect} / ` +
        `${syringeScoreAttempts}`;
}


// ===============================
// SET SYRINGE LIQUID
// ===============================

function setSyringeLiquidLevel(
    volume
) {

    const percentage =
        (volume / 5) * 100;


    syringeLiquid.style.width =
        `${percentage}%`;
}


// ===============================
// CLEAR SYRINGE MARKS
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
// SELECT SYRINGE MARK
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
                    `Selected volume: ` +
                    `${selectedSyringeVolume} mL`;


                syringeResult.innerHTML = "";
            }
        );
    }
);


// ===============================
// GENERATE SYRINGE PROBLEM
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
                "Select a measurement mark.";

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

                Check the measurement marks
                on the syringe.
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


        selectedSyringeVolumeText.textContent =
            `Correct volume: ` +
            `${currentSyringeTarget} mL`;


        syringeResult.innerHTML = `
            <strong>Answer:</strong>

            <br><br>

            Fill the syringe to the
            ${currentSyringeTarget} mL mark.
        `;
    }
);


// ===============================
// NEW SYRINGE PROBLEM
// ===============================

newSyringeProblemButton.addEventListener(
    "click",
    generateSyringeProblem
);


// ===============================
// RESET SYRINGE SCORE
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
// INITIAL SYRINGE SCORE
// ===============================

updateSyringeScore();