import './App.css';
import { useState } from 'react';

function App() {
	const [toDos, setTudos] = useState([]);
	console.log(toDos);
	const [content, setContent] = useState('');
	const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

	const d = new Date();
	console.log(d);
	const day = weekday[d.getDay()];

	return (
		<div className="app">
			<div className="mainDiv">
				<div className="mainHeading">
					<h1>ToDo List</h1>
				</div>
				<div className="subHeading">
					<br />
					<h2>Whoop, it's {day} 🌝 ☕ </h2>
				</div>
				<div className="input">
					<input
						value={content}
						onChange={(e) => setContent(e.target.value)}
						type="text"
						placeholder="🖊️ Add item..."
					/>
					<i
						onClick={() =>
							setTudos([...toDos, { id: Date.now(), content: content, status: false }])
						}
						className="fas fa-plus"></i>
				</div>
				{toDos.map((item) => {
					return (
						<div className="todos">
							<div className="todo">
								<div className="left">
									<input
										onChange={(e) => {
											setTudos(
												toDos.filter((obj) => {
													if (obj.id === item.id) {
														obj.status = e.target.checked;
													}
													return obj;
												})
											);
										}}
										value={item.status}
										type="checkbox"
										name=""
										id=""
									/>
									{item.status ? (
										<del>
											<p>{item.content}</p>
										</del>
									) : (
										<p>{item.content}</p>
									)}
								</div>
								<div className="right">
									<i
										onClick={() =>
											setTudos(
												toDos.filter((obj) => {
													if (obj.id === item.id) {
														return false;
													}
													return true;
												})
											)
										}
										className="fas fa-times"></i>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
