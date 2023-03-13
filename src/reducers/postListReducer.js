const postListReducer = (state = {posts:[]},action) => {
    console.log(action,"action")
    switch(action.type){
        case "CREATE_POST":  
            return {
                posts: [...state.posts, action.payload]
            }
        default: return state
    }
}

export default postListReducer