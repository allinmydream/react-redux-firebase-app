const initState = {
    projects: [
        {id: '1', title: 'This is a planning app ', content:'using react is interesting'},
        {id: '2', title: 'second', content:'blah blah'},
        {id: '3', title: 'third', content:'wooowwwwowow'}
    ]
};

const projectReducaer = (state = initState, action) => {
    return state;
}

export default projectReducaer;