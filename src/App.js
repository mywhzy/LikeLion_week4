import React, {Component} from 'react';
import Title from './component/Title';
import Wrap1 from './component/Wrap1';
import Wrap2 from './component/Wrap2';
import Quiz from './component/Quiz';
import './MyStyle.css';

function App() {
  return (
   <div className ="mainBox">
    <Title mainTitle="10기 아기사자 조민지를 소개합니다!" />
    <Wrap1 subTitle1="Main Info." name="조민지" birth="2001.10.09" age="22" department="Computer Engineering" 
     with="LikeLion 10th" part="Web(Front-End)" gitID="@mywhzy" instaID="@puxh_zy" />
    <Wrap2 homeTown="충청남도 보령시(대천)" mbti="isfp" hobby="누운듯이 앉기, 침대와 한 몸 되기" myPuppy="돼지(시츄,12살,귀요미)" favorite="딸기, 레서판다"/>
    <Quiz />
   </div>
  );
}

export default App;
