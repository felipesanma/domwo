import { Authenticator, Image, Text, translations, useTheme, View } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { Amplify, I18n } from 'aws-amplify';
import awsExports from '../../aws-exports';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Widget from '../../components/widget/Widget';
import domwoLogo from './grayscale_transparent_nobuffer.png';
import './home.scss';
I18n.putVocabularies(translations);
I18n.setLanguage('es');

I18n.putVocabulariesForLanguage('es', {
  'Send code': 'Enviar código'
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.small}>
        <Image
          alt="Domwo logo"
          src={domwoLogo}
        />
      </View>
    );
  },

  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Todos los derechos reservados
        </Text>
      </View>
    );
  }
}

Amplify.configure(awsExports);

const Home = ({ wgType }) => {
  console.log(wgType);
  return (
    <Authenticator components={components}>
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