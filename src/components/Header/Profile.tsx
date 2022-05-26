import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Filipe Motta</Text>
          <Text color="gray.300" fontSize="small">
            femotta96@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Filipe Motta"
        src="https://github.com/filipefdm.png"
      />
    </Flex>
  );
}
