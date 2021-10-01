import React, { useEffect, useRef, useState } from "react";
import { MainTitle } from "../Components/Titles";
import { MainContainer } from "../Components/Containers";
import { PencilSelector, Pencil, Option } from "../Components/General";
import "./Canvas.css";
import { start, breadthFirst } from "../../Logic/canvasLogic";
import { useSelector, useDispatch } from "react-redux";
import { SelectPencil } from "../../Redux/Actions/Pencil";
import { CreateMap, UpdateMap } from "../../Redux/Actions/Map";

function Canvas() {
	const mapRef = useRef(null);
	const dispatch = useDispatch();
	const activePencil = useSelector((state) => state.pencil);
	const map = useSelector((state) => state.map);
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
		dispatch(CreateMap(mapRef.current.map));
	}, []);

	const handleBreadth = (event) => {
		const reach = breadthFirst(
			mapRef.current.start,
			mapRef.current.map,
			mapRef,
			dispatch
		);
	};
	const handleMouseDown = (event) => {
		if (activePencil.text == "Start") {
			if (mapRef.current.start[0] > -1) {
				dispatch(
					UpdateMap(
						mapRef.current.start[0],
						mapRef.current.start[1],
						0
					)
				);
			}
			const arr = mapRef.current.get_Click(event.clientX, event.clientY);
			dispatch(UpdateMap(arr[0], arr[1], activePencil.value));
			mapRef.current.set_Start(arr[0], arr[1]);
		} else if (activePencil.text == "Goal") {
			if (mapRef.current.goal[0] > -1) {
				dispatch(
					UpdateMap(mapRef.current.goal[0], mapRef.current.goal[1], 0)
				);
			}
			const arr = mapRef.current.get_Click(event.clientX, event.clientY);
			dispatch(UpdateMap(arr[0], arr[1], activePencil.value));
			mapRef.current.set_Goal(arr[0], arr[1]);
		} else {
			setClicked(true);
			const arr = mapRef.current.get_Click(event.clientX, event.clientY);
			dispatch(UpdateMap(arr[0], arr[1], activePencil.value));
		}
		mapRef.current.draw_Map();
	};

	const handleMouseMove = (event) => {
		const arr = mapRef.current.get_Click(event.clientX, event.clientY);
		dispatch(UpdateMap(arr[0], arr[1], activePencil.value));
		mapRef.current.draw_Map();
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
						<Option
							onClick={() => {
								dispatch(
									SelectPencil(
										elem.color,
										elem.value,
										elem.text
									)
								);
							}}
						>
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
			<button onClick={handleBreadth}>Breadth</button>
		</MainContainer>
	);
}

export default Canvas;
