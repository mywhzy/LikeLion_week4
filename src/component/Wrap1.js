import React from "react";
import {useState} from "react";

function Wrap1(props){

  const [text,setText] = useState("");

  function toMinji(e){
    setText(e.target.value);
  }

  function resetText(){
    setText("");
  }

  const [count,setCount] = useState(0);

  function counter(e){
    const txt = e.target.value;
    setCount(txt.length);
  }

  return(
    <div className="wrap1">
      <h3 id="h3-1">{props.subTitle1}</h3>
      <div className="mainInfo">
        <p>Name : {props.name}</p>
        <p>Birth : {props.birth}   /   Age : {props.age}</p>
        <p>Department : {props.department}</p>
        <p>With : {props.with}</p>
        <p>Part : {props.part}</p>
        <p>Git : {props.gitID}</p>
        <p>Insta :{props.instaID}</p>
      </div>
      <div className="minjiImg"><div className="likeText" id="movingHeart">❤</div></div>
      <div className="toMe">
        <h3 id='h3-3'>민쥐에게 한 마디..♡</h3>
        <textarea name="To.민쥐" id="sendTxt" placeholder="좋은 말만 적어주세요~>_<" value={text} onChange={toMinji} onKeyUp={counter}></textarea>
        <br />
        <button id="resetBtn" onClick={resetText} onMouseUp={counter} >지우기</button>
        <p id="pResult">To.민쥐 - {text}</p>
        <p className="pTag">적은 글자 수: {+count+'자'} </p>
      </div>
    </div>
  );
}

export default Wrap1;
