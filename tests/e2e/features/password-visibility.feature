Feature: Password visibility

  Background:
    Given a user lands on the sign up page

  Scenario: The password can be shown and hidden, with a matching accessible name
    When they enter password "Str0ng!pass"
    Then the password is hidden
    When they click the "Show password" button
    Then the password is visible
    When they click the "Hide password" button
    Then the password is hidden

  Scenario: Moving to the show / hide button does not validate the password yet
    When they focus on password field
    And they press Tab
    Then the "Show password" button is focused
    And the error "Enter a password." is not shown
