import '../css/NavBar.css'
import design from '../assets/design.svg'

const NavBar = () => {
  const hoy = new Date()
  const fecha = hoy.toLocaleDateString()
  return (
    <nav className="navb">
      <img src={design} alt="Design icon" />
      <h2>Todo List</h2>
      <p>{fecha}</p>
    </nav>
  )
}

export { NavBar }
