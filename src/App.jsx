import './App.css'
import { CreateTodoButton } from './components/CreateTodoButton';
import {TodoCounter} from './components/TodoCounter';
import {TodoItem} from './components/TodoItem';
import {TodoList} from './components/TodoList';
import {TodoSearch} from './components/TodoSearch';

const lista = [
  {action:"accion 1",completed:true},
  {action:"accion 2",completed:false},
  {action:"accion 3",completed:true},
  {action:"accion 4",completed:true}
]

function App() {
  return (
    <>
      <TodoCounter completed={1} total={5} />
      <TodoSearch/>
      <TodoList>
        {lista.map(todo =>(
          <TodoItem 
            key={todo.action}
            action={todo.action}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  )
}

export default App
