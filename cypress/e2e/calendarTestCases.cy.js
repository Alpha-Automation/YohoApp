///<reference types = "cypress"/>

const { Calendar } = require("../pageObjects/Calendar")
const { Login } = require("../pageObjects/Login")

const loginpage = new Login 
const calendarPage = new Calendar

describe('Calendar Section Test Cases', () => {
  const loginEmail = Cypress.config('users').user1.username
  const loginPassword = Cypress.config('users').user1.password
  
  it('Create a Product Launch event', () => {
    cy.visit('/')
    loginpage.login(loginEmail, loginPassword)
    //Go to Calendar page
    calendarPage.goToCalendarPage()
    //click Add Calendar item icon
    calendarPage.clickAddCalendarItem()
    //Click Event option
    calendarPage.clickEventOption()
    calendarPage.clickNext()
    calendarPage.clickProductLaunch()//Click Product Launch
    calendarPage.clickNext()
    //Add Product Launch Info
    calendarPage.addProductLaunchInfo('Test Product Launch', 'https://monday.com/test-product')
    calendarPage.clickSave()
    calendarPage.verifyToast('Successfully Saved') //Verify toast
  })
})