import { Button,  makeStyles, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import '../App'
import { categories } from './Constants/data';
const useStyle = makeStyles({
    create:{
        margin: 20,   
    } ,

    table: {
        border: '1px solid rgba(224, 224, 224, 1)'
    },
    write: {
        margin: 20,
        width: '85%',
        background: '#6495ED',
        color: '#fff',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit'
    }

})
export default function Categories() { 
    const classes = useStyle();
    return (
        <div> 
   <Link to="/post" style={{textDecoration:'none', color:'inherit'}}>  <Button variant="contained" color="primary" className={classes.create}> POST YOUR BLOG </Button>  </Link>

           <Table  className={classes.table}>
               <TableHead> 
                   <TableCell>
                   <Link to={"/"} className={classes.link}>
                            All Categories
                        </Link>
                   </TableCell>
                 
               </TableHead>

               <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>
                                    <Link to={`/?category=${category}` } className={classes.link}>
                                        {category}
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
           </Table>
        </div>
    )
}
