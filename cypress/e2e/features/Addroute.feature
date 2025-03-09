Feature: Add route
  
  Background: User can login
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard

    Scenario: Add a route
        Given I am on the dashboard
        When I click on the add route button
        And I enter the route details
        
        Then I should see the route added