import React, { useState, ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
import Search from "./Search";
import { useSelector } from "react-redux";

interface ProjectData {
  id: number;
  name: string;
  project: string;
  domain: string;
  backendTech: string;
}

interface UserSlice {
  projectData: ProjectData[];
}

interface RootState {
  user: UserSlice;
}

const createData = (
  id: number,
  name: string,
  project: string,
  domain: string,
  backendTech: string
): ProjectData => {
  return { id, name, project, domain, backendTech };
};

const BasicTable: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [rows, setRows] = useState<ProjectData[]>([]);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<ProjectData>({
    id: 0,
    name: "",
    project: "",
    domain: "",
    backendTech: "",
  });
  const navigate = useNavigate();
  const projectData = useSelector((state: RootState) => state.user.projectData);
  
  // Load from local storage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem("projectData");
    if (storedData) {
      setRows(JSON.parse(storedData));
    }
  }, []);

  // Update local storage whenever projectData changes
  useEffect(() => {
    if (projectData && Array.isArray(projectData)) {
      localStorage.setItem("projectData", JSON.stringify(projectData));
      setRows(projectData);
    }
  }, [projectData]);

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
  };

  const handleEditOpen = (row: ProjectData) => {
    setEditData(row);
    setEditOpen(true);
  };

  const handleEditChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSave = () => {
    const updatedRows = rows.map((row) =>
      row.id === editData.id ? { ...editData } : row
    );
    setRows(updatedRows);
    setEditOpen(false); // Close the edit dialog after saving

    // Update projectData in Redux or local state as needed
  };

  const handleDelete = (id: number) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);

    // Update projectData in Redux or local state as needed
  };

  const handleAddNew = () => {
    navigate("/compform");
  };

  const filteredRows = rows.filter(
    (row) =>
      row.name.toLowerCase().includes(searchQuery) ||
      row.project.toLowerCase().includes(searchQuery) ||
      row.domain.toLowerCase().includes(searchQuery) ||
      row.backendTech.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1
          style={{
            textAlign: "center",
            borderBottom: "2px solid black",
            width: "300px",
          }}
        >
          AIT GLOBAL DATA
        </h1>
        <h1
          style={{
            textAlign: "center",
            borderBottom: "2px solid black",
            width: "300px",
          }}
        >
          Company DATA
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddNew}
        >
          Add New
        </Button>
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
        sx={{ width: "100%", marginTop: "10px", border: "1px solid black" }}
      >
        
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Project Name</TableCell>
              <TableCell align="center">Project Domain</TableCell>
              <TableCell align="center">FrontEnd Technology</TableCell>
              <TableCell align="center">Backend Technology</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.project}</TableCell>
                <TableCell align="center">{row.domain}</TableCell>
                <TableCell align="center">{row.backendTech}</TableCell>
                <TableCell align="center">
                  <Button onClick={() => handleEditOpen(row)}>Edit</Button>
                  <Button onClick={() => handleDelete(row.id)}>Delete</Button>
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
            name="project"
            label="Project"
            type="text"
            fullWidth
            value={editData.project}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="domain"
            label="Domain"
            type="text"
            fullWidth
            value={editData.domain}
            onChange={handleEditChange}
          />
          <TextField
            margin="dense"
            name="backendTech"
            label="Backend Technology"
            type="text"
            fullWidth
            value={editData.backendTech}
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
};

export default BasicTable;
