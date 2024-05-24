import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

import "./styles/App.scss"

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description'},
		{id: 3, title: 'JavaScript 3', body: 'Description'},
	])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	} 

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	} 

  	return (
		<div className="App">
			<PostForm create={createPost} />
			{posts.length
				? <PostList remove={removePost} posts={posts} title={'Список постов 1'} />
				: <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
			}
		</div>
  	);
}

export default App;
