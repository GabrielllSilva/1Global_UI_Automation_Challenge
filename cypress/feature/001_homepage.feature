Feature: Go to Better Roaming homepage

Scenario: Access Better Roaming homepage
    Given i go to better roaming homepage
    When i close the cookies pop up
    Then must be showed the homepage