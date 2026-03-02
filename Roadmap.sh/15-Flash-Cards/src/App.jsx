import { useMemo, useState } from 'react'
import './App.css'

const flashCards = [
  {
    id: 1,
    question: 'What is the difference between var, let, and const?',
    answer:
      'var is function-scoped and can be redeclared. let and const are block-scoped. const cannot be reassigned after declaration.',
  },
  {
    id: 2,
    question: 'What does the spread operator (...) do in JavaScript?',
    answer:
      'It expands arrays/objects into individual values and is commonly used to clone or merge data without mutation.',
  },
  {
    id: 3,
    question: 'What is a closure in JavaScript?',
    answer:
      'A closure is when a function remembers variables from its outer scope even after that outer function has finished executing.',
  },
  {
    id: 4,
    question: 'What is the purpose of async and await?',
    answer:
      'They make asynchronous code easier to read by allowing promise-based logic to look like synchronous code.',
  },
  {
    id: 5,
    question: 'What is the difference between == and ===?',
    answer:
      '== compares values with type coercion. === compares both value and type strictly, with no coercion.',
  },
]

function ProgressBar({ currentIndex, total }) {
  const progress = ((currentIndex + 1) / total) * 100

  return (
    <div className="progress-wrapper" aria-label="Progress">
      <div className="progress-track" aria-hidden="true">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <span className="progress-percent">{Math.round(progress)}%</span>
      <span className="progress-count">
        {currentIndex + 1} of {total}
      </span>
    </div>
  )
}

function FlashCard({ question, answer, isFlipped }) {
  return (
    <div className={`flash-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flash-card-inner">
        <div className="flash-card-face flash-card-front">
          <p>{question}</p>
        </div>
        <div className="flash-card-face flash-card-back">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  )
}

function Controls({ onPrevious, onToggleAnswer, onNext, isFlipped }) {
  return (
    <div className="controls">
      <button type="button" className="control-btn" onClick={onPrevious}>
        Previous
      </button>
      <button type="button" className="control-btn primary" onClick={onToggleAnswer}>
        {isFlipped ? 'Hide Answer' : 'Show Answer'}
      </button>
      <button type="button" className="control-btn" onClick={onNext}>
        Next
      </button>
    </div>
  )
}

function App() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const totalCards = flashCards.length

  const currentCard = useMemo(() => flashCards[currentIndex], [currentIndex])

  const goToPreviousCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards)
    setIsFlipped(false)
  }

  const goToNextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards)
    setIsFlipped(false)
  }

  const toggleAnswer = () => {
    setIsFlipped((previousValue) => !previousValue)
  }

  return (
    <main className="app">
      <section className="flashcards-container">
        <h1>Flash Cards</h1>
        <ProgressBar currentIndex={currentIndex} total={totalCards} />
        <FlashCard
          question={currentCard.question}
          answer={currentCard.answer}
          isFlipped={isFlipped}
        />
        <Controls
          onPrevious={goToPreviousCard}
          onToggleAnswer={toggleAnswer}
          onNext={goToNextCard}
          isFlipped={isFlipped}
        />
      </section>
    </main>
  )
}

export default App
