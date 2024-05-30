import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Button from "./components/UI/button/Button";
import Modal from "./components/Modal/Modal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.scss"
import PostService from "./API/PostService";

function App() {
	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const [isPostLoading, setIsPostLoading] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

	useEffect(() => {
		fetchPosts()
	}, [])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	} 

	const fetchPosts = async () => {
		setIsPostLoading(true)
		const posts = await PostService.getAll()
		setPosts(posts)
		setIsPostLoading(false)
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
			{isPostLoading
				? <h1>Идёт загрузка...</h1>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
			}
		</div>
  	);
}

export default App;
