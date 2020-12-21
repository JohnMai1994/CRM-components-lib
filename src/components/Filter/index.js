import React from 'react';
import StyleFilter, {Filters, Action} from "./style";
import Text from "../Text";
import PropTypes from 'prop-types';

function Filter({children, ...rest }) {
    return (
        <StyleFilter {...rest}>
            {children}
        </StyleFilter>
    );
}



Filter.Filters = ({children, label, ...rest}) => (
    <Filters {...rest}>
        <Text type="secondary">{label}: </Text>
        {children}
    </Filters>
);

Filter.Action = ({children, label, ...rest}) => (
    <Action {...rest}>
        <Text type={"secondary"}>{label}: </Text>
        {children}
    </Action>

)


Filter.propTypes = {
   children: PropTypes.any
};

export default Filter;