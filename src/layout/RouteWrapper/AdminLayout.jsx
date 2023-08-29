import { Outlet } from "react-router-dom";
import { AdminHeader } from "../admin/AdminHeader";
import { ContentContainer } from "../admin/ContentContainer";
import { SideBar } from "../admin/SideBar";
import styled from "@emotion/styled";

export const AdminLayout = () => {
  return (
    <MainContainer>
      <SideBar />
      <ContentContainer>
        <AdminHeader />
        <Outlet />
      </ContentContainer>
    </MainContainer>
  );
};

const MainContainer = styled("div")`
  margin-left: 220px;
`;
