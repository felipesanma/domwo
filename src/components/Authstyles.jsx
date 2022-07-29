import { Image, Text, translations, useTheme, View } from '@aws-amplify/ui-react';
import { I18n } from 'aws-amplify';
import domwoLogo from './grayscale_transparent_nobuffer.png';
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

export default components