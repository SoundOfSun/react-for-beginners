// we import the React library to enable the use of JSX
import React from 'react'
import TodoItem from './TodoItem'
import todosData from './todosData'

function MainContent() {
	const todoComponents = todosData.map(data => <TodoItem key={data.id} task={data.text} status={data.completed} />)

	return (
		<div className="todo-list">
			<h3>To-do App</h3>
			{todoComponents}
		</div>
	)
}

export default MainContent