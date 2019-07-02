export const createProject = (project) => {
    // make async call to database 
    return (dispatch, getState) => {
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}