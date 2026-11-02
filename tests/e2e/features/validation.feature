Feature: Sign-up validation

  Background:
    Given a user lands on the sign up page

  Scenario: Submitting an empty form shows inline errors and a focused summary
    When they click "Create account" CTA
    Then the error summary says "Fix 2 errors to create your account."
    And the error "Enter your email address." is shown inline and in the summary
    And the error "Enter a password." is shown inline and in the summary
    And the error summary is focused
    And they stay on the sign up page

  Scenario: A summary link moves focus to its field
    When they click "Create account" CTA
    And they select "Enter a password." in the error summary
    Then the password field is focused

  Scenario: Leaving an empty field shows its error without the summary
    When they leave the email field
    Then the error "Enter your email address." is shown
    And the error summary is not shown

  Scenario: Inline errors clear as soon as the field is fixed and the summary updates on the next submit
    When they click "Create account" CTA
    Then the error summary says "Fix 2 errors to create your account."
    When they enter email "laura.williams@example.com"
    Then the error "Enter your email address." is shown only in the summary
    And the error summary says "Fix 2 errors to create your account."
    When they click "Create account" CTA
    Then the error summary says "Fix 1 error to create your account."
    And the error "Enter your email address." is not shown

  Scenario: A malformed email is rejected
    When they enter email "not-an-email"
    And they leave the email field
    Then an email field is red
    And the error "Enter a valid email address, for example name@example.com." is shown

  Scenario: The password checklist ticks off requirements as the user types
    When they enter password "abc"
    Then the password requirements are:
      | requirement            | state   |
      | Minimum 8 characters   | not met |
      | lowercase letter       | met     |
      | uppercase letter       | not met |
      | symbol                 | not met |
    When they enter password "Str0ng!pass"
    Then all password requirements are green

  Scenario: A weak password shows an error once the field is left
    When they enter password "abc"
    And they leave the password field
    Then the error "Your password doesn't meet all the requirements." is shown
