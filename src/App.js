import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';
import cn from 'classnames';

import * as actionTypes from './store/actions';
import Intro from './components/Intro/Intro';
import Spinner from './hoc/Spinner/Spinner';
import style from './App.css';

class App extends Component {
    componentDidMount() {
        setTimeout( () => { this.props.onLoad(); }, 1200 );
    }

    render() {
        return (
            <Fragment>
                <div className={ cn( style.App ) }>
                    { !this.props.isLoading
                        ? <Intro />
                        : <Spinner />
                    }
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = state => (
    {
        isLoading: state.isLoading,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onLoad: () => dispatch( { type: actionTypes.LOADING } ),
    }
);

export default connect( mapStateToProps, mapDispatchToProps )( App );

App.propTypes = {
    onLoad: PropTypes.func,
    isLoading: PropTypes.bool,
};

App.defaultProps = {
    onLoad: null,
    isLoading: true,
};
