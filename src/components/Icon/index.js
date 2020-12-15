import React from 'react';
import StyleIcon from "./style";
import PropTypes from 'prop-types';

function Icon({children, ...rest }) {
    return (
        <StyleIcon {...rest}>
            {children}
        </StyleIcon>
    );
}


Icon.propTypes = {
   children: PropTypes.any
};

export default Icon;