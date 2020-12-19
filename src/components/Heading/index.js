import React from 'react';
import StyleHeading from "./style";
import PropTypes from 'prop-types';

function Heading({children,level, ...rest }) {
    return (
        <StyleHeading as={`h${level}`} {...rest}>
            {children}
        </StyleHeading>
    );
}


Heading.propTypes = {
   children: PropTypes.any,
    level: PropTypes.oneOf([1,2,3,4,5,6])
};

export default Heading;