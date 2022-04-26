const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests para ExplorerService", () => {
  test("1. Método filterByMission(): Filtrar todos los explorers pasando como argumento la misión", () => {
    const explorers = [
      { mission: "node" },
      { mission: "java" },
      { mission: "node" },
      { mission: "python" },
    ];

    expect(ExplorerService.filterByMission(explorers, "node")).toMatchObject([
      { mission: "node" },
      { mission: "node" },
    ]);
  });

  test("2. Método getAmountOfExplorersByMission(): Obtener la cantidad de explorers de determinada misión", () => {
    const explorers = [
      { mission: "node" },
      { mission: "node" },
      { mission: "node" },
      { mission: "java" },
    ];

    expect(
      ExplorerService.getAmountOfExplorersByMission(explorers, "node")
    ).toBe(3);
  });

  test("3. getExplorersUsernamesByMission(): Obtener los nombres de usuarios de una misión específica.", () => {
    const explorers = [
      { mission: "node", githubUsername: "Explorer1" },
      { mission: "java", githubUsername: "Explorer2" },
      { mission: "node", githubUsername: "Explorer3" },
      { mission: "node", githubUsername: "Explorer4" },
      { mission: "ruby", githubUsername: "Explorer5" },
    ];

    console.log(
      ExplorerService.getExplorersUsernamesByMission(explorers, "node")
    );

    expect(
      ExplorerService.getExplorersUsernamesByMission(explorers, "node")
    ).toEqual(["Explorer1", "Explorer3", "Explorer4"]);
  });
});
