import React from 'react';
import StyleSwitch, {Checkbox, Slider} from "./style";
import PropTypes from 'prop-types';

function Switch({children, ...rest }) {
    return (
        <StyleSwitch {...rest}>
            <Checkbox/>
            <Slider/>

        </StyleSwitch>
    );
}


Switch.propTypes = {
   children: PropTypes.any
};

export default Switch;