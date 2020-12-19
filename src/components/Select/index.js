import React from 'react';
import StyleSelect from "./style";
import PropTypes from 'prop-types';

function Select({children, ...rest }) {
    return (
        <StyleSelect {...rest}>
            {children}
        </StyleSelect>
    );
}


Select.propTypes = {
   children: PropTypes.any
};

export default Select;