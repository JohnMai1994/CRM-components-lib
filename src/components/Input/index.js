import React from 'react';
import StyleInput, {InputContainer, Prefix, Suffix, PrefixBar} from "./style";
import PropTypes from 'prop-types';
import Icon from "../Icon";
import { ReactComponent as SearchIcon} from "../../asserts/icons/search.svg"
import {useTheme} from "styled-components";

function Input({placeholder = "请输入内容...", prefix,prefixBar,  suffix, ...rest }) {
    return (
        <InputContainer {...rest} >
            {prefix && <Prefix>{prefix}</Prefix>}

            {prefixBar && <PrefixBar/>}

            <StyleInput placeholder={placeholder}/>

            {suffix && <Suffix>{suffix}</Suffix>}

        </InputContainer>
    );
}

function Search ({placeholder="请输入搜索内容...", ...rest}) {
    const theme = useTheme();

    return (
        <Input
            placeholder={placeholder}
            prefix={<Icon icon={SearchIcon} color={theme.gray3 } width={18} height={18}/>}
            prefixBar
            {...rest}
        />
    )
}

Input.Search = Search;

Input.propTypes = {
    placeholder: PropTypes.string,
    prefix: PropTypes.any,
    suffix: PropTypes.any

};

export default Input;