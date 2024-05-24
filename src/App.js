import React, {useState} from "react";
import PostList from "./components/PostList";
import Button from "./components/UI/button/Button";
import Input from "./components/UI/input/Input";

import "./styles/App.scss"

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description'},
		{id: 3, title: 'JavaScript 3', body: 'Description'},
	])

	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')

	const addNewPost = (e) => {
		e.preventDefault()
		const newPost = {
			id: Date.now(),
			title,
			body
		}
		setPosts([...posts, newPost])
		setTitle('')
		setBody('')
	}

  	return (
		<div className="App">
			<form>
				<Input 
					value={title}
					onChange={e => setTitle(e.target.value)}
					type="text" 
					placeholder="Название поста"
				/>
				<Input 
					value={body}
					onChange={e => setBody(e.target.value)}
					type="text" 
					placeholder="Описание поста"
				/>
				<Button onClick={addNewPost}>Создать пост</Button>
			</form>
			<PostList posts={posts} title={'Список постов 1'} />
		</div>
  	);
}

export default App;
