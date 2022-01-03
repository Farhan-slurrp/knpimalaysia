import React from "react";
import AdminSideMenu from "./AdminSideMenu";

interface Props {
  children: any;
}

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex flex-col w-full min-h-4">
      <AdminSideMenu />
      {children}
    </div>
  );
};

export default AdminLayout;
