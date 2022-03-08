import styled from 'styled-components'

export const KeyboardContainer = styled.div`
  background-color: #191919;
  flex: 1;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 4px;

  #white {
    color: #000;
    background-color: #fff;
    box-shadow: 0px 0px 2px 3px rgba(255,255,255,0.75);

    &:active {
    box-shadow: 0px 0px 1px 2px rgba(255,255,255,0.75);
    }
  }

  #rectify {
    color: #000;
    background-color: #ed4909;
    box-shadow: 0px 0px 2px 3px rgba(255,110,0,0.75);

    &:active {
    box-shadow: 0px 0px 1px 2px rgba(255,110,0,0.75);
    }
  }

  #confirm {
    color: #000;
    background-color: #74be93;
    box-shadow: 0px 0px 2px 3px rgba(116,190,147,0.75);

    &:active {
    box-shadow: 0px 0px 1px 2px rgba(116,190,147,0.75);
    }
  }
`

export const Key = styled.button`
  width: 25%;
  margin: 10px;
  background-color: #000000;
  color: #fff;
  box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 40px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  &:active {
    box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.75);
    transition: 0.2s linear;
  }
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
`
