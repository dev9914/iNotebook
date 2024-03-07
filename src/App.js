import './App.css';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import NoteState from './context/notes/NoteState';


function App() {

  return (
    <>
    <NoteState>
      <div className='fixing-width'>
    <Navbar />
    <Outlet />
      </div>
    </NoteState>
    </>
  );
}

export default App;
