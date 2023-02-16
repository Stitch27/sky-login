const reducers = {
    setUser: (state,action) => {
        state.user = action.payload;
    }
}

export default reducers