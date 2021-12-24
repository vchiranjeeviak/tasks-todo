import { useState } from "react";
import Button from "../UI/Button";
import '../../index.css'

function TodoAddingSpace(props) {
    const [todo, setTodo] = useState('');

    const onChangeHandler = (event) => {
        setTodo(event.target.value);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (!event.target[0].value) {
            return;
        }
        props.onAddingTodo(todo);
        setTodo('');
    };

    return (<form onSubmit={onSubmitHandler} className="form">
        <label htmlFor="todotext">New ToDo:</label>
        <input type="text" id="todotext" className="input" placeholder="type here.." value={todo} onChange={onChangeHandler}></input>
        <Button type="submit" text="Add"></Button>
    </form>);
}

export default TodoAddingSpace;