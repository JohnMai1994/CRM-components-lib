import React, {useState} from 'react';
import StylePopover, {Content, Target, Triangle} from "./style";
import PropTypes from 'prop-types';

function Popover(
    {
        children,
        content,
        offset = "center",
        onVisible,
        onHide,
        ...rest
    }) {
    const [visible, setVisible] = useState(false)

    const handleClick = () => {
        if (visible) {
            setVisible(false)
            onHide && onHide()
        } else {
            setVisible(true)
            onVisible && onVisible()
        }
    }

    return (
        <StylePopover onClick={handleClick} {...rest}>
            <Content visible={visible} offset={offset}>{content}</Content>
            <Triangle visible={visible} offset={offset}/>
            <Target>{children}</Target>
        </StylePopover>
    );
}


Popover.propTypes = {
    children: PropTypes.any,
    content: PropTypes.any,
    offset: PropTypes.oneOf(["center", "left", "right"]),
    onVisible :PropTypes.func,
    onHide :PropTypes.func


};

export default Popover;