import styled from "@emotion/styled";
import { ReactComponent as AdminLogo } from "../../assets/admin-logo.svg";
import { ReactComponent as FemaleIcon } from "../../assets/female.svg";
import { ReactComponent as MaleIcon } from "../../assets/male.svg";
import { ReactComponent as ChildIcon } from "../../assets/child.svg";
import { Link, useLocation } from "react-router-dom";

export const SideBar = () => {
  const { pathname } = useLocation();
  const isActive = (path) => pathname === `/admin/${path}`;
  return (
    <Container>
      <Wrapper>
        <AdminLogo />
      </Wrapper>
      <List>
        <StyledLink to={"male"}>
          <Menu active={isActive("male")}>
            <MaleIcon />
            <MenuTitle>Мужская</MenuTitle>
          </Menu>
        </StyledLink>
        <StyledLink to={"children"}>
          <Menu active={isActive("children")}>
            <ChildIcon />
            <MenuTitle>Детская</MenuTitle>
          </Menu>
        </StyledLink>
        <StyledLink to={"female"}>
          <Menu active={isActive("female")}>
            <FemaleIcon />
            <MenuTitle>Женская</MenuTitle>
          </Menu>
        </StyledLink>
      </List>
    </Container>
  );
};

const Wrapper = styled("div")`
  padding: 40px 20px 0 20px;
`;

const Container = styled("aside")`
  position: fixed;
  left: 0;
  top: 0;
  width: 218px;
  background-color: red;
  height: 100vh;
`;

const List = styled("ul")`
  margin-top: 62px;
`;

const Menu = styled("li")`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 12px 12px 28px;
  background-color: ${(p) => (p.active ? "green" : "none")};
`;

const MenuTitle = styled("span")`
  color: #7e8494;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
