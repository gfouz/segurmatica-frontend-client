import styled from "styled-components";


export const StyledGenerate = styled.div`
  background-color: #f1f1f1;
  margin: 2em 0;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  box-shadow: 1px 1px 10px #ff0000;
  @media (min-width: 800px){
    padding: 0.5em 0;
  }
  .label__name {
    color: #777777;
    white-space: nowrap;
  }
`;
