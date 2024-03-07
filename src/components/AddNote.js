import React,{useContext, useState} from "react";
import noteContext from "../context/notes/noteContext";
import "./addNote.css";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    
    const [note, setNote] = useState({title:"", description:"", tag: ""})

    const handleClick = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"", description:"", tag: ""})
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

  return (
    <div className="mainContainer">
      <div className="container my-4">
        <h1 className="h1">Add Your Notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label label">
              Title
            </label>
            <input
              type="text" name="title"
              className="form-control input"
              id="title"
              aria-describedby="emailHelp"
              onChange={onChange} minLength={3} required value={note.title}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label label">
             description
            </label>
            <input
              type="text"
              className="form-control input"
              id="description" name="description" onChange={onChange} minLength={5} required value={note.description}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label label">
             Tag
            </label>
            <input
              type="text"
              className="form-control input"
              id="tag" name="tag" onChange={onChange} value={note.tag}
            />
          </div>
          <div className="addnote">
          <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn addnote" onClick={handleClick}>
            Add Note
          </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
