import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react';
import { RiMenuLine } from 'react-icons/ri';
import { useSidebarDrawer } from '../../contexts/SideBarDrawer';
import { Logo } from './Logo';
import { NotitificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header(){
    const { onOpen } = useSidebarDrawer();
    
    const isWideVersion = useBreakpointValue({
        base : false,
        lg: true,
    })

    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            {!isWideVersion && (
                <IconButton
                    icon={<Icon as={RiMenuLine} />} 
                    aria-label={'open navigation'}
                    fontSize={"24"}
                    variant="unstyled"        
                    onClick={onOpen}          
                    mr="2"

                ></IconButton>
            )}
            <Logo />

            { isWideVersion && <SearchBox /> }

            <Flex 
                align="center"
                ml="auto"
            >
                <NotitificationNav />
                <Profile ShowProfileData={ isWideVersion }/>
            </Flex>
        </Flex>
    )
}