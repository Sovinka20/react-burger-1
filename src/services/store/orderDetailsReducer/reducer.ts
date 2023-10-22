import { TOrderResponse } from "../../../data/typesScripts";
import { RESET_ORDER_DATA, SET_ORDER_DATA, TOrderDataActions } from "./actions";

type IOrderDetailsReducer = {
  orderDetails: TOrderResponse;
};

const initialState: IOrderDetailsReducer = {
  orderDetails: {
    success: false,
    name: "",
    order: {
      ingredients: [],
      _id: "",
      owner: {
        name: "",
        email: "",
        createdAt: "",
        updatedAt: "",
      },
      status: "",
      name: "",
      createdAt: "",
      updatedAt: "",
      number: 0,
      price: 0,
    },
  },
};

export const OrderDetailsReducer = (
  state = initialState,
  action: TOrderDataActions
) => {
  switch (action.type) {
    case SET_ORDER_DATA:
      return {
        ...state,
        orderDetails: action.payload,
      };
    case RESET_ORDER_DATA:
      return {
        orderDetails: {
          success: false,
          name: "",
          order: {
            ingredients: [],
            _id: "",
            owner: {
              name: "",
              email: "",
              createdAt: "",
              updatedAt: "",
            },
            status: "",
            name: "",
            createdAt: "",
            updatedAt: "",
            number: 0,
            price: 0,
          },
        },
      };
    default:
      return state;
  }
};
