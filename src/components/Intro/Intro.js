
import React, { Fragment } from "react";
import style from "./Intro.css"
import cn from 'classnames';
import me from '../../assets/me.png'
import Typing from 'react-typing-animation';

const intro = () => {
    return ( 
        <Fragment>
            <div className={cn(style.Container, style.Center)}>
                <div className={cn(style.Round)} >
                    <img src={me} className={cn(style.Me)} />
                </div>
                <Typing>
                    <span className={cn(style.Caption, 'text-center')}>
                        Works
                    </span>
                </Typing>
            </div>
        </Fragment>
    )
}

export default intro;