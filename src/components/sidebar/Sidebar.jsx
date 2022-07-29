import '@aws-amplify/ui-react/styles.css';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import { Amplify } from 'aws-amplify';
import { Link } from 'react-router-dom';
import awsExports from '../../aws-exports';
import domwoLogo from '../fulllogo_transparent_nobuffer.png';
import './sidebar.scss';


Amplify.configure(awsExports);


const Sidebar = () => {
  return (
    //<Authenticator components={components}>
    //{({ signOut, user }) => (
    <div className='sidebar'>
      <div className='top'>
        <Link to='/'><img className='img' src={domwoLogo} alt="Domwo Logo" /></Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className="title">RRHH</p>
          <li className='disable'>
            <GroupsIcon className='icon' />
            <span>Trabajadores (pronto)</span>
          </li>
          <li className='disable'>
            <RecentActorsIcon className='icon' />
            <span>Contratos (pronto)</span>
          </li>
          <li><Link to='/liquidaciones'>
            <RequestQuoteIcon className='icon' />
            <span>Liquidación de sueldo</span>
          </Link>
          </li>
          <p className="title">Cuenta</p>
          <li>
            <Link to='/perfil'>
              <PersonIcon className='icon' />
              <span>Perfil</span>
            </Link>
          </li>
          <li>
            <button >Cerrar Sesión</button>
          </li>
        </ul>
      </div>
    </div>
    //)}
    //</Authenticator> onClick={signOut}
  )
}

export default Sidebar;