import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
    const header = screen.getByText(/checkout form/i)
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>)

    const firstNameInput = screen.getByLabelText(/first name/i)
    expect(firstNameInput).toBeTruthy()
    const lastNameInput = screen.getByLabelText(/last name/i)
    expect(lastNameInput).toBeTruthy()
    const addressInput = screen.getByLabelText(/address/i)
    expect(addressInput).toBeTruthy()
    const cityInput = screen.getByLabelText(/city/i)
    expect(cityInput).toBeTruthy()
    const stateInput = screen.getByLabelText(/state/i)
    expect(stateInput).toBeTruthy()
    const zipInput = screen.getByLabelText(/zip/i)
    expect(zipInput).toBeTruthy()
    const button = screen.getByRole("button", {name:/checkout/i});
    expect(button).toBeTruthy()

    fireEvent.change(firstNameInput, {target: {value: 'Kim'}})
    fireEvent.change(lastNameInput, {target: {value: 'Ayers'}})
    fireEvent.change(addressInput, {target: {value: '84657 Random St.'}})
    fireEvent.change(cityInput, {target: {value: 'Atlanta'}})
    fireEvent.change(stateInput, {target: {value: 'Georgia'}})
    fireEvent.change(zipInput, {target: {value: '30060'}})
    fireEvent.click(button)

    const successMessage = screen.getByTestId(/successMessage/i)
    expect(successMessage).toBeTruthy()
    expect(successMessage).toBeInTheDocument()


});
