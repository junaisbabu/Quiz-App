import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { questions } from '../../mcq/questions';
import { score } from '../quiz/Quiz';
import './result.css'

function Result() {
    const navigate = useNavigate();
  return (
    <article className='result-container'>
        {score >= 3 ? (<h1>Congratulation!</h1>) : (<h1>Good Try!</h1>)}
        <p>Score: {score} / {questions.length}</p>
        <Button onClick={() => {
            navigate('/message')
        }}
        variant='success'
        >Done</Button>
    </article>
  )
}

export default Result