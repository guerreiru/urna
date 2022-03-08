import React from 'react'
import { KeyboardContainer, Key, ActionButtons } from './styles'

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Keyboard = ({ handleClick, handleRectify, handleConfirm, handleNull, home }) => {
  return (
    <KeyboardContainer>
      {keys.map(key => {
        return (
          <Key
            key={key}
            onClick={handleClick}
          >
            {key}
          </Key>
        )
      })}
      <Key
        onClick={handleClick}
      >
        0
      </Key>
      <ActionButtons>
        {!home ? <Key id="white" onClick={handleNull}>Branco</Key> : null}
        <Key id="rectify" onClick={handleRectify} >Corrige</Key>
        <Key id="confirm" onClick={handleConfirm}>Confimar</Key>
      </ActionButtons>
    </KeyboardContainer>
  )
}