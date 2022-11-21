import fetchData from "../http";

test("should be error", () => {
    try {
        fetchData();
    } catch (e) {
        expect(e.message).toBe("Mock this!");
    }
});
