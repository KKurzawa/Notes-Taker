import { useState, useEffect } from 'react';
const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001"

function Notes() {
    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    // localhost
    // useEffect(() => {
    //     fetch("http://localhost:3001/notes").then(res => {
    //         if (res.ok) {
    //             return res.json()
    //         }
    //     }).then(jsonRes => setNotes(jsonRes))

    // })

    //vercel
    useEffect(() => {
        fetch(`${apiBaseUrl}/notes`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setNotes(jsonRes))

    })

    return (
        <div className="container">
            <h1>Notes</h1>
            {notes.map(note =>
                <div key={note.title}>
                    <h1>{note.title}</h1>
                    <p>{note.content}</p>
                </div>)}
        </div >
    )
}

export default Notes