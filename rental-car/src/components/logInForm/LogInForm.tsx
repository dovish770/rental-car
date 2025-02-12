'use client'
import React, { useState } from 'react';
import { TextField, Button, Grid, Container, Typography } from '@mui/material';

const LogInForm = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="מספר טלפון"
              variant="outlined"
              fullWidth
              value={phoneNumber}
              onChange={handlePhoneChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="סיסמה"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              התחבר
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default LogInForm;
