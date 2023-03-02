export class classNameForPageObjects {
    static getAcceptCookies(){
        return cy.get('button').contains("Accept all")
    }
}


export class classNameForFunctions {
    static visitGoogle(){
        cy.visit("https://www.google.com")
    }
}