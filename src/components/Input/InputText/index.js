import React from 'react';
import StyleInputText, {InputUnderline} from "./style";
import PropTypes from 'prop-types';
import LabelContainer from "../../LabelContainer";

function InputText({label, placeholder = "请输入内容", ...rest}) {
    const input = <InputUnderline type={"text"} placeholder={placeholder}/>


    return (
        <StyleInputText {...rest}>
            {
                label
                    ?
                    <LabelContainer label={label}>{input}</LabelContainer>
                    :
                    input
            }

        </StyleInputText>
    );
}


InputText.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string

};

export default InputText;