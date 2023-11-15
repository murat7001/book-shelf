import React from 'react';
import { useFormik } from 'formik';
import validationSchema from './validation';
import { Alert, Box, Button, FormControl, FormHelperText, FormLabel, Stack, TextField, Typography } from '@mui/material';

function Signup() {
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            phone: '',
            address: '',
        },
        validationSchema,
        onSubmit: async (values, bag) => {
            
        },
    });

    return (
        <Box display="flex" justifyContent="center" alignItems="center" >
            <Stack width="400px" spacing={4}>
                <Typography variant="h4" textAlign="center">
                    Sign Up
                </Typography>

                {formik.errors.general && <Alert severity="error">{formik.errors.general}</Alert>}

                <form onSubmit={formik.handleSubmit}>

                    <FormControl fullWidth>
                        <FormLabel>Username</FormLabel>
                        <TextField
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            error={formik.touched.username && Boolean(formik.errors.username)}
                        />

                        {formik.touched.username && formik.errors.username && (
                            <FormHelperText error>{formik.errors.username}</FormHelperText>
                        )}
                    </FormControl>
                    <FormControl fullWidth>
                        <FormLabel>E-mail</FormLabel>
                        <TextField
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            autoFocus
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

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Password Confirm</FormLabel>
                        <TextField
                            name="passwordConfirm"
                            type="password"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.passwordConfirm}
                            error={formik.touched.passwordConfirm && Boolean(formik.errors.passwordConfirm)}
                        />

                        {formik.touched.passwordConfirm && formik.errors.passwordConfirm && (
                            <FormHelperText error>{formik.errors.passwordConfirm}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Phone Number (Optional)</FormLabel>
                        <TextField
                            name="phone"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                        />

                        {formik.touched.phone && formik.errors.phone && (
                            <FormHelperText error>{formik.errors.phone}</FormHelperText>
                        )}
                    </FormControl>

                    <FormControl fullWidth mt={2}>
                        <FormLabel>Address (Optional)</FormLabel>
                        <TextField
                            name="address"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            error={formik.touched.address && Boolean(formik.errors.address)}
                        />

                        {formik.touched.address && formik.errors.address && (
                            <FormHelperText error>{formik.errors.address}</FormHelperText>
                        )}
                    </FormControl>
                    <Button sx={{ marginTop: '10px' }} fullWidth variant="contained" color="primary" type="submit" mt={4}>
                        Sign Up
                    </Button>
                </form>
            </Stack>
        </Box>
    );
}

export default Signup;
