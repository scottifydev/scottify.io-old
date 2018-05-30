import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './Text.css';

class Text extends Component {
    content = [
        {
            text: 'Hi, I\'m Scott.',
        },
        {
            text: 'I make things for the web...',
        },
        {
            text: 'and and in real life.',
        },
        {
            type: 'a',
            link: 'https://github.com/scottifydev/scottify.io',
            text: 'More soon...',
        },
    ]

    handleText = () => {
        const index = this.props.page - 1;
        return (
            <span
                className={ cn( style.Caption, 'text-center' ) }
            >
                {
                    this.content[ index ].type
                        ? (
                            <a
                                href={ this.content[ index ].link }
                            >
                                { this.content[ index ].text }
                            </a>
                        )
                        : this.content[ index ].text
                }
            </span>
        );
    };

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
