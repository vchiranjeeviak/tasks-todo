import SingleCompletedTodo from "./SingleCompletedTodo";

function CompletedTodos(props) {
    if (props.todos.length === 0) {
        return (<div className="pending-list"><h3>Completed Tasks</h3><h5>There are no completed tasks</h5></div>);
    }
    return (<div className="pending-list">
        <h3>Completed Tasks</h3>
        <ul>
            {props.todos.map(todo => <SingleCompletedTodo key={todo[0].id} text={todo[0].text} id={todo[0].id} removeTodo={props.removeTodo}></SingleCompletedTodo>)}
        </ul>
    </div>);
}

export default CompletedTodos;