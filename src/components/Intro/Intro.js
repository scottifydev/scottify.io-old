import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import Transition from 'react-transition-group/Transition';
import cn from 'classnames';

import Nav from '../../containers/Nav/Nav';
import Page from './Page/Page';
import style from './Intro.css';

const intro = props => (
    <div className={ style.FadeIn }>
        <Nav />
        <Transition
            in={ props.changing }
            timeout={ props.changeDelay }
        >
            { state => (
                <div
                    className={
                        state === 'exiting'
                            ? cn( style.Hide )
                            : cn( style.Show )
                    }
                >
                    <Page />
                </div>
            )}
        </Transition>
    </div>
);

const mapStateToProps = state => (
    {
        page: state.page,
        changing: state.changing,
        delay: state.changeDelay,
    }
);

export default connect( mapStateToProps )( intro );

intro.propTypes = {
    changing: PropTypes.bool,
    changeDelay: PropTypes.number,
};

intro.defaultProps = {
    changing: false,
    changeDelay: 300,
};
