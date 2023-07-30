import Header from "../../../src/components/Header"
import Navbar from "../navbar/navbar"
import { useState } from "react";

const quizQuestions = [
  {
    question: "Where was Yugoslavia?",
    options: ["Western Balkan", "Baltic", "Maghreb", "Middle East", "Still exists <3"],
    correctAnswer: "Western Balkan",
  },
  {
    question: "Which side did the Partisans from Yugoslavia choose?",
    options: ["Neutral", "Allied Powers (Allies)", "Axis"],
    correctAnswer: "Allied Powers (Allies)",
  },
  {
    question: "Who were the Partisans?",
    options: ["A group of resistance fighters", "Allied Powers (Allies)", "Axis"],
    correctAnswer: "A group of resistance fighters",
  },
  {
    question: "What was the main objective of the Partisans?",
    options: ["To support the Axis powers", "To fight for the liberation of their countries", "To promote peace and neutrality"],
    correctAnswer: "To fight for the liberation of their countries",
  },
  {
    question: "Who was the leader of the Yugoslav Partisans during World War II?",
    options: ["Tito", "Churchill", "Stalin"],
    correctAnswer: "Tito",
  },
  {
    question: "Which famous battle did the Partisans win against the Axis forces?",
    options: ["Battle of Stalingrad", "Battle of Britain", "Battle of the Sutjeska"],
    correctAnswer: "Battle of the Sutjeska",
  },
  {
    question: "The Partisans were known for their effective use of which warfare tactic?",
    options: ["Guerrilla warfare", "Air strikes", "Naval warfare"],
    correctAnswer: "Guerrilla warfare",
  },
  {
    question: "In which country did the Western Balkan Partisans primarily operate?",
    options: ["Greece", "Yugoslavia", "Italy"],
    correctAnswer: "Yugoslavia",
  },
  {
    question: "What was the official name of the Partisan resistance movement in Yugoslavia?",
    options: ["Yugoslav National Liberation Army", "Balkan Freedom Fighters", "Allied Resistance Front"],
    correctAnswer: "Yugoslav National Liberation Army",
  },
  {
    question: "Which prominent figure played a crucial role in uniting various Partisan groups in Yugoslavia?",
    options: ["Winston Churchill", "Joseph Stalin", "Josip Broz Tito"],
    correctAnswer: "Josip Broz Tito",
  },
  {
    question: "The Partisans fought against which occupying forces in the Western Balkans?",
    options: ["Ottoman Empire", "Roman Empire", "Nazi Germany and Fascist Italy"],
    correctAnswer: "Nazi Germany and Fascist Italy",
  },
  {
    question: "What was the outcome of the Partisan resistance in the Western Balkans?",
    options: ["The region remained under Axis occupation", "The Axis powers were driven out, and the countries were liberated", "The Partisans joined the Axis forces"],
    correctAnswer: "The Axis powers were driven out, and the countries were liberated",
  },
];

const shuffle = (array) => {
  let currentIndex = array.length;
  let temporaryValue;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};


export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerOptionClick = (selectedAnswer) => {
    setSelectedAnswers([...selectedAnswers, selectedAnswer]);
    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const renderAnswerOptionClasses = (option) => {
    const isCorrect = option === quizQuestions[currentQuestion].correctAnswer;
    const isSelected = selectedAnswers[currentQuestion] === option;

    if (isSelected) {
      return isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
    } else {
      return "bg-gray-300 text-black";
    }
  };

  const showScore = selectedAnswers.length === quizQuestions.length;
  const correctAnswers = selectedAnswers.filter(
    (answer, index) => answer === quizQuestions[index].correctAnswer
  );
  const incorrectAnswers = selectedAnswers.filter(
    (answer, index) => answer !== quizQuestions[index].correctAnswer
  );

  const shuffledQuestions = shuffle(quizQuestions);
  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
        {showScore ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold">Quiz Result</h2>
            <p className="text-xl mt-4">
              You scored {score} out of {quizQuestions.length}
            </p>
            {correctAnswers.length > 0 && (
              <div className="mt-8">
                <p className="text-lg font-semibold">Correct Answers:</p>
                {correctAnswers.map((answer, index) => (
                  <p key={index} className="text-green-500">
                    Q{index + 1}: {quizQuestions[index].question}
                    <br />
                    Your answer: {answer}
                  </p>
                ))}
              </div>
            )}
            {incorrectAnswers.length > 0 && (
              <div className="mt-8">
                <p className="text-lg font-semibold">Incorrect Answers:</p>
                {incorrectAnswers.map((answer, index) => (
                  <p key={index} className="text-red-500">
                    Q{index + 1}: {quizQuestions[index].question}
                    <br />
                    Your answer: {answer}
                  </p>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="text-center">
              <h2 className="text-3xl font-bold">Quiz</h2>
              <p className="text-lg mt-2">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </p>
            </div>
            <div className="mt-8">
              <p className="text-xl">
                {quizQuestions[currentQuestion].question}
              </p>
            </div>
            <div className="mt-6">
              {quizQuestions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  className={`block w-full px-4 py-2 mt-2 text-lg font-semibold ${renderAnswerOptionClasses(
                    option
                  )} rounded`}
                  onClick={() => handleAnswerOptionClick(option)}
                  disabled={showScore}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}