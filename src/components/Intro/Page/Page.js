import React from 'react';
import cn from 'classnames';

import Text from './Text/Text';
import Top from './Top/Top';
import style from './Page.css';

const page = () => (
    <div className={ cn( style.Container ) }>
        <Top />
        <Text />
    </div>
);

export default page;
