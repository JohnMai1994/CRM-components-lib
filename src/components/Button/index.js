import React from 'react';
import StyleButton from "./style";
import PropTypes from 'prop-types';

function Button
({
     children,
     type = "primary",
     shape = "circle",
     size = "30px",
     bgColor,
     ...rest
 }) {
    return (
        <StyleButton
            type={type}
            shape={shape}
            size={size }
            bgColor={bgColor}
            {...rest}
        >
            {children}
        </StyleButton>
    );
}


Button.propTypes = {
    children: PropTypes.any,
    type: PropTypes.oneOf(["primary"]),
    shape: PropTypes.oneOf(["circle", "rect"]),
    size: PropTypes.string,
    bgColor: PropTypes.string
};

export default Button;