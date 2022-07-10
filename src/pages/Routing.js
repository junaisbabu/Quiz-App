import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from '../components/login/Login';
import Message from '../components/message/Message';
import Quiz from '../components/quiz/Quiz';
import Result from '../components/result/Result';

function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route index path='/login' element={<Login />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/result' element={<Result />} />
        <Route path='/message' element={<Message />} />
    </Routes>
    </>
  )
}

export default Routing