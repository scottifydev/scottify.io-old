import React, { Component, Fragment } from "react";

import Transition from 'react-transition-group/Transition'
import TransitionGroup from 'react-transition-group/TransitionGroup';
import TweenMax from 'gsap';
import cn from 'classnames';
import { connect } from "react-redux";
import style from "./Text.css";

class Text extends Component {
    content = [
        "Hi, I'm Scott.", 
        "This is some more Text", 
        "And even more"
    ]
    


    handleText = () => <span className={cn(style.Caption, 'text-center')} ref={c => this.container = c}>{this.content[this.props.page - 1]}</span>;

    render () {
        return (
                <TransitionGroup>
                    <Transition in={this.props.page - 1 === 1} timeout={1530} >
                        {() => this.handleText()}
                    </Transition>
                </TransitionGroup>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        page: state.page
    };
}


export default connect(mapStateToProps)(Text);

