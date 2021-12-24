import Button from "../UI/Button";
import "../../index.css";

function SingleCompletedTodo(props) {
    const removeTodoHandler = () => {
        props.removeTodo(props.id);
    }
    return (
        <li>
            <div className="flex-parent-element">
                <div className="completed-list">{props.text}</div>
                <div>
                    <Button type="button" text="Remove" className="red" onClick={removeTodoHandler}></Button></div>
            </div>
        </li>
    );
}

export default SingleCompletedTodo;