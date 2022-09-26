export const initializeData = (data) => (dispatch) => {
  dispatch({ type: "initialize_data", payload: data });
};

