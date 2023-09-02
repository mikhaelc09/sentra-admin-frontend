import React from "react";
import { Box, Button, Text, Input, FormGroup, Label, MessageBox } from "@adminjs/design-system";
import { useSelector } from "react-redux";

const Login = () => {
  const { action, errorMessage } = window.__APP_STATE__;
  const branding = useSelector((state) => state.branding);

  return (
    <Box
      flex={true}
      justifyContent="center"
      alignItems="center"
      height="100%"
      paddingX="25%"
    >
      <Box
        boxShadow={"2px 2px 10px DarkGray"}
        flexGrow={0}
        width="50%"
        height="70%"
        flex={true}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        bg="primary100"
        borderRadius="12px"
        paddingY="15%"
      >
        <img src={branding.logo} alt="" style={{ maxWidth: "160px" }} />
        <Text
          color="white"
          fontSize="1.6em"
          marginTop="24px"
          marginX="16px"
          textAlign="center"
        >
          WEBSITE ADMIN ABSENSI DAN PENGGAJIAN PT SENTRA MEDIKA SURABAYA
        </Text>
      </Box>
      <Box
        boxShadow={"2px 2px 10px DarkGray"}
        flexGrow={1}
        height="70%"
        flex={true}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        bg="white"
        borderRadius="12px"
      >
        <Box
          flex={true}
          alignItems="start"
          flexDirection='column'
          justifyContent="start"
          padding="24px"
          gapY='20px' width='100%'
          as='form'
          action={action}
          method='POST'
        >
          <Text fontWeight="bold" fontSize="1.6em" marginBottom={!errorMessage && '2em'}>
            Login
          </Text>
          {errorMessage && (
              <MessageBox
                my="lg"
                message={errorMessage.split(' ').length > 1 ? errorMessage : 'Email atau password salah atau akun anda tidak memiliki akses'}
                variant="danger"
              />
            )}
          <FormGroup>
            <Label>Email</Label>
            <Input name='email'/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input name='password' type='password'/>
          </FormGroup>
          <Button variant='primary' >Sign in</Button>
        </Box>
      </Box>
    </Box>
  );
};
export default Login;
