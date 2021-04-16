export const Button = (props) => {
  return (
    <div className="row">
      <button
        className={props.className}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.text}
      </button>
    </div>
  );
};
