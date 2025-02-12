import React from 'react'
import styled from 'styled-components'
import argentinaFlag from '../assets/arg.svg'
import hondurasFlag from '../assets/hn.png'
// import brazilFlag from '../assets/brz.svg'
import colombiaFlag from '../assets/colombia.svg'
import eeuu from '../assets/eeuu.svg'
import { useLocation } from 'react-router-dom'
import EDITIONS from '../editions'
import { useLanguage } from '../context/LanguageContext'


const GetTickets = ({ color }) => {
  const { locale, changeLanguage } = useLanguage();
  const location = useLocation();
  const edition = location?.pathname.substring(1)

  return (
    <FlagBox>
      <FlagButton
        className={locale === 'es' ? 'active' : ''}
        color={color}
        onClick={() => {
          changeLanguage('es')
        }}
      >
        {edition === EDITIONS.BOGOTA && (<img src={colombiaFlag} alt="Colombia Flag" />)}
        {(edition === EDITIONS.HONDURAS || edition === '') && (<img src={hondurasFlag} alt="Honduras Flag" />)}
        {edition === EDITIONS.BUENOSAIRES && (<img src={argentinaFlag} alt="Argentina Flag" />)}
      </FlagButton>
      {/* <FlagButton
        className={locale === 'pt' ? 'active' : ''}
        color={color}
        onClick={() => {
          changeLanguage('pt')
        }}
      >
        <img src={brazilFlag} alt="Brazil Flag" />
      </FlagButton> */}
      <FlagButton
        className={locale === 'en' ? 'active' : ''}
        color={color}
        onClick={() => {
          changeLanguage('en')
        }}
      >
        <img src={eeuu} alt="USA Flag" />
      </FlagButton>
    </FlagBox>
  )
}

const FlagButton = styled.button`
      border: 0px solid;
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 0;
      border-bottom: 4px solid transparent;
      img {
        height: 36px;
  }
      &.active {
        border-bottom: 4px solid ${props => props.color};
  }
      `

const FlagBox = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
      `

export default GetTickets
