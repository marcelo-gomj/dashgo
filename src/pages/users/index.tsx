import { Box, Button, Flex, Table, Checkbox, Tbody, 
Heading, Icon, Thead, Tr, Th, Td, Text } from '@chakra-ui/react';
import { RiAddLine, RiPencilLine, RiUserAddLine } from 'react-icons/ri';
import { Header } from '../../components/Header';
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar';

export default function UserList(){
    return (
        <Box>
            <Header />

            <Flex 
                w="100%"
                my="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                
                <Sidebar />

                <Box 
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex 
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading 
                            size="lg"
                            fontWeight="normal"
                        >
                            Úsuarios
                        </Heading>

                        <Button 
                            as="a" 
                            size="sm" 
                            fontSize="sm" 
                            colorScheme="pink"
                            leftIcon={<Icon fontSize="20" as={RiAddLine}></Icon>}

                        >
                            Criar novo úsuario
                        </Button>
                    </Flex>

            <Table colorScheme="whiteAlpha">
                <Thead>
                    <Tr>
                        <Th px="6" color="gray.300" width="8">
                            <Checkbox 
                                colorScheme="pink" 
                            />
                        </Th>
                        <Th>
                            Úsuarios
                        </Th>
                        <Th>Data de cadastro</Th>
                        <Th width="8"></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td px="6">
                            <Checkbox 
                                colorScheme="pink" 
                            />
                        </Td>
                        <Td>
                            <Box>
                                <Text
                                    fontWeight="bold"
                                >
                                    Marcelo Gomes
                                </Text>
                                <Text
                                    fontSize="sm"
                                    color="gray.300"
                                >
                                    Marcelo Gomes
                                </Text>
                            </Box>
                        </Td>
                        <Td>03 de Abril, 2022</Td>
                        <Td>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple"
                                leftIcon={<Icon fontSize="16" as={RiPencilLine}></Icon>}
                                
                            >
                                Editar
                            </Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td px="6">
                            <Checkbox 
                                colorScheme="pink" 
                            />
                        </Td>
                        <Td>
                            <Box>
                                <Text
                                    fontWeight="bold"
                                >
                                    Marcelo Gomes
                                </Text>
                                <Text
                                    fontSize="sm"
                                    color="gray.300"
                                >
                                    Marcelo Gomes
                                </Text>
                            </Box>
                        </Td>
                        <Td>03 de Abril, 2022</Td>
                        <Td>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple"
                                leftIcon={<Icon fontSize="16" as={RiPencilLine}></Icon>}
                                
                            >
                                Editar
                            </Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td px="6">
                            <Checkbox 
                                colorScheme="pink" 
                            />
                        </Td>
                        <Td>
                            <Box>
                                <Text
                                    fontWeight="bold"
                                >
                                    Marcelo Gomes
                                </Text>
                                <Text
                                    fontSize="sm"
                                    color="gray.300"
                                >
                                    Marcelo Gomes
                                </Text>
                            </Box>
                        </Td>
                        <Td>03 de Abril, 2022</Td>
                        <Td>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple"
                                leftIcon={<Icon fontSize="16" as={RiPencilLine}></Icon>}
                                
                            >
                                Editar
                            </Button>
                        </Td>
                    </Tr>
                    <Tr>
                        <Td px="6">
                            <Checkbox 
                                colorScheme="pink" 
                            />
                        </Td>
                        <Td>
                            <Box>
                                <Text
                                    fontWeight="bold"
                                >
                                    Marcelo Gomes
                                </Text>
                                <Text
                                    fontSize="sm"
                                    color="gray.300"
                                >
                                    Marcelo Gomes
                                </Text>
                            </Box>
                        </Td>
                        <Td>03 de Abril, 2022</Td>
                        <Td>
                            <Button 
                                as="a" 
                                size="sm" 
                                fontSize="sm" 
                                colorScheme="purple"
                                leftIcon={<Icon fontSize="16" as={RiPencilLine}></Icon>}
                                
                            >
                                Editar
                            </Button>
                        </Td>
                    </Tr>
                </Tbody>
            </Table>

            <Pagination />
                </Box>
            </Flex>

        </Box>
    );
}