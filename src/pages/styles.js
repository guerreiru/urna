import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #1C1F23;
  user-select: none;
`
export const Content = styled.div`
  display: flex;
  justify-content:space-between;
  width: 80%;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
`

export const View = styled.div`
  background-color: gray;
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  margin-right: 20px;
  border-radius: 4px;
`
export const ContainerButton = styled.div`
  margin-top: 10px;
  display: flex;
`

export const BtnHome = styled(Link)`
  background-color: #ed4909;
  margin: 20px 0;
  padding: 10px 25px;
  border-radius: 8px;
  color: #000;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    filter: opacity(0.7);
    transition: .2s linear;
  }
`
