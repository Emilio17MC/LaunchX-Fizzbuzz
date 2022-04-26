
const ExplorerController = require('./../../lib/controllers/ExplorerController');

describe("Tests for ExplorerController", () => {
    test("1) ExplorerController retorna una lista de Explorers de la misión dada", () => {
        
        expect(ExplorerController.getExplorersByMission('node')).not.toBeUndefined();

    });
});
