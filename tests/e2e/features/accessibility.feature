@a11y
Feature: Accessibility
  axe scans with WCAG 2.0 / 2.1 / 2.2 A and AA rules, in both themes.

  Scenario Outline: The <state> has no WCAG 2.2 AA violations in the <theme> theme
    Given the system color scheme is "<theme>"
    And a user lands on the sign up page
    And the page theme is "<theme>"
    When they open the "<state>" state
    Then the page has no detectable accessibility violations

    Examples:
      | theme | state         |
      | light | sign-up form  |
      | light | error summary |
      | light | success page  |
      | dark  | sign-up form  |
      | dark  | error summary |
      | dark  | success page  |
