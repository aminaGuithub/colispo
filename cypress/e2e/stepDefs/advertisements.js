import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dashboardElements from '../page_objects/dashboardElements';
import advertisements from '../page_objects/advertisements';

beforeEach(() => {

    cy.intercept('GET', 'https://maps.googleapis.com/maps/api/mapsjs/gen_204?csp_test=true').as('getMap')
    cy.intercept('OPTIONS', '/trajets?page=1&filter[from_address][name]=&filter[to_address][name]=').as('trajets')

    // [beforeEach] Runs before each test in the block
});

Given(`I am on the dashboard`, () => {
    cy.get(dashboardElements.topcontainer).should('be.visible')
    // [Given] Sets up the initial state of the system.
});

When(`I click on the advertisements button`, () => {
    cy.get(advertisements.advertisementsbutton).eq(0).click()
    
    cy.wait('@trajets').then((interception) => {
    
        expect(interception.response.statusCode).to.eq(204)
    })
    cy.wait('@getMap').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
    })// [When] Describes the action or event that triggers the scenario.
});

Then(`I should see the maps and advertisements list`, () => {
    cy.get(advertisements.sidebar).should('be.visible').should('contain.html', 'col')
    
    cy.get(advertisements.map).should('be.visible')
    cy.screenshot()
    
    // [Then] Describes the expected outcome or result of the scenario.
});