Feature: "sause demo test"

    Scenario: Login and add to cart
        Given login to the app
        When Select the product
        Then Verify add to cart is enabled
        When Add the product to cart