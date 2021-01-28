import React, {useState} from 'react';
import StyleFooter, {IconContainer, StyledPopoverContent} from "./style";
import Input from "../Input";
import Icon from "../Icon";
import Button from "../Button";
import Emoji from "../Emoji";
import Popover from "../Popover";
import {ReactComponent as ClipIcon} from "../../asserts/icons/clip.svg";
import {ReactComponent as SmileIcon} from "../../asserts/icons/smile.svg";
import {ReactComponent as MicrophoneIcon} from "../../asserts/icons/microphone.svg";
import {ReactComponent as PlaneIcon} from "../../asserts/icons/plane.svg";
import {ReactComponent as OptionsIcon} from "../../asserts/icons/options.svg";
import PropTypes from 'prop-types';
import {useTheme} from "styled-components";

function Footer({animeProps, style, children, ...rest }) {
    const [emojiIconActive, setEmojiIconActive] = useState(false)
    const theme = useTheme()

    return (
        <StyleFooter style={{...style, ...animeProps}} {...rest}>
           <Input
               placeholder={"输入想和对方说的话"}
               prefix={<Icon icon={ClipIcon}/>}
               suffix={
                   <IconContainer>
                       <Popover
                           content={<PopoverContent />}
                           offset={"left"}
                           onVisible={() => setEmojiIconActive(true)}
                           onHide={()=> setEmojiIconActive(false)}
                       >
                           <Icon icon={SmileIcon} color={emojiIconActive ? undefined : theme.gray3}/>
                       </Popover>

                       <Icon icon={MicrophoneIcon}/>
                       <Button size={"52px"}>
                           <Icon
                            icon={PlaneIcon}
                            color={"white"}
                            style={{transform: "translateX(-2px)"}}
                           />
                       </Button>

                   </IconContainer>

               }
           >

           </Input>
        </StyleFooter>
    );
}


function PopoverContent(props) {
    return (
        <StyledPopoverContent>
            <Emoji label="smile">😊</Emoji>
            <Emoji label="grinning">😂</Emoji>
            <Emoji label="thumbup">👍</Emoji>
            <Emoji label="thumbdown">👎</Emoji>
            <Emoji label="ok">👌</Emoji>
            <Emoji label="crossfinger">🤞</Emoji>
            <Emoji label="handsputogether">🙏</Emoji>
            <Emoji label="smilewithsunglasses">😎</Emoji>
            <Emoji label="strong">💪</Emoji>
            <Emoji label="unamusedface">😒</Emoji>
            <Emoji label="crying">😭</Emoji>
            <Icon icon={OptionsIcon} style={{marginLeft:"24px"}}/>

        </StyledPopoverContent>
    )
}


Footer.propTypes = {
   children: PropTypes.any
};

export default Footer;