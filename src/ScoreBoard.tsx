import { type Dices } from "./App";
import { type Dispatch, type SetStateAction, useState, useEffect } from "react";

interface ScoreBoardProps {
  allowScore: boolean;
  setAllowScore?: Dispatch<SetStateAction<boolean>>;
  dices: Dices;
  setRollLeft?: Dispatch<SetStateAction<number>>;
}

export interface Score {
  id: ScoreList;
  name: string;
  score: number;
}
export type Scores = Score[];

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

function ScoreBoard(props: ScoreBoardProps) {
  const { dices, allowScore, setAllowScore, setRollLeft } = props;

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

  //* RÄKNA UT BONUS
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

  //* KOLLA EFTER SAMMA NUMMER
  function sameNumber(id: string, number: number) {
    let sum: number = 0;
    dices.map((dice) => {
      if (dice.value === number) sum = sum + dice.value;
    });
    givePoint(id, sum);
  }

  //* DELA UT POÄNG
  function givePoint(id: string, sum: number) {
    if (allowScore) {
      if (setScores) {
        setScores(
          scores.map((score) => {
            return score.id === id && score.score === 0
              ? { ...score, score: sum }
              : score;
          })
        );
      }
      if (setRollLeft && setAllowScore) {
        setRollLeft(3);
        setAllowScore(false);
      }
    }
  }

  //* SUMMERA TÄRNINGAR
  function diceSum() {
    let sum: number = 0;
    dices.map((dice) => {
      sum = sum + dice.value;
    });
    return sum;
  }

  //* KOLLA ANTAL AV VÄRDEN
  function countEachValue(): Record<number, number> {
    const result: Record<number, number> = {};

    return dices.reduce((accumulator, dice) => {
      accumulator[dice.value] = (accumulator[dice.value] || 0) + 1;
      return accumulator;
    }, result);
  }

  //* KOLLA ALLA VÄRDEN SOM FINNS MER ÄN ANGIVET GÅNGER
  function findMultiValues(minAmount: number) {
    const keys = Object.entries(countEachValue())
      .filter((keyValue) => keyValue[1] >= minAmount)
      .map((keyValue) => Number(keyValue[0]));
    return keys;
  }

  //* KOLLA STEGE
  function checkStraight(
    straight: Record<number, boolean>,
    point: number,
    id: string
  ) {
    let isStraight: boolean = true;

    dices.forEach((dice) => {
      if (dice.value in straight) {
        straight[dice.value] = true;
      }
    });

    for (const key in straight) {
      if (straight[key] === false) isStraight = false;
    }

    if (isStraight) {
      givePoint(id, point);
    }
  }

  function resetDiceRoll() {
    dices.forEach((dice) => {
      dice.roll = true;
    });
  }

  // //* UPPDATERA SUMMAN
  function updateSum(): void {
    scores.map((score) => {
      if (score.id === "Sum") {
        const sum = scores
          .filter((s) => s.id !== "Sum")
          .reduce((acc, curr) => acc + curr.score, 0);

        return { ...score, score: sum };
      }
      return score;
    });
  }

  //* HANDLE CLICK SCOREBOARD
  function handleClick(id: string) {
    switch (id) {
      //* ettor
      case "Ones": {
        sameNumber(id, 1);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* tvåor
      case "Twos": {
        sameNumber(id, 2);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* treor
      case "Threes": {
        sameNumber(id, 3);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* fyror
      case "Fours": {
        sameNumber(id, 4);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* femmor
      case "Fives": {
        sameNumber(id, 5);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* sexor
      case "Sixes": {
        sameNumber(id, 6);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* par
      case "OnePair": {
        const sum: number = Math.max(0, ...findMultiValues(2)) * 2;
        givePoint(id, sum);
        console.log(sum);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* två par
      case "TwoPairs": {
        const pairs: number[] = findMultiValues(2);
        let sum = 0;
        if (pairs.length === 2) {
          sum =
            pairs.reduce(
              (accumulator, currentValue) => accumulator + currentValue,
              sum
            ) * 2;
        }
        givePoint(id, sum);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* tretal
      case "ThreeKind": {
        const values: number[] = findMultiValues(3);
        const sum: number = values.length > 0 ? Math.max(...values) * 3 : 0;
        givePoint(id, sum);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* fyrtal
      case "FourKind": {
        const values: number[] = findMultiValues(4);
        const sum: number = values.length > 0 ? Math.max(...values) * 4 : 0;
        givePoint(id, sum);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* liten stege
      case "SmallStraight": {
        const straight: Record<number, boolean> = {
          1: false,
          2: false,
          3: false,
          4: false,
          5: false,
        };

        checkStraight(straight, 15, id);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* stor stege
      case "BigStraight": {
        const straight: Record<number, boolean> = {
          2: false,
          3: false,
          4: false,
          5: false,
          6: false,
        };

        checkStraight(straight, 20, id);
        resetDiceRoll();
        updateSum();
        break;
      }
      //! kåk
      case "FullHouse": {
        const sum: number = Math.max(...findMultiValues(3)) * 3;
        givePoint(id, sum);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* chans
      case "Chance": {
        const sum = diceSum();
        givePoint(id, sum);
        resetDiceRoll();
        updateSum();
        break;
      }
      //* yatzy
      case "Yatzy": {
        if (dices.every((dice) => dice.value === dices[0].value)) {
          givePoint(id, 50);
        }
        resetDiceRoll();
        updateSum();
        break;
      }
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Combo</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {scores &&
          scores.map((score: Score) => (
            <tr
              key={score.id}
              id={score.id}
              onClick={() => handleClick(score.id)}
            >
              <td style={{ border: "1px solid", padding: "2px 5px" }}>
                {score.name}
              </td>
              <td style={{ border: "1px solid", padding: "2px 5px" }}>
                {score.score}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default ScoreBoard;
