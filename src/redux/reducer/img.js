// import imgData from "../action/action";
const initialData = {
  list: [],
  loading: true,
};
const imgData = (state = initialData, action) => {
  console.log("IMGE", action.payload, action.type);
  switch (action.type) {
    case "IMGDATA":
      return {
        ...state,
        list: action.payload,
      };

    default:
      return state;
  }
};
export default imgData
