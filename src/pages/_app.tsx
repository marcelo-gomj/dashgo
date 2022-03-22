import App, { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawer';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <SideBarDrawerProvider>
            <ChakraProvider theme={ theme }>
                <Component {...pageProps} />
            </ChakraProvider>
        </SideBarDrawerProvider>
    )
}

export default MyApp
