import "./Level.scss";
import Beer from "../../../../Img/Beer.png";
import Bike from "../../../../Img/Bike.png";
import Shoes from "../../../../Img/Shoes.png";
import Guy from "../../../../Img/Guy.png";
import { useState } from "react";

const Level = (props) => {
  const imageSource = [Beer, Bike];
  const [pairedImages, setPairedImages] = useState(["","","",""]);
  return <div className="level-wrapper">
    {imageSource.map((image)=>{
        
        return(<div></div>)
    })}
  </div>;
};

export default Level;
