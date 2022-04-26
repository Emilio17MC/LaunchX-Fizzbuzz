
const Reader = require("./../../lib/utils/Reader");

describe("Tests for Reader", () => {
    test("1) readJsonFile not toBeUndefined", () => {
        const explorers = Reader.readJsonFile("./explorers.json");

        expect(explorers).not.toBeUndefined();
    });
});
