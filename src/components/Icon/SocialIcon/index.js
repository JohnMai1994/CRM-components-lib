import React from 'react';
import Button from "../../Button";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const SocialIcon = ({icon, bgColor, href, ...rest}) => {
    return (
       <Button size={"30px"} bgColor={bgColor} onClick={() => href && window.open(href, "_blank")} {...rest}>
           <FontAwesomeIcon icon={icon} style={{fontSize: "16px"}}/>
       </Button>
    );
};

SocialIcon.propTypes = {
    icon: PropTypes.elementType,
    bgColor: PropTypes.string,
    href: PropTypes.string
    
};

export default SocialIcon;