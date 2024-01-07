import { useState, useEffect } from 'react';

function Notes() {
    const [notes, setNotes] = useState([{
        title: '',
        content: ''
    }])

    useEffect(() => {
        fetch("http://localhost:3001/notes").then(res => {
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