import { useRouter } from "next/router";
import React from "react";

const AppStore = React.createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
  isHeightFull: true,
  setIsHeightFull: (isHeightFull: boolean) => {},
});
AppStore.displayName = "AppStore";

export const useAppStore = () => React.useContext(AppStore);

interface Props {
  children: any;
}

export const AppStoreProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isHeightFull, setIsHeightFull] = React.useState(true);
  const router = useRouter();

  return (
    <AppStore.Provider
      value={{ isOpen, setIsOpen, isHeightFull, setIsHeightFull }}
    >
      {children}
    </AppStore.Provider>
  );
};
