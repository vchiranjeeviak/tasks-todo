import "../../index.css";

function Button(props) {
    const classes = props.className ? props.className : "button";
    return <button type={props.type} className={classes} onClick={props.onClick || null}>{props.text}</button>;
}

export default Button;