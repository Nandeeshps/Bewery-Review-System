import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getBrewery } from '../Services/breweryService';
import { getReviews, addReview } from '../Services/reviewService';
import { Container, Typography, Box, List, ListItem, ListItemText, TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Brewery = () => {
  const { id } = useParams();
  const [brewery, setBrewery] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(1);
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchBrewery = async () => {
      const response = await getBrewery(id);
      setBrewery(response.data);
    };

    const fetchReviews = async () => {
      const response = await getReviews();
      setReviews(response.data.reviews.filter(review => review.breweryId === id));
    };

    fetchBrewery();
    fetchReviews();
  }, [id]);

  const handleAddReview = async () => {
    const newReview = { breweryId: id, rating, description };
    await addReview(newReview);
    setReviews([...reviews, newReview]);
  };

  if (!brewery) return <div>Loading...</div>;

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>{brewery.name}</Typography>
        <Typography variant="body1">{brewery.street}, {brewery.city}, {brewery.state}</Typography>
        <Typography variant="body1">{brewery.phone}</Typography>
        <Typography variant="body1"><a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></Typography>
        <Typography variant="h5" gutterBottom>Reviews</Typography>
        <List>
          {reviews.map((review, index) => (
            <ListItem key={index}>
              <ListItemText primary={`Rating: ${review.rating}`} secondary={review.description} />
            </ListItem>
          ))}
        </List>
        <Typography variant="h5" gutterBottom>Add a Review</Typography>
        <FormControl fullWidth margin="normal">
          <InputLabel>Rating</InputLabel>
          <Select value={rating} onChange={(e) => setRating(e.target.value)}>
            {[1, 2, 3, 4, 5].map(num => (
              <MenuItem key={num} value={num}>{num}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Description"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleAddReview}>
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Brewery;
