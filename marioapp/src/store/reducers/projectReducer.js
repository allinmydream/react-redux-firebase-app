const initState = {
    projects: [
        {id: '1', title: 'This is a planning app ', content:'using react is interesting'},
        {id: '2', title: 'second', content:'blah blah'},
        {id: '3', title: 'third', content:'wooowwwwowow'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_PROJECT':
            console.log('create project', action.project)
    }
    return state;
}

export default projectReducer;