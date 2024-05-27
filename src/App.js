import React, {useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";

import "./styles/App.scss"

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'TypeScript', body: 'Description'},
		{id: 2, title: 'JavaScript', body: 'Banana'},
		{id: 3, title: 'Python', body: ' Apple'},
	])
	const [selectedSort, setSelectedSort] = useState('')
	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	} 

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	} 

	const sortPosts = (sort) => {
		setSelectedSort(sort)
		setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
	}

  	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}} />
			<div>
				<Select
					dafaultValue="Сортировка"
					options={[
						{value: 'title', name: 'По названию'},
						{value: 'body', name: 'По Описанию'}
					]}
					value={selectedSort}
					onChange={sortPosts}
				/>
			</div>
			{posts.length
				? <PostList remove={removePost} posts={posts} title={'Список постов 1'} />
				: <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
			}
		</div>
  	);
}

export default App;
