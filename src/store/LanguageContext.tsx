import React, { createContext, useContext, ReactNode, useState } from "react";

type LanguageContextType = {
  isEnglish: boolean;
  setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(true);

  const value: LanguageContextType = {
    isEnglish,
    setIsEnglish,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
