import { useState } from "react";
import axios from "axios";
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

function CreateNote() {
    const [input, setInput] = useState({
        title: '',
        content: '',
    })
    function handleChange(e) {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault();
        const newNote = {
            title: input.title,
            content: input.content
        }
        axios.post(`${apiBaseUrl}/create`, newNote)
    }
    return (
        <div className="container">
            <h1>Create Note</h1>
            <form>
                <div className="form-group">
                    <input onChange={handleChange} name="title" value={input.title} autoComplete="off" className="form-control" placeholder="note title">

                    </input>
                </div>
                <div className="form-group">
                    <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className="form-control" placeholder="note">

                    </textarea>
                </div>
                <button onClick={handleClick} className="btn btn-lg btn-info">Add Note</button>
            </form>
        </div>
    )
}

export default CreateNote