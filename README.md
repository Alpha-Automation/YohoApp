If you have to run saperate file having multiple 'It' block you need to use cmd:
Syntax:
* npx cypress run --spec filePath 
In this way, it will run on Cypress default browser like Electron. 

If you want to run on specific browser like chrome then please add...
* npx cypress run --spec filePath --browser chrome

Complete CMD example:
* npx cypress run --headed --browser chrome --spec cypress/e2e/calendarTestCases.cy.js

Now We are going to run complete project using simple cmd...

Please use this Customize cmd to run complete Soute:
* npx cypress run

For Specific Browser
* npx cypress run --browser chrome

If you want to see the script test run on browser please use
* npx cypress run --headed --browser chrome
