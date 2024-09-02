import '../css/NavBar.css'
import design from '../assets/design.svg'

const NavBar = () => {
  const hoy = new Date()
  const fecha = hoy.toLocaleDateString()
  return (
    <nav className="navb">
      <img className="navb-design" src={design} alt="Design icon" />
      <h2 className="navb-title">Todo List</h2>
      <p className="navb-date">{fecha}</p>
    </nav>
  )
}

export { NavBar }
