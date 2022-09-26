const reducers = (data = [], action) => {
    switch (action.type) {
      case "initialize_data":
        return action.payload;
      default:
        return data;
    }
  };
  export default reducers;