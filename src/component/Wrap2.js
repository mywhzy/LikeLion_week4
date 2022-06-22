import React from "react";
import {useState} from "react";

function Wrap2({homeTown,mbti,hobby,myPuppy,favorite}){ // props style도 통일하는게 좋을텐데 배운 내용 두 개 다 적용해보고 싶어서 얘는 구조분해할당 이용했습니다!

  return(
    <div className="wrap2">
      <h3 id="h3-2">#TMI</h3>
        <div className="subInfo">
          <p>Hometown : {homeTown}</p>
          <p>Mbti : {mbti}</p>
          <p>Hobby : {hobby}</p>
          <p>MyPuppy : {myPuppy}</p>
          <p>Favorite : {favorite}</p>
        </div>
        <br />
       <div className="imgs">
          <img src="image/대천.jpg" className="imgStyle" alt="대천바다" width="250" height="250"></img>
          <div className="txt">
          <p>방학에 대천 오실 분 구해요🌊</p>
          </div>
       </div>
       <div className="imgs">
          <img src="image/isfp2.jpg" className="imgStyle" alt="잇프피모먼트1" width="250" height="250"></img>
          <div className="txt">
          <p>이것이 잇프피의 일상😉</p>
          </div>
       </div>
       <div className="imgs">
          <img src="image/isfp3.jpg" className="imgStyle" alt="잇프피모먼트2" width="250" height="250"></img>
          <div className="txt">
          <p>책상이 침대고 침대는 침대면 좋겠다...</p>
          </div>
       </div>
       <br /> <br />
       <div className="two-imgs">
          <img src="image/우리돼지.jpg" className="imgStyle" alt="우리돼징" width="250" height="250"></img>
          <img src="image/돼쥐야오래같이살자아.jpg" className="imgStyle puppy2" alt="내강아징" width="250" height="250"></img>
       </div>
       <div className="imgs">
          <img src="image/딸기.jpg" className="imgStyle" alt="딸기" width="250" height="250"></img>
          <div className="txt">
          <p>🍓 딸 기 조 아 💗</p>
         </div>
       </div>
       <div className="two-imgs">
          <img src="image/redPanda1.jpg" id="redPanda" className="imgStyle" alt="레서판다1" width="250" height="250"></img>
          <img src="image/윙크판다.jpg" alt="레서판다2" className="winkPanda imgStyle" width="250" height="250"></img>
       </div>
       <br /><br />
    </div>
  );
}

export default Wrap2;
