# PharmCalc Trainer

PharmCalc Trainer is a full-stack educational web application designed to help students practice common pharmaceutical calculations and medication-measurement skills.

The project combines a responsive HTML, CSS, and JavaScript frontend with an ASP.NET Core Minimal API and C# calculation services. It also includes automated unit and integration testing with xUnit.

> **Educational Use Only:** PharmCalc Trainer is intended for pharmaceutical calculation practice and education only. It is not a substitute for professional clinical judgment, medication verification, or an approved pharmacy reference, and should not be used to make real-world patient-specific medication or dosing decisions.

---

## Features

### Metric Conversion

Practice common metric conversions including:

- Grams → Milligrams
- Milligrams → Grams
- Milligrams → Micrograms
- Micrograms → Milligrams
- Liters → Milliliters
- Milliliters → Liters

Metric conversions are processed through the ASP.NET Core API and C# `CalculationService`.

---

### Tablet Dosage Calculator

Calculates the number of tablets required using:

```text
Amount to Give = Dose Ordered ÷ Dose Available × Quantity Available
```

Example:

```text
Dose Ordered:       500 mg
Dose Available:     250 mg
Quantity Available: 1 tablet

Answer: 2 tablets
```

---

### Liquid Medication Calculator

Calculates the volume of liquid medication using:

```text
Amount to Give = Dose Ordered ÷ Dose Available × Volume Available
```

Example:

```text
Dose Ordered:      250 mg
Dose Available:    125 mg
Volume Available:  5 mL

Answer: 10 mL
```

---

## Interactive Practice

### Practice Mode

Generates pharmaceutical calculation practice problems that allow users to:

- Generate a new problem
- Enter an answer
- Check the answer
- View the solution

---

### Dosing Spoon Practice

Interactive dosing-spoon exercises allow users to:

- Generate random target volumes
- Select measurement lines
- Visualize liquid levels
- Check answers
- Show the correct answer
- Track correct answers and attempts
- Reset the score

---

### Oral Syringe Practice

The interactive 5 mL oral syringe provides practice with:

- 0.5 mL measurement increments
- Random target volumes
- Clickable measurement marks
- Visual liquid levels
- Answer checking
- Solution display
- Score tracking

---

### Medicine Cup Practice

The interactive 30 mL medicine cup provides practice with:

- 5 mL through 30 mL measurements
- Clickable measurement lines
- Visual liquid fill
- Random target volumes
- Answer checking
- Solution display
- Score tracking

---

## Full-Stack Architecture

PharmCalc Trainer separates the user interface from the calculation logic.

```text
HTML / CSS
     ↓
JavaScript
     ↓
fetch()
     ↓
ASP.NET Core Minimal API
     ↓
CalculationService
     ↓
JSON Response
     ↓
JavaScript displays result
```

The browser collects the user's input and JavaScript sends calculation requests to the ASP.NET Core API.

The API validates the request and passes valid calculation data to the C# `CalculationService`.

The calculated result is returned as JSON and displayed in the browser.

---

## API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/health` | Checks whether the API is running |
| `POST` | `/api/calculate/tablet` | Performs tablet dosage calculations |
| `POST` | `/api/calculate/liquid` | Performs liquid medication calculations |
| `POST` | `/api/convert` | Performs metric conversions |

### Example Tablet Request

```json
{
  "doseOrdered": 500,
  "doseAvailable": 250,
  "quantityAvailable": 1
}
```

Response:

```json
{
  "amountToGive": 2
}
```

### Example Liquid Request

```json
{
  "doseOrdered": 250,
  "doseAvailable": 125,
  "volumeAvailable": 5
}
```

Response:

```json
{
  "amountToGive": 10
}
```

### Example Metric Conversion Request

```json
{
  "value": 1,
  "conversionType": "g-to-mg"
}
```

Response:

```json
{
  "convertedValue": 1000
}
```

---

## API Validation

The backend validates incoming requests before calculations are performed.

Examples of invalid requests include:

- Dose available is zero or negative
- Negative calculation values
- Missing conversion type
- Invalid conversion type
- Negative metric conversion values

Invalid requests return:

```text
HTTP 400 Bad Request
```

This provides an additional validation layer even if browser-side validation is bypassed.

---

## Calculation Service

Calculation logic is separated from the API endpoints using:

```text
PharmacyCalculations.Api/
└── Services/
    └── CalculationService.cs
```

`CalculationService` handles:

- Tablet dosage calculations
- Liquid medication calculations
- Grams to milligrams
- Milligrams to grams
- Milligrams to micrograms
- Micrograms to milligrams
- Liters to milliliters
- Milliliters to liters

Separating calculation logic from the endpoints makes the application easier to maintain and test.

---

## Automated Testing

PharmCalc Trainer uses **xUnit** for automated testing.

The project currently contains:

```text
20 automated tests
20 passing
0 failing
```

Testing includes both **unit tests** and **API integration tests**.

### Unit Tests

The `CalculationService` is tested independently for:

- Tablet calculations
- Liquid calculations
- Metric conversions
- Invalid dose availability

### API Integration Tests

ASP.NET Core's `WebApplicationFactory<Program>` is used to test the API.

Integration testing covers:

- Health endpoint
- Tablet calculation endpoint
- Liquid calculation endpoint
- Metric conversion endpoint
- Zero available tablet dose
- Zero available liquid dose
- Invalid conversion types
- Missing conversion types
- Negative conversion values
- HTTP success and bad-request responses

---

## Technologies Used

| Category | Technology |
|---|---|
| Language | C# |
| Framework | .NET 10 |
| Backend | ASP.NET Core Minimal API |
| Frontend | HTML5, CSS3, JavaScript |
| API Communication | Fetch API |
| Data Format | JSON |
| Testing | xUnit |
| Integration Testing | WebApplicationFactory |
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
│
├── PharmacyCalculations.Api/
│   ├── Program.cs
│   ├── PharmacyCalculations.Api.csproj
│   │
│   ├── Services/
│   │   └── CalculationService.cs
│   │
│   └── wwwroot/
│       ├── index.html
│       │
│       ├── css/
│       │   └── style.css
│       │
│       └── js/
│           └── app.js
│
└── PharmacyCalculations.Tests/
    ├── PharmacyCalculations.Tests.csproj
    ├── CalculationServiceTests.cs
    └── UnitTest1.cs
```

---

## Running the Application

### 1. Clone the Repository

```bash
git clone https://github.com/tabner0320/PharmCalc-Trainer.git
```

### 2. Open the Project

```bash
cd "PharmCalc-Trainer"
```

### 3. Run the Application

```bash
dotnet run --project PharmacyCalculations.Api
```

The terminal will display the local address, for example:

```text
Now listening on: http://localhost:5137
```

Open that address in your browser.

---

## Running the Tests

From the project root, run:

```bash
dotnet test
```

Current test status:

```text
Total:   20
Passed:  20
Failed:  0
Skipped: 0
```

---

## Skills Demonstrated

This project demonstrates experience with:

- C#
- .NET
- ASP.NET Core Minimal APIs
- REST-style API development
- HTML5
- CSS3
- JavaScript
- Fetch API
- JSON
- Asynchronous JavaScript
- Backend input validation
- HTTP status codes
- Dependency injection
- Service-layer architecture
- Unit testing
- API integration testing
- xUnit
- `WebApplicationFactory`
- Git
- GitHub
- Responsive web development
- Full-stack application architecture

---

## Future Improvements

Potential future improvements include:

- Additional pharmaceutical calculation categories
- Expanded practice-question library
- More measurement devices
- Difficulty levels
- Improved score tracking
- Persistent practice history
- Additional API validation tests
- Improved accessibility
- Enhanced mobile interface
- Deployment to a cloud hosting platform

---

## Educational Disclaimer

PharmCalc Trainer is intended for **educational and pharmaceutical calculation practice purposes only**.

The application is not intended to provide medical advice, verify prescriptions, recommend medication doses, or replace professional clinical judgment.

All real-world medication calculations should be independently verified using approved professional references, organizational procedures, and qualified healthcare professionals.

---

## Author

**Theophilus M. Abner Jr.**

Aspiring Software Developer and IT Professional focused on C#, .NET, ASP.NET Core, JavaScript, APIs, cloud technologies, and practical full-stack application development.