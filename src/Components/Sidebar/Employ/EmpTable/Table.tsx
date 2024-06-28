import React, { useState, ChangeEvent } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Search from "./Search"; // Import the Search component
import AddNew from "./AddNew";

type RowData = {
  name: string;
  email: string;
  role: string;
  employID: number;
};

function createData(
  name: string,
  email: string,
  role: string,
  employID: number
): RowData {
  return { name, email, role, employID };
}

const initialRows: RowData[] = [
  createData("Shantanu", "Shantumurdio@gmail.com", "Developer", 1132),
  // Add more data as needed
];

export default function BasicTable() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [rows, setRows] = useState<RowData[]>(initialRows);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<RowData>({
    name: "",
    email: "",
    role: "",
    employID: 0,
  });

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleAdd = (
    name: string,
    email: string,
    role: string,
    employID: number
  ) => {
    setRows([...rows, createData(name, email, role, employID)]);
  };

  const handleEditOpen = (row: RowData) => {
    setEditData(row);
    setEditOpen(true);
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSave = () => {
    setRows(
      rows.map((row) => (row.employID === editData.employID ? editData : row))
    );
    setEditOpen(false);
  };

  const handleDelete = (employID: number) => {
    setRows(rows.filter((row) => row.employID !== employID));
  };

  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery) ||
      row.email.toLowerCase().includes(searchQuery) ||
      row.role.toLowerCase().includes(searchQuery) ||
      row.employID.toString().includes(searchQuery)
  );

  return (
    <div>
      <div style={{display: "flex" , justifyContent: "center",}}>
        <h1
          style={{
            textAlign: "center",
            borderBottom: "2px solid black",
            width: "300px",
          }}
        >
          AIT GLOBAL DATA
        </h1>
      </div>
      <div
        style={{
          padding: "10px",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <AddNew onAdd={handleAdd} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2 style={{ marginRight: "10px" }}>Search here</h2>
          <Search onSearch={handleSearch} />
        </div>
      </div>
      
      <TableContainer
        component={Paper}
        sx={{ width: "100%", marginTop: "px", border: "1px solid black" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Role</TableCell>
              <TableCell align="center">EmployID</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.employID}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.role}</TableCell>
                <TableCell align="center">{row.employID}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleEditOpen(row)}>Edit</Button>
                  <Button onClick={() => handleDelete(row.employID)}>Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={editOpen} onClose={() => setEditOpen(false)}>
        <DialogTitle>Edit Row</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={editData.name}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={editData.email}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="role"
            label="Role"
            type="text"
            fullWidth
            value={editData.role}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="employID"
            label="EmployID"
            type="number"
            fullWidth
            value={editData.employID}
            onChange={handleEditChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)}>Cancel</Button>
          <Button onClick={handleEditSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
