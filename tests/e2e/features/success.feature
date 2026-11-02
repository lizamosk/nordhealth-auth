Feature: Success page

  Scenario: The success page confirms the email used
    Given a user lands on the sign up page
    When they sign up with a valid email and password
    Then they see the Success page
    And the success heading is focused
    And the success page shows the email they signed up with
    And the product updates note is not shown
    And the page title is "Your account is ready"

  Scenario: Product updates are mentioned only when the user opted in
    Given a user lands on the sign up page
    When they sign up with a valid email and password, opting in to product updates
    Then the product updates note is shown

  Scenario: "Back to sign up" returns to an empty form
    Given a user has signed up, opting in to product updates
    When they click the "Back to sign up" link
    Then they stay on the sign up page
    And the sign up form is empty

  Scenario: The success page cannot be opened directly
    When they open "/success" directly
    Then they stay on the sign up page
