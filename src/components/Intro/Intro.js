import React, { Component, Fragment } from "react";

import Nav from '../../containers/Nav/Nav';
import Page from './Page/Page';
import { connect } from "react-redux";

class Intro extends Component {
    state = {

    }
    render() {
        return ( 
            <Fragment>
                <Nav/>
                <Page />
            </Fragment>
        )
    }
}

export default connect()(Intro);