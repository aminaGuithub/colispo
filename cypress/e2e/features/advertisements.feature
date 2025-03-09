Feature: Check advertisements
Background: User can login
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard

Scenario: Check available advertisements
    Given I am on the dashboard
    When I click on the advertisements button
    Then I should see the maps and advertisements list