import React, {useContext} from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function MainMenu() {
    const { quizState, setQuizState } = useContext(QuizContext);
    return (
        <div className="Menu">
            <button 
            onClick={() => {
                setQuizState("quiz");
                }}
                >
                Start Quiz
            </button>
        </div>
        )
}