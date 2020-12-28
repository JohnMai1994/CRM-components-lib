import React from 'react';
import StyleRadio, {RadioButton, Circle, StyledRadioGroup} from "./style";
import PropTypes from 'prop-types';
import LabelContainer from "../LabelContainer";

function Radio({name, children, ...rest}) {
    return (
        <StyleRadio {...rest}>
            {children}
            <RadioButton name={name}/>
            <Circle/>
        </StyleRadio>
    );
}

function RadioGroup({label, children, ...rest}) {

    return (
        <LabelContainer label={label}>
            <StyledRadioGroup {...rest}>{children}</StyledRadioGroup>
        </LabelContainer>

    );
}

Radio.Group = RadioGroup;

Radio.propTypes = {
    name: PropTypes.string,
    children: PropTypes.any,
};

RadioGroup.prototype = {
    label: PropTypes.string,
    children: PropTypes.any,
}

export default Radio;