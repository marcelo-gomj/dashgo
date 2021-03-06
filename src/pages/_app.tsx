import App, { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { SideBarDrawerProvider } from '../contexts/SideBarDrawer';
import { MakeServer } from "../services/mirageJS";
import { QueryClientProvider } from 'react-query';

import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../services/queryClient';


if(process.env.NODE_ENV === 'development'){
    MakeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <SideBarDrawerProvider>
                <ChakraProvider theme={ theme }>
                    <Component {...pageProps} />
                </ChakraProvider>
            </SideBarDrawerProvider>
            
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default MyApp
