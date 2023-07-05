import mainContext from './mainContext';
import { useState } from 'react';

const MainState = (props: any) => {
  const paginationData = { page: 1, limit: 10 };

  const [allFunctions, setAllFunctions] = useState({});

  // This is For Login User Details
  const [loginUserDetail, setLoginUserDetail] = useState({});

  // This contain the list of market of product & status of product
  const [marketList, setMarketList] = useState({});
  const [statusList, setStatusList] = useState({});

  // This contain the list of enumProductCategories API
  const [productCategoryList, setProductCategoryList] = useState([]);

  return (
    <mainContext.Provider
      value={{
        allFunctions,
        setAllFunctions,

        loginUserDetail,
        setLoginUserDetail,
        marketList,
        setMarketList,
        setStatusList,
        statusList,
        productCategoryList,
        setProductCategoryList,

        paginationData,
      }}
    >
      {props.children}
    </mainContext.Provider>
  );
};

export default MainState;
