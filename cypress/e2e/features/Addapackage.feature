Feature: Add a package
Background: User can login
    Given I visit the login page
    When I enter valid credentials
    Then I should see the dashboard

Scenario: Add a package
    Given I am on the dashboard
    When I click on the add package button
    And I enter the package details
    
    Then I should see the package added