"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface InstallPromptContextProps {
  installPrompt: BeforeInstallPromptEvent | null;
  isInstalled: boolean;
}

const InstallPromptContext = createContext<InstallPromptContextProps>({
  installPrompt: null,
  isInstalled: false,
});

export const InstallPromptProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setInstallPrompt(e);
    };

    const checkIfInstalled = () => {
      const standalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone;
      setIsInstalled(standalone!);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", checkIfInstalled);

    // Initial check on load
    checkIfInstalled();

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", checkIfInstalled);
    };
  }, []);

  return (
    <InstallPromptContext.Provider value={{ installPrompt, isInstalled }}>
      {children}
    </InstallPromptContext.Provider>
  );
};

export const useInstallPrompt = () => useContext(InstallPromptContext);
