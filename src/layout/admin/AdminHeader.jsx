import { styled } from "@mui/material";
// import alias @components/Button
import { Button } from "../../UI/Button";

export const AdminHeader = () => {
  return (
    <Header>
      <Title>Женская</Title>
      <HeaderButton>+ Добавить</HeaderButton>
    </Header>
  );
};

const Header = styled("header")`
  display: flex;
  justify-content: space-between;
  padding: 22px 30px 22px 30px;
  border-radius: 10px;
`;

const Title = styled("h1")`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const HeaderButton = styled(Button)`
  min-width: 120px;
`;
