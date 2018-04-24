
import React, { Component, Fragment } from "react";
import style from "./Intro.css";
import cn from 'classnames';
import Top from './Top/Top';
import Text from './Text/Text';
import Nav from '../../containers/Nav/Nav';
import { connect } from "react-redux";


class Intro extends Component {
    state = {

    }
    render() {
        return ( 
            <Fragment>
                <Nav/>
                <div className={cn(style.Container)}>
                    <Top />
                    <Text />
                </div>
            </Fragment>
        )
    }
}

export default connect()(Intro);