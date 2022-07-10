import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { score } from '../quiz/Quiz';
import './result.css'

function Result() {
    const navigate = useNavigate();
  return (
    <article className='result-container'>
        {score ? (<h1>Congratulation!</h1>) : (<h1>Good Try!</h1>)}
        <p>Score: {score}</p>
        <Button onClick={() => {
            navigate('/message')
        }}
        variant='success'
        >Done</Button>
    </article>
  )
}

export default Result