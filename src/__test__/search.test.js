
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import SearchProduct from "../components/SearchProduct"
import userEvent from "@testing-library/user-event"

const mockShowSearch = jest.fn();
describe("SearchProduct Component", () => {
    it("renders correctly", () => {
        const { container } = render(<SearchProduct />);
        expect(container).toMatchSnapshot();
    })

    it("should call showSearch with false value when close button is clicked", () => {
        render(<SearchProduct showSearch={mockShowSearch} />)

        const closeIconElement = screen.getByTestId("close");
        userEvent.click(closeIconElement);
        expect(mockShowSearch).toBeCalledWith(false);
    })

})