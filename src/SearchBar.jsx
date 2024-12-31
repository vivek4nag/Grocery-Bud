/* eslint-disable react/prop-types */
import { useState } from "react"
import {  toast } from "react-toastify"

const SearchBar = ({addItem}) => {
    const [input, setInput] = useState("")

    const handleAddItem = (e) =>{
        e.preventDefault()
        if(!input ){
            toast.error("kuch add kr lo list me bhai")
            return
        }else{
            addItem({name: input, completed: false, id: Math.floor(Math.random()*1000) })
            setInput("");

        }
    }

    return (
        <div>
            <input type="text" placeholder="add grocery items"
                className="p-3 mr-4 w-[300px] rounded-md"
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />
            <button className="bg-blue-500 hover:bg-blue-600 p-2 text-lg font-medium text-white rounded-md"
            onClick={handleAddItem}>Add Item</button>
        </div>
    )
}

export default SearchBar