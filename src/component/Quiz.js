import {useState} from "react";

function Quiz(){

  const [answer,setAnswer] = useState("");

  function chooseWrong(){
    setAnswer("땡! 다시 선택해주세요~");
  }

  function chooseAnswer(){
    setAnswer("ESFP 정답입니다~🎉");
    alert('정답! Hoxy 한 번에 맞추셨다면 제법인걸요? 민잘알로 임명합니다ㅎ')
  }

  return(
    <div className="quiz">
      <h3 id="h3-4">깜짝 퀴즈!</h3>
      <p className="pTag">MinJi===ISFP ? "Hmm..." : "MinJi = EXXX!!" </p>
      <p id="question">여기서 문제! 최근 MBTI 검사를 다시하고 MBTI가 바뀌었음을 알게 됐습니다. 과연 이 중 뭘까요?</p>
      <p id="questionHint">힌트: 문제 위를 잘 살펴보세요! </p>
      <button className="chooseBtns" onClick={chooseWrong}>INFP</button>
      <button className="chooseBtns" onClick={chooseWrong}>ESTP</button>
      <button className="chooseBtns" onClick={chooseAnswer}>ESFP</button>
      <button className="chooseBtns" onClick={chooseWrong}>Liar?! ISFP</button>
      <p id="pAnswer">맞을까요?! : {answer}</p>
    </div>
  );
}

export default Quiz;