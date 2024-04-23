import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
//import SendIcon from '@mui/icons-material/Send';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Box, Typography, styled, useTheme, useMediaQuery } from '@mui/material';
import { Link } from "react-router-dom";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function Contact() {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const ContactBoxMain = styled(Box)({
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    justifyContent: 'center',
    marginTop: isMobile ? '0px' : '10rem',
    marginBottom: isMobile ? '1.87rem' : '15.25rem',
  });

  const LogoBox = styled(Box)({
    marginBottom: '3.125rem',
  });

  const LogoLink = styled(Link)({
    display: 'block',
    margin: '0 auto',
    width: '80%',
    textAlign: 'center',
    height: 'auto',
  });

  const ContactText = styled(Box)({
    flex: 1,
    marginBottom: '3.125rem',
    textAlign: 'center',
  });

  const Text = styled(Typography)({
    margin: '1.25rem',
    fontSize: '1.375rem',
  });

  const FormBox = styled(Box)({
    flex: 2,
  });

  const Form = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '80%',
    margin: '0 auto',
    alignContent: 'center',
  });

  const Label = styled('label')({
    marginBottom: '0.625rem',
    fontWeight: 'bold',
    fontSize: '1.125rem',
  });

  const Input = styled('input')({
    padding: '0.625rem',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    outline: 'none',
    backgroundColor: theme.palette.background.secondary,
  });

  const TextArea = styled('textarea')({
    padding: '0.625rem',
    marginBottom: '0.625rem',
    border: '1px solid #ccc',
    borderRadius: '0.25rem',
    fontSize: '0.875rem',
    height: '6.25rem',
    resize: 'vertical',
    outline: 'none',
    backgroundColor: theme.palette.background.secondary,
  });

  const Button = styled('button')({
    padding: '0.625rem 1.25rem',
    backgroundColor: '#DAD2BC',
    color: '#252323',
    borderWidth: '0rem',
    //borderRadius: '1.25rem',
    fontSize: '1.3rem',
    fontFamily: 'Koulen, sans-serif',
    cursor: 'pointer',
    outline: 'none',
    marginTop: '1rem',
    alignSelf: 'center',
  });

  const form = useRef();
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(process.env.REACT_APP_serviceKey, process.env.REACT_APP_templateKey, form.current, {
        publicKey: process.env.REACT_APP_publicKey,
      })
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <ContactBoxMain>
      <LogoBox>
        {isMobile && (
          <LogoLink to="/Home">
            <img src="../assets/ogol.svg" alt="Logo" />
          </LogoLink>
        )}
      </LogoBox>

      <ContactText>
        <Text>There's currently no artwork for sale but we'll keep you posted!</Text>
        <Text>If you have any questions, please send us an email and we'll get back to you.</Text>
      </ContactText>
      <FormBox>
        <Form ref={form} onSubmit={sendEmail}>
          <Label>Name</Label>
          <Input type="text" name="user_name" required />
          <Label>Email</Label>
          <Input type="email" name="user_email" required />
          <Label>Message</Label>
          <TextArea name="message" required />
          <Button type="submit">Send</Button>
        </Form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            Your message has been sent!
          </Alert>
        </Snackbar>
      </FormBox>

    </ContactBoxMain>
  );
};

export default Contact;
