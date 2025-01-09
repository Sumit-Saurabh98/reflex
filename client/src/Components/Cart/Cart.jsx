import {
  Box,
  Text,
  Flex,
  Image,
  Divider,
  Input,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { CartGreenButton } from "./CartGreenButton";
import {
  CartBigWhiteText,
  CartWhiteHeading,
  CartGrayText,
  CartGreenLinkText,
  CartWhiteSmallText,
  CartBlueLinkText,
} from "./CartTextDecoration";
import { Link } from "react-router-dom";
function Cart() {
  return (
    <Box bg="black" color="white" pt="100px">
      <Box bg="#1c1c1b">
        <Flex justify="space-between" w="80%" margin="auto" p="25px 0px">
          <CartWhiteHeading t={`Your cart total is US$${20}`} />
          <Link to="/payment">
            <CartGreenButton
              t={"Checkout"}
              w={"120px"}
            />
          </Link>
        </Flex>
      </Box>
      <Box w="80%" margin="auto">
        {/* {cartItems.length > 0 &&
          cartItems.map((item) => {
            return <CartProductCard item={item} />;
          })} */}
        <Divider />
        <Box p="30px 0px">
          <Flex align="center">
            <Box>
              <CartGreenLinkText t={"Become a RazerStore Rewards member "} />
            </Box>
            <Box pl="3px">
              <CartWhiteSmallText t={"using your Razer ID and earn up to"} />
            </Box>
            <Box>
              <Image
                src="https://www.razer.com/assets/images/silver/zsilver_72x72.png"
                w="18px"
                m="0px 5px"
              />
            </Box>
            <Box>
              <CartWhiteSmallText
                // t={`${Math.ceil(cartTotal.current / 20)} with this purchase.`}
              />
            </Box>
          </Flex>
          <CartBlueLinkText
            t={"What is RazerStore Rewards & what can I do with it?"}
          />
        </Box>
        <Divider />
        <Flex justify="space-between" p="100px 0px">
          <Flex align="center" justify="center" display="block" h="80vh">
            <Accordion allowToggle pb="30px">
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box color="#44d62c" as="span" flex="1" textAlign="left">
                      Have a promo code?
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Input
                    variant="unstyled"
                    placeholder="Write promocode"
                    size="md"
                    w="300px"
                  />
                  <CartGreenButton
                    t={"Apply"}
                    w={"100px"}
                  />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            <CartGrayText t={"Actual sales tax will be calculated later"} />
            <CartGrayText t={"upon entry of your billing/shipping address."} />
          </Flex>
          <Flex display="block" justify="right" w="50%">
            <Flex justify="space-between">
              <Box>
                <CartBigWhiteText t={"Subtotal"} />
                <CartGrayText t={"Excludes local taxes"} />
              </Box>
              <Box>
                {/* <CartBigWhiteText t={`US$${cartTotalState}`} /> */}
              </Box>
            </Flex>
            <Flex justify="space-between" p="20px 0px">
              <Box>
                <CartBigWhiteText t={"Shipping"} />
              </Box>
              <Box>
                <Text fontSize="2xl" color="#999">
                  Calculated after address entry
                </Text>
                <Text></Text>
              </Box>
            </Flex>
            <Divider />
            <Flex justify="space-between" p="20px 0px">
              <Box>
                <CartBigWhiteText t={"Your Total"} />
              </Box>
              <Box>
                {/* <CartBigWhiteText t={`US$${cartTotalState}`} /> */}
              </Box>
            </Flex>
            <Flex justify="right">
              <Box>
                <Link to="/payment">
                  <CartGreenButton
                    t={"Checkout"}
                    w={"120px"}
                    // onClick={saveTotalAmount}
                  />
                </Link>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default Cart;