import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Favorite } from "../assets/favorite.svg";
import { ReactComponent as Card } from "../assets/card.svg";
import { ReactComponent as Icon } from "../assets/login.svg";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Options>
        <OptionsBlock>
          <Icon />
          Войти
        </OptionsBlock>
        <OptionsBlock>
          <Favorite />
          Избранные
        </OptionsBlock>
        <OptionsBlock>
          <Card />
          Корзина
        </OptionsBlock>
      </Options>
    </StyledHeader>
  );
};

const StyledHeader = styled("header")`
  display: flex;
  justify-content: space-between;
  height: 64px;
`;

const Options = styled("div")`
  display: flex;
  align-items: center;
`;

const OptionsBlock = styled("div")`
  margin-right: 20px;
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
