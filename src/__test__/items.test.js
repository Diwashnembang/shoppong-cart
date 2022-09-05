import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import Items from "../components/Items";

const mockItem = {

    id: "001",
    src: "src/assets/electronics/geforce-rtx-3080-ti.jpg",
    price: "400",
    name: "Graphic Card",



};

beforeEach(() => {
    act(() => {

        render(<Items item={mockItem} />);
    })
});

describe("Items component", () => {

    it("should renders properly", () => {
        const ImageElement = screen.getByRole("img");
        expect(ImageElement.alt).toEqual("image of Graphic Card");
        const nameElement = screen.getByTestId("selected-item-name");
        expect(nameElement.textContent).toEqual(mockItem.name);
        const priceElement = screen.getByTestId("selected-item-price");
        expect(priceElement.textContent).toEqual(mockItem.price);

    });

    it("should add no of item by 1", () => {
        const addElement = screen.getByRole("button", { name: "+" });
        const inputElement = screen.getByRole("textbox");
        userEvent.click(addElement);
        expect(inputElement.value).toBe('2');

    });

    it("should add no of item by 5", () => {
        const addElement = screen.getByRole("button", { name: "+" });
        const inputElement = screen.getByRole("textbox");
        userEvent.click(addElement);
        userEvent.click(addElement);
        userEvent.click(addElement);
        userEvent.click(addElement);
        userEvent.click(addElement);
        expect(inputElement.value).toBe('6');

    });

    it("should decrease no of item by 1", () => {
        const minusElement = screen.getByRole("button", { name: "-" });
        const inputElement = screen.getByRole("textbox");
        userEvent.click(minusElement);
        expect(inputElement.value).toBe('0');

    });


    it("should decrease no of item by 5", () => {
        const minusElement = screen.getByRole("button", { name: "-" });
        const inputElement = screen.getByRole("textbox");
        userEvent.click(minusElement);
        userEvent.click(minusElement);
        userEvent.click(minusElement);
        userEvent.click(minusElement);
        userEvent.click(minusElement);
        expect(inputElement.value).toBe('-4');

    });

    it("should change the no of items to 5 when 5 is typed", () => {
        const inputElement = screen.getByRole("textbox");
        userEvent.clear(inputElement);
        userEvent.type(inputElement, "5");
        expect(inputElement.value).toBe("5");
    })
    it("should increse the price of the product by 2 when 2 item are present", () => {
        const inputElement = screen.getByRole("textbox");
        const priceElement = screen.getByTestId("selected-item-price");
        userEvent.clear(inputElement);
        userEvent.type(inputElement, "3");
        expect(priceElement.textContent).toBe("1200");

    })

    it("should increse the price of the product by 2 when add is clicked one time", () => {
        const addElement = screen.getByRole("button", { name: "+" });
        const priceElement = screen.getByTestId("selected-item-price");
        userEvent.click(addElement);
        expect(priceElement.textContent).toBe("800");

    })

    it("should change the number of items when the + button is clicked after typing ", () => {
        const inputElement = screen.getByRole("textbox");
        const addElement = screen.getByRole("button", { name: "+" });
        userEvent.clear(inputElement);
        userEvent.type(inputElement, "2");
        userEvent.click(addElement);
        expect(inputElement.value).toBe("3");
    })

    it(" should change the number of items when the - button is clicked after typing", () => {
        const inputElement = screen.getByRole("textbox");
        const minusElement = screen.getByRole("button", { name: "-" });
        userEvent.clear(inputElement);
        userEvent.type(inputElement, "3");
        userEvent.click(minusElement);
        expect(inputElement.value).toBe("2");
    })

    it("should increse the price of the product when + is clicked after typing", () => {
        const addElement = screen.getByRole("button", { name: "+" });
        const inputElement = screen.getByRole("textbox");
        const priceElement = screen.getByTestId("selected-item-price");
        userEvent.clear(inputElement);
        userEvent.type(inputElement, "2")
        userEvent.click(addElement);
        expect(priceElement.textContent).toBe("1200");

    })

    it("should decrease the price of the product when - is clicked after typing", () => {
        const inputElement = screen.getByRole("textbox");
        const minusElement = screen.getByRole("button", { name: "-" });
        const priceElement = screen.getByTestId("selected-item-price");
        userEvent.clear(inputElement);
        userEvent.type(inputElement, "4")
        userEvent.click(minusElement);
        expect(priceElement.textContent).toBe("1200");

    })
});