import React, { useState, useContext } from 'react'
import DropdownAcc from './DropdownAcc'
import { NavContext, useNavContext } from '../../../store/Context'

const HeaderAcc = () => {

    const [toggle, setToggle] = useState(false)
    const { apiNav, setApiNav } = useNavContext;

    return (
        <div onClick={()=>{setToggle(toggle ? false : true)}} className="header-right__item caret-down-btn">
            <i className="fas fa-caret-down header-right__item-caret-down" />
            <div>{apiNav}</div>
            {toggle && <DropdownAcc />}
        </div>
    )
}

export default HeaderAcc