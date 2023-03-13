import { createStore, combineReducers, applyMiddleware,  } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import postListReducer from "./reducers/postListReducer"

const reducer = combineReducers({
    postList: postListReducer
});
const initialState = {
    postList:{
        posts:[{content:"How are you friends?)",
        date: "9February",
        image: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Fdorksideoftheforce.com%2Ffiles%2F2020%2F11%2Fanakin-episode-3-850x560.jpg",
        author: {
          photo: "https://images.lifestyleasia.com/wp-content/uploads/sites/7/2021/10/27120854/Hayden-Christensen-FI-1.jpg",
          name: "Anakin Skywalker",
        }}]
    }
};
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware()) );

export default store;