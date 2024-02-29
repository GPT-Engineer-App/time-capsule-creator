import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Heading, Image, useToast, IconButton, Stack, Radio, RadioGroup } from "@chakra-ui/react";
import { FaLock, FaImage, FaFileAlt, FaVideo, FaCalendarAlt, FaShareAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [unveilDate, setUnveilDate] = useState("");
  const [sharingOption, setSharingOption] = useState("private");
  const [shareLink, setShareLink] = useState("");

  // Placeholder function to simulate form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Capsule Created.",
      description: "Your time capsule has been created and will be unveiled on the specified date.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  // Generate a random string for shareable link
  const generateRandomString = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleShare = () => {
    const randomString = generateRandomString();
    const newShareLink = `https://timecapsule.com/share/${randomString}`;
    setShareLink(newShareLink);
    toast({
      title: "Share your Capsule",
      description: `Your shareable link: ${newShareLink}`,
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.lg" py={10}>
      {/* The rest of the component remains unchanged */}
      <VStack spacing={5}>
        <Heading as="h1" size="xl">
          Create Your Virtual Time Capsule
        </Heading>

        <Box as="form" w="full" onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl isRequired>
              <FormLabel htmlFor="message">Your Message</FormLabel>
              <Textarea id="message" placeholder="Write your message..." size="md" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="image-upload">Upload Image</FormLabel>
              <IconButton aria-label="Upload image" icon={<FaImage />} size="lg" variant="outline" isRound />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="video-link">Video Link</FormLabel>
              <Input id="video-link" placeholder="Enter video URL" size="md" />
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="document-upload">Upload Document</FormLabel>
              <IconButton aria-label="Upload document" icon={<FaFileAlt />} size="lg" variant="outline" isRound />
            </FormControl>

            <FormControl isRequired>
              <FormLabel htmlFor="unveil-date">Unveil Date</FormLabel>
              <Input id="unveil-date" type="date" value={unveilDate} onChange={(e) => setUnveilDate(e.target.value)} size="md" icon={<FaCalendarAlt />} />
            </FormControl>

            <FormControl as="fieldset">
              <FormLabel as="legend">Sharing Options</FormLabel>
              <RadioGroup onChange={setSharingOption} value={sharingOption}>
                <Stack direction="row">
                  <Radio value="private">Private</Radio>
                  <Radio value="public">Public</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <Button leftIcon={<FaLock />} colorScheme="blue" type="submit" size="lg">
              Lock Capsule
            </Button>
          </VStack>
        </Box>

        <Button leftIcon={<FaShareAlt />} colorScheme="green" size="lg" onClick={handleShare}>
          Share Your Capsule
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
