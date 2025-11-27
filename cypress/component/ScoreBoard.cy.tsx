import ScoreBoard from "../../src/ScoreBoard.tsx";

const allowScore = true;

//* ONES
const twoOnes = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 1, roll: true },
  { id: 5, value: 1, roll: true },
];
const threeOnes = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 1, roll: true },
  { id: 3, value: 5, roll: true },
  { id: 4, value: 1, roll: true },
  { id: 5, value: 1, roll: true },
];
const fourOnes = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 1, roll: true },
  { id: 5, value: 1, roll: true },
];
//* TWOS
const twoTwos = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 1, roll: true },
];
const threeTwos = [
  { id: 1, value: 3, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 2, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 2, roll: true },
];
const fourTwos = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 2, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 6, roll: true },
];
const noTwo = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 6, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 5, roll: true },
];
//* THREES
const twoThrees = [
  { id: 1, value: 3, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 4, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 3, roll: true },
];
const threeThrees = [
  { id: 1, value: 3, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 3, roll: true },
];
const fourThrees = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 3, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 3, roll: true },
  { id: 5, value: 3, roll: true },
];
const noThree = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 6, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 5, roll: true },
];
//*FOURS
const twoFours = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 3, roll: true },
];
const threeFours = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 4, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 6, roll: true },
];
const fourFours = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 4, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 4, roll: true },
];
const noFour = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 5, roll: true },
];
//* FIVES
const twoFives = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 2, roll: true },
  { id: 4, value: 1, roll: true },
  { id: 5, value: 5, roll: true },
];
const threeFives = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 5, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 5, roll: true },
];
const fourFives = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 5, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 5, roll: true },
];
const noFive = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 6, roll: true },
];
//* SIXES
const twoSixes = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 1, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 6, roll: true },
];
const threeSixes = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 5, roll: true },
  { id: 3, value: 6, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 6, roll: true },
];
const fourSixes = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 6, roll: true },
  { id: 3, value: 6, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 6, roll: true },
];
//* PAIR
const pairOfOnes = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 1, roll: true },
];
const pairOfTwos = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 3, roll: true },
];
const pairOfThrees = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 3, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 3, roll: true },
];
const pairOfFours = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 3, roll: true },
];
const pairOfFives = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 5, roll: true },
  { id: 3, value: 5, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 3, roll: true },
];
const pairOfSixes = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 6, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 3, roll: true },
];
//* TWO PAIR
const twoPairsThreeFour = [
  { id: 1, value: 3, roll: true },
  { id: 2, value: 5, roll: true },
  { id: 3, value: 4, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 3, roll: true },
];
const twoPairsFiveSix = [
  { id: 1, value: 6, roll: true },
  { id: 2, value: 5, roll: true },
  { id: 3, value: 6, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 5, roll: true },
];
const twoPairsTwoFive = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 5, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 5, roll: true },
];
//* STRAIGHTS
const smallStraight = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 5, roll: true },
];
const bigStraight = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 3, roll: true },
  { id: 3, value: 4, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 6, roll: true },
];
//* FULL HOUSE
const fullHouseOneTwo = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 1, roll: true },
  { id: 3, value: 2, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 2, roll: true },
];
//* YATZY
const yatzyOnes = [
  { id: 1, value: 1, roll: true },
  { id: 2, value: 1, roll: true },
  { id: 3, value: 1, roll: true },
  { id: 4, value: 1, roll: true },
  { id: 5, value: 1, roll: true },
];
const yatzyTwos = [
  { id: 1, value: 2, roll: true },
  { id: 2, value: 2, roll: true },
  { id: 3, value: 2, roll: true },
  { id: 4, value: 2, roll: true },
  { id: 5, value: 2, roll: true },
];
const yatzyThrees = [
  { id: 1, value: 3, roll: true },
  { id: 2, value: 3, roll: true },
  { id: 3, value: 3, roll: true },
  { id: 4, value: 3, roll: true },
  { id: 5, value: 3, roll: true },
];
const yatzyFours = [
  { id: 1, value: 4, roll: true },
  { id: 2, value: 4, roll: true },
  { id: 3, value: 4, roll: true },
  { id: 4, value: 4, roll: true },
  { id: 5, value: 4, roll: true },
];
const yatzyFives = [
  { id: 1, value: 5, roll: true },
  { id: 2, value: 5, roll: true },
  { id: 3, value: 5, roll: true },
  { id: 4, value: 5, roll: true },
  { id: 5, value: 5, roll: true },
];
const yatzySixes = [
  { id: 1, value: 6, roll: true },
  { id: 2, value: 6, roll: true },
  { id: 3, value: 6, roll: true },
  { id: 4, value: 6, roll: true },
  { id: 5, value: 6, roll: true },
];

describe("ScoreBoard.cy.tsx", () => {
  it("Score starts with zero", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyOnes}></ScoreBoard>
    );
    cy.get("#Ones").should("contain", 0);
    cy.get("#Twos").should("contain", 0);
    cy.get("#Threes").should("contain", 0);
    cy.get("#Fours").should("contain", 0);
    cy.get("#Fives").should("contain", 0);
    cy.get("#Sixes").should("contain", 0);
    cy.get("#Bonus").should("contain", 0);
    cy.get("#OnePair").should("contain", 0);
    cy.get("#TwoPairs").should("contain", 0);
    cy.get("#ThreeKind").should("contain", 0);
    cy.get("#FourKind").should("contain", 0);
    cy.get("#SmallStraight").should("contain", 0);
    cy.get("#BigStraight").should("contain", 0);
    cy.get("#FullHouse").should("contain", 0);
    cy.get("#Chance").should("contain", 0);
    cy.get("#Yatzy").should("contain", 0);
    cy.get("#Sum").should("contain", 0);
  });
  //* ONES
  it("Ones only get point on ones only", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyOnes}></ScoreBoard>
    );
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 0);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 0);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 0);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 0);
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 0);
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 5);
  });
  it("2 ones gets 2 point", () => {
    cy.mount(<ScoreBoard allowScore={allowScore} dices={twoOnes}></ScoreBoard>);
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 2);
  });
  it("3 ones gets 3 point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeOnes}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 3);
  });
  it("4 ones gets 4 point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourOnes}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 4);
  });
  it("5 ones gets 4 point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyOnes}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 5);
  });
  it("No ones gets no score", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={bigStraight}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 0);
  });
  //* TWOS
  it("Twos only get point on twos only", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyTwos}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 0);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 0);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 0);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 0);
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 0);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 10);
  });
  it("2 twos gets 4 point", () => {
    cy.mount(<ScoreBoard allowScore={allowScore} dices={twoTwos}></ScoreBoard>);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 4);
  });
  it("3 twos gets 6 point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeTwos}></ScoreBoard>
    );
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 6);
  });
  it("4 twos gets 8 point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourTwos}></ScoreBoard>
    );
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 8);
  });
  it("5 twos gets 10 point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyTwos}></ScoreBoard>
    );
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 10);
  });
  it("No twos gets no score", () => {
    cy.mount(<ScoreBoard allowScore={allowScore} dices={noTwo}></ScoreBoard>);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 0);
  });
  //* THREES
  it("Threes only get point on threes only", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyThrees}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 0);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 0);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 0);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 0);
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 0);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 15);
  });
  it("2 threes gets 6 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={twoThrees}></ScoreBoard>
    );
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 6);
  });
  it("3 threes gets 9 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeThrees}></ScoreBoard>
    );
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 9);
  });
  it("4 threes gets 12 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourThrees}></ScoreBoard>
    );
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 12);
  });
  it("5 threes gets 15 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyThrees}></ScoreBoard>
    );
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 15);
  });
  it("No threes gets no score", () => {
    cy.mount(<ScoreBoard allowScore={allowScore} dices={noThree}></ScoreBoard>);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 0);
  });
  //* FOURS
  it("Fours only get point on fours only", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyFours}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 0);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 0);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 0);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 0);
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 0);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 20);
  });
  it("2 fours get 8 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={twoFours}></ScoreBoard>
    );
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 8);
  });
  it("3 fours get 12 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeFours}></ScoreBoard>
    );
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 12);
  });
  it("4 fours get 16 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourFours}></ScoreBoard>
    );
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 16);
  });
  it("5 fours get 20 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyFours}></ScoreBoard>
    );
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 20);
  });
  it("No fours gets no score", () => {
    cy.mount(<ScoreBoard allowScore={allowScore} dices={noFour}></ScoreBoard>);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 0);
  });
  //* FIVES
  it("Fives only get point on fives only", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyFives}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 0);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 0);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 0);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 0);
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 0);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 25);
  });
  it("2 fives get 10 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={twoFives}></ScoreBoard>
    );
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 10);
  });
  it("3 fives get 15 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeFives}></ScoreBoard>
    );
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 15);
  });
  it("4 fives get 20 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourFives}></ScoreBoard>
    );
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 20);
  });
  it("5 fives get 25 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyFives}></ScoreBoard>
    );
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 25);
  });
  it("No fives gets no score", () => {
    cy.mount(<ScoreBoard allowScore={allowScore} dices={noFive}></ScoreBoard>);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 0);
  });
  //* SIXES
  it("Sixes only get point on sixes only", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzySixes}></ScoreBoard>
    );
    cy.get("#Ones").click();
    cy.get("#Ones").should("contain", 0);
    cy.get("#Twos").click();
    cy.get("#Twos").should("contain", 0);
    cy.get("#Threes").click();
    cy.get("#Threes").should("contain", 0);
    cy.get("#Fours").click();
    cy.get("#Fours").should("contain", 0);
    cy.get("#Fives").click();
    cy.get("#Fives").should("contain", 0);
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 30);
  });
  it("2 sixes gets 12 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={twoSixes}></ScoreBoard>
    );
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 12);
  });
  it("3 sixes gets 18 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeSixes}></ScoreBoard>
    );
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 18);
  });
  it("4 sixes gets 24 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourSixes}></ScoreBoard>
    );
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 24);
  });
  it("5 sixes gets 30 points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzySixes}></ScoreBoard>
    );
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 30);
  });
  it("No sixes gets no score", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={smallStraight}></ScoreBoard>
    );
    cy.get("#Sixes").click();
    cy.get("#Sixes").should("contain", 0);
  });
  //* ONE PAIR
  it("Pair of ones get 2", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfOnes}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 2);
  });
  it("Pair of twos get 4", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfTwos}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 4);
  });
  it("Pair of threes get 6", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfThrees}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 6);
  });
  it("Pair of fours get 8", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfFours}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 8);
  });
  it("Pair of fives get 10", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfFives}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 10);
  });
  it("Pair of sixes get 12", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfSixes}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 12);
  });
  it("One pair get highest score of two pairs", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={twoPairsTwoFive}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 10);
  });
  it("No pairs gets no points", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={smallStraight}></ScoreBoard>
    );
    cy.get("#OnePair").click();
    cy.get("#OnePair").should("contain", 0);
  });
  //* TWO PAIRS
  it("TwoPairs of ones & twos get 6", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fullHouseOneTwo}></ScoreBoard>
    );
    cy.get("#TwoPairs").click();
    cy.get("#TwoPairs").should("contain", 6);
  });
  it("TwoPairs of threes & fours get 14", () => {
    cy.mount(
      <ScoreBoard
        allowScore={allowScore}
        dices={twoPairsThreeFour}
      ></ScoreBoard>
    );
    cy.get("#TwoPairs").click();
    cy.get("#TwoPairs").should("contain", 14);
  });
  it("TwoPairs of fives & sixes get 22", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={twoPairsFiveSix}></ScoreBoard>
    );
    cy.get("#TwoPairs").click();
    cy.get("#TwoPairs").should("contain", 2);
  });
  //* THREE KIND
  it("ThreeKind of ones gets 3", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeOnes}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 3);
  });
  it("ThreeKind of twos gets 6", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fullHouseOneTwo}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 6);
  });
  it("ThreeKind of threes gets 9", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeThrees}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 9);
  });
  it("ThreeKind of fours gets 12", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeFours}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 12);
  });
  it("ThreeKind of fives gets 15", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeFives}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 15);
  });
  it("ThreeKind of sixes gets 18", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeSixes}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 18);
  });
  it("Pair of ones gives no point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfOnes}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 0);
  });
  it("Pair of twos gives no point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfTwos}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 0);
  });
  it("Pair of threes gives no point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfThrees}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 0);
  });
  it("Pair of fours gives no point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfFours}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 0);
  });
  it("Pair of fives gives no point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfFives}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 0);
  });
  it("Pair of sixes gives no point", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfSixes}></ScoreBoard>
    );
    cy.get("#ThreeKind").click();
    cy.get("#ThreeKind").should("contain", 0);
  });
  //* FOUR KIND
  it("FourKind of ones gets 4", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourOnes}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 4);
  });
  it("FourKind of twos gets 8", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourTwos}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 8);
  });
  it("FourKind of threes gets 12", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourThrees}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 12);
  });
  it("FourKind of fours gets 16", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourFours}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 16);
  });
  it("FourKind of fives gets 20", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourFives}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 20);
  });
  it("FourKind of sixes gets 24", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={fourSixes}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 24);
  });
  it("3 of threes gives no point to 4 of a kind", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={threeThrees}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 0);
  });
  it("Pair of fours gives no point to 4 of a kind", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={pairOfFours}></ScoreBoard>
    );
    cy.get("#FourKind").click();
    cy.get("#FourKind").should("contain", 0);
  });
  //* SMALL STRAIGHT
  it("SmallStraight get 15", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={smallStraight}></ScoreBoard>
    );
    cy.get("#SmallStraight").click();
    cy.get("#SmallStraight").should("contain", 15);
  });
  it("BigStraight get no point on SmallStraight", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={bigStraight}></ScoreBoard>
    );
    cy.get("#SmallStraight").click();
    cy.get("#SmallStraight").should("contain", 0);
  });
  //* BIG STRAIGHT
  it("BigStraight gets 20", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={bigStraight}></ScoreBoard>
    );
    cy.get("#BigStraight").click();
    cy.get("#BigStraight").should("contain", 20);
  });
  it("SmallStraight get no point on BigStraight", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={smallStraight}></ScoreBoard>
    );
    cy.get("#BigStraight").click();
    cy.get("#BigStraight").should("contain", 0);
  });
  //* YATZY
  it("Yatzy gets 50 from 5 ones", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyOnes}></ScoreBoard>
    );
    cy.get("#Yatzy").click();
    cy.get("#Yatzy").should("contain", 50);
  });
  it("Yatzy gets 50 from 5 twos", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyTwos}></ScoreBoard>
    );
    cy.get("#Yatzy").click();
    cy.get("#Yatzy").should("contain", 50);
  });
  it("Yatzy gets 50 from 5 threes", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyThrees}></ScoreBoard>
    );
    cy.get("#Yatzy").click();
    cy.get("#Yatzy").should("contain", 50);
  });
  it("Yatzy gets 50 from 5 fours", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyFours}></ScoreBoard>
    );
    cy.get("#Yatzy").click();
    cy.get("#Yatzy").should("contain", 50);
  });
  it("Yatzy gets 50 from 5 fives", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzyFives}></ScoreBoard>
    );
    cy.get("#Yatzy").click();
    cy.get("#Yatzy").should("contain", 50);
  });
  it("Yatzy gets 50 from 5 sixes", () => {
    cy.mount(
      <ScoreBoard allowScore={allowScore} dices={yatzySixes}></ScoreBoard>
    );
    cy.get("#Yatzy").click();
    cy.get("#Yatzy").should("contain", 50);
  });
});
