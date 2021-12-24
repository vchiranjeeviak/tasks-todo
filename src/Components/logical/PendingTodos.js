import SinglePendingTodo from "./SinglePendingTodo";
import "../../index.css";

function PendingTodos(props) {
    if (props.todos.length === 0) {
        return (<div className="pending-list"><h3>Pending Tasks</h3><h5>There are no pending tasks</h5></div>);
    }
    return (
        <div className="pending-list">
            <h3>Pending Tasks</h3>
            <ul>
                {props.todos.map(todo => <SinglePendingTodo key={todo.id} text={todo.text} id={todo.id} deleteTodo={props.deleteTodo} completeTodo={props.completeTodo}></SinglePendingTodo>)}
            </ul>
        </div>);
}

export default PendingTodos;