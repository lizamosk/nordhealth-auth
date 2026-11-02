Feature: Signup

  Scenario: A new user sign ups and sees a success page
    Given a user lands on the sign up page
    And they enter email "test@gmail.com"
    And they enter password "Test123!456"
    When they click "Create account" CTA
    Then no errors displayed
    And they see the Success page

  Scenario: A new user enters an incorrect email and a error is displayed
    Given a user lands on the sign up page
    And they enter email "testgmailcom"
    And they focus on password field
    Then an email field is red
    And they enter password "Test123!456"
    Then all password requirements are green
    When they click "Create account" CTA
    Then a error is displayed
    And they don't see the Success page

  Scenario: A new user enters an incorrect password and a error is displayed
    Given a user lands on the sign up page
    And they enter email "test@gmail.com"
    And they enter password "Test123456"
    Then not all password requirements are green
    When they click "Create account" CTA
    Then a error is displayed
    And they don't see the Success page
