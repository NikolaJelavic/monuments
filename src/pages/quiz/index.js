import Header from "../../../src/components/Header";
import Navbar from "../navbar/navbar";
import { useState, useEffect } from "react";

const initialGameSize = 5;

export default function Quiz() {
  const [quizQuestions, setQuizQuestions] = useState([
    {
      question: "Where was Yugoslavia?",
      options: [
        "Western Balkan",
        "Baltic",
        "Maghreb",
        "Middle East",
        "Still exists in <3",
      ],
      correctAnswer: "Western Balkan",
    },
    {
      question: "Which side did the Partisans from Yugoslavia choose?",
      options: ["Neutral", "Allied Powers (Allies)", "Axis"],
      correctAnswer: "Allied Powers (Allies)",
    },
    {
      question: "Who were the Partisans?",
      options: [
        "A group of resistance fighters",
        "Allied Powers (Allies)",
        "Axis",
      ],
      correctAnswer: "A group of resistance fighters",
    },
    {
      question: "What was the main objective of the Partisans?",
      options: [
        "To support the Axis powers",
        "To fight for the liberation of their countries",
        "To promote peace and neutrality",
      ],
      correctAnswer: "To fight for the liberation of their countries",
    },
    {
      question:
        "Who was the leader of the Yugoslav Partisans during World War II?",
      options: ["Tito", "Churchill", "Stalin"],
      correctAnswer: "Tito",
    },
    {
      question:
        "Which famous battle did the Partisans win against the Axis forces?",
      options: [
        "Battle of Stalingrad",
        "Battle of Britain",
        "Battle of the Sutjeska",
      ],
      correctAnswer: "Battle of the Sutjeska",
    },
    {
      question:
        "The Partisans were known for their effective use of which warfare tactic?",
      options: ["Guerrilla warfare", "Air strikes", "Naval warfare"],
      correctAnswer: "Guerrilla warfare",
    },
    {
      question:
        "In which country did the Western Balkan Partisans primarily operate?",
      options: ["Greece", "Yugoslavia", "Italy"],
      correctAnswer: "Yugoslavia",
    },
    {
      question:
        "What was the official name of the Partisan resistance movement in Yugoslavia?",
      options: [
        "Yugoslav National Liberation Army",
        "Balkan Freedom Fighters",
        "Allied Resistance Front",
      ],
      correctAnswer: "Yugoslav National Liberation Army",
    },
    {
      question:
        "Which prominent figure played a crucial role in uniting various Partisan groups in Yugoslavia?",
      options: ["Winston Churchill", "Joseph Stalin", "Josip Broz Tito"],
      correctAnswer: "Josip Broz Tito",
    },
    {
      question:
        "The Partisans fought against which occupying forces in the Western Balkans?",
      options: [
        "Ottoman Empire",
        "Roman Empire",
        "Nazi Germany and Fascist Italy",
      ],
      correctAnswer: "Nazi Germany and Fascist Italy",
    },
    {
      question:
        "What was the outcome of the Partisan resistance in the Western Balkans?",
      options: [
        "The region remained under Axis occupation",
        "The Axis powers were driven out, and the countries were liberated",
        "The Partisans joined the Axis forces",
      ],
      correctAnswer:
        "The Axis powers were driven out, and the countries were liberated",
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const shuffledQuestions = shuffle(quizQuestions);
    setQuizQuestions(shuffledQuestions);
  }, []);

  const handleAnswerOptionClick = (selectedAnswer) => {
    setSelectedAnswer(selectedAnswer);

    if (selectedAnswer === quizQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const renderAnswerOptionClasses = (option) => {
    const isCorrect =
      option === quizQuestions[currentQuestionIndex].correctAnswer;
    const isSelected = selectedAnswer === option;

    if (isSelected) {
      return isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white";
    } else {
      return "bg-gray-300 text-black";
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIndex + 1 < initialGameSize) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
    } else {
      setShowResult(true); // Display the result when all questions are answered
    }
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mt-10">
        {showResult ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold">Quiz Result</h2>
            <p className="text-xl mt-4">
              You scored {score} out of {initialGameSize}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black">Quiz</h2>
            <p className="text-lg mt-2 text-black">
              Question {currentQuestionIndex + 1} of {initialGameSize}
            </p>
            <div className="mt-6">
              <p className="text-xl text-black">
                {quizQuestions[currentQuestionIndex].question}
              </p>
              {quizQuestions[currentQuestionIndex].options.map((option) => (
                <button
                  key={option}
                  className={`block w-full px-4 py-2 mt-2 text-lg font-semibold ${renderAnswerOptionClasses(
                    option
                  )} rounded`}
                  onClick={() => handleAnswerOptionClick(option)}
                  disabled={selectedAnswer !== ""}
                >
                  {option}
                </button>
              ))}
              {selectedAnswer !== "" && (
                <button
                  className="block w-full px-4 py-2 mt-4 text-lg font-semibold bg-blue-500 text-white rounded"
                  onClick={nextQuestion}
                >
                  Next Question
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const shuffle = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};
