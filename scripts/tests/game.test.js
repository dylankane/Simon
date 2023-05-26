
const { hasUncaughtExceptionCaptureCallback } = require("process");
const { game, newGame, showScore, addTurn } = require("../game")

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
    test("choices contain correct ids", () =>{
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    });
});

describe("newGame works correctly", () => {
    beforeAll(() => {
        game.score = 42;
        game.currentGame = ["button1", "button2"];
        game.playerMoves = ["button1", "button2"];
        document.getElementById("score").innerText = "42"
        newGame();
    });
    test("Should set the game score to zero", () => {
        expect(game.score).toEqual(0);
    });
    test("Should be one element in the computers array", ()  =>{
        expect(game.currentGame.length).toBe(1);
    });
    test("Should clear the player moves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("Should display 0 for the element with the id of score", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
});


describe("gameplay works correctly", () => {
    beforeEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
        addTurn();
    });
    afterEach(() => {
        game.score = 0;
        game.currentGame = [];
        game.playerMoves = [];
    });
    test("addTurn adds a new turn to the game", () => {
        addTurn();
        expect(game.currentGame.length).toBe(2);
    });
    test("Should add correct class")
});

