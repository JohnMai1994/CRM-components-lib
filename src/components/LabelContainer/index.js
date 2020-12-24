import React from 'react';
import StyleLabelContainer from "./style";
import PropTypes from 'prop-types';
import Text from "../Text";

function LabelContainer({children, label, ...rest }) {
    return (
        <StyleLabelContainer {...rest}>
            {label && <Text style={{marginBottom: "8px"}}>{label} : </Text>}
            {children}
        </StyleLabelContainer>
    );
}


LabelContainer.propTypes = {
   children: PropTypes.any
};

export default LabelContainer;