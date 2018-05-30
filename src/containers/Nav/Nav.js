import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setTimeout } from 'timers';
import PropTypes from 'prop-types';
import cn from 'classnames';

import * as actionTypes from '../../store/actions';
import style from './Nav.css';

class Nav extends Component {
    componentDidMount = ( ) => {
        this.props.onPipsChange( this.generatePips( this.props.pipNumber, 1 ) );
    }

    handleChange = ( pips ) => {
        this.props.onChanging( );
        this.delayIt( ( ) => this.props.onChanging( ) );
        this.props.onPipsChange( pips );
    }

    generatePips = ( pips, active ) => (
        Array( pips )
            .fill( )
            .map( ( e, i ) => {
                const page = i + 1;
                return (
                    <div
                        key={ page }
                        className={ page === active ? style.Active : null }
                        onClick={ ( ) => this.handlePipClick( page ) }
                        onKeyUp={ ( ) => this.handlePipClick( page ) }
                        role="button"
                        tabIndex={ i }
                    />
                );
            } )
    )

    handlePips = ( direction ) => {
        const pips = this.generatePips( this.props.pipNumber, this.props.page + direction );
        this.handleChange( pips );
    }

    handlePipClick = ( page ) => {
        this.handleChange( this.generatePips( this.props.pipNumber, page ) );
        this.delayIt( () => this.props.onPipClick( page ) );
    }

    handleNav = ( direction ) => {
        if ( direction === 'FORWARD' ) {
            this.handlePips( 1 );
            this.delayIt( ( ) => this.props.onForward( ) );
        } if ( direction === 'BACKWARD' ) {
            this.handlePips( -1 );
            this.delayIt( ( ) => this.props.onBackward( ) );
        }
    }

    delayIt = fn => setTimeout( fn, this.props.delay )

    render( ) {
        return (
            <Fragment>
                {this.props.page !== 1
                    ? (
                        <div
                            onClick={ ( ) => this.handleNav( 'BACKWARD' ) }
                            className={ cn( style.Arrow, style.Left ) }
                            onKeyPress={ () => this.handleNav( 'BACKWARD' ) }
                            role="button"
                            tabIndex={ 0 }
                        >
                            {'<'}
                        </div>
                    )
                    : null
                }
                {this.props.page !== this.props.pipNumber
                    ? (
                        <div
                            className={ cn( style.Arrow, style.Right ) }
                            onClick={ () => this.handleNav( 'FORWARD' ) }
                            onKeyPress={ () => this.handleNav( 'FORWARD' ) }
                            role="button"
                            tabIndex={ 0 }
                        >
                            {'>'}
                        </div>
                    )
                    : null
                }
                <div
                    className={ cn( style.Pips ) }
                >
                    {this.props.pips}
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = state => (
    {
        page: state.page,
        pips: state.pips,
        pipNumber: state.pipNumber,
        delay: state.changeDelay,
    }
);

const mapDispatchToProps = dispatch => (
    {
        onForward: ( ) => dispatch( { type: actionTypes.FORWARD } ),
        onBackward: ( ) => dispatch( { type: actionTypes.BACKWARD } ),
        onChanging: ( ) => dispatch( { type: actionTypes.CHANGING } ),
        onIntroStop: ( ) => dispatch( { type: actionTypes.INTRO_STOPPED } ),
        onPipClick: payload => dispatch( {
            type: actionTypes.PIP_CLICK,
            payload,
        } ),
        onPipsChange: payload => dispatch( {
            type: actionTypes.PIPS,
            payload,
        } ),

    }
);

export default connect( mapStateToProps, mapDispatchToProps )( Nav );

Nav.propTypes = {
    pips: PropTypes.arrayOf( PropTypes.element ),
    page: PropTypes.number,
    onForward: PropTypes.func,
    onBackward: PropTypes.func,
    onPipClick: PropTypes.func,
    onChanging: PropTypes.func,
    onPipsChange: PropTypes.func,
    pipNumber: PropTypes.number,
    delay: PropTypes.number,
};

Nav.defaultProps = {
    pips: [],
    page: 1,
    onForward: null,
    onBackward: null,
    onPipClick: null,
    onChanging: null,
    onPipsChange: null,
    pipNumber: PropTypes.number,
    delay: 300,
};
