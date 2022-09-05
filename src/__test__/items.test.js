import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Items from "../components/Items";

const mockItem = {

    id: "001",
    src: "src/assets/electronics/geforce-rtx-3080-ti.jpg",
    price: "Rs 400",
    name: "Graphic Card",



};

beforeEach(() => {
    render(<Items item={mockItem} />);
});

describe("Items component", () => {

    it("renders properly", () => {
        const ImageElement = screen.getByRole("img");
        expect(ImageElement.alt).toEqual("image of Graphic Card");
        const nameElement = screen.getByTestId("selected-item-name");
        expect(nameElement.textContent).toEqual(mockItem.name);
        const priceElement = screen.getByTestId("selected-item-price");
        expect(priceElement.textContent).toEqual(mockItem.price);

    });

    // it.todo("add no of item", () => { });

    // it.todo("decrese no of item from the cart", () => { });

});