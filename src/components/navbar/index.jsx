
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './index.css' 

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const [editTodoId, setEditTodoId] = useState()

  const [saveEditTodo, setSaveEditTodo] = useState()



export default function NavBar() {
  return (
    <nav className='navbar'>
        <div className='desktopMenu'>
           <a className='desktopMenlistItem'>Home</a>
           <a className='desktopMenlistItem'>About</a>
           <a href='#contact' className='desktopMenlistItem'>Contact </a>
           </div>
      
    </nav>
    
    
  )
}
