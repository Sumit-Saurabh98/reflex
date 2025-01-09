import {
  Box,
  Grid,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Filter from "./Filter";
import { Link } from "react-router-dom";

function Pc() {


  return (
    <Box bg="#222">
      <Box bg="black" textAlign="center" p={10}>
        <Heading fontSize={20} color="white" mt={10}>
          PC
        </Heading>
        <Flex justifyContent="space-evenly" w="60%" m="auto" mt={5}>
          <Link>
            <Heading fontSize={12} color="#44d62c">
              LAPTOPS
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              MONITORS
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              DESKTOPS & CASES
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              EGPUS
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              ACCESSORIES
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              ACCESSORIES
            </Heading>
          </Link>
          <Link>
            <Heading fontSize={12} color="#999999">
              COOLING
            </Heading>
          </Link>
        </Flex>
      </Box>

      <Flex justifyContent="center" mt="20px">
        <Box w="20%" h="500px" color="white" mr="10px">
          {/* <Filter setSort={setSort} setFilter={setFilter} /> */}
        </Box>
        <Grid w="70%" gridTemplateColumns="repeat(3,1fr)" gap="20px" ml="5%">
          {/* {data?.length > 0 &&
            data?.map((e, index) => {
              return (
                <GridItem
                  key={index}
                  alignItems="center"
                  bg="#252525"
                  color="white"
                >
                  <Image src={e.img.img1} w="100%" m="auto"></Image>
                  <Box bg="black" p={5} textAlign="left">
                    <Text ml="-5px" fontSize={25}>
                      {e.title}
                    </Text>
                    <UnorderedList color="#999999" mt="20px" mb="20px">
                      <ListItem>{e.specifications.processor}</ListItem>
                      <ListItem>
                        {e.specifications.screen}&nbsp;inch Full HD
                      </ListItem>
                      <ListItem>{e.specifications.force}</ListItem>
                      <ListItem>{e.specifications.windows}</ListItem>
                      <ListItem>{e.specifications.force}</ListItem>
                    </UnorderedList>

                    <Link to={`/productDetails/${e.id}`}>View Details</Link>
                    <br></br>
                    <Text>US$&nbsp;{e.price} </Text>
                    <Text textDecor="line-through" color="#999999">
                      US$&nbsp;{e.cprice}{" "}
                    </Text>
                    <Button
                      bg="#44d62c"
                      mt="20px"
                      w="45%"
                      onClick={() => {
                        dispatch(addToCart(e));
                        toast({
                          title: "ADDED",
                          description: "Product Added To Cart",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        });
                      }}
                    >
                      Add To Cart
                    </Button>
                  </Box>
                </GridItem>
              );
            })} */}
        </Grid>
      </Flex>
    </Box>
  );
}

export default Pc;
