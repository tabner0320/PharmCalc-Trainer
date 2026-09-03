# PharmCalc Trainer

**PharmCalc Trainer** is an educational pharmacy calculation practice application built with **C#, ASP.NET Core, HTML, CSS, and JavaScript**.

The application provides interactive tools and practice exercises for learning common pharmaceutical calculations and medication measurement concepts.

---

## Overview

PharmCalc Trainer was created as a software development portfolio project that combines an **ASP.NET Core backend** with an interactive **HTML, CSS, and JavaScript frontend**.

The project demonstrates:

- C# and .NET development
- ASP.NET Core web application development
- JavaScript event handling
- DOM manipulation
- Mathematical calculation logic
- Interactive user interfaces
- Responsive web design
- Automated testing
- Git and GitHub version control

---

## Features

### Metric Conversion

Practice common pharmacy-related metric conversions:

- Grams to milligrams
- Milligrams to grams
- Milligrams to micrograms
- Micrograms to milligrams
- Liters to milliliters
- Milliliters to liters

---

### Tablet Dosage Calculator

Calculates the number of tablets required using:

```text
Amount to Give =
Dose Ordered ÷ Dose Available × Quantity Available
```

Example:

```text
Dose Ordered: 500 mg
Dose Available: 250 mg
Quantity Available: 1 tablet

500 ÷ 250 × 1 = 2 tablets
```

---

### Liquid Medication Calculator

Calculates the volume of liquid medication using:

```text
Amount to Give =
Dose Ordered ÷ Dose Available × Volume Available
```

Example:

```text
Dose Ordered: 250 mg
Dose Available: 125 mg
Volume Available: 5 mL

250 ÷ 125 × 5 = 10 mL
```

---

### Practice Mode

Generates random liquid medication calculation problems.

Users can:

- Generate a new problem
- Enter an answer
- Check the answer
- View the complete solution

This allows users to practice calculations without manually entering a problem each time.

---

### Dosing Spoon Practice

Provides an interactive dosing spoon exercise.

Users can:

- Generate a random target volume
- Select a measurement line
- See the simulated liquid level
- Check their answer
- Show the correct answer
- Track correct answers and attempts
- Reset the score

Current practice measurements include:

```text
1 mL
2.5 mL
5 mL
```

---

### Oral Syringe Practice

Provides an interactive **5 mL oral syringe** for practicing measurement selection.

Users can select measurements in **0.5 mL increments**:

```text
0.5 mL
1 mL
1.5 mL
2 mL
2.5 mL
3 mL
3.5 mL
4 mL
4.5 mL
5 mL
```

The exercise includes:

- Random measurement problems
- Interactive syringe measurement marks
- Visual liquid fill
- Answer checking
- Show Answer
- Score tracking
- Score reset

---

### Medicine Cup Practice

Provides an interactive **30 mL medicine cup** exercise.

Current practice measurements include:

```text
5 mL
10 mL
15 mL
20 mL
25 mL
30 mL
```

Users can:

- Generate a random target volume
- Select a measurement line
- See the cup fill visually
- Check the selected measurement
- Display the correct answer
- Track correct answers and attempts
- Reset the score

---

## Technologies Used

| Category | Technology |
|---|---|
| Language | C# |
| Framework | .NET / ASP.NET Core |
| Frontend | HTML5 |
| Styling | CSS3 |
| Client-Side Logic | JavaScript |
| Testing | xUnit |
| Version Control | Git |
| Repository Hosting | GitHub |
| Development Environment | Visual Studio Code |

---

## Project Structure

```text
PharmCalc Trainer/
│
├── PharmacyCalculations.slnx
├── README.md
├── .gitignore
│
├── PharmacyCalculations.Api/
│   │
│   ├── Program.cs
│   ├── PharmacyCalculations.Api.csproj
│   ├── appsettings.json
│   ├── appsettings.Development.json
│   │
│   ├── Properties/
│   │
│   └── wwwroot/
│       │
│       ├── index.html
│       │
│       ├── css/
│       │   └── style.css
│       │
│       └── js/
│           └── app.js
│
└── PharmacyCalculations.Tests/
    │
    ├── PharmacyCalculations.Tests.csproj
    └── UnitTest1.cs
```

---

## API

The ASP.NET Core application includes a health endpoint:

```http
GET /api/health
```

Example response:

```json
{
  "message": "PharmCalc Trainer API is running."
}
```

This endpoint can be used to verify that the ASP.NET Core application is running successfully.

---

## Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/tabner0320/PharmCalc-Trainer.git
```

### 2. Enter the project directory

Because the folder name contains spaces:

```bash
cd "PharmCalc Trainer"
```

### 3. Restore dependencies

```bash
dotnet restore
```

### 4. Build the solution

```bash
dotnet build
```

### 5. Run the application

From the project root:

```bash
dotnet run --project PharmacyCalculations.Api
```

You can also run the project using:

```bash
dotnet run --project PharmacyCalculations.Api/PharmacyCalculations.Api.csproj
```

Open the localhost address displayed in the terminal.

---

## Running Tests

From the project root, run:

```bash
dotnet test
```

This builds and runs the tests contained in:

```text
PharmacyCalculations.Tests
```

---

## Skills Demonstrated

This project demonstrates experience with:

- C#
- .NET
- ASP.NET Core
- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Event listeners
- Input validation
- Mathematical calculations
- Interactive UI development
- Responsive web design
- xUnit testing
- Git
- GitHub
- Full-stack application structure

---

## Planned Improvements

Future improvements may include:

- Additional pharmacy calculation categories
- Expanded practice problem banks
- Combined measurement-device practice mode
- Practice score tracking
- Difficulty levels
- More detailed solution explanations
- Additional automated tests
- Improved mobile responsiveness
- Accessibility improvements
- Enhanced visual measurement devices

---

## Educational Use Only

**PharmCalc Trainer is intended for pharmaceutical calculation practice and education only.**

It is not a substitute for professional clinical judgment, medication verification, institutional policies, or an approved pharmacy reference.

The application should not be used to make real-world patient-specific medication or dosing decisions.

---

## Author

**Theophilus M. Abner Jr.**

Aspiring Software Developer and IT Professional focused on **C#, .NET, ASP.NET Core, JavaScript, APIs, cloud technologies, and practical full-stack application development**.

---

## Project Purpose

PharmCalc Trainer was developed as a portfolio project to demonstrate how programming concepts can be applied to an interactive educational application.

The project combines backend development, frontend development, mathematical logic, user interaction, responsive design, testing, and version control in a single .NET application.
