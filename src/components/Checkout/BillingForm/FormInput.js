import { Grid, TextField } from '@material-ui/core';
import { Controller, useFormContext } from 'react-hook-form';

function FormInput({ name, label }) {
  const { control, register, errors } = useFormContext();

  return (
    <Grid item xs={12} sm={6}>
      <Controller
        // render={(props) => <TextField {...props} />}
        // render={() => <TextField />}
        as={TextField}
        name={name}
        control={control}
        label={label}
        fullWidth
        required
        variant="outlined"
        // ref={register({
        //   minLength: 4,
        // })}
        // error
        defaultValue=""
        // helperText="Incorrect entry!"
        // rules={{ required: true }}
        // ref={register({
        //   required: true,
        //   pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        //   minLength: 2,
        // })}
      />
      {/* {errors.email && errors.email.type === 'required' && (
        <p className="errorMsg">Email is required.</p>
      )}
      {errors.email && errors.email.type === 'pattern' && (
        <p className="errorMsg">Email is not valid.</p>
      )} */}
    </Grid>
  );
}

export default FormInput;
