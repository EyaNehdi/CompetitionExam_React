import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';
function NavigationBar() {
  return (
    <div>
       <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={NavLink} to="/competitions" className={({ isActive }) => isActive ? "active-link" : ""}>Competitions</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
  )
}

export default NavigationBar
