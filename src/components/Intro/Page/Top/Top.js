import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';
import shortid from 'shortid';

import * as actionTypes from '../../../../store/actions';
import github from '../../../../assets/github.png';
import me from '../../../../assets/me.png';
import style from './Top.css';
import table from '../../../../assets/table.jpg';
import vector from '../../../../assets/vector.svg';

class Top extends Component {
    componentDidMount() {
        const renderedPages = this.generatePages( this.pages );
        this.props.generatePages( renderedPages );
    }

    pages = [
        {
            type: 'div',
            classes: [ style.Round, style.Border ],
            children: [
                {
                    type: 'img',
                    src: me,
                    classes: [ style.Me ],
                },

            ],
        },
        {
            type: 'img',
            src: vector,
            classes: [ style.Fill ],
        },
        {
            type: 'img',
            src: table,
            classes: [ style.Fill, style.Border ],
        },
        {
            type: 'a',
            classes: [ style.Fill ],
            link: 'https://github.com/scottifydev/scottify.io',
            children: [
                {
                    type: 'img',
                    src: github,
                    classes: [ style.Fill ],
                },

            ],
        },
    ]

    generatePages = pages => (
        [].concat( pages.map( ( e, i ) => (
            e.children
                ? (
                    <e.type
                        src={ e.src ? e.src : '' }
                        className={ cn( ...e.classes ) }
                        href={ e.link ? e.link : '#' }
                        alt="me"
                        key={ shortid.generate() }
                        page={ i + 1 }
                    >
                        {e.children && this.generatePages( e.children )}
                    </e.type >
                )
                : <e.type
                    src={ e.src ? e.src : '' }
                    className={ cn( ...e.classes ) }
                    alt="me"
                    key={ shortid.generate() }
                    page={ i + 1 }
                />
        ) ) ) )

    render() {
        return (
            <div className={ style.Container }>
                {this.props.pages[ this.props.page - 1 ]}
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        page: state.page,
        pages: state.pages,
    }
);

const mapDispatchToProps = dispatch => (
    {
        generatePages: payload => dispatch( {
            type: actionTypes.PAGES,
            payload,
        } ),

    }
);

export default connect( mapStateToProps, mapDispatchToProps )( Top );

Top.propTypes = {
    generatePages: PropTypes.func,
    page: PropTypes.number,
    pages: PropTypes.arrayOf( PropTypes.element ),
};

Top.defaultProps = {
    generatePages: null,
    page: 1,
    pages: null,
};
