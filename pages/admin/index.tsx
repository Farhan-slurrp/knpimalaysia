/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useCookies } from "react-cookie";
import { firebase } from "../../firebase/init";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useRouter } from "next/router";

interface Props {}

const AdminLogin = (props: Props) => {
  const [authCookie, setAuthCookie, removeAuthCookie] = useCookies([
    "KNPIAdminUserAuth",
  ]);
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [hiddenPassword, setHiddenPassword] = React.useState<boolean>(true);
  const [isError, setIsError] = React.useState(false);
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      let expiresDate = new Date(Date.now());
      expiresDate.setDate(expiresDate.getDate() + 2);

      setIsError(false);
      const CredUser = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      setAuthCookie("KNPIAdminUserAuth", CredUser.user, {
        expires: expiresDate,
      });
      console.log(CredUser);
    } catch (error: any) {
      setIsError(true);
    }
  };

  React.useEffect(() => {
    if (authCookie.KNPIAdminUserAuth) {
      router.push("/admin/home");
    }
  }, [authCookie]);

  //   console.log(authCookie.userAuth);

  return (
    <div className="flex items-start h-full w-full">
      <div className="p-4 rounded-md border border-blue-200 flex flex-col gap-4 m-4 mt-12">
        <h1 className="text-2xl text-center font-semibold text-blue-500">
          KNPI Admin Login Page
        </h1>
        <p className="text-sm text-gray-500">
          Login dengan email dan password yang sudah terdaftar dalam sistem.
        </p>
        <form
          className="flex flex-col gap-4 py-10"
          action="POST"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col text-gray-500 text-xs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="bg-transparent p-2 text-gray-700 outline-none border border-blue-200"
              name="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col text-gray-500 text-xs">
            <label htmlFor="password">Password:</label>
            <div className="w-full flex relative items-center">
              <input
                type={hiddenPassword ? "password" : "text"}
                name="password"
                className="w-full bg-transparent p-2 text-gray-700 outline-none border border-blue-200"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="off"
                required
              />
              <button
                className="absolute right-3 text-blue-400"
                onClick={() => setHiddenPassword(!hiddenPassword)}
              >
                {hiddenPassword ? (
                  <VisibilityIcon className="cursor-pointer hover:text-blue-500" />
                ) : (
                  <VisibilityOffIcon className="cursor-pointer hover:text-blue-500" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 mt-4 text-sm rounded-md font-semibold bg-blue-500 text-white"
          >
            Login
          </button>
          {isError && (
            <p className="text-red-500 mt-3 text-sm text-center">
              Email or password is incorrect
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
