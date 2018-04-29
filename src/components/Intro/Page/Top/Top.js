import { connect } from 'react-redux';
import React from 'react';
import cn from 'classnames';

import me from '../../../../assets/me.png';
import style from './Top.css';

const top = () => (
    <div className={ cn( style.Round ) } >
        <img src={ me } className={ cn( style.Me ) } alt="me" />
    </div>
);

const mapStateToProps = state => (
    {
        page: state.page,
    }
);

export default connect( mapStateToProps )( top );
