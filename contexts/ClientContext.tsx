import React, { useState } from 'react';

type ContextProps = {
  activePath: string;
  mobileVersion: boolean;
  setActivePath: (path: string) => void;
  setMobileVersion: (mobileVersion: boolean) => void;
};

type ClientProviderProps = {
  path: string;
  children?: React.ReactNode;
  isMobile: boolean;
};

export const ClientContext = React.createContext<ContextProps>({
  activePath: 'index',
  mobileVersion: false,
  setActivePath: () => null,
  setMobileVersion: () => null
});

export const ClientProvider = ({
  children,
  isMobile,
  path
}: ClientProviderProps) => {
  const [activePath, setActivePath] = useState(path);
  const [mobileVersion, setMobileVersion] = useState(isMobile);

  return (
    <ClientContext.Provider
      value={{ activePath, mobileVersion, setActivePath, setMobileVersion }}
    >
      {children}
    </ClientContext.Provider>
  );
};
