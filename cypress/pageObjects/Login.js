export class Login{
    login(loginEmail, loginPassword){
        cy.get('.justify-start').should('be.visible') //logo
    cy.get('.gap-1 > .text-gray-600').should('be.visible').and('contain.text','Make your every business decision based on strong data and strategy.')
    cy.get(':nth-child(1) > .block').should('be.visible').and('contain.text','Email') //label
    cy.get('#email').should('be.visible').type(loginEmail)
    cy.get(':nth-child(2) > .block').should('be.visible').and('contain.text','Password') //label
    cy.get('#password').should('be.visible').type(loginPassword)
    cy.get('.self-end').should('be.visible').and('contain.text','Forgot your password?')
    cy.get('button[type="submit"]').should('be.visible').and('contain.text','Log In').click() //Log In
    cy.get('.text-xl').should('be.visible').and('contain.text','Welcome back')
    cy.get('.opacity-80').should('be.visible').and('contain.text',"Here, you will find the most recent insights into your business's performance, ensuring you have the latest data at your fingertips for strategic planning.")
    
    }
}