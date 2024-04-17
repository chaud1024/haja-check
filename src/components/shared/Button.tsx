import styled from "@emotion/styled";

interface ButtonProps {
  title: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
}

const Button = ({ title, onClick, disabled }: ButtonProps) => {
  return (
    <Btn onClick={onClick} disabled={disabled}>
      {title}
    </Btn>
  );
};

const Btn = styled.button`
  padding: 8px;
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
`;

export default Button;
