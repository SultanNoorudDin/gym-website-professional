import React from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import HeroImg from "../assets/images/banner.png"

const HeroBanner = () => {
    return (
        <Box sx={{
            mt: { lg: "212px", sxs: "70px" },
            ml: { sm: "50px" }
        }
        }
            position={"relative"} p="20px ">

            {/*  logo brand name*/}
            <Typography color={"#FF2625"} fontWeight={'600'} fontSize={"26px"}>
                Fitness club
            </Typography>

            {/* 2nd typo */}
            <Typography fontWeight={'700'}
                sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
                Sweat,Smile <br />
                & Repeat
            </Typography>

            {/* 3rd typo */}
            <Typography fontSize={"24px"} lineHeight={"35px"} mb={3}>
                Check out the most effective exercises
            </Typography>

            {/* button of explore exercise */}
            <Button variant='contained' color='error' href='#exercises'>Explore Exercise</Button>
            <Typography
                fontWeight={600}
                color={'#FF2625'}
                sx={{
                    opacity: 0.1,
                    display: { lg: 'block', xs: 'none' },

                }}
                fontSize={'200px'}>
                Exercise
            </Typography>
            <img src={HeroImg} alt="banner" className='HeroBanner' />
        </Box >
    )
}

export default HeroBanner