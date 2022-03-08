import React, { useState } from 'react'
import { useEffect } from 'react';
import { View, ContainerButton } from '../styles'
import dataJson from '../../data.json'
import { toast } from 'react-toastify';
import { Keyboard } from '../../components/Keyboard';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { InputBtns } from '../../components/InputBtns';

export const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [userCode, setUserCode] = useState([])
  const [clicks, setClicks] = useState(0)
  useEffect(() => {
    setData(dataJson)
  }, [])

  const handleClick = (e) => {
    const key = e.target.innerText
    if (clicks < 4) {
      setUserCode((oldState) => [...oldState, key])
    }
    setClicks(clicks + 1)
  }

  const handleRectify = () => {
    setUserCode([])
    setClicks(0)
  }

  const handleConfirm = () => {
    const userCodeFormated = userCode.toString().replace(/,/g, "")
    const user = data.eleitores.filter((user) => user.id === Number(userCodeFormated))
    if (userCodeFormated === "0000") {
      navigate('/statistics')
    } else {
      if (user.length) {
        toast.success(`Olá ${user[0].nome}`)
        navigate('/snack')
        localStorage.setItem('user', JSON.stringify({
          ...user[0],
          alreadyVoted: false
        }))
      } else {
        toast.error("Pessoa Não Identificada")
      }
    }
  }

  return (
    <>
      <View>
        <Header title="Digite o códito do usuário!" />
        <ContainerButton>
          <InputBtns title={userCode[0]} />
          <InputBtns title={userCode[1]} />
          <InputBtns title={userCode[2]} />
          <InputBtns title={userCode[3]} />
        </ContainerButton>
      </View>
      <Keyboard
        home
        handleClick={handleClick}
        handleRectify={handleRectify}
        handleConfirm={handleConfirm}
      />
    </>
  )
}