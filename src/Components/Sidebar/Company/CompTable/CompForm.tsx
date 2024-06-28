import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Select,
  MenuItem,
  InputLabel,
  Grid,
  Paper,
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import SideBar from "../../SideBar"
import Header from "../../../Header/HeaderPart"

interface FormValues {
  projectName: string;
  projectDomain: string;
  frontendTech: string[];
  backendTech: string;
}

interface ProjectFormProps {
  onAdd: (name: string, project: string, domain: string, backendTech: string) => void;
}

const validationSchema = Yup.object({
  projectName: Yup.string().min(3).required('Project Name is required'),
  projectDomain: Yup.string().required('Project Domain is required'),
  frontendTech: Yup.array().min(1, 'Select at least one frontend technology'),
  backendTech: Yup.string().required('Backend Technology is required'),
});

const ProjectForm: React.FC<ProjectFormProps> = ({ onAdd }) => {
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      projectName: '',
      projectDomain: '',
      frontendTech: [],
      backendTech: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onAdd(values.projectName, values.projectDomain, values.frontendTech.join(', '), values.backendTech);
      navigate('/');
    },
  });

  return (
    
    <>
    <Header/>
    <SideBar/>
    <Paper style={{ padding: 16 , marginLeft:"250px"}}>
      
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="projectName"
              name="projectName"
              label="Project Name"
              value={formik.values.projectName}
              onChange={formik.handleChange}
              error={formik.touched.projectName && Boolean(formik.errors.projectName)}
              helperText={formik.touched.projectName && formik.errors.projectName}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Project Domain</FormLabel>
              <RadioGroup
                aria-label="projectDomain"
                name="projectDomain"
                value={formik.values.projectDomain}
                onChange={formik.handleChange}
              >
                <FormControlLabel value="e-Commerce" control={<Radio />} label="e-Commerce" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
              {formik.touched.projectDomain && formik.errors.projectDomain && (
                <div style={{ color: 'red' }}>{formik.errors.projectDomain}</div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">FrontEnd Technology</FormLabel>
              <FormControlLabel
                control={
                  <Checkbox
                    name="frontendTech"
                    value="React JS"
                    onChange={formik.handleChange}
                    checked={formik.values.frontendTech.includes('React JS')}
                  />
                }
                label="React JS"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="frontendTech"
                    value="Angular JS"
                    onChange={formik.handleChange}
                    checked={formik.values.frontendTech.includes('Angular JS')}
                  />
                }
                label="Angular JS"
              />
              {formik.touched.frontendTech && formik.errors.frontendTech && (
                <div style={{ color: 'red' }}>{formik.errors.frontendTech}</div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="backendTech-label">Backend Technology</InputLabel>
              <Select
                labelId="backendTech-label"
                id="backendTech"
                name="backendTech"
                value={formik.values.backendTech}
                onChange={formik.handleChange}
                error={formik.touched.backendTech && Boolean(formik.errors.backendTech)}
              >
                <MenuItem value="Node Js">Node Js</MenuItem>
                <MenuItem value=".NET">.NET</MenuItem>
                <MenuItem value="Java">Java</MenuItem>
              </Select>
              {formik.touched.backendTech && formik.errors.backendTech && (
                <div style={{ color: 'red' }}>{formik.errors.backendTech}</div>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    </>
    
  );
};

export default ProjectForm;
