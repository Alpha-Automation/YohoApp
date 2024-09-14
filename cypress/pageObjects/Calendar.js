export class Calendar {
    goToCalendarPage() {
        cy.get('[role="list"] a[href="/calendar"]').should('contain.text', 'Calendar').and('be.visible').click()
        cy.get('.isolate > .text-sm').should('be.visible').and('contain.text', 'Today')
    }
    clickAddCalendarItem() {
        cy.get('button.font-semibold.rounded-md').should('be.visible').click() //+icon
        cy.get('.pt-8 > .text-lg').should('be.visible').and('contain.text', 'New Calendar Item')
        cy.get('.text-base').should('be.visible').and('contain.text', 'Add a new item to start planning your marketing efforts: sales, launches, outbounds marketing, social media posts, and more!')
    }
    clickEventOption() {
        cy.get('#Events').should('be.visible').click()
        cy.get('.pl-2 > :nth-child(1) > .items-center > .font-semibold').should('be.visible').and('contain.text', 'Event')
        cy.get('.pl-2 > :nth-child(1) > p').should('be.visible').and('contain.text', 'Select this for running a sale, photoshoot, or product launch.')
    }
    clickNext() {
        cy.get('button.bg-primary-900.w-16').should('be.visible').and('contain.text', 'Next').click()
    }
    clickProductLaunch() {
        cy.get(':nth-child(1) > .block > .flex-col > span').should('be.visible').and('contain.text', 'Product launch')
        cy.get('.pl-2 > :nth-child(1) > .items-center > .font-semibold').should('contain.text', 'Product launch')
        cy.get('.pl-2 > :nth-child(1) > p').should('be.visible').and('contain.text', 'Plan a Product launch')
        cy.get('input[id="Product launch"]').should('be.visible').click() //radio
    }
    addProductLaunchInfo(productTitle, link) {
        cy.get('.flex-col.w-full > :nth-child(1) > .block').should('be.visible').and('contain.text', 'Title') //Label
        cy.get('#title').should('be.visible').type(productTitle) //Title field
        cy.get(':nth-child(1) > :nth-child(1) > .flex-row > .block').should('contain.text', 'Start Date') //Label
        cy.get(':nth-child(1) > .date-picker > :nth-child(1) > .relative > #date').should('be.visible') //Start time field
        cy.get(':nth-child(1) > :nth-child(2) > .flex-row > .block').should('contain.text', 'End Date') //Label
        cy.get(':nth-child(2) > .date-picker > :nth-child(1) > .relative > #date').should('be.visible') //End time field
        cy.get(':nth-child(2) > :nth-child(1) > .flex-row > .block').should('contain.text', 'Start Time') //Label
        cy.get(':nth-child(1) > .relative > #time').should('be.visible') //Start Time field
        cy.get(':nth-child(2) > :nth-child(2) > .flex-row > .block').should('contain.text', 'End Time') //Label
        cy.get(':nth-child(2) > .relative > #time').should('be.visible') //End Time field
        cy.get(':nth-child(3) > .block').should('be.visible').and('contain.text', 'External Project Link') //label
        cy.get('#exprojectlink').should('be.visible').type(link)
    }
    clickSave() {
        cy.get('button.bg-primary-900.w-16').should('be.visible').and('contain.text', 'Save').click()
    }
    verifyToast(message){
        cy.get('[role="alert"]').should('be.visible').and('contain.text', message)
    }
}