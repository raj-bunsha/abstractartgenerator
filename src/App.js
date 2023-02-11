
import './App.css';
import Layer from './Components/Layer';
import Pallete from './Components/Pallete.jsx';
import Text from './Utilities/Text';
import Button from './Utilities/Button';
import DropDown from './Utilities/DropDown';
import React,{useState} from 'react';
import Overlay from './Components/Overlay';
import {OverlayContext} from './Contexts/OverlayContext';
import { DataContext } from './Contexts/DataContext';

function App() 
{
  const resolutions_list = [
    "4K: 3840x2160",
    "Full HD: 1920x1080",
    "HD: 1280x720"
    ];
  const [overlay, setOverlay] = useState("0");

  const [request, setRequest] = useState({"pallete": 0, 
  "layer1": {"Styles":0,"Shape":0,"Complexity":20,"Size":225},
  "layer2": {"Styles":0,"Shape":0,"Complexity":20,"Size":225},
  "overlay": overlay});
  //create a sample function to change layer1 to default in request
  const changeLayer1 = () => {
    setRequest({...request, "pallete": 0});
  }
  const printRequest = () => {
    console.log(request);
  }
  return (
    <div className="App">
      {/* <header className="App-header">
        Hello World
      </header> */}
      <div id='left' className='rows'>
        <Text Text="OPTIONS" Size="1.4rem"/>
        <DataContext.Provider value={{request,setRequest}}>
          <Pallete></Pallete>
          <Layer Layer="ONE" name="layer1"/>
          <Layer Layer="TWO" name="layer2"/>
        </DataContext.Provider>
        <Button Text="Generate" onClick={printRequest}></Button>
      </div>
      <div id='center' className='rows'>
        <Text Text="ABSTRACT ART GENERATOR" Size="1.8rem" Weight="bolder"/>
        <img src="https://picsum.photos/900/500" alt="preview"/>
        <Button Text="Generate&nbsp;Randomly"></Button>
      </div>
      <div id='right' className='rows'>
        <div id='right-bottom'>
          <Text Text="OVERLAY " Size="1.4rem"/>
          <OverlayContext.Provider value={{overlay,setOverlay}}>
            <Overlay/>
          </OverlayContext.Provider>
          <Text Text="RESOLUTION" Color="#a693b9" Size="1rem"></Text>
          {/* <DropDown options={resolutions_list} name="resolutions"></DropDown> */}
          <Button Text="Export" onClick={changeLayer1}></Button>
        </div>
    </div>
    </div>
  );
}

export default App;
