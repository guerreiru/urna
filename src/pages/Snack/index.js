import React, { useState } from 'react'
import { useEffect } from 'react';
import { View, ContainerButton } from '../styles'
import dataJson from '../../data.json'
import { toast } from 'react-toastify';
import { Keyboard } from '../../components/Keyboard';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header';
import { InputBtns } from '../../components/InputBtns';
import { useItems } from "../../hooks/useItems";


export const Snack = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])
  const [user, setUser] = useState({})
  const [snackCode, setSnackCode] = useState([])
  const [clicks, setClicks] = useState(0)
  const { addProduct } = useItems();
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
    if (clicks < 2) {
      setSnackCode((oldState) => [...oldState, key])
    }
    setClicks(clicks + 1)
  }

  const handleNull = () => {
    addProduct({
      id: "00",
      nome: "Voto nulo"
    })

    setSnackCode([])
    setClicks(0)
    navigate('/drink', { replace: true })
  }

  const handleRectify = () => {
    setSnackCode([])
    setClicks(0)
  }

  const handleConfirm = () => {
    const snackCodeFormated = snackCode.toString().replace(/,/g, "")
    const snack = data.lanches.filter((snack) => snack.id === Number(snackCodeFormated))

    if (snack.length) {
      const user = JSON.parse(localStorage.getItem('user'))
      const alreadyVoted = JSON.parse(localStorage.getItem('alreadyVoted'))

      if (alreadyVoted !== null) {
        if (alreadyVoted.filter((item) => item.id === user.id).length > 0) {
          toast.error("PESSOA JÁ VOTOU")
          navigate('/')
        } else {
          addProduct(snack[0])
          toast.success(`${snack[0].nome}`)
          navigate('/drink')
        }
      } else {
        addProduct(snack[0])
        toast.success(`${snack[0].nome}`)
        navigate('/drink')
      }
    } else {
      toast.error("Lanche Não Identificado")
    }
  }

  return (
    <>
      <View>
        {loading ?
          (<Header title="" />) :
          (<><Header title={`Olá ${user.nome}!`} /><Header title="Escolha seu Lanche" /></>)
        }
        <ContainerButton>
          <InputBtns title={snackCode[0]} />
          <InputBtns title={snackCode[1]} />
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