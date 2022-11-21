import fetchData from "../http";

test("should be error", () => {
    try {
        fetchData(1);
    } catch (e) {
        expect(e.message).toBe("Mock this! 1");
    }
});
