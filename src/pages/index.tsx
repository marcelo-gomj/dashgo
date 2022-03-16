import { Flex, Button, Stack} from '@chakra-ui/react';
import { Input } from '../components/Form';

export default function Home() {
    return (
            <Flex 
                w='100vw' 
                h='100vh' 
                justify='center' 
                align='center'
            >
                <Flex 
                    as='form'
                    width="100%"
                    maxWidth={360}
                    bg="gray.800"
                    p="8"
                    borderRadius={8}
                    flexDir="column"
                >
                    <Stack spacing="4">
                        <Input 
                            name="email" 
                            type="email"
                            label="E-mail" 
                        />

                        <Input 
                            name='password'
                            label='password'
                            type='Senha'
                        />
                    </Stack>

                    <Button 
                        type='submit' 
                        mt="6" 
                        colorScheme="pink"
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>
    )
}
