import React, {useState} from 'react';
import StyleDropdown, {DropdownContainer} from "./style";
import PropTypes from 'prop-types';

function Dropdown({children, content, align = "right", ...rest}) {
    const [visible, setVisible] = useState(false);

    return (
        <StyleDropdown onClick={() => setVisible(!visible)} {...rest}>
            {children}
            {
                content && (
                    <DropdownContainer align={align} visible={visible}>
                        {content}
                    </DropdownContainer>
                )
            }

        </StyleDropdown>
    );
}


Dropdown.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    align: PropTypes.oneOf(["top", "left", "bottom", "right"])
};

export default Dropdown;