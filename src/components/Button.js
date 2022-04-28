import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        className={`${props.className} ${classes.button}`}
        type={props.type || "button"}
        style={{ marginBottom: "2rem" }}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </>
  );
};

export default Button;
