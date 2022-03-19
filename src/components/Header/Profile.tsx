import { Box, Flex, Text, Avatar} from '@chakra-ui/react';

export function Profile (){
    return (
        <Flex 
            align="center"
        >
            <Box 
                mr="4"
                textAlign="right"
            >
                <Text>Marcelo Gomes</Text>
                <Text 
                    color='gray.300'
                    fontSize="small"
                >
                    marcelomgj005@gmail.com
                </Text>
            </Box>

            <Avatar size="md" name="Marcelo Gomes" src="https://github.com/marcelo-gomj.png"/>
        </Flex>
    );
}