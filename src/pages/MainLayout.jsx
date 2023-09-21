import styled from "@emotion/styled";
import { Outlet } from "react-router-dom";
import { Footer } from "../layout/Footer"
import { Header } from "../layout/Header";

export const MainLayout = () => {
  return (
    <>
      <Content>
        <Header />
        <Outlet />
      </Content>
      <Footer />
    </>
  );
};

const Content = styled("div")`
  margin-right: 120px;
  margin-left: 120px;
  margin-top: 20px;
`;
