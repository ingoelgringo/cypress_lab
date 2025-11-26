import { type CSSProperties, type Dispatch, type SetStateAction } from "react";
import { type Dices } from "./App";

type DiceBody = CSSProperties;
type Dot = CSSProperties;

interface Diceprops {
  id: number;
  number: number;
  dices: Dices;
  setDices: Dispatch<SetStateAction<Dices>>;
  rollLeft: number;
}

const diceBody: DiceBody = {
  border: "3px solid",
  borderColor: "black",
  borderRadius: "10px",
  width: "50px",
  height: "50px",
  display: "flex",
  position: "relative",
};

const dot: Dot = {
  width: "10px",
  height: "10px",
  borderRadius: "10px",
  backgroundColor: "black",
  position: "absolute",
};

const topLeft: Dot = {
  top: "8px",
  left: "8px",
};
const topRight: Dot = {
  top: "8px",
  left: "32px",
};
const middleRight: Dot = {
  top: "20px",
  left: "32px",
};
const middle: Dot = {
  top: "20px",
  left: "20px",
};
const middleLeft: Dot = {
  top: "20px",
  left: "8px",
};
const bottomLeft: Dot = {
  top: "32px",
  left: "8px",
};
const bottomRight: Dot = {
  top: "32px",
  left: "32px",
};

function Dice(props: Diceprops) {
  const id = props.id;
  const number = props.number;
  const dices = props.dices;
  const setDices = props.setDices;
  const rollLeft = props.rollLeft;

  function handleClick() {
    if (rollLeft < 3) {
      setDices(
        dices.map((dice) => {
          return dice.id === id ? { ...dice, roll: !dice.roll } : dice;
        })
      );
    }
  }

  return (
    <>
      <div
        key={id}
        data-test-id={`d${id}`}
        style={{
          ...diceBody,
          backgroundColor: dices[id - 1].roll ? "white" : "lightgreen",
        }}
        onClick={handleClick}
      >
        {number === 1 && <div style={{ ...dot, ...middle }}></div>}
        {number === 2 && (
          <>
            <div style={{ ...dot, ...topRight }}></div>
            <div style={{ ...dot, ...bottomLeft }}></div>
          </>
        )}
        {number === 3 && (
          <>
            <div style={{ ...dot, ...bottomLeft }}></div>
            <div style={{ ...dot, ...middle }}></div>
            <div style={{ ...dot, ...topRight }}></div>
          </>
        )}
        {number === 4 && (
          <>
            <div style={{ ...dot, ...topLeft }}></div>
            <div style={{ ...dot, ...topRight }}></div>
            <div style={{ ...dot, ...bottomLeft }}></div>
            <div style={{ ...dot, ...bottomRight }}></div>
          </>
        )}
        {number === 5 && (
          <>
            <div style={{ ...dot, ...topLeft }}></div>
            <div style={{ ...dot, ...topRight }}></div>
            <div style={{ ...dot, ...middle }}></div>
            <div style={{ ...dot, ...bottomLeft }}></div>
            <div style={{ ...dot, ...bottomRight }}></div>
          </>
        )}
        {number === 6 && (
          <>
            <div style={{ ...dot, ...topLeft }}></div>
            <div style={{ ...dot, ...topRight }}></div>
            <div style={{ ...dot, ...middleLeft }}></div>
            <div style={{ ...dot, ...bottomRight }}></div>
            <div style={{ ...dot, ...bottomLeft }}></div>
            <div style={{ ...dot, ...middleRight }}></div>
          </>
        )}
      </div>
    </>
  );
}

export default Dice;
