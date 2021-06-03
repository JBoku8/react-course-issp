import { Navigation } from '../navigation'

export function Header () {
  return (
    <div className="container">
      <section className="row shadow-sm p-3 bg-light mt-1">
        <Navigation />
      </section>
    </div>
  )
}

export default Header
