import { useState } from 'react'
import './App.css'
import style from './App.module.css'

function App() {

  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [userAnswer,setUserAnswer] = useState(false)
  const [result,setResult] = useState("")
  const [buttonDisabled, setButtonDIsabled] = useState(false)
  const [total,setTotal] = useState(0)
  const [quizEnd, setQuizEnd] = useState(false)


  const [ buttonColors, setButtonColors] = useState ({
    A: 'grey',
    B: 'grey',
    C: 'grey',
    D: 'grey',
  })


  const handleStart = (event) => {
    event.preventDefault()
    setResult("")
   setCurrentQuestion(0)
   setButtonDIsabled(false)
   setTotal(0)
  } 

  const handleAnswer = (answer) => {
    const newColors = {
      A: 'grey',
      B: 'grey',
      C: 'grey',
      D: 'grey',
    }

    const question = questions[currentQuestion];
    setButtonDIsabled(true)

    if( answer === question.correctAnswer){
      setTotal((prevTotal) => 
        prevTotal + 1
      )
      setResult("Correct!");
      newColors[answer] = 'lightgreen'
    } else {
      setResult("Incorrect. The correct answer is " + question[question.correctAnswer])
      newColors[answer] = 'red'
    }
    setButtonColors(newColors)
    setUserAnswer(true)
  }

  const handleNextAnswer = () => {

    setButtonColors({
      A: 'grey',
      B: 'grey',
      C: 'grey',
      D: 'grey',
    });
    
    setResult("")
    if(currentQuestion < questions.length - 1){
      setCurrentQuestion((prevIndex => prevIndex + 1))
      setUserAnswer(false)
      setButtonDIsabled(false)
    } else {
      setQuizEnd(true)
    }
  }

  const handleRestart = () => {
    setResult("")
   setCurrentQuestion(0)
   setButtonDIsabled(false)
   setTotal(0)
   setQuizEnd(false)
  }

  const questions = [
    {
      Question:"In which Marvel film did Thanos first appear in the Marvel Cinematic Universe?",
      A: "Guardians of the galaxy",
      B: "The Avengers",
      C: "Avengers:Age of ultron",
      D: "Thot:The Dark World",
      correctAnswer: "A"
    },
    {
      Question:`"Which superhero was a member of "Team Iron Man" in the film Captain America: Civil War?"`,
      A: "Ant-Man",
      B: "Hawkeye",
      C: "Black Widow",
      D: "Doctor Strange",
      correctAnswer: "C"
    },
    {
      Question:" Who is the main antagonist in the film Black Panther?",
      A: "Klaw",
      B: "Hela",
      C: "Killmonger",
      D: "Red Skull",
      correctAnswer: "C"
    },
    {
      Question: "What is the name of Thor's hammer?",
      A: "Stormbreaker",
      B: "Gungnir",
      C: "Mjolnir",
      D: "Nirn",
      correctAnswer: "C"
    },
    {
      Question: "Which Marvel film features the introduction of Spider-Man into the MCU?",
      A: "Spider-Man: Homecoming",
      B: "Captain America: Civil War",
      C: "Avengers: Endgame",
      D: "Doctor Strange",
      correctAnswer: "B"
    },
    {
      Question: "Who is the leader of the Guardians of the Galaxy?",
      A: "Rocket Raccoon",
      B: "Groot",
      C: "Peter Quill",
      D: "Drax",
      correctAnswer: "C"
    },
    {
      Question: "What is the name of Tony Stark's AI assistant?",
      A: "FRIDAY",
      B: "JARVIS",
      C: "WATSON",
      D: "SIRI",
      correctAnswer: "B"
    },
    {
      Question: "Which Infinity Stone is known as the Mind Stone?",
      A: "Yellow",
      B: "Blue",
      C: "Red",
      D: "Green",
      correctAnswer: "A"
    },
    {
      Question: "In which film do the Avengers first come together as a team?",
      A: "Avengers: Age of Ultron",
      B: "Avengers: Infinity War",
      C: "The Avengers",
      D: "Avengers: Endgame",
      correctAnswer: "C"
    },
    {
      Question: "Who is the main villain in the film Avengers: Age of Ultron?",
      A: "Ultron",
      B: "Loki",
      C: "Thanos",
      D: "Red Skull",
      correctAnswer: "A"
    }

  ]

  return (
    <div className={style.main}>
    <h1>Marvel Movies Quiz</h1>
    {currentQuestion === null ? (
      <button className={style.startButton} onClick={handleStart}>Start</button>
    ) : quizEnd ? (
      <div>
        <h2>Quiz end!</h2>
        <h3>Correct Answers: <span className={style.correctAnswers}>{total}/{questions.length}</span></h3>
        <button className={style.resetButton} onClick={handleRestart}>Start Again</button>
      </div>
    ) : (
      <div className={style.app}>
        <h2>{questions[currentQuestion].Question}</h2>
        <ul>
            <li><button style={{backgroundColor:buttonColors.A}} disabled={buttonDisabled} onClick={() => handleAnswer("A")}>{questions[currentQuestion].A}</button></li>
            <li><button style={{backgroundColor:buttonColors.B}} disabled={buttonDisabled} onClick={() => handleAnswer("B")}>{questions[currentQuestion].B}</button></li>
            <li><button style={{backgroundColor:buttonColors.C}} disabled={buttonDisabled} onClick={() => handleAnswer("C")}>{questions[currentQuestion].C}</button></li>
            <li><button style={{backgroundColor:buttonColors.D}} disabled={buttonDisabled} onClick={() => handleAnswer("D")}>{questions[currentQuestion].D}</button></li>
          </ul>
          <p className={style.result}>{result}</p>
          {userAnswer && (
            <button className={style.nextButton} onClick={handleNextAnswer}>Next</button>
          )}
      </div>
    )}
    </div>

  )


  }


export default App
