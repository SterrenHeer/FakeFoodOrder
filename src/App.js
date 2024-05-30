import React, {useState, useMemo} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Button from "./components/UI/button/Button";
import Modal from "./components/Modal/Modal";

import "./styles/App.scss"

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'TypeScript', body: 'Description'},
		{id: 2, title: 'JavaScript', body: 'Banana'},
		{id: 3, title: 'Python', body: ' Apple'},
	])

	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)

	const sortedPosts = useMemo(() => {
		if (filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
	}, [filter.query, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	} 

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	} 

  	return (
		<div className="App">
			<Button onClick={() => setModal(true)} style={{marginTop: 30}}>Создать пользователя</Button>
			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</Modal>
			<hr style={{margin: '15px 0'}} />
			<PostFilter
				filter={filter}
				setFilter={setFilter}
			/>
			<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
		</div>
  	);
}

export default App;
