import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface AddNewProps {
  onAdd: (name: string, email: string, role: string, employID: number) => void;
}

const validationSchema = Yup.object({
  name: Yup.string().min(3).required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  role: Yup.string().min(3).required('Role is required'),
  employID: Yup.number().min(3).required('EmployID is required').typeError('EmployID must be a number'),
});

const AddNew: React.FC<AddNewProps> = ({ onAdd }) => {
  const [open, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
      employID: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onAdd(values.name, values.email, values.role, parseInt(values.employID));
      formik.resetForm();
      handleClose();
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Entry</DialogTitle>
        <form onSubmit={formik.handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="Email"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              
            />
            <TextField
              margin="dense"
              id="role"
              name="role"
              label="Role"
              type="text"
              fullWidth
              value={formik.values.role}
              onChange={formik.handleChange}
              
            />
            <TextField
              margin="dense"
              id="employID"
              name="employID"
              label="EmployID"
              type="number"
              fullWidth
              value={formik.values.employID}
              onChange={formik.handleChange}
              
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default AddNew;
