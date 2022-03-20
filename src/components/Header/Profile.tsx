import { Box, Flex, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
    ShowProfileData ?: Boolean
}

export function Profile ({ ShowProfileData = true } : ProfileProps){
    return (
        <Flex 
            align="center"
        >
        
            {ShowProfileData && (
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
            )}
            <Avatar size="md" name="Marcelo Gomes" src="https://github.com/marcelo-gomj.png"/>
        </Flex>
    );
}