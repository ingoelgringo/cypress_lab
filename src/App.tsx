import { useState } from "react";
import RollDices from "./RollDices.tsx";
import ScoreBoard from "./ScoreBoard.tsx";

export interface Diceinfo {
  id: number;
  value: number;
  roll: boolean;
}

export type Dices = Diceinfo[];

function App() {
  const [dices, setDices] = useState<Dices>([
    { id: 1, value: 1, roll: true },
    { id: 2, value: 2, roll: true },
    { id: 3, value: 3, roll: true },
    { id: 4, value: 4, roll: true },
    { id: 5, value: 5, roll: true },
  ]);
  const [allowScore, setAllowScore] = useState<boolean>(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <RollDices
          allowScore={allowScore}
          setAllowScore={setAllowScore}
          dices={dices}
          setDices={setDices}
        />
        <div style={{ flex: 1 }}>
          <ScoreBoard
            allowScore={allowScore}
            setAllowScore={setAllowScore}
            dices={dices}
          ></ScoreBoard>
        </div>
      </div>
    </>
  );
}

export default App;
