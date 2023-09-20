import { Button as MUIButton, styled } from "@mui/material";

export const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(MUIButton)({
  minWidth: "408px",
  backgroundColor: "#121314",
  padding: 10,
  color: "#fff",
  "&:hover": {
    backgroundColor: "#2a2b2d",
  },
  "&:disabled": {
    backgroundColor: "#5a5a5a",
  },
});
