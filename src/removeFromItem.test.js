import removeFromItem from "./removeFromItem";


const mockItem = (i, n) => ({

    id: i,
    src: "src/assets/electronics/geforce-rtx-3080-ti.jpg",
    price: "400",
    name: n,

});

const mockItem1 = mockItem(1, "graphic card");
const mockItem2 = mockItem(2, "mobile phone");



describe('removeFromItem moc=dule', () => {
    it("should remove the the element", () => {
        const result = removeFromItem([mockItem1, mockItem2], 1);
        expect(result.length).toBe(1);
    })

    it("should remove element that matched the id", () => {
        const result = removeFromItem([mockItem1, mockItem2], 1);
        expect(result[0]).toEqual(mockItem2);
    })
})