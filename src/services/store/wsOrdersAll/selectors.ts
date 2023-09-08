export const getWsAllIngridients = (state: {
  wsOrdersAllReducer: {
    data: [
      {
        createdAt: string;
        ingredients: Array<string>;
        name: string;
        number: number;
        status: string;
        updatedAt: string;
        _id: string;
      }
    ];
  };
}) => state.wsOrdersAllReducer.data;
export const getWsAllIngridientsTotal = (state: {
  wsOrdersAllReducer: { total: number };
}) => state.wsOrdersAllReducer.total;
export const getWsAllIngridientsTotalToday = (state: {
  wsOrdersAllReducer: { totalToday: number };
}) => state.wsOrdersAllReducer.totalToday;

export const getWsIngridients = (state: {
  wsOrdersReducer: {
    data: {
      data: [
        {
          createdAt: string;
          ingredients: Array<string>;
          name: string;
          number: number;
          status: string;
          updatedAt: string;
          _id: string;
        }
      ];
    };
  };
}) => state.wsOrdersReducer.data;
