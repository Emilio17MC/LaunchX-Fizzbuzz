
const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Tests for ExplorerController", () => {
    test("1) ExplorerController retorna una lista de Explorers de la misión dada", () => {
        
        expect(ExplorerController.getExplorersByMission("node")).not.toBeUndefined();

    });

    test("2) ExplorerController retorna una lista con los githubUsername de la misión dada", () => {

        expect(ExplorerController.getExplorersUsernamesByMission("node")).not.toBeUndefined();

    });

    test("3) ExplorerController retorna la cantidad de explorers en la misión dada", () => {

        expect(ExplorerController.getExplorersAmountByMission("node")).toBe(10);

    });

    test("4) ExplorerController retorna el número, FIZZ, BUZZ o FIZZBUZZ según sea el número que reciba", () => {
        expect(ExplorerController.getValidationInNumber(1)).toBe(1);
    });
});
