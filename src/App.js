import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route }
		from 'react-router-dom';
import PostForm from './PostForm';
import AllPost from './AllPost';

class App extends Component {
render() {
	return (
	<div className="App">
	<Router>
		<Routes>
		<Route exact path ='/' render=
			{props => <PostForm {...props} />}>
		</Route>
		<Route exact path='/gallery' render=
			{props => <AllPost {...props} />}>
		</Route>
		</Routes>
	</Router>
    {/* <PostForm /> */}
    {/* <AllPost/> */}
	</div>
	);
	}
}
export default App;
