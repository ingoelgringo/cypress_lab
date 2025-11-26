import Dice from "./Dice.tsx";
import ScoreBoard from "./ScoreBoard.tsx";
import { useEffect, useState } from "react";

export interface Score {
  id: ScoreList;
  name: string;
  score: number;
}
export type Scores = Score[];

export interface Diceinfo {
  id: number;
  value: number;
  roll: boolean;
}

export type ScoreList =
  | "Ones"
  | "Twos"
  | "Threes"
  | "Fours"
  | "Fives"
  | "Sixes"
  | "Bonus"
  | "OnePair"
  | "TwoPairs"
  | "ThreeKind"
  | "FourKind"
  | "SmallStraight"
  | "BigStraight"
  | "FullHouse"
  | "Chance"
  | "Yatzy"
  | "Sum";

// export enum ScoreSet {
//   Ones = 1,
//   Twos,
//   Threes,
//   Fours,
//   Fives,
//   Sixes,
//   Bonus,
//   OnePair,
//   TwoPairs,
//   ThreeKind,
//   FourKind,
//   SmallStraight,
//   BigStraight,
//   FullHouse,
//   Chance,
//   Yatzy,
//   Sum,
// }

export type Dices = Diceinfo[];

function App() {
  const [dices, setDices] = useState<Dices>([
    { id: 1, value: 1, roll: true },
    { id: 2, value: 2, roll: true },
    { id: 3, value: 3, roll: true },
    { id: 4, value: 4, roll: true },
    { id: 5, value: 5, roll: true },
  ]);

  const [scores, setScores] = useState<Scores>([
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
  ]);

  const [rollLeft, setRollLeft] = useState<number>(3);

  // räkna ut bonus
  useEffect(() => {
    let sum: number = 0;
    scores.map((score) => {
      if (
        score.id === "Ones" ||
        score.id === "Twos" ||
        score.id === "Threes" ||
        score.id === "Fours" ||
        score.id === "Fives" ||
        score.id === "Sixes"
      ) {
        sum = sum + score.score;
      }
      if (sum >= 63 && scores[6].score === 0) {
        setScores(
          scores.map((score) => {
            return score.name === "Bonus" ? { ...score, score: 50 } : score;
          })
        );
      }
    });
  }, [scores]);

  function rollDices() {
    if (rollLeft > 0) {
      const newRoll: Dices = dices.map((dice: Diceinfo) => {
        const result = Math.ceil(Math.random() * 6);
        return dice.roll ? { ...dice, value: result } : dice;
      });
      setDices(newRoll);
      setRollLeft(rollLeft - 1);
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flex: 1,
              flexWrap: "wrap",
            }}
          >
            {dices.map((dice) => (
              <Dice
                key={dice.id}
                id={dice.id}
                number={dice.value}
                dices={dices}
                setDices={setDices}
                rollLeft={rollLeft}
              ></Dice>
            ))}
          </div>
          <button
            id="rollDiceBtn"
            style={{
              width: "100px",
              height: "40px",
              alignSelf: "center",
              marginTop: "50px",
            }}
            onClick={rollDices}
          >
            Roll 'em
          </button>
          <p id="rollLeft">You´ve got {rollLeft} rolls left</p>
        </div>
        <div style={{ flex: 1 }}>
          <ScoreBoard
            scores={scores}
            setScores={setScores}
            dices={dices}
            setRollLeft={setRollLeft}
          ></ScoreBoard>
        </div>
      </div>
    </>
  );
}

export default App;
