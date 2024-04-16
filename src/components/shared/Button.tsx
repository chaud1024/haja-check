import styled from "@emotion/styled";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick: (e: any) => void;
}

const Button = ({ title, onClick }: ButtonProps) => {
  return <Btn onClick={onClick}>{title}</Btn>;
};

const Btn = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
`;

export default Button;
