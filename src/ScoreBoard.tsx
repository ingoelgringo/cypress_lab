import { type Score, type Scores, type Dices } from "./App";
import { type Dispatch, type SetStateAction } from "react";

interface ScoreBoardProps {
  scores: Scores;
  setScores?: Dispatch<SetStateAction<Scores>>;
  dices: Dices;
  setRollLeft?: Dispatch<SetStateAction<number>>;
}

function ScoreBoard(props: ScoreBoardProps) {
  const { scores, setScores, dices, setRollLeft } = props;

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
    if (setScores) {
      setScores(
        scores.map((score) => {
          return score.id === id && score.score === 0
            ? { ...score, score: sum }
            : score;
        })
      );
    }
    if (setRollLeft) {
      setRollLeft(3);
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
  // function updateSum(): void {
  //   let sum: number = 0;

  //   scores.map((score) => {
  //     if (score.id !== "Sum") {
  //       sum = sum + score.score;
  //     }
  //   });
  //   console.log(sum);
  //   setScores(
  //     scores.map((score) => {
  //       return score.id === "Sum" && score.score === 0
  //         ? { ...score, score: sum }
  //         : score;
  //     })
  //   );
  // }

  //* HANDLE CLICK SCOREBOARD
  function handleClick(id: string) {
    switch (id) {
      //* ettor
      case "Ones": {
        sameNumber(id, 1);
        resetDiceRoll();
        break;
      }
      //* tvåor
      case "Twos": {
        sameNumber(id, 2);
        resetDiceRoll();
        break;
      }
      //* treor
      case "Threes": {
        sameNumber(id, 3);
        resetDiceRoll();
        break;
      }
      //* fyror
      case "Fours": {
        sameNumber(id, 4);
        resetDiceRoll();
        break;
      }
      //* femmor
      case "Fives": {
        sameNumber(id, 5);
        resetDiceRoll();
        break;
      }
      //* sexor
      case "Sixes": {
        sameNumber(id, 6);
        resetDiceRoll();
        break;
      }
      //* par
      case "OnePair": {
        const sum: number = Math.max(0, ...findMultiValues(2)) * 2;
        givePoint(id, sum);
        console.log(sum);
        resetDiceRoll();
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
        break;
      }
      //* tretal
      case "ThreeKind": {
        const sum: number = Math.max(...findMultiValues(3)) * 3;
        givePoint(id, sum);
        resetDiceRoll();
        break;
      }
      //* fyrtal
      case "FourKind": {
        const sum: number = Math.max(...findMultiValues(4)) * 4;
        givePoint(id, sum);
        resetDiceRoll();
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
        break;
      }
      //! kåk
      case "FullHouse": {
        const sum: number = Math.max(...findMultiValues(3)) * 3;
        givePoint(id, sum);
        resetDiceRoll();
        break;
      }
      //* chans
      case "Chance": {
        const sum = diceSum();
        givePoint(id, sum);
        resetDiceRoll();
        break;
      }
      //* yatzy
      case "Yatzy": {
        if (dices.every((dice) => dice.value === dices[0].value)) {
          givePoint(id, 50);
        }
        resetDiceRoll();
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
            <tr key={score.id}>
              <td
                style={{ border: "1px solid", padding: "2px 5px" }}
                onClick={() => handleClick(score.id)}
              >
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
