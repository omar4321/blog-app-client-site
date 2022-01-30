import React from 'react'
import { makeStyles, Box } from '@material-ui/core';
const useStyle = makeStyles({
    image: {
       
        background: `url(${'https://i.ibb.co/7JQNJQy/New-Project.png'})  center/100%  #000000`,
        overflow: 'hidden',
        backgroundRepeat:' no-repeat',
        width: '100%',
        height: '57vh',
        marginTop:"50px"
    },
 

})
export default function Banner() {
    const classes = useStyle();

    return (
        <Box className={classes.image}>
       
    </Box>
    )
}
