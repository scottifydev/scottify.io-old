import React from "react";
import cn from 'classnames';
import me from '../../../../assets/me.png'
import style from "./Top.css";

const top = () => {
    return (
            <div className={cn(style.Round)} >
                <img src={me} className={cn(style.Me)} />
            </div>
    )
}

export default top;