import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';

const SingleCountryDetails = () => {

  const country = useLoaderData()
  console.log(country.flagimage);
  return (
    <Container>
       <Typography variant="h3" component="h2" mt={6}>
         Country Details: {country.name}
      </Typography>;
      <Box display="flex" justifyContent="center" mt={4}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={country.flagimage}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country.name}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Capital: {country.capital}
            </Typography>
            <Typography component="div">
              Population: {country.population}
            </Typography>
            <Typography component="div">
              Currency: {country.currency}
            </Typography>
            <Typography component="div">
              Iso Code: {country.isocode}
            </Typography>
            <Box mt={4}>
              <Typography variant="body2" color="text.secondary">
                {country.description}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
};

export default SingleCountryDetails;
