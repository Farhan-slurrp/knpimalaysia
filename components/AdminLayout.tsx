import { useRouter } from "next/router";
import React from "react";
import { useCookies } from "react-cookie";
import AdminSideMenu from "./AdminSideMenu";

interface Props {
  children: any;
}

const AdminLayout = ({ children }: Props) => {
  const [authCookie, setAuthCookie, removeAuthCookie] = useCookies([
    "KNPIAdminUserAuth",
  ]);
  const router = useRouter();

  React.useEffect(() => {
    if (!authCookie.KNPIAdminUserAuth) {
      router.push("/admin");
    }
  }, [authCookie, router]);

  return (
    <div className="flex flex-col w-full min-h-4">
      <AdminSideMenu />
      {children}
    </div>
  );
};

export default AdminLayout;
