"use client";

import { NavbarWrapper } from "../../components/dashboardNabbar/dashboardNavbar";
import { AdminSidebarWrapper } from "../../components/sidebar/adminSidebar";

interface Props {
  children: React.ReactNode;
}

export const AdminLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <AdminSidebarWrapper></AdminSidebarWrapper>
    <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
