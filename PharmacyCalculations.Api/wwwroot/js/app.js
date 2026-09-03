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
            Number(conversionValue.value);

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
            Number(orderedDose.value);

        const available =
            Number(availableDose.value);

        const quantityAvailable =
            Number(quantity.value);


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
            ${amountToGive}

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
            ${amountToGive}
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
            Number(liquidOrderedDose.value);

        const available =
            Number(liquidAvailableDose.value);

        const volume =
            Number(liquidVolume.value);


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


// ===============================
// GENERATE NEW PROBLEM
// ===============================

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
        (currentOrderedDose /
            currentAvailableDose) *
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


// ===============================
// CHECK ANSWER
// ===============================

checkAnswerButton.addEventListener(
    "click",
    () => {

        if (currentCorrectAnswer === 0) {

            practiceResult.textContent =
                "Click New Problem first.";

            return;
        }


        const studentAnswer =
            Number(practiceAnswer.value);


        if (
            practiceAnswer.value === "" ||
            studentAnswer < 0 ||
            Number.isNaN(studentAnswer)
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


// ===============================
// SHOW SOLUTION
// ===============================

showSolutionButton.addEventListener(
    "click",
    () => {

        if (currentCorrectAnswer === 0) {

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


// ===============================
// NEW PROBLEM
// ===============================

newProblemButton.addEventListener(
    "click",
    generatePracticeProblem
);