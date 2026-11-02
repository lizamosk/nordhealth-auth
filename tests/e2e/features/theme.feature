Feature: Theme

  Scenario: The theme follows the system setting on first visit
    Given the system color scheme is "dark"
    When a user lands on the sign up page
    Then the page theme is "dark"

  Scenario: The chosen theme is remembered across reloads
    Given a user lands on the sign up page
    And the page theme is "light"
    When they switch the dark theme on
    Then the page theme is "dark"
    When they reload the page
    Then the page theme is "dark"
    And the dark theme switch is on
