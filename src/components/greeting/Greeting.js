import { greeting } from '../../utils/testids'
const Greeting = ({ text }) => {
  return (
    <div className="row">
      <h1 data-testid={greeting.text}>{text}</h1>
    </div>
  )
}

export default Greeting
