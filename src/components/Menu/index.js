import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import Button from '../Button/index'
//import ButtonLink from './components/Button'

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={Logo} alt="AluraFlix logo" />
            </a>

            <Button as='a' className="Button" href="/">
               Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu