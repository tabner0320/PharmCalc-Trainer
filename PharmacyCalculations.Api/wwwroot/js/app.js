// ==========================================
// PHARMCALC TRAINER
// app.js
// ==========================================


// ==========================================
// METRIC CONVERSION
// ==========================================

const metricValue =
    document.getElementById("metricValue");

const conversionType =
    document.getElementById("conversionType");

const convertButton =
    document.getElementById("convertButton");

const conversionResult =
    document.getElementById("conversionResult");


convertButton.addEventListener(
    "click",
    async () => {

        const value =
            Number(metricValue.value);

        const conversion =
            conversionType.value;


        if (
            metricValue.value === "" ||
            Number.isNaN(value)
        ) {
            conversionResult.textContent =
                "Enter a valid number.";

            return;
        }


        const conversionMap = {
            "g-mg": "g-to-mg",
            "mg-g": "mg-to-g",
            "mg-mcg": "mg-to-mcg",
            "mcg-mg": "mcg-to-mg",
            "l-ml": "l-to-ml",
            "ml-l": "ml-to-l"
        };


        const apiConversionType =
            conversionMap[conversion];


        if (!apiConversionType) {
            conversionResult.textContent =
                "Select a conversion.";

            return;
        }


        try {

            const response = await fetch(
                "/api/convert",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        value: value,
                        conversionType:
                            apiConversionType
                    })
                }
            );


            if (!response.ok) {
                conversionResult.textContent =
                    "Unable to complete conversion.";

                return;
            }


            const data =
                await response.json();


            let message;


            switch (conversion) {

                case "g-mg":
                    message =
                        `${value} g = ${data.convertedValue} mg`;
                    break;

                case "mg-g":
                    message =
                        `${value} mg = ${data.convertedValue} g`;
                    break;

                case "mg-mcg":
                    message =
                        `${value} mg = ${data.convertedValue} mcg`;
                    break;

                case "mcg-mg":
                    message =
                        `${value} mcg = ${data.convertedValue} mg`;
                    break;

                case "l-ml":
                    message =
                        `${value} L = ${data.convertedValue} mL`;
                    break;

                case "ml-l":
                    message =
                        `${value} mL = ${data.convertedValue} L`;
                    break;
            }


            conversionResult.innerHTML =
                `<strong>${message}</strong>`;
        }

        catch (error) {

            console.error(error);

            conversionResult.textContent =
                "Unable to connect to the API.";
        }
    }
);
// ==========================================
// TABLET DOSAGE CALCULATOR
// ==========================================

const tabletOrdered =
    document.getElementById(
        "tabletOrdered"
    );

const tabletAvailable =
    document.getElementById(
        "tabletAvailable"
    );

const tabletQuantity =
    document.getElementById(
        "tabletQuantity"
    );

const tabletCalculateButton =
    document.getElementById(
        "tabletCalculateButton"
    );

const tabletResult =
    document.getElementById(
        "tabletResult"
    );


tabletCalculateButton.addEventListener(
    "click",
    async () => {

        const ordered =
            Number(tabletOrdered.value);

        const available =
            Number(tabletAvailable.value);

        const quantity =
            Number(tabletQuantity.value);


        if (
            tabletOrdered.value === "" ||
            tabletAvailable.value === "" ||
            tabletQuantity.value === ""
        ) {
            tabletResult.textContent =
                "Enter all values.";

            return;
        }


        if (
            Number.isNaN(ordered) ||
            Number.isNaN(available) ||
            Number.isNaN(quantity)
        ) {
            tabletResult.textContent =
                "Enter valid numbers.";

            return;
        }


        if (available <= 0) {
            tabletResult.textContent =
                "Dose Available must be greater than 0.";

            return;
        }


        try {

            const response = await fetch(
                "/api/calculate/tablet",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        doseOrdered: ordered,
                        doseAvailable: available,
                        quantityAvailable:
                            quantity
                    })
                }
            );


            if (!response.ok) {
                tabletResult.textContent =
                    "Unable to calculate tablet dose.";

                return;
            }


            const data =
                await response.json();


            const roundedAnswer =
                Math.round(
                    data.amountToGive * 100
                ) / 100;


            tabletResult.innerHTML = `
                <strong>
                    Answer:
                </strong>

                ${roundedAnswer} tablet(s)

                <br><br>

                ${ordered}
                ÷
                ${available}
                ×
                ${quantity}
                =
                ${roundedAnswer}
            `;
        }

        catch (error) {

            console.error(error);

            tabletResult.textContent =
                "Unable to connect to the API.";
        }
    }
);
// ==========================================
// LIQUID MEDICATION CALCULATOR
// ==========================================

const liquidOrdered =
    document.getElementById(
        "liquidOrdered"
    );

const liquidAvailable =
    document.getElementById(
        "liquidAvailable"
    );

const liquidVolume =
    document.getElementById(
        "liquidVolume"
    );

const liquidCalculateButton =
    document.getElementById(
        "liquidCalculateButton"
    );

const liquidResult =
    document.getElementById(
        "liquidResult"
    );


liquidCalculateButton.addEventListener(
    "click",
    async () => {

        const ordered =
            Number(liquidOrdered.value);

        const available =
            Number(liquidAvailable.value);

        const volume =
            Number(liquidVolume.value);


        if (
            liquidOrdered.value === "" ||
            liquidAvailable.value === "" ||
            liquidVolume.value === ""
        ) {
            liquidResult.textContent =
                "Enter all values.";

            return;
        }


        if (
            Number.isNaN(ordered) ||
            Number.isNaN(available) ||
            Number.isNaN(volume)
        ) {
            liquidResult.textContent =
                "Enter valid numbers.";

            return;
        }


        if (available <= 0) {
            liquidResult.textContent =
                "Dose Available must be greater than 0.";

            return;
        }


        try {

            const response = await fetch(
                "/api/calculate/liquid",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        doseOrdered: ordered,
                        doseAvailable: available,
                        volumeAvailable:
                            volume
                    })
                }
            );


            if (!response.ok) {
                liquidResult.textContent =
                    "Unable to calculate liquid dose.";

                return;
            }


            const data =
                await response.json();


            const roundedAnswer =
                Math.round(
                    data.amountToGive * 100
                ) / 100;


            liquidResult.innerHTML = `
                <strong>
                    Answer:
                </strong>

                ${roundedAnswer} mL

                <br><br>

                ${ordered}
                ÷
                ${available}
                ×
                ${volume}
                =
                ${roundedAnswer}
            `;
        }

        catch (error) {

            console.error(error);

            liquidResult.textContent =
                "Unable to connect to the API.";
        }
    }
);
// ==========================================
// PRACTICE MODE
// ==========================================

const practiceQuestion =
    document.getElementById(
        "practiceQuestion"
    );

const practiceAnswer =
    document.getElementById(
        "practiceAnswer"
    );

const checkPracticeButton =
    document.getElementById(
        "checkPracticeButton"
    );

const newPracticeButton =
    document.getElementById(
        "newPracticeButton"
    );

const showPracticeSolutionButton =
    document.getElementById(
        "showPracticeSolutionButton"
    );

const practiceResult =
    document.getElementById(
        "practiceResult"
    );


let currentPracticeProblem = null;


const practiceProblems = [

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
        ordered: 150,
        available: 75,
        volume: 5
    },

    {
        ordered: 100,
        available: 50,
        volume: 5
    },

    {
        ordered: 300,
        available: 150,
        volume: 10
    },

    {
        ordered: 400,
        available: 200,
        volume: 5
    }
];


// ==========================================
// GENERATE PRACTICE PROBLEM
// ==========================================

function generatePracticeProblem() {

    const randomIndex =
        Math.floor(
            Math.random() *
            practiceProblems.length
        );


    currentPracticeProblem =
        practiceProblems[randomIndex];


    practiceQuestion.innerHTML = `
        Dose Ordered:
        <strong>
            ${currentPracticeProblem.ordered} mg
        </strong>

        <br>

        Dose Available:
        <strong>
            ${currentPracticeProblem.available} mg
        </strong>

        <br>

        Volume Available:
        <strong>
            ${currentPracticeProblem.volume} mL
        </strong>
    `;


    practiceAnswer.value = "";

    practiceResult.innerHTML = "";
}


// ==========================================
// CALCULATE PRACTICE ANSWER
// ==========================================

function calculatePracticeAnswer() {

    if (!currentPracticeProblem) {

        return null;
    }


    const answer =
        (
            currentPracticeProblem.ordered /
            currentPracticeProblem.available
        ) *
        currentPracticeProblem.volume;


    return (
        Math.round(
            answer * 100
        ) / 100
    );
}


// ==========================================
// NEW PRACTICE PROBLEM
// ==========================================

newPracticeButton.addEventListener(
    "click",
    generatePracticeProblem
);


// ==========================================
// CHECK PRACTICE ANSWER
// ==========================================

checkPracticeButton.addEventListener(
    "click",
    () => {

        if (!currentPracticeProblem) {

            practiceResult.textContent =
                "Click New Problem first.";

            return;
        }


        if (
            practiceAnswer.value === ""
        ) {

            practiceResult.textContent =
                "Enter your answer.";

            return;
        }


        const userAnswer =
            Number(
                practiceAnswer.value
            );


        const correctAnswer =
            calculatePracticeAnswer();


        if (
            Number.isNaN(userAnswer)
        ) {

            practiceResult.textContent =
                "Enter a valid number.";

            return;
        }


        if (
            Math.abs(
                userAnswer -
                correctAnswer
            ) < 0.01
        ) {

            practiceResult.innerHTML = `
                <strong>
                    Correct!
                </strong>

                <br><br>

                ${correctAnswer} mL
            `;
        }

        else {

            practiceResult.innerHTML = `
                <strong>
                    Try Again.
                </strong>

                <br><br>

                Check your calculation.
            `;
        }
    }
);


// ==========================================
// SHOW PRACTICE SOLUTION
// ==========================================

showPracticeSolutionButton.addEventListener(
    "click",
    () => {

        if (!currentPracticeProblem) {

            practiceResult.textContent =
                "Click New Problem first.";

            return;
        }


        const correctAnswer =
            calculatePracticeAnswer();


        practiceResult.innerHTML = `
            <strong>
                Solution:
            </strong>

            <br><br>

            ${currentPracticeProblem.ordered}
            ÷
            ${currentPracticeProblem.available}
            ×
            ${currentPracticeProblem.volume}

            <br><br>

            =
            ${correctAnswer} mL
        `;
    }
);


// ==========================================
// DOSING SPOON PRACTICE
// ==========================================

const deviceScoreDisplay =
    document.getElementById(
        "deviceScoreDisplay"
    );

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

const measurementLines =
    document.querySelectorAll(
        ".measurement-line"
    );


let currentDeviceTarget = null;

let selectedDeviceVolume = null;

let deviceScoreCorrect = 0;

let deviceScoreAttempts = 0;

let deviceProblemAnswered = false;


// ==========================================
// UPDATE SPOON SCORE
// ==========================================

function updateDeviceScore() {

    deviceScoreDisplay.textContent =
        `${deviceScoreCorrect} / ${deviceScoreAttempts}`;
}


// ==========================================
// SET SPOON LIQUID LEVEL
// ==========================================

function setSpoonLiquidLevel(volume) {

    let percentage = 0;


    if (volume === 1) {

        percentage = 20;
    }

    else if (volume === 2.5) {

        percentage = 50;
    }

    else if (volume === 5) {

        percentage = 82;
    }


    spoonLiquid.style.height =
        `${percentage}%`;
}


// ==========================================
// CLEAR SPOON SELECTION
// ==========================================

function clearMeasurementLines() {

    measurementLines.forEach(
        (line) => {

            line.classList.remove(
                "selected"
            );
        }
    );
}


// ==========================================
// SELECT SPOON LINE
// ==========================================

measurementLines.forEach(
    (line) => {

        line.addEventListener(
            "click",
            () => {

                clearMeasurementLines();


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
                    `Selected volume: ${selectedDeviceVolume} mL`;


                deviceResult.innerHTML = "";
            }
        );
    }
);


// ==========================================
// GENERATE SPOON PROBLEM
// ==========================================

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


    currentDeviceTarget =
        volumes[randomIndex];


    targetVolume.textContent =
        currentDeviceTarget;


    selectedDeviceVolume = null;

    deviceProblemAnswered = false;


    spoonLiquid.style.height =
        "0%";


    selectedVolumeText.textContent =
        "Selected volume: None";


    deviceResult.innerHTML = "";


    clearMeasurementLines();
}


// ==========================================
// CHECK SPOON ANSWER
// ==========================================

checkDeviceButton.addEventListener(
    "click",
    () => {

        if (
            currentDeviceTarget === null
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
            currentDeviceTarget;


        if (!deviceProblemAnswered) {

            deviceScoreAttempts++;


            if (isCorrect) {

                deviceScoreCorrect++;
            }


            deviceProblemAnswered = true;


            updateDeviceScore();
        }


        if (isCorrect) {

            deviceResult.innerHTML = `
                <strong>
                    Correct!
                </strong>

                <br><br>

                You selected
                ${selectedDeviceVolume} mL.
            `;
        }

        else {

            deviceResult.innerHTML = `
                <strong>
                    Try Again.
                </strong>

                <br><br>

                Check the measurement lines
                on the spoon.
            `;
        }
    }
);


// ==========================================
// SHOW SPOON ANSWER
// ==========================================

showDeviceAnswerButton.addEventListener(
    "click",
    () => {

        if (
            currentDeviceTarget === null
        ) {

            deviceResult.textContent =
                "Click New Problem first.";

            return;
        }


        clearMeasurementLines();


        measurementLines.forEach(
            (line) => {

                const lineVolume =
                    Number(
                        line.dataset.volume
                    );


                if (
                    lineVolume ===
                    currentDeviceTarget
                ) {

                    line.classList.add(
                        "selected"
                    );
                }
            }
        );


        setSpoonLiquidLevel(
            currentDeviceTarget
        );


        selectedDeviceVolume =
            currentDeviceTarget;


        selectedVolumeText.textContent =
            `Correct volume: ${currentDeviceTarget} mL`;


        deviceResult.innerHTML = `
            <strong>
                Answer:
            </strong>

            <br><br>

            Fill the spoon to the
            ${currentDeviceTarget} mL line.
        `;
    }
);


// ==========================================
// NEW SPOON PROBLEM
// ==========================================

newDeviceProblemButton.addEventListener(
    "click",
    generateDeviceProblem
);


// ==========================================
// RESET SPOON SCORE
// ==========================================

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


// ==========================================
// INITIAL SPOON SETUP
// ==========================================

updateDeviceScore();


// ==========================================
// ORAL SYRINGE PRACTICE
// ==========================================

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


// ==========================================
// UPDATE SYRINGE SCORE
// ==========================================

function updateSyringeScore() {

    syringeScoreDisplay.textContent =
        `${syringeScoreCorrect} / ${syringeScoreAttempts}`;
}


// ==========================================
// SET SYRINGE LIQUID LEVEL
// ==========================================

function setSyringeLiquidLevel(volume) {

    const percentage =
        (volume / 5) * 100;


    syringeLiquid.style.width =
        `${percentage}%`;
}


// ==========================================
// CLEAR SYRINGE MARKS
// ==========================================

function clearSyringeMarks() {

    syringeMarks.forEach(
        (mark) => {

            mark.classList.remove(
                "selected"
            );
        }
    );
}


// ==========================================
// SELECT SYRINGE MARK
// ==========================================

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


// ==========================================
// GENERATE SYRINGE PROBLEM
// ==========================================

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


// ==========================================
// CHECK SYRINGE ANSWER
// ==========================================

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


        if (!syringeProblemAnswered) {

            syringeScoreAttempts++;


            if (isCorrect) {

                syringeScoreCorrect++;
            }


            syringeProblemAnswered = true;


            updateSyringeScore();
        }


        if (isCorrect) {

            syringeResult.innerHTML = `
                <strong>
                    Correct!
                </strong>

                <br><br>

                You selected
                ${selectedSyringeVolume} mL.
            `;
        }

        else {

            syringeResult.innerHTML = `
                <strong>
                    Try Again.
                </strong>

                <br><br>

                Check the measurement lines
                and try again.
            `;
        }
    }
);


// ==========================================
// SHOW SYRINGE ANSWER
// ==========================================

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
            <strong>
                Answer:
            </strong>

            <br><br>

            Fill the syringe to the
            ${currentSyringeTarget} mL line.
        `;
    }
);


// ==========================================
// NEW SYRINGE PROBLEM
// ==========================================

newSyringeProblemButton.addEventListener(
    "click",
    generateSyringeProblem
);


// ==========================================
// RESET SYRINGE SCORE
// ==========================================

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


// ==========================================
// INITIAL SYRINGE SETUP
// ==========================================

updateSyringeScore();


// ==========================================
// MEDICINE CUP PRACTICE
// ==========================================

const cupScoreDisplay =
    document.getElementById(
        "cupScoreDisplay"
    );

const cupTargetVolume =
    document.getElementById(
        "cupTargetVolume"
    );

const cupLiquid =
    document.getElementById(
        "cupLiquid"
    );

const selectedCupVolumeText =
    document.getElementById(
        "selectedCupVolumeText"
    );

const checkCupButton =
    document.getElementById(
        "checkCupButton"
    );

const newCupProblemButton =
    document.getElementById(
        "newCupProblemButton"
    );

const showCupAnswerButton =
    document.getElementById(
        "showCupAnswerButton"
    );

const resetCupScoreButton =
    document.getElementById(
        "resetCupScoreButton"
    );

const cupResult =
    document.getElementById(
        "cupResult"
    );

const cupMarks =
    document.querySelectorAll(
        ".cup-mark"
    );


let currentCupTarget = null;

let selectedCupVolume = null;

let cupScoreCorrect = 0;

let cupScoreAttempts = 0;

let cupProblemAnswered = false;


// ==========================================
// UPDATE CUP SCORE
// ==========================================

function updateCupScore() {

    cupScoreDisplay.textContent =
        `${cupScoreCorrect} / ${cupScoreAttempts}`;
}


// ==========================================
// SET CUP LIQUID LEVEL
// ==========================================

function setCupLiquidLevel(volume) {

    const percentage =
        (volume / 30) * 100;


    cupLiquid.style.height =
        `${percentage}%`;
}


// ==========================================
// CLEAR CUP MARKS
// ==========================================

function clearCupMarks() {

    cupMarks.forEach(
        (mark) => {

            mark.classList.remove(
                "selected"
            );
        }
    );
}


// ==========================================
// SELECT CUP MARK
// ==========================================

cupMarks.forEach(
    (mark) => {

        mark.addEventListener(
            "click",
            () => {

                clearCupMarks();


                mark.classList.add(
                    "selected"
                );


                selectedCupVolume =
                    Number(
                        mark.dataset.volume
                    );


                setCupLiquidLevel(
                    selectedCupVolume
                );


                selectedCupVolumeText.textContent =
                    `Selected volume: ${selectedCupVolume} mL`;


                cupResult.innerHTML = "";
            }
        );
    }
);


// ==========================================
// GENERATE CUP PROBLEM
// ==========================================

function generateCupProblem() {

    const volumes = [
        5,
        10,
        15,
        20,
        25,
        30
    ];


    const randomIndex =
        Math.floor(
            Math.random() *
            volumes.length
        );


    currentCupTarget =
        volumes[randomIndex];


    cupTargetVolume.textContent =
        currentCupTarget;


    selectedCupVolume = null;

    cupProblemAnswered = false;


    cupLiquid.style.height =
        "0%";


    selectedCupVolumeText.textContent =
        "Selected volume: None";


    cupResult.innerHTML = "";


    clearCupMarks();
}


// ==========================================
// CHECK CUP ANSWER
// ==========================================

checkCupButton.addEventListener(
    "click",
    () => {

        if (
            currentCupTarget === null
        ) {

            cupResult.textContent =
                "Click New Problem first.";

            return;
        }


        if (
            selectedCupVolume === null
        ) {

            cupResult.textContent =
                "Select a measurement line.";

            return;
        }


        const isCorrect =
            selectedCupVolume ===
            currentCupTarget;


        if (!cupProblemAnswered) {

            cupScoreAttempts++;


            if (isCorrect) {

                cupScoreCorrect++;
            }


            cupProblemAnswered = true;


            updateCupScore();
        }


        if (isCorrect) {

            cupResult.innerHTML = `
                <strong>
                    Correct!
                </strong>

                <br><br>

                You selected
                ${selectedCupVolume} mL.
            `;
        }

        else {

            cupResult.innerHTML = `
                <strong>
                    Try Again.
                </strong>

                <br><br>

                Check the measurement lines
                on the medicine cup.
            `;
        }
    }
);


// ==========================================
// SHOW CUP ANSWER
// ==========================================

showCupAnswerButton.addEventListener(
    "click",
    () => {

        if (
            currentCupTarget === null
        ) {

            cupResult.textContent =
                "Click New Problem first.";

            return;
        }


        clearCupMarks();


        cupMarks.forEach(
            (mark) => {

                const markVolume =
                    Number(
                        mark.dataset.volume
                    );


                if (
                    markVolume ===
                    currentCupTarget
                ) {

                    mark.classList.add(
                        "selected"
                    );
                }
            }
        );


        setCupLiquidLevel(
            currentCupTarget
        );


        selectedCupVolume =
            currentCupTarget;


        selectedCupVolumeText.textContent =
            `Correct volume: ${currentCupTarget} mL`;


        cupResult.innerHTML = `
            <strong>
                Answer:
            </strong>

            <br><br>

            Fill the medicine cup to the
            ${currentCupTarget} mL line.
        `;
    }
);


// ==========================================
// NEW CUP PROBLEM
// ==========================================

newCupProblemButton.addEventListener(
    "click",
    generateCupProblem
);


// ==========================================
// RESET CUP SCORE
// ==========================================

resetCupScoreButton.addEventListener(
    "click",
    () => {

        cupScoreCorrect = 0;

        cupScoreAttempts = 0;


        updateCupScore();


        cupResult.textContent =
            "Score reset.";
    }
);


// ==========================================
// INITIAL CUP SETUP
// ==========================================

updateCupScore();