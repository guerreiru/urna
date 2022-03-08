import React, { useEffect } from 'react'
import { View } from '../styles'

import { Keyboard } from '../../components/Keyboard';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';

export const End = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (user) {
      user.alreadyVoted = true
    }
    let alreadyVoted = []

    if (localStorage.getItem('alreadyVoted')) {
      alreadyVoted = [...JSON.parse(localStorage.getItem('alreadyVoted')), user]
      localStorage.setItem('alreadyVoted', JSON.stringify(alreadyVoted))
    } else {
      alreadyVoted.push(user)
      localStorage.setItem('alreadyVoted', JSON.stringify(alreadyVoted))
    }
    setTimeout(() => {
      navigate('/', { replace: true })
    }, 3000)
  }, [navigate])

  return (
    <>
      <View>
        <Header title="FIM" />
      </View>
      <Keyboard
        home
        handleClick={() => { }}
        handleRectify={() => { }}
        handleConfirm={() => { }}
      />
    </>
  )
}