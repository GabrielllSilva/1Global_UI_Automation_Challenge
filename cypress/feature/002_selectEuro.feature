Feature: Select Euro as currency

Scenario: Selecting Euro as currency
    Given i am on better roaming website
    When i switch the actual currency to Euro
    Then must be showed EUR € on top header