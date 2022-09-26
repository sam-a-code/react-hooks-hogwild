import React, {useState} from "react";
import Nav from "./Nav";
import HogContainer from "./HogContainer"
import Filter from "./Filter"

import hogs from "../porkers_data";

function App() {
	const [hogData, setHogData] = useState(hogs)
	const [isGreased, setIsGreased] = useState(false)
	const [sort, setSort] = useState("unordered")

	const filteredHogDataArray = hogData.filter((hog) => {
		return isGreased ? hog.greased === true : hogData

		// if(isGreased === true) {
		// 	return hog.greased === true;
		// }
		// return true

	})

	const sortHogArray = [...filteredHogDataArray].sort((a, b) => {
		if(sort === "unordered") return true;
		else if (sort === "weight") {
			return a.weight - b.weight
		}
	})

	return (
		<div className="App">
			<Nav />
			<Filter setIsGreased={setIsGreased} setSort={setSort}/> 
			<HogContainer hogData={sortHogArray}/>
		</div>
	);
}

export default App;
