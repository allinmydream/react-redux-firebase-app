export const createProject = (project) => {
    // make async call to database 
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        dispatch({ type: 'CREATE_PROJECT', project})
    }
}