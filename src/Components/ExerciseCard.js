import React from 'react'
import { Button, Stack, Typography } from "@mui/material"
import { Link } from 'react-router-dom'

const ExerciseCard = ({ exercise }) => { /* usne key kio nhi pakri, sirf exercise kio li hai */
    return (
        <Link className='exrcise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt="exercise.name" loading='lazy' />

            <Stack direction={'row'}>
                <Button sx={{ ml: '21px', color: "#fff", background: '#fffa9a9' }} fontSize="14px" borderRadius="20px" texTransform="capitalize" >
                    {exercise.bodyPart}
                </Button>
                <Button sx={{ ml: '21px', color: "#fff", background: '#fcc797' }} fontSize="14px" borderRadius="20px" texTransform="capitalize" >
                    {exercise.bodyPart}
                </Button>
            </Stack>
            <Typography ml={"21px"} color={"#000"} fontWeight={"bold"}
                mt={"11px"} pb={"10px"} textTransform={"capitalize"}
            >
                {exercise.name}
            </Typography>
        </Link>
    )
}

export default ExerciseCard