import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cn from 'classnames';

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
            <Fragment>
                {this.handleText()}
            </Fragment>
        )

    }
    
}
const mapStateToProps = state => {
    return {
        page: state.page
    };
}


export default connect(mapStateToProps)(Text);

