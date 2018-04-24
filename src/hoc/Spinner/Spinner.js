import React from 'react';
import cn from 'classnames';
import style from './Spinner.css'

const spinner = () => (
    <div className={cn(style.Overlay)}>
        <div className={cn(style.Spinner)}></div>
    </div> 
)

export default spinner;