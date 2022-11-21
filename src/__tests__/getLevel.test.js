import fetchData from "../http";
import { getLevel } from "../getLevel";

jest.mock("../http");

test("should be called with url", () => {
    fetchData.mockReturnValue({ status: "ok" });

    getLevel(1);
    expect(fetchData).toBeCalledWith("https://server/user/1");
});

test("should be success result", () => {
    const level = 10;
    fetchData.mockReturnValue({ status: "ok", level });

    const result = getLevel(1);
    expect(result).toBe(`Ваш текущий уровень: ${level}`);
});

test("should be other result", () => {
    fetchData.mockReturnValue({ status: "error" });

    const result = getLevel(1);
    expect(result).toBe(`Информация об уровне временно недоступна`);
});
