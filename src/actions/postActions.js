export const createPost = (data) => {
   return {
        type: "CREATE_POST",
        payload: {
            content: data.contents,
            date: "12February",
            image: data.picture,
            author: {
            photo: data.avatar,
            name: data.name,
            }
        }
    }
}