import React from 'react';
import StyleParagraph from "./style";
import PropTypes from 'prop-types';

function Paragraph({children,ellipsis, ...rest }) {
    return (
        <StyleParagraph as="p" ellipsis={ellipsis} {...rest}>
            {children}
        </StyleParagraph>
    );
}


Paragraph.propTypes = {
    children: PropTypes.any,
    ellipsis: PropTypes.bool,
    type: PropTypes.oneOf(["primary", "secondary", "danger", "safe", "freedom"]),
    size: PropTypes.oneOf([
        "xxsmall",
        "xsmall",
        "small",
        "normal",
        "large",
        "xlarge",
        "xxlarge",

    ]),
};

export default Paragraph;