import styled from "styled-components"
import StyledIcon from "../Icon/style";
import {animated} from "react-spring"

const Title = styled.div`
  display: grid;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  ${StyledIcon} {
    cursor: pointer;
    &:hover {
        svg, svg * {
          opacity: 0.5;
        }
    }
  }

`;


const StyledTitleBar = styled(animated.div)`
  display: grid;
  grid-template-columns: 62px 1fr 112px;
  padding: 30px;
  max-height: 110px;
  border-bottom: 1px solid ${({theme}) => theme.gray4};
`;



export default StyledTitleBar
export {Title, Actions}