import React from "react";
import style from "./Top.css";
import cn from 'classnames';
import me from '../../../assets/me.png'

const top = () => {
    return (
            <div className={cn(style.Round)} >
                <img src={me} className={cn(style.Me)} />
            </div>
    )
}

export default top;