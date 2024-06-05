import React, { useState } from 'react';
import { searchByCity, searchByName, searchByType } from '../Services/breweryService';
import { Link } from 'react-router-dom';
import { Container, TextField, Button, Typography, Box, Select, MenuItem, FormControl, InputLabel, List, ListItem, ListItemText } from '@mui/material';

const Search = () => {
  const [query, setQuery] = useState('');
  const [type, setType] = useState('city');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    let response;
    if (type === 'city') {
      response = await searchByCity(query);
    } else if (type === 'name') {
      response = await searchByName(query);
    } else if (type === 'type') {
      response = await searchByType(query);
    }
    setResults(response.data);
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>Search Breweries</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Search By</InputLabel>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <MenuItem value="city">City</MenuItem>
            <MenuItem value="name">Name</MenuItem>
            <MenuItem value="type">Type</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Search Query"
          variant="outlined"
          fullWidth
          margin="normal"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleSearch}>
          Search
        </Button>
        <List>
          {results.map(brewery => (
            <ListItem key={brewery.id} component={Link} to={`/brewery/${brewery.id}`} button>
              <ListItemText primary={brewery.name} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Search;
