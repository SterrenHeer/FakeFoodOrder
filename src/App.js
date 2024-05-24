import React from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

import "./styles/App.scss"

function App() {
  	return (
		<div className="App">
			<Counter />
			<ClassCounter />
			<PostItem />
		</div>
  	);
}

export default App;
