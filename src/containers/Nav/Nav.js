import * as actionTypes from '../../store/actions';

import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from "react-redux";
import { setTimeout } from 'timers';
import style from './Nav.css';

class Nav extends Component {

    componentDidMount = () => {
        this.props.onPipsChange(this.generatePips(this.props.pipNumber, 1))
        
    }

    generatePips = (pips, active) => (
        Array(pips)
        .fill()
        .map( (e,i) => {
            let page = i + 1;
            return (
                <div
                    key={page}
                    className={page === active ? style.Active : null}
                    onClick={() => this.handlePipClick(page)}
                >
                </div>
        )})
    )

    handlePips = (direction) => {
        console.log('[Handling Pips]');
        console.log('this.props.page', this.props.page);
        let pips = this.generatePips(this.props.pipNumber, this.props.page + direction);
        this.handleChange(pips)
    }

    handlePipClick = (page) => {
        this.handleChange(this.generatePips(this.props.pipNumber, page));
        setTimeout(() => this.props.onPipClick(page), this.props.delay)
    }

    handleNav = (direction) => {
        if (direction === 'FORWARD') {
            this.handlePips(1);
            this.delayIt(() => this.props.onForward())
        } if (direction === 'BACKWARD') {
            this.handlePips(-1);
            this.delayIt(() => this.props.onBackward())
        }
        
    }

    handleChange = (pips) => {
        this.props.onChanging();
        this.delayIt(() => this.props.onChanging())
        this.props.onPipsChange(pips);
    }

    delayIt = (fn) => setTimeout(fn, this.props.delay)

    render () {
        return (
                <Fragment>
                    {this.props.page != 1
                        ? <div
                            onClick={() => this.handleNav('BACKWARD')}
                            className={cn(style.Arrow, style.Left)}
                            >
                                {'<'}
                            </div>
                        : null}
                    <div 
                        className={cn(style.Arrow, style.Right)}
                        onClick={() => this.handleNav('FORWARD')}
                        >
                        {'>'}
                    </div>
                    <div
                        className={cn(style.Pips)}
                        >
                        {this.props.pips}
                    </div>
                </Fragment>
            )
        }
}
const mapStateToProps = state => {
    return {
        page: state.page,
        pips: state.pips,
        pipNumber: state.pipNumber,
        delay: state.changeDelay
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onForward: () => dispatch({ type: actionTypes.FORWARD }),
        onBackward: () => dispatch({ type: actionTypes.BACKWARD }),
        onChanging: () => dispatch({ type: actionTypes.CHANGING }),
        onPipClick: (payload) => dispatch({
            type: actionTypes.PIP_CLICK,
            payload
        }),
        onPipsChange: (payload) => dispatch({
            type: actionTypes.PIPS,
            payload
        })

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav);

Nav.propTypes = {
    // pips: PropTypes.number,
    page: PropTypes.number,
    onForward: PropTypes.func,
    onBackward: PropTypes.func,
    // onPipNumberChange: PropTypes.func,
    // onPipsChange: PropTypes.func,
    pipNumber: PropTypes.number,

    // pipNum: PropTypes.number,
    // pages: PropTypes.number
}