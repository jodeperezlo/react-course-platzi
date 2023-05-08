import { createContext, useState } from 'react';

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isProductDetailOpened, setIsProductDetailOpened] = useState(false);

  const openProductDetail = () => setIsProductDetailOpened(true);
  const closeProductDetail = () => setIsProductDetailOpened(false);

  const [productToShow, setProductToShow] = useState(null);

  return (
    <AppContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpened,
        openProductDetail,
        closeProductDetail,
        productToShow,
        setProductToShow,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
