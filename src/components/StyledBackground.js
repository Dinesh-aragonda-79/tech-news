import styled from 'styled-components';

const StyledBackground = styled.div`
  background: linear-gradient(135deg, #1b2735, #090a0f);
  opacity: 0.9;
  position: relative;
  min-height: 100vh;
  color: white;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    opacity: 0.9;
    z-index: -1;
  }

  h1 {
    font-family: 'Playfair Display', serif;
    font-size: 3em;
    margin-bottom: 20px;
  }
`;

export default StyledBackground;
