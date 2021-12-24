import Button from "../UI/Button";

function SinglePendingTodo(props) {

    const deleteHandler = () => {
        props.deleteTodo(props.id);
    };

    const completeHandler = () => {
        props.completeTodo(props.id);
    };

    return (<li>
        <div>{props.text}</div>
        <div>
            <Button type="button" text="Completed" className="green" onClick={completeHandler}></Button>
            <Button type="button" text="Delete" className="red" onClick={deleteHandler}></Button>
        </div>
    </li>);
}

export default SinglePendingTodo;