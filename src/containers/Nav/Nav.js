import * as actionTypes from '../../store/actions';

import React, { Component, Fragment } from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';
import { connect } from "react-redux";
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
        console.log('[Handling Pips]')
        console.log('this.props.page', this.props.page)
        let pips = this.generatePips(this.props.pipNumber, this.props.page + direction)
        this.props.onPipsChange(pips)
    }

    handlePipClick = (page) => {
        this.props.onPipClick(page);
        this.props.onPipsChange(this.generatePips(this.props.pipNumber, page));
    }

    handleNav = (direction) => {
        if (direction === 'FORWARD') {
            this.props.onForward()
            this.handlePips(1)
        } if (direction === 'BACKWARD') {
            this.props.onBackward()
            this.handlePips(-1)
        }

    }

    
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
        pipNumber: state.pipNumber
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onForward: () => dispatch({ type: actionTypes.FORWARD }),
        onBackward: () => dispatch({ type: actionTypes.BACKWARD }),
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