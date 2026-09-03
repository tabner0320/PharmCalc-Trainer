# PharmCalc Trainer

PharmCalc Trainer is a web-based pharmaceutical calculations practice application built with **C#**, **ASP.NET Core**, **JavaScript**, **HTML**, and **CSS**.

The application is designed to help students practice common pharmacy math skills such as metric conversions, tablet dosage calculations, liquid medication calculations, and interactive practice questions.

> **Educational Use Only:** This application is intended for learning and practice. It should not be used as a substitute for professional clinical judgment, medication verification, or an approved pharmacy reference.

---

## Features

### Metric Conversion Calculator

Practice common pharmaceutical metric conversions, including:

- Grams to milligrams
- Milligrams to grams
- Milligrams to micrograms
- Micrograms to milligrams
- Liters to milliliters
- Milliliters to liters

The application also displays the calculation steps so students can see how the answer was determined.

---

### Tablet Dosage Calculator

The tablet calculator uses the formula:

```text
Amount to Give =
Dose Ordered ÷ Dose Available × Quantity Available
```

Example:

```text
Dose Ordered:       500 mg
Dose Available:     250 mg
Quantity Available: 1 tablet
```

Calculation:

```text
500 ÷ 250 × 1 = 2 tablets
```

---

### Liquid Medication Calculator

The liquid medication calculator uses:

```text
Amount to Give =
Dose Ordered ÷ Dose Available × Volume Available
```

Example:

```text
Dose Ordered:     250 mg
Dose Available:   125 mg
Volume Available: 5 mL
```

Calculation:

```text
250 ÷ 125 × 5 = 10 mL
```

---

## Practice Mode

PharmCalc Trainer includes an interactive Practice Mode.

Students can choose between:

- Metric Conversion
- Tablet Dosage
- Liquid Medication

Practice Mode allows the student to:

- Generate a new problem
- Enter an answer
- Check the answer
- Try again if incorrect
- Reveal the solution
- Track a running score
- Reset the score

Example:

```text
Dose Ordered:     300 mg
Dose Available:   150 mg
Volume Available: 5 mL

How many mL should be administered?
```

Solution:

```text
300 ÷ 150 × 5 = 10 mL
```

---

## Technologies Used

| Category | Technology |
|---|---|
| Language | C# |
| Framework | .NET 10 |
| Backend | ASP.NET Core |
| Frontend | HTML5, CSS3, Vanilla JavaScript |
| Web Hosting | ASP.NET Core Static Files |
| Testing | xUnit |
| Version Control | Git & GitHub |
| Editor | Visual Studio Code |

---

## Project Structure

```text
PharmCalc-Trainer/
│
├── PharmacyCalculations.Api/
│   │
│   ├── Program.cs
│   ├── PharmacyCalculations.Api.csproj
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
├── PharmacyCalculations.Tests/
│   ├── PharmacyCalculations.Tests.csproj
│   └── UnitTest1.cs
│
├── PharmacyCalculations.slnx
├── .gitignore
└── README.md
```

---

## How the Application Works

ASP.NET Core hosts the website and serves the frontend files from the `wwwroot` directory.

The basic flow is:

```text
Browser
   ↓
index.html
   ↓
JavaScript
   ↓
Calculation Logic
   ↓
Result + Explanation
```

The application currently performs its calculation logic in JavaScript on the client side.

The ASP.NET Core backend also exposes a simple health endpoint:

```http
GET /api/health
```

Example response:

```json
{
  "message": "PharmCalc Trainer API is running."
}
```

---

## Running the Project

Clone the repository:

```bash
git clone https://github.com/tabner0320/PharmCalc-Trainer.git
```

Move into the project folder:

```bash
cd PharmCalc-Trainer
```

Restore the project dependencies:

```bash
dotnet restore
```

Build the solution:

```bash
dotnet build
```

Run the application:

```bash
dotnet run --project PharmacyCalculations.Api
```

The terminal will display a local address similar to:

```text
http://localhost:5137
```

Open that address in your browser.

---

## Running Tests

From the project root, run:

```bash
dotnet test
```

The project includes an xUnit test project that can be expanded as additional calculation features are added.

---

## Skills Demonstrated

This project demonstrates practical experience with:

- C#
- .NET
- ASP.NET Core
- HTML
- CSS
- JavaScript
- DOM manipulation
- Event listeners
- Mathematical calculations
- Input validation
- Responsive web design
- xUnit
- Git
- GitHub
- Full-stack project organization

---

## Planned Improvements

Future versions may include:

- Dosing spoon practice
- Oral syringe measurement practice
- Medicine cup measurement practice
- Percentage strength calculations
- Ratio and proportion practice
- Dilution calculations
- IV flow-rate practice
- Additional metric conversion questions
- More advanced Practice Mode questions
- Score percentages
- Quiz history
- Backend calculation APIs
- Automated tests for calculation logic
- Database support for saved quiz results
- User accounts and progress tracking

---

## Educational Disclaimer

PharmCalc Trainer is intended strictly for educational and pharmaceutical calculation practice purposes.

It is not intended to diagnose, prescribe, recommend medication doses, replace clinical judgment, or serve as a substitute for a licensed pharmacist, healthcare professional, instructor, or approved medication reference.

Always verify real-world medication calculations using approved clinical resources and professional guidance.

---

## Author

**Theophilus M. Abner Jr.**

Aspiring Software Developer and IT Professional focused on C#, .NET, ASP.NET Core, JavaScript, APIs, cloud technologies, and practical full-stack application development.