import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { BrowserRouter } from 'react-router-dom';
import Nagivation from '../components/Nagivation';


describe("Nagivation Component", () => {
    it("renders search when clicked", () => {
        const { container } = render(<Nagivation />, { wrapper: BrowserRouter });
        expect(container).toMatchSnapshot();
    })

    it("should not contian search div without search is clicked", () => {
        render(<Nagivation />, { wrapper: BrowserRouter });
        const closeIconElement = screen.queryByTestId("close");
        expect(closeIconElement).toBeFalsy();
    })

    it("should render search when search is clicked", () => {
        render(<Nagivation />, { wrapper: BrowserRouter });
        const searchElement = screen.getByTestId("search");
        userEvent.click(searchElement);
        const closeIconElement = screen.getByTestId("close");
        expect(closeIconElement).toBeVisible;
    })

})
