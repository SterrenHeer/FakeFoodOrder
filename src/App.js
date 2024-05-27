import React, {useState, useMemo} from "react";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import Select from "./components/UI/select/Select";
import Input from "./components/UI/input/Input";

import "./styles/App.scss"

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'TypeScript', body: 'Description'},
		{id: 2, title: 'JavaScript', body: 'Banana'},
		{id: 3, title: 'Python', body: ' Apple'},
	])

	const [selectedSort, setSelectedSort] = useState('')
	const [searchQuery, setSearchQuery] = useState('')

	const sortedPosts = useMemo(() => {
		if (selectedSort) {
			return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
		}
		return posts
	}, [selectedSort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
	}, [searchQuery, sortedPosts])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	} 

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	} 

	const sortPosts = (sort) => {
		setSelectedSort(sort)
	}

  	return (
		<div className="App">
			<PostForm create={createPost} />
			<hr style={{margin: '15px 0'}} />
			<div>
				<Input 
					placeholder="Поиск..."
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
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
			{sortedAndSearchedPosts.length
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов 1'} />
				: <h1 style={{textAlign: 'center'}}>Посты не найдены!</h1>
			}
		</div>
  	);
}

export default App;
