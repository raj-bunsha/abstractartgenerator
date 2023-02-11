
import './App.css';
import Layer from './Layer/Layer';
import Pallete from './Pallete/Pallete.jsx';
import Text from './Utilities/Text';
import Button from './Utilities/Button';
import Image from './Utilities/Image';
import DropDown from './Utilities/DropDown';
import React,{useState} from 'react';

function App() {
  const resolutions_list = [
    "4K: 3840x2160",
    "Full HD: 1920x1080",
    "HD: 1280x720"
    ];
  const [request, setRequest] = useState({"pallete": "random", 
  "layer1": {"Styles":"random","Shape":"random","Complexity":"random","size":"random"},
  "layer2": {"Styles":"random","Shape":"random","Complexity":"random","Size":"random"},
  "overlay": "random"});
  // console.log(request.pallete);
  // request.pallete="kl";
  // console.log(request.pallete);
  return (
    <div className="App">
      {/* <header className="App-header">
        Hello World
      </header> */}
      <div id='left' className='rows'>
        <Text Text="OPTIONS" Size="1.4rem"/>
        <Pallete state={request} changeState={setRequest}></Pallete>
        <Layer Layer="ONE" state={request} changeState={setRequest} name="layer1"/>
        <Layer Layer="TWO" state={request} changeState={setRequest} name="layer2"/>
        <Button Text="Generate"></Button>
      </div>
      <div id='center' className='rows'>
        <Text Text="ABSTRACT ART GENERATOR" Size="1.8rem" Weight="bolder"/>
        <img src="https://picsum.photos/900/500" alt="preview"/>
        <Button Text="Generate&nbsp;Randomly"></Button>
      </div>
      <div id='right' className='rows'>
        <div id='right-bottom'>
          <Text Text="OVERLAY " Size="1.4rem"/>
          <div id='overlay'>
            <Image src="https://picsum.photos/150/100" alt="overlay"/>
            <Image src="https://picsum.photos/150/100" alt="overlay"/>
            <Image src="https://picsum.photos/150/100" alt="overlay"/>
            <Image src="https://picsum.photos/150/100" alt="overlay"/>
            <Image src="https://picsum.photos/150/100" alt="overlay"/>
          </div>
          <Text Text="RESOLUTION" Color="#a693b9" Size="1rem"></Text>
          <DropDown options={resolutions_list}></DropDown>
          <Button Text="Export"></Button>
        </div>
    </div>
    </div>
  );
}

export default App;
