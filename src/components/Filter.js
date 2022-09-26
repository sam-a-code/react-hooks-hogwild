import React from "react"

function Filter({setIsGreased, setSort}) {
    return (
        <div>
            <label>
                Show Greased Hogs
                <input type="checkbox" onClick={((e) => setIsGreased(e.target.checked))}/>
                <select onChange={(e) => setSort(e.target.value)}>
                    <option value="unordered">unordered</option>
                    <option value="weight">weight</option>
                </select>
            </label>
            <h1>HOGS</h1>
        </div>
    )

}


export default Filter