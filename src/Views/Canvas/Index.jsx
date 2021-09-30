import React, { useEffect, useRef, useState } from "react";
import { MainTitle } from "../Components/Titles";
import { MainContainer } from "../Components/Containers";
import { PencilSelector, Pencil, Option } from "../Components/General";
import "./Canvas.css";
import { start } from "../../Logic/canvasLogic";

function Canvas() {
  const mapRef = useRef(null);
  const [clicked, setClicked] = useState(false);
  const pencils = [
    { color: "rgb(0,100,0)", value: 1, text: "Wall" },
    { color: "rgb(150,150,0)", value: 2, text: "Start" },
    { color: "rgb(150,0,150)", value: 3, text: "Goal" },
    { color: "rgb(255,255,255)", value: 0, text: "Eraser" },
  ];

  useEffect(() => {
    const canvas = document.getElementById("mainCanvas");
    mapRef.current = start(canvas);
  }, []);

  const handleMouseDown = (event) => {
    setClicked(true);
    mapRef.current.get_Click(event.clientX, event.clientY);
  };

  const handleMouseMove = (event) => {
    mapRef.current.get_Click(event.clientX, event.clientY);
  };

  const handleMouseUp = (event) => {
    setClicked(false);
  };

  return (
    <MainContainer>
      <MainTitle primary={true}>Canvas constructor</MainTitle>
      <PencilSelector>
        {pencils.map((elem, index) => {
          return (
            <Option>
              <p className="optionText">{elem.text}</p>
              <Pencil color={elem.color} key={index}></Pencil>
            </Option>
          );
        })}
      </PencilSelector>
      <canvas
        className="mainCanvas"
        id="mainCanvas"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={clicked ? handleMouseMove : null}
      ></canvas>
    </MainContainer>
  );
}

export default Canvas;
