'use client'
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { TextField, Button, Grid, Container } from '@mui/material';

interface FormData {
  name: string;
  idNumber: string;
  licenseNumber: string;
  phoneNumber: string;
}

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    idNumber: '',
    licenseNumber: '',
    phoneNumber: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="שם הנהג"
              variant="outlined"
              fullWidth
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="תעודת זהות"
              variant="outlined"
              fullWidth
              name="idNumber"
              value={formData.idNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="מספר רישיון נהיגה"
              variant="outlined"
              fullWidth
              name="licenseNumber"
              value={formData.licenseNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="טלפון נייד"
              variant="outlined"
              fullWidth
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              הרשם
            </Button>
          </Grid>
        </Grid>
      </form>
      
    </Container>
  );
};

export default SignInForm;
