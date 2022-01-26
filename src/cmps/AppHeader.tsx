import React, { useState } from 'react'
import { ReactComponent as Menu } from '../assets/svg/menu_black_24dp.svg'
import { ReactComponent as ToggleDark } from '../assets/svg/settings_brightness_white_24dp.svg'
import { toggleDark } from '../actions/AppActions'
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

export default function AppHeader() {

    const [isMobile, setIsMobile] = useState(false)
    const dispatch = useDispatch()
    const changeMobile = () => {
        setIsMobile(prev => prev = !prev)
    }

    const onToggle = () => {
        dispatch(toggleDark())
    }

    return <header className="app-header">
        <nav className="main-nav ">
            {!isMobile && <div className="left-nav">
                <Link to='/'><span>Home</span></Link>
            </div>}
            {isMobile && <div onClick={changeMobile} className="mobile-nav">
                <Link to='/'><span>Home</span></Link>
            </div>}
            {isMobile && <div className="background-menu" onClick={changeMobile}></div>}
            <Menu onClick={changeMobile} className="menu-btn" />
            <div className="right-nav">
                <ToggleDark className="toggle-btn" onClick={() => onToggle()}></ToggleDark>
            </div>
        </nav>
    </header>
}
