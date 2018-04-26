import React from "react";
import Text from './Text/Text';
import Top from './Top/Top';
import cn from 'classnames';
import style from "./Page.css";

const page = () => (
    <div className={cn(style.Container)}>
        <Top />
        <Text />
    </div>
)
export default page;