Feature: Placeholder destinations

  Scenario: "Sign in" opens a placeholder page that leads back to sign up
    Given a user lands on the sign up page
    When they click the "Sign in" link
    Then they see the "Sign in" placeholder page at "/sign-in"
    When they click the "Back to sign up" link
    Then they stay on the sign up page

  Scenario: "Continue to dashboard" opens a placeholder page
    Given a user has signed up
    When they click the "Continue to dashboard" link
    Then they see the "Dashboard" placeholder page at "/dashboard"
