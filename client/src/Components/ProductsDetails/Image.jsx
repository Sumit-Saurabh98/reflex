

import React, { useEffect } from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";
function ImageComp() {

    return (
      <Box>
        {
          <Box
          bgImage=""
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="100%"
          textAlign="center"
          h="700px"
        >
  <Box mr={4} pt="50px">
                <Box
                  pt="70px"
                  pl={4}
                  w={28}
                  h={24}
                  mb={2}
                  cursor="pointer"
                  borderColor="red"
                >
                  <Image
                    src=""
                    h={20}
                    border="1px"
                    borderColor="gray.200"
                  />
                  {/* CiDeliveryTruck */}
                </Box>
          </Box>
        </Box>
        }
       
      </Box>

     
     
      );
  }
  

export default ImageComp;
