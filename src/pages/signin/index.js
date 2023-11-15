import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';

function Signin() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: async (values, bag) => {
        
        },
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center">
            <Stack width="400px" spacing={4}>
                <Typography variant="h4" textAlign="center">
                    Sign In
                </Typography>

                {formik.errors.general && (
                    <Alert severity="error">{formik.errors.general}</Alert>
                )}

                <form onSubmit={formik.handleSubmit}>
                    <FormControl fullWidth>
                        <FormLabel>Username</FormLabel>
                        <TextField
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                            autoFocus
                        />

                        {formik.touched.username && formik.errors.username && (
                            <FormHelperText error>{formik.errors.username}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>E-mail</FormLabel>
                        <TextField
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                        />

                        {formik.touched.email && formik.errors.email && (
                            <FormHelperText error>{formik.errors.email}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Password</FormLabel>
                        <TextField
                            name="password"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                        />

                        {formik.touched.password && formik.errors.password && (
                            <FormHelperText error>{formik.errors.password}</FormHelperText>
                        )}
                    </FormControl>

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        type="submit"
                        sx={{ marginTop: '10px' }}
                    >
                        Sign In
                    </Button>
                </form>
            </Stack>
        </Box>
    );
}

export default Signin;
