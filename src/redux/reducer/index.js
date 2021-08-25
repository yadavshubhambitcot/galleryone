const initialData = {
    list: [],
    loading:true
};
const apiget = (state = initialData, action) => {
    console.log("FFFFFFFFFFFFFFFFFFFFFFFFFFFFFF", action.payload,action.type);
    switch (action.type) {
        case "USERDATA":
            return {
                ...state,
                list: action.payload
            }
   
        default:
            return state;
  
    }
}
export default apiget
