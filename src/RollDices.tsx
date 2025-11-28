import Dice from "./Dice.tsx";
import { type Dices, type Diceinfo } from "./App";
import { type Dispatch, type SetStateAction, useEffect, useState } from "react";

interface RollDicesProps {
  dices: Dices;
  setDices: Dispatch<SetStateAction<Dices>>;
  allowScore: boolean;
  setAllowScore: Dispatch<SetStateAction<boolean>>;
}

function RollDices(props: RollDicesProps) {
  const { dices, setDices, allowScore, setAllowScore } = props;
  const [rollLeft, setRollLeft] = useState<number>(3);

  useEffect(() => {
    if (rollLeft < 3) setAllowScore(true);
  }, [rollLeft, setAllowScore]);

  useEffect(() => {
    async function resetRoll() {
      if (!allowScore) {
        setRollLeft(3);
      }
    }
    resetRoll();
  }, [allowScore]);

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
  );
}

export default RollDices;
