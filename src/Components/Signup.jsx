import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signup } from '../Services/authService';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password);
    history('/');
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Signup</Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Signup
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Signup;
