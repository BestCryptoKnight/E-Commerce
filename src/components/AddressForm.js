import { Grid, TextField, Typography } from '@material-ui/core';
import { Controller, FormProvider, useForm } from 'react-hook-form';

const AddressForm = () => {
  const { handleSubmit, control } = useForm();
  //   const { control } = useFormContext();
  const isError = false;

  return (
    <>
      <Typography variant="h6" gutterBottom align="center">
        Step 1: Select billing information...
      </Typography>
      <FormProvider>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                name="firstName"
                control={control}
                label="First name"
                fullWidth
                required
                error={isError}
                defaultValue=""
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Controller
                as={TextField}
                name="lastName"
                control={control}
                label="Last name"
                fullWidth
                required
                error={isError}
                defaultValue=""
              />
            </Grid>
            {/* <FormInput required name="firstName" label="First name" />
            <FormInput required name="lastName" label="Last name" />
            <FormInput required name="address1" label="Address line 1" />
            <FormInput required name="email" label="Email" />
            <FormInput required name="city" label="City" />
            <FormInput required name="zip" label="Zip / Postal code" /> */}
          </Grid>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
