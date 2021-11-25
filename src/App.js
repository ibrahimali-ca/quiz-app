//App.js
// import Header from './Header.js';
// import Footer from './Footer.js';
import './App.css';
import React, { useState } from "react";
import MainMenu from "./Components/MainMenu";
import Quiz from "./Components/Quiz";
import EndScreen from "./Components/EndScreen";


import { QuizContext } from './Helpers/Contexts';


function App() {
  const [quizState, setQuizState] = useState("menu");
  const [score, setScore] = useState(0)

  return (
    <div className="App">
      {/* <Header />
      <p>Answer all 10 questions for a <strong>special</strong> prize</p>
      <>
        <button>Let's Play</button>
        <button>High Scores</button>
      </>
      <Footer /> */}
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ quizState, setQuizState, score, setScore }}>
        {quizState === "menu" && <MainMenu />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
