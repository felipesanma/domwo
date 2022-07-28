import Avatar from './Avatar';
import './userprofile.scss';
const UserProfile = () => {
  return (
    <div className='userprofile'>
      <h1>Perfil</h1>
      <Avatar name="Felipe" email="pipe@pipe.cl" src="" alt=""></Avatar>
    </div>
  )
}

export default UserProfile