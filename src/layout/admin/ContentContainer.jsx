import { styled } from "@mui/material";

export const ContentContainer = ({ children }) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};

const StyledContentContainer = styled("div")`
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 30px;
`;
