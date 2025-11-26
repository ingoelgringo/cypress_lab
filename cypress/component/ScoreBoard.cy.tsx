import ScoreBoard from "../../src/ScoreBoard.tsx";

const dices = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 5, roll: true },
];

const scores = [
  { id: "Ones", name: "Ones", score: 0 },
  { id: "Twos", name: "Twos", score: 0 },
  { id: "Threes", name: "Threes", score: 0 },
  { id: "Fours", name: "Fours", score: 0 },
  { id: "Fives", name: "Fives", score: 0 },
  { id: "Sixes", name: "Sixes", score: 0 },
  { id: "Bonus", name: "Bonus", score: 0 },
  { id: "OnePair", name: "One Pair", score: 0 },
  { id: "TwoPairs", name: "Two Pairs", score: 0 },
  { id: "ThreeKind", name: "Three of a Kind", score: 0 },
  { id: "FourKind", name: "Four of a Kind", score: 0 },
  { id: "SmallStraight", name: "Small Straight", score: 0 },
  { id: "BigStraight", name: "Big Straight", score: 0 },
  { id: "FullHouse", name: "Full House", score: 0 },
  { id: "Chance", name: "Chance", score: 0 },
  { id: "Yatzy", name: "Yatzy", score: 0 },
  { id: "Sum", name: "Sum", score: 0 },
];

describe("ScoreBoard.cy.tsx", () => {
  it("playground", () => {
    cy.mount(<ScoreBoard scores={scores} dices={dices}></ScoreBoard>);
  });
});
