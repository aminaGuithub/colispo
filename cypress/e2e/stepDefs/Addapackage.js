import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dashboardElements from '../page_objects/dashboardElements';
require('cypress-xpath');
import Packageelmets from '../page_objects/Addapackage';
require('cypress-real-events')

Given('I am on the dashboard', () => {
    cy.get(dashboardElements.topcontainer).should('be.visible')
});

When(`I click on the add package button`, () => {
    cy.get(Packageelmets.navpackage).eq(1).click()
    cy.wait(2000)
    cy.get(Packageelmets.box).should('be.visible')
});

When(`I enter the package details`, () => {
    cy.get(Packageelmets.qte).type('1')
    cy.get(Packageelmets.name).type('Auto Test')
    cy.get(Packageelmets.length).type('120')
    cy.get(Packageelmets.width).type('120')
    cy.get(Packageelmets.height).type('120')
    cy.get(Packageelmets.minvalue).click()
    cy.get(Packageelmets.addfile).selectFile('cypress/fixtures/cyexemple.png', { force: true }) 
    cy.get(Packageelmets.submit1).eq(0).click()
    cy.wait(1500)
    cy.get(Packageelmets.box).eq(1).should('be.visible')

    cy.get(Packageelmets.depart).eq(0) // Target the first input field (Ville de départ)
    .type('Paris, France', { delay: 100 }); 
    cy.wait(1000);
    cy.get(Packageelmets.clickdepart).first().click();
    cy.get(Packageelmets.arrive).eq(1).type('Lyon, France', { delay: 100 });
    cy.wait(1000); 
    cy.get(Packageelmets.clickarrive).first().click();
    
    cy.get(Packageelmets.departdate).eq(0).type('2025-03-28') 
    cy.get(Packageelmets.arrivedate).eq(1).type('2025-03-29')
    
   
    cy.get(Packageelmets.submit2).click()
    cy.wait(1000)
    cy.get(Packageelmets.value).eq(12).type('150')
    cy.get(Packageelmets.submit3).click()
    // [When] Describes the action or event that triggers the scenario.
});

Then(`I should see the package added`, () => {
    cy.wait(1500)
    cy.get(Packageelmets.Alertsuccess).should('be.visible')
});