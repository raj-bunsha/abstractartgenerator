import "./App.css";
import Layer from "./Components/Layer";
import Pallete from "./Components/Pallete.jsx";
import Text from "./Utilities/Text";
import Button from "./Utilities/Button";
import DropDown from "./Utilities/DropDown";
import React, { useState } from "react";
import Overlay from "./Components/Overlay";
import { OverlayContext } from "./Contexts/OverlayContext";
import { DataContext } from "./Contexts/DataContext";
import axios from "axios";
import {Buffer} from "buffer";

function App() {
	const sendPostRequest = (url, data) => {
		axios.post(url, JSON.stringify(data),{responseType: "arraybuffer"})
			.then((response) => {
				// console.log(response)
				let base64ImageString = Buffer.from(response.data, 'binary').toString('base64')
				setsrc(`data:image/png;base64,${base64ImageString}`);
				// console.log(src);
			})
			.catch((error) => {
				console.error(error);
			});
		};
		const sendRequest = (e) => {
			request["overlay"]=overlay
			setRequest(request)
			// console.log(overlay)
			sendPostRequest("http://127.0.0.1:8000/api/", request);
		};
	const [src,setsrc] = useState("https://picsum.photos/900/500");
	const downloadImage=()=>{
		//download the image associated with src
		const link = document.createElement("a");
		link.href = src;
		link.setAttribute("download", "image.png");
		link.click();
	}

	function randomInt(min, max) {
		//  get number between min and max
		return Math.floor(Math.random() * (max - min + 1)) + min;
	  }
	
	const Randomize= (e)=>
	{
		request["pallete"]=randomInt(0,19);
		request["layer1"]["Styles"]=randomInt(0,6);
		request["layer1"]["Shape"]=randomInt(0,7);
		request["layer1"]["Complexity"]=randomInt(10,30);
		request["layer1"]["Size"]=randomInt(50,400);
		request["layer2"]["Styles"]=randomInt(0,6);
		request["layer2"]["Shape"]=randomInt(0,7);
		request["layer2"]["Complexity"]=randomInt(10,30);
		request["layer2"]["Size"]=randomInt(50,400);
		setRequest(request)
		sendRequest(e)
	}
	// const resolutions_list = [
	// 	"4K: 3840x2160",
	// 	"Full HD: 1920x1080",
	// 	"HD: 1280x720",
	// ];
	const [overlay, setOverlay] = useState("0");
	
	const [request, setRequest] = useState({
		pallete: 0,
		layer1: { Styles: 0, Shape: 0, Complexity: 20, Size: 225 },
		layer2: { Styles: 0, Shape: 0, Complexity: 20, Size: 225 },
		overlay: overlay,
	});
	//create a sample function to change layer1 to default in request
	const changeLayer1 = () => {
		setRequest({ ...request, pallete: 0 });
	};
	const printRequest = () => {
		// console.log(request);
	};
	return (
		<div className="App">
			{/* <header className="App-header">
				Hello World
			</header> */}
			<div id="left" className="rows">
				<Text Text="OPTIONS" Size="1.4rem" />
				<DataContext.Provider value={{ request, setRequest }}>
					<Pallete></Pallete>
					<Layer Layer="ONE" name="layer1" />
					<Layer Layer="TWO" name="layer2" />
				</DataContext.Provider>
				<Button Text="Generate" onClick={sendRequest}></Button>
			</div>
			<div id="center" className="rows">
				<Text Text="ABSTRACT ART GENERATOR" Size="1.8rem" Weight="bolder" />
				<img src={src} alt="preview" height={500} width={900}/>
				<Button Text="Generate&nbsp;Randomly" onClick={Randomize}></Button>
			</div>
			<div id="right" className="rows">
				<div id="right-bottom">
					<Text Text="OVERLAY " Size="1.4rem" />
					<OverlayContext.Provider value={{ overlay, setOverlay }}>
						<Overlay />
					</OverlayContext.Provider>
					<Text Text="RESOLUTION" Color="#a693b9" Size="1rem"></Text>
					{/* <DropDown options={resolutions_list} name="resolutions"></DropDown> */}
					<Button Text="Export" onClick={downloadImage}></Button>
				</div>
			</div>
		</div>
	);
}

export default App;
