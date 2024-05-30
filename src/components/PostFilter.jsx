import React from 'react';
import Input from "./UI/input/Input";
import Select from "./UI/select/Select";

const PostFilter = ({filter, setFilter}) => {
	return (
		<div>
			<Input 
				placeholder="Поиск..."
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
			/>
			<Select
				dafaultValue="Сортировка"
				options={[
					{value: 'title', name: 'По названию'},
					{value: 'body', name: 'По Описанию'}
				]}
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
			/>
		</div>
	);
};

export default PostFilter;
