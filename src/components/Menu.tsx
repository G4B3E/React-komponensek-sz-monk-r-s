import { NavLink  } from 'react-router-dom';

const Menu = () => {
 return (
       <ul id='menu'>
          <li>
             <NavLink  to="/">Főoldal</NavLink >
          </li>
          <li>
             <NavLink  to="/tapasztalat">Tapasztalat </NavLink >
          </li>
          <li>
             <NavLink  to="/idopont ">Időpont </NavLink >
          </li>
       </ul>
 );
};

export default Menu;