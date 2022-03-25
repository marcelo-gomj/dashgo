import { Flex, Button, Stack} from '@chakra-ui/react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Input } from '../components/Form/Input';

type signInFormData = {
    email: string;
    password : string;
}

export default function Home() {
    const { register, handleSubmit, formState } = useForm();

    const handleSignIn:SubmitHandler<signInFormData> = async (values, event) => {
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.log(values);
    }

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
                    maxWidth ={360}
                    bg="gray.800"
                    p="8"
                    borderRadius={8}
                    flexDir="column"
                    onSubmit={handleSubmit(handleSignIn)}
                >
                    <Stack spacing="4">
                        <Input 
                            name="email" 
                            type="email"
                            label="E-mail" 
                             {...register('email')}
                        />

                        <Input 
                            name='password'
                            label='Senha'
                            type='password'
                            {...register('password')}
                        />
                    </Stack>

                    <Button 
                        type='submit' 
                        mt="6" 
                        colorScheme="pink"
                        isLoading={formState.isSubmitting}
                    >
                        Entrar
                    </Button>
                </Flex>
            </Flex>
    )
}
