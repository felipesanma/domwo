import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import awsExports from '../../aws-exports';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import './home.scss';


Amplify.configure(awsExports);

const Home = ({ wgType }) => {
  console.log(wgType);
  return (
    <Authenticator>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className='widgets'>
            <Widget type={wgType} />
          </div>
        </div>
      </div>
    </Authenticator>
  )
}

export default Home