import React, { Component, Fragment } from "react";

import Nav from '../../containers/Nav/Nav';
import Page from './Page/Page';
import Transition from "react-transition-group/Transition";
import cn from 'classnames';
import { connect } from "react-redux";
import style from './Intro.css';

class Intro extends Component {
    render() {
        return ( 
            <div className={style.FadeIn}>
                <Nav/>
                <Transition
                    in={this.props.changing}
                    timeout={this.props.changeDelay}
                    >
                    { (state) =>
                        <div
                            className={
                                state === 'exiting'
                                ? cn(style.Hide)
                                : cn(style.Show)
                            }
                            >
                             <Page />
                        </div>
                    }
                </Transition>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        page: state.page,
        changing: state.changing,
        delay: state.changeDelay
    };
}


export default connect(mapStateToProps)(Intro);