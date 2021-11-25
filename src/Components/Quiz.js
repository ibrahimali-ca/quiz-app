import React, {useState} from "react";
import { Questions } from "../Helpers/QuestionBank";
function Quiz() {
    const [currQuestion, setCurrQuestion] = useState(0);
return (
<div className="Quiz">
    <h1>{Questions[currQuestion].prompt}</h1>
</div>
);
}

export default Quiz;
