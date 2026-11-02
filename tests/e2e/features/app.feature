Feature: App health

  Scenario: The page language is declared for assistive technology and Nord localization
    Given a user lands on the sign up page
    Then the page language is "en-US" with "ltr" direction

  Scenario: The whole journey logs no console errors
    Given console errors are being recorded
    And a user lands on the sign up page
    When they click "Create account" CTA
    Then a error is displayed
    When they enter email "laura.williams@example.com"
    And they enter password "Str0ng!pass"
    And they opt in to product updates
    And they click the "Show password" button
    And they switch the dark theme on
    And they click "Create account" CTA
    Then they see the Success page
    When they click the "Back to sign up" link
    Then they stay on the sign up page
    And no console errors were logged
