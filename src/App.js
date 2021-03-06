import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    const [task, setTask] = useState('Alice')
    const [tasks, setTasks] = useState([{id: 1, title: 'first task', done:false}])
    const [priority, setPriority] = useState(5);

    const inputOnChange = (e) => {
        console.log(e.target.value)
        setTask(e.target.value)
    };
    const addTask = () => {
        setTasks([...tasks, {id: Math.random(), title: task, done:false}])
        setTask('')
    };
    const onDoneToggle = (id) =>{
        console.log(id)
    const updatedTasks = tasks.map(el => el.id === id ?{
        ...el,
        done:!el.done
    }:el);
    setTasks(updatedTasks)
    }


    const movePosition = (index, newIndex) => {
        const newTasks = [...tasks];
        const temp = newTasks[index];
        newTasks[index] = newTasks[newIndex];
        newTasks[newIndex] = temp;
        setTasks(newTasks)
    }

    const deleteTask =(id) => {
        const newList = tasks.filter(el => el.id !== id)
        setTasks (newList)
    }

    return (
        <div>
            <h1>{task}</h1>
            <input value={task} onChange={inputOnChange}/>
            <button onClick={addTask}>Add Task</button>
            <ul>
                {
                    tasks.filter(el => !el.done).map((el,i) => <li key={el.id} className={el.done?'done':' '}>
                        {el.title}{el.done?'completed':'uncompleted'}
                        <button onClick={() => onDoneToggle(el.id)}>{el.done ? 'Mark as uncompleted':'Mark as completed'}</button>

                        { i !== 0 && <button onClick={() => movePosition(i, i - 1)}> ↑ </button>}
                        { i !== tasks.length - 1 && <button onClick={() => movePosition(i, i + 1)}> ↓ </button>}





                    </li>)
                }
            </ul>
<hr/>

            <ul>
                {
                    tasks.filter(el => el.done).map(el => <li key={el.id} className={el.done?'done':' '}>
                        {el.title}{el.done?'completed':'uncompleted'}
                        <button onClick={() => onDoneToggle(el.id)}>{el.done ? 'Mark as uncompleted':'Mark as completed'}</button>
                    <button onClick={() => deleteTask(el.id)}>Delete </button>
                    </li>)

                }
            </ul>



        </div>
    );
}

export default App;

