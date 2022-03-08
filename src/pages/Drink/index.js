import React, { useState } from 'react'
import { useEffect } from 'react';
import { View, ContainerButton } from '../styles'
import dataJson from '../../data.json'
import { toast } from 'react-toastify';
import { Keyboard } from '../../components/Keyboard';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { InputBtns } from '../../components/InputBtns';

export const Drink = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [user, setUser] = useState({})
  const [drinkCode, setDrinkCode] = useState([])
  const [clicks, setClicks] = useState(0)
  useEffect(() => {
    setData(dataJson)
  }, [])

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"))
    setUser(user)
    setLoading(false)
  }, [])

  const handleClick = (e) => {
    const key = e.target.innerText
    if (clicks < 3) {
      setDrinkCode((oldState) => [...oldState, key])
    }
    setClicks(clicks + 1)
  }

  const handleNull = () => {
    setDrinkCode([])
    setClicks(0)
    navigate('/end', { replace: true })
  }

  const handleRectify = () => {
    setDrinkCode([])
    setClicks(0)
  }

  const handleConfirm = () => {
    const drinkCodeFormated = drinkCode.toString().replace(/,/g, "")
    const drink = data.bebidas.filter((drink) => drink.id === Number(drinkCodeFormated))

    if (drink.length) {
      toast.success(`${drink[0].nome}`)
      navigate('/end', { replace: true })
    } else {
      toast.error(`Drink não identificado`)
    }
  }

  return (
    <>
      <View>
        {loading ?
          (<Header title={`Olá ${user.nome}!`} />) :
          (<><br /><Header title="Escolha sua Bebida." /></>)
        }
        <ContainerButton>
          <InputBtns title={drinkCode[0]} />
          <InputBtns title={drinkCode[1]} />
          <InputBtns title={drinkCode[2]} />
        </ContainerButton>
      </View>
      <Keyboard
        handleClick={handleClick}
        handleNull={handleNull}
        handleRectify={handleRectify}
        handleConfirm={handleConfirm}
      />
    </>
  )
}