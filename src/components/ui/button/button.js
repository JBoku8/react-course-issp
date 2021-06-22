export const Button = ({ className, onClick, disabled, text }) => {
  return (
    <div className="row">
      <button
        className={className}
        onClick={onClick}
        disabled={disabled}
        type="button">
        {text}
      </button>
    </div>
  )
}
