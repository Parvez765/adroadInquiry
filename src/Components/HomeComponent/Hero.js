import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Pagination, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


const Hero = () => {
  const [allData, setAllData] = useState([]);


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  useEffect(() => {
    const apiUrl = 'http://dev.abroadinquiry.com:5001/countries';
    const fetchData = async () => {
      try {
        let page = 1;
        let totalPages = 5;
        let accumulatedData = [];

        while (page <= totalPages) {
          const response = await axios.get(`${apiUrl}?page=${page}`);
          accumulatedData = accumulatedData.concat(response.data);
          page++;
        }

        setAllData(accumulatedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h2" mt={6}>
        Country List
      </Typography>
      <Box mt={4}>
        <Grid container spacing={4}>
          {allData?.map((item) => item.data?.map((d, i) => <>
            <Grid item xs={6} md={3}>
              <Link to={`/${d.id}`}><Item style={{ fontWeight: 'bold', fontSize: '16px' }}>{d.name}</Item></Link>
            </Grid>
          </>))}
        </Grid>
      </Box>
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={5}
        />
      </Box>
    </Container>
  );
};

export default Hero;
