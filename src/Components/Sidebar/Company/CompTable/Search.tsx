import React from 'react';
import TextField from '@mui/material/TextField';

interface SearchProps {
  onSearch: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <TextField
      label="Search"
      variant="outlined"
      onChange={handleSearchChange}
      margin="normal"
    />
  );
};

export default Search;
