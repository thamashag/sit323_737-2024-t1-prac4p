# Calculator Microservice Documentation

## Overview
This documentation provides instructions for setting up, configuring, and using the calculator microservice. The microservice offers basic arithmetic operations (addition, subtraction, multiplication, division) via REST API endpoints.

## Requirements
- Node.js
- Express
- Visual Studio Code

## Installation
1. **Clone the repository:**
   ```bash
   git clone https://github.com/thamashag/sit323-737-2024-t1-prac4p.git
1.  **Navigate to the project directory:**

    ```bashCopy code

    cd sit323-737-2024-t1-prac4p

2.  **Install dependencies:**

    ```bashCopy code

    npm install

Usage
-----

1.  **Start the microservice:**

    ```bashCopy code

    node app.js

2.  **Access the following endpoints using an HTTP client or web browser:**
    -   Addition: `http://localhost:3000/add?num1=<number>&num2=<number>`
    -   Subtraction: `http://localhost:3000/subtract?num1=<number>&num2=<number>`
    -   Multiplication: `http://localhost:3000/multiply?num1=<number>&num2=<number>`
    -   Division: `http://localhost:3000/divide?num1=<number>&num2=<number>`

Logging
-------

The microservice utilizes the Winston logging library for logging. Log messages are categorized based on severity levels (info, error) and are stored in separate log files (`logs/error.log`, `logs/combined.log`).

Integrating Logging
-------------------

To integrate logging into the microservice codebase:

1.  Install Winston using `npm install winston`.
2.  Require Winston and create a logger object in your code.
3.  Add logging statements at key points such as request handling and error handling.
4.  Test the microservice to ensure that log messages are being generated and stored correctly.

Contributing
------------

If you would like to contribute to the project, feel free to fork the repository, make your changes, and submit a pull request.

 
