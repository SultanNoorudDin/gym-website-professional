import React, { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { SearchOffSharp } from '@mui/icons-material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScroll from './HorizontalScroll'

const SearchExercises = () => {
  const [search, setsearch] = useState('');
  const [exercises, setexercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData()
  }, [])


  const handleSearch = async () => {
    if (search) {
      const exerciseData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises', exerciseOptions
      );
      const searchedExercises = exerciseData.filter((exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.target.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search));

      setsearch('');
      setexercises(searchedExercises);
    }
  }

  return (

    <Stack alignItems={'center'} mt={'37px'} justifyContent="center" p="20px">
      {/* heading */}
      <Typography fontWeight={700}
        sx={{
          fontSize: { lg: '44px', sm: '30px' },
          mb: "50px", textAlign: 'center'
        }}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">

        {/* search bar */}
        <TextField
          sx={{

            input: {
              fontWeight: '600',
              border: "none",
              borderRadius: "4px"
            },
            width: { lg: "790px", xs: "350px" },
            backgroundColor: "#FFF",
            borderRadius: "40px"
          }}
          height="76px" onChange={(e) => { setsearch(e.target.value.toLowerCase()) }} placeholder="Search Exercise" type="text" />

        {/* Search button */}

        <Button className='search-button'
          sx={
            {
              bgcolor: "#FF2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: "0"
            }
          }
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      {/* 2nd box for hrizontal scrolling */}
      <Box sx={{
        position: 'relative',
        width: "100%",
        p: "20px"
      }}>
        <HorizontalScroll data={bodyParts} />
      </Box>
    </Stack>
  )
}

export default SearchExercises