const initialModalState = {
  isOpen: false,
};

export const modalStatus = (
  state = initialModalState,
  action: { type: any }
) => {
  const newState = { ...state };

  if (action.type === "show") {
    newState.isOpen = true;
  }
  if (action.type === "hide") {
    newState.isOpen = false;
  }

  return newState;
};

const initialPaymentModalState = {
  isOpen: false,
};

export const paymentModalStatus = (
  state = initialPaymentModalState,
  action: { type: any }
) => {
  const newState = { ...state };

  if (action.type === "clicked") {
    newState.isOpen = true;
  }
  if (action.type === "close") {
    newState.isOpen = false;
  }

  return newState;
};

const initialFinalModalState = {
  isOpen: false,
};

export const finalModalStatus = (
  state = initialFinalModalState,
  action: { type: any }
) => {
  const newState = { ...state };

  if (action.type === "finalClicked") {
    newState.isOpen = true;
  }
  return newState;
};

const initialOptionModalState = {
  isOpen: false,
};

export const optionModalStatus = (
  state = initialOptionModalState,
  action: { type: any }
) => {
  const newState = { ...state };

  if (action.type === "optionClicked") {
    newState.isOpen = true;
  }
  return newState;
};

// const quantityHandler = (e: any) => {
//   setSelect({
//     name: select.name,
//     price: select.price,
//     quantity: e.target.value,
//   });
// };
const initialOrder = {
  payload: {
    name: "",
    price: 0,
    quantity: 0,
  },
};
export const orderStatus = (state = initialOrder, action: { type: any }) => {
  const newState = { ...state };

  if (action.type === "ordered") {
    console.log("name");
  }
};
