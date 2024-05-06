import styled from "styled-components";

const ButtonComponent = styled.button<{ $bgColor: string }>`
  background-color: ${(props) => props.$bgColor};
  color: white;
  margin: 20px;
  border-radius: 10px;
  border: none;
  width: 100px;
  height: 40px;
  transition: all 0.3s;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    outline: none;
    transform: scale(1.05);
    border: 1px solid white;
  }
`;
export { ButtonComponent };
