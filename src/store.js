import {createSlice, configureStore} from '@reduxjs/toolkit'
const appSlice = createSlice({
	name: 'app',
	initialState: {
		posts: [],
		user: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload
		},
		clearPosts: state => state.posts = [],
		setPosts: (state, action) => {
			state.posts = action.payload;
		}
	}
});
const store = configureStore({
	reducer: {
		app: appSlice.reducer,
	}
});

const {setPosts, clearPosts, setUser} = appSlice.actions;
export {setPosts, clearPosts, setUser}

export default store
