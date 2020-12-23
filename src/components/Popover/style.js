import styled, {css} from "styled-components"


const offsetvariants = {
    left: css`transform: translate(-25%, 0)`,
    right: css`transform: translate(25%, 0)`,
    center: css``
}

const Content = styled.div`
  background: ${({theme}) => theme.background};
  border-radius: 21px;
  box-shadow: 0px 8px 40px rgba(0,0,0,0.12);
  padding: 12px 30px;
  position: absolute;
  

  bottom: calc(100% + 12px);
  
  ${({offset}) => offset && offsetvariants[offset]};
  ${({visible}) => !visible && `display: none`};
  

`;

const Triangle = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 6px 0 6px;
    border-color: ${({theme}) => theme.background} transparent transparent transparent;
    left: calc(50% - 6px);
    bottom: calc(100% + 12px - 5px);
    
    ${({visible}) => !visible && `display: none`}
`;

const Target = styled.div``;


const StyledPopover = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
`;

export default StyledPopover
export {Content, Triangle, Target}