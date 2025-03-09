import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import dashboardElements from '../page_objects/dashboardElements';
import addroute from '../page_objects/Addroute';


beforeEach(() => {
    cy.intercept('POST', '/t_trajets').as('addRoute')
    });

Given(`I am on the dashboard`, () => {
    cy.get(dashboardElements.topcontainer).should('be.visible')});

When(`I click on the add route button`, () => {
    cy.get(addroute.addroute).eq(3).click()
    cy.wait(500)
});

When(`I enter the route details`, () => {
    cy.get(addroute.depart).eq(0).type('tunis, tunisie', { delay: 100 }); 
    cy.get(addroute.submitaddress1).first().click();
    cy.wait(500);
   cy.get(addroute.arrive).eq(1).type('lisbon, Portugal', { delay: 100 });
   cy.get(addroute.submitaddress2).first().click({force: true});
   cy.wait(500);
   cy.get(addroute.date1).eq(0).type('2025-02-28')
   cy.get(addroute.option1).click()
   cy.get(addroute.date2).eq(1).type('2025-02-28')
    cy.get(addroute.option2).click()
    cy.get(addroute.traveloption).click()
    cy.wait(200)
    cy.get(addroute.reservtionum).type('abr123')
    cy.get(addroute.tripnumber).type('123-0123456789')
    cy.get(addroute.maxlength).type('120')
    cy.get(addroute.maxwidht).type('120')
    cy.get(addroute.maxheight).type('120')
    cy.get(addroute.minweight).click()
    cy.get(addroute.optioncollect1).click()
    cy.get(addroute.optioncollect2).click()
    cy.get(addroute.optioncollect3).click()
    cy.get(addroute.optioncollect4).click()
    cy.get(addroute.submit).click()
    //cy.wait(2000)
});

Then(`I should see the route added`, () => {
    /*cy.wait('@addRoute').then((interception) => {
        //expect(interception.response.statusCode).to.eq(500)
        //expect(interception.response.body).to.have.property('go_time')
        //expect(interception.response.body).to.have.property('max_length').eq(120)
    })*/
   cy.log('text')
});