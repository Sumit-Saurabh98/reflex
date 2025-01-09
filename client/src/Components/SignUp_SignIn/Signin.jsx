import React, { useState } from "react";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Divider,
  useBreakpointValue,
  FormControl,
  FormLabel,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { SiAccenture } from "react-icons/si";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  // Responsive values
  const containerWidth = useBreakpointValue({ base: "95%", md: "70%", lg: "40%" });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  // Custom colors
  const razerGreen = "rgb(69,214,43)";
  const bgColor = useColorModeValue("black", "black");
  const borderColor = useColorModeValue(razerGreen, razerGreen);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCaptchaChange = () => {
    setCaptchaVerified(true);
  };

  return (
    <Box
      minH="100vh"
      bgImage="https://razerid-assets.razerzone.com/static/media/serpents-eye-v2-20220906.dae1e41f.jpg"
      bgPosition="center"
      bgSize="cover"
      py={8}
    >
      <Container maxW={containerWidth} centerContent>
        <Box
          bg={bgColor}
          border="2px"
          borderColor={borderColor}
          borderRadius="md"
          p={{ base: 4, md: 8 }}
          w="full"
        >
          <VStack spacing={6} align="stretch">
            {/* Header */}
            <VStack spacing={2} align="center">
              <Heading
                color="white"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="thin"
                textAlign="center"
              >
                LOGIN TO REFLEX ACCOUNT
              </Heading>
              <Text
                color="white"
                fontSize={{ base: "sm", md: "md" }}
                textAlign="center"
              >
                Welcome back to your Reflex account. Please sign in to continue
              </Text>
            </VStack>

            {/* Social Login Buttons */}
            <Stack w="full" justify="center" py={2}>
              <Button
                leftIcon={<AiFillGoogleCircle size={20} />}
                colorScheme="gray"
                size={buttonSize}
                w="full"
                aria-label="Google Login"
              >
                Continue with Google
              </Button>
            </Stack>

            {/* Divider */}
            <Stack direction="row" align="center">
              <Divider />
              <Text color="gray.500" px={3} whiteSpace="nowrap">
                or
              </Text>
              <Divider />
            </Stack>

            {/* Form */}
            <VStack as="form" spacing={4}>

              <FormControl>
                <FormLabel color="white">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  focusBorderColor={razerGreen}
                  color="white"
                  placeholder="Enter your email"
                />
              </FormControl>

              <FormControl>
                <FormLabel color="white">Password</FormLabel>
                <InputGroup>
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    focusBorderColor={razerGreen}
                    color="white"
                    placeholder="Enter password"
                  />
                  <InputRightElement>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      color="gray.400"
                      icon={showPassword ? <FiEye /> : <FiEyeOff />}
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {/* ReCAPTCHA */}
              <Box my={4} w="full" display="flex" justifyContent="center">
                <ReCAPTCHA
                  sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
                  onChange={handleCaptchaChange}
                />
              </Box>

              {/* Submit Button */}
              <Button
                isDisabled={!captchaVerified}
                colorScheme="green"
                size={buttonSize}
                w="full"
              >
                Reflex Login
              </Button>

              {/* Login Link */}
              <VStack spacing={2} pt={4}>
                <Text color="white">Don&apos;t have an Account?</Text>
                <Button
                  as={Link}
                  to="/signup"
                  variant="ghost"
                  color="white"
                  rightIcon={<SiAccenture />}
                  _hover={{ color: razerGreen }}
                >
                  Create Reflex account
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default Signin;