import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Button,
  Stack,
  Divider,
  Input,
  Select,
  InputGroup,
  InputRightElement,
  useBreakpointValue,
  FormControl,
  FormLabel,
  IconButton,
  useColorModeValue,
} from "@chakra-ui/react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdLogin } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserStore } from "../../store/useUserStore";
import { LoaderIcon } from "react-hot-toast";

function Signup() {

  const [showPassword, setShowPassword] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

   const {signup, signUpLoading} = useUserStore();

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    country: "",
  });

  const handleSubmit = () => {
    signup(formData.fullname, formData.email, formData.password, formData.country);

    setFormData({
      fullname: "",
      email: "",
      password: "",
      country: "",
    })

    setCaptchaVerified(!captchaVerified)
  };

  // Responsive values
  const containerWidth = useBreakpointValue({
    base: "95%",
    md: "70%",
    lg: "50%",
  });
  const buttonSize = useBreakpointValue({ base: "sm", md: "md" });

  // Custom colors
  const razerGreen = "rgb(69,214,43)";
  const bgColor = useColorModeValue("black", "black");
  const borderColor = useColorModeValue(razerGreen, razerGreen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
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
                CREATE A REFLEX ACCOUNT
              </Heading>
              <Text
                color="white"
                fontSize={{ base: "sm", md: "md" }}
                textAlign="center"
              >
                Every Frame, Every Victory, Every Gear. We will be always there.
                Respect for gamers.
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
                <FormLabel color="white">Full Name</FormLabel>
                <Input
                  name="fullName"
                  value={formData.fullname}
                  onChange={(e) =>
                    setFormData({ ...formData, fullname: e.target.value })
                  }
                  focusBorderColor={razerGreen}
                  color="white"
                  placeholder="Enter full name"
                />
              </FormControl>

              <FormControl>
                <FormLabel color="white">Country</FormLabel>
                <Select
                  name="country"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  focusBorderColor={razerGreen}
                  color="gray.400"
                  placeholder="Select Country"
                >
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="IN">India</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel color="white">Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
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
                    onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
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

              {/* Terms and Conditions */}
              <VStack spacing={2}>
                <Heading as="h3" fontSize="sm" fontWeight="light" color="white">
                  Terms and Conditions
                </Heading>
                <Text fontSize="xs" color="white">
                  By creating an account, you agree to our{" "}
                  <Link style={{ color: razerGreen }}>Terms of Service</Link>{" "}
                  and <Link style={{ color: razerGreen }}>Privacy Policy</Link>.
                </Text>
              </VStack>

              {/* ReCAPTCHA */}
              <Box my={4} w="full" display="flex" justifyContent="center">
                <ReCAPTCHA
                  sitekey="6LdecqQlAAAAAF5O-JC8ProsSC_nHykNvfTpWp2B"
                  onChange={handleCaptchaChange}
                />
              </Box>

              {/* Submit Button */}
              <Button
                isDisabled={!captchaVerified || formData.fullname === "" || formData.email === "" || formData.country === "" || formData.password === ""}
                colorScheme="green"
                size={buttonSize}
                w="full"
                onClick={handleSubmit}
              >
               { signUpLoading ? <LoaderIcon
                    className="mr-2 h-5 w-5 animate-spin"
                    aria-hidden="true"
                  /> : "ACCEPT AND CREATE"}
              </Button>

              {/* Login Link */}
              <VStack spacing={2} pt={4}>
                <Text color="white">Already have an Account?</Text>
                <Button
                  as={Link}
                  to="/signin"
                  variant="ghost"
                  color="white"
                  leftIcon={<MdLogin />}
                  _hover={{ color: razerGreen }}
                >
                  Log in
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}

export default Signup;
