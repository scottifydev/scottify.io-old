import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './Text.css';

class Text extends Component {
    content = [
        'Hi, I\'m Scott.',
        'This is some more Text',
        'And even more',
    ]

    handleText = () => (
        <span
            className={ cn( style.Caption, 'text-center' ) }
        >
            { this.content[ this.props.page - 1 ] }
        </span>
    );

    render() {
        return (
            <Fragment>
                {this.handleText()}
            </Fragment>
        );
    }
}

const mapStateToProps = state => (
    {
        page: state.page,
    }
);

export default connect( mapStateToProps )( Text );

Text.propTypes = {
    page: PropTypes.number,
};

Text.defaultProps = {
    page: 1,
};
