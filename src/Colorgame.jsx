import React from "react";
import { useState } from "react";
import { ColorBox } from "./App";

function Colorgame() {
  const [bg, setbgcol] = useState("red");
  const styles = {
    background: bg,
  };

  const INITIAL_color_list = ["red", "orange", "pink", "crimson"];
  const [colorlist, setcolorlist] = useState(INITIAL_color_list);

  return (
    <div>
      <input
        style={styles} ///property binding
        onChange={(event) => setbgcol(event.target.value)}
        type="text"
        placeholder="please"
      />

      <button onClick={(event) => setcolorlist([...colorlist, bg])}>
        Addcolor
      </button>
      {colorlist.map((color) => (
        <ColorBox clr={color} />
      ))}
    </div>
  );
}

function ColorBox({ clr }) {
  const styles = {
    height: "25px",
    width: "250px",
    background: clr,
    marginTop: "5px",
  };
  return <div style={styles}></div>;
}
