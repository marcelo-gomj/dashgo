import { Box, Drawer, DrawerBody, DrawerCloseButton, 
   DrawerContent, DrawerHeader, DrawerOverlay, useBreakpointValue 
} from "@chakra-ui/react";

import { useSidebarDrawer } from "../../contexts/SideBarDrawer";
import { SideBarNav } from "./SideBarNav";

export function Sidebar() {
   const { isOpen, onClose } = useSidebarDrawer();

   const isDrawerSideBar = useBreakpointValue({
      base: true,
      lg: false
   })

   if(isDrawerSideBar){
      return (<Drawer isOpen={isOpen} placement="left" onClose={onClose}>
         <DrawerOverlay>
            <DrawerContent bg={"gray.800"}  p="4">
               
               <DrawerCloseButton mt={"6"} />
               
               <DrawerHeader>Navegacão</DrawerHeader>
               
               <DrawerBody>
                  <SideBarNav />
               </DrawerBody>

            </DrawerContent>
         </DrawerOverlay>

      </Drawer>)
   }

   return (
      <Box as="aside" w="64" mr="8">
         <SideBarNav />
      </Box>
   );
}