import { createContext, useState } from "react";

interface ContextProps {
  categories: string[];
  setLocalCategories: (categories: string[]) => void;
}

export const BreadcrumbContext = createContext({} as ContextProps);

export const BreadcrumbProvider = ({ children }: any) => {
  const [categories, setCateogires] = useState<string[]>([]);

  const setLocalCategories = (categories: string[]) => {
    setCateogires(categories);
  };

  return (
    <BreadcrumbContext.Provider
      value={{
        categories,
        setLocalCategories,
      }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
};
