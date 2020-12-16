import React from 'react';
import StyleIcon from "./style";
import PropTypes from 'prop-types';

function Icon
({
    icon: IconComponent,
    width =24,
    height = 24,
    color,
    opacity,
     ...rest
}) {
    return (
        <StyleIcon color={color} opacity={opacity} {...rest}>
            {IconComponent && <IconComponent width={width} height={height}/>}
        </StyleIcon>
    );
}


Icon.propTypes = {
    icon: PropTypes.element,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    color: PropTypes.string,
    opacity: PropTypes.number

};

export default Icon;