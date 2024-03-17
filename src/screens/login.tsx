import { ScreenWrapper } from '../components/screen-wrapper';
import { Box, Button, Text, TextInput } from '../components/ui';

export function LoginScreen() {
  return (
    <ScreenWrapper>
      <Box
        justifyContent="center"
        flexDirection="column"
        alignItems="center"
        gap="m"
        padding="m"
        height="100%">
        <Box>
          <Text variant="heading" textAlign="center">
            lftm
          </Text>
          <Text color="$mutedForeground" textAlign="center">
            Type your email to get an otp code
          </Text>
        </Box>
        <TextInput
          bg="$muted"
          p="m"
          borderRadius="xs"
          placeholder="Email"
          width="100%"
        />
        <Button rippleColor="$primaryForeground" width="100%">
          <Text textAlign="center" color="$primaryForeground">
            Get OTP
          </Text>
        </Button>
      </Box>
    </ScreenWrapper>
  );
}
