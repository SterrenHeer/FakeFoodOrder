import React, {useEffect, useState} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import Button from "./components/UI/button/Button";
import Modal from "./components/Modal/Modal";
import { usePosts } from "./hooks/usePosts";
import "./styles/App.scss"
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { useFetching } from "./hooks/useFetching";

function App() {
	const [posts, setPosts] = useState([])

	const [filter, setFilter] = useState({sort: '', query: ''})
	const [modal, setModal] = useState(false)
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const posts = await PostService.getAll()
		setPosts(posts)
	})

	useEffect(() => {
		fetchPosts()
	}, [])

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
			{postError &&
				<h1>Произошла ошибка ${postError}</h1>
			}
			{isPostLoading
				? <Loader />
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
			}
		</div>
  	);
}

export default App;
