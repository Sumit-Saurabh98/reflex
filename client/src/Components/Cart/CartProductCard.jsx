import {
  Box,
  Text,
  Flex,
  Image,
  ListItem,
  UnorderedList,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  CartBigWhiteText,
  CartGrayText,
} from "./CartTextDecoration";

export function CartProductCard({ item }) {
  return (
    <Flex justify="space-between" p="20px 0px">
      <Flex width="60%">
        <Box mr="30px">
          <Image w="100px" src={item.img.img1} />
        </Box>
        <Box>
          <CartBigWhiteText t={item.title} />
          <UnorderedList>
            <ListItem>
              <CartGrayText t={item.specifications.force} />
            </ListItem>
            <ListItem>
              <CartGrayText t={item.specifications.processor} />
            </ListItem>
            <ListItem>
              <CartGrayText t={item.specifications.storage} />
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Flex w="30%" justify="space-between">
        <Flex>
          <Box>
            <IconButton
              variant="outline"
              colorScheme="black"
              icon={<AddIcon />}
              size="xs"
              onClick={() => {
                // handleQuantity(1);
              }}
              isDisabled={item.quantity >= 5}
            />
          </Box>
          <Box w="40px" align="center">
            <Text>{item.quantity}</Text>
          </Box>
          <Box>
            <IconButton
              variant="outline"
              colorScheme="black"
              icon={<MinusIcon />}
              size="xs"
              onClick={() => {
                // handleQuantity(-1);
              }}
              isDisabled={item.quantity <= 1}
            />
          </Box>
        </Flex>
        <Box>
          {/* <CartBigWhiteText t={`US$${item.cprice}`} /> */}
        </Box>
      </Flex>
    </Flex>
  );
}
