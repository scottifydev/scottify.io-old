import React, { Component, Fragment } from 'react';
import style from './Nav.css';
import cn from 'classnames';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions';

class Nav extends Component {

    componentDidMount = () => {
        this.props.onPipsChange(this.generatePips(this.props.pipNumber, 1))
        
    }
    
    componentDidUpdate = () => {
        let active = this.props.page;
        console.log('active', active)
        console.log('componentDidUpdate')
        console.log(this.props.page)
    }

    generatePips = (pips, active) => Array(pips).fill().map( (e,i) => <div key={i + 1} className={i + 1 === active ? style.Active : null}></div>)


    handlePips = (direction) => {
        console.log('[Handling Pips]')
        console.log('this.props.page', this.props.page)
        let pips = this.generatePips(this.props.pipNumber, this.props.page + direction)
        this.props.onPipsChange(pips)
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
                {this.props.page != 1 ? <div
                    onClick={() => this.handleNav('BACKWARD')} className={cn(style.Arrow, style.Left)}>{'<'}</div>: null}
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