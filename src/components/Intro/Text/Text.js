
import React from "react";
import style from "./Text.css";
import cn from 'classnames';

const text = () => (
    <span className={cn(style.Caption, 'text-center')}>
        {"Hi, I'm Scott."}
    </span>
    )

export default text;

