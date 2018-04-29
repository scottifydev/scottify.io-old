import React from "react";
import cn from 'classnames';
import { connect } from "react-redux";
import me from '../../../../assets/me.png'
import style from "./Top.css";

const top = () => {
    return (
            <div className={cn(style.Round)} >
                <img src={me} className={cn(style.Me)} />
            </div>
    )
}

const mapStateToProps = state => {
    return {
        page: state.page
    };
}


export default connect(mapStateToProps)(top);