const { game } = require("../game")

beforeAll (() => {
    let fs = require("fs");
    let fileContent = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContent);
    document.close()
})

describe("game object contains correct keys", () => {
    test("scorekey exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame exists", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices exists", () => {
        expect("choices" in game).toBe(true);
    });
});