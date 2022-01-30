import { Box , makeStyles , Typography} from '@material-ui/core';
import {Edit , Delete} from '@material-ui/icons';
import { Link ,  useParams} from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { deletePost, getPost } from '../../service/api';
import { useHistory } from 'react-router-dom';
import Comments from '../comments/Comments';



const useStyle = makeStyles(theme =>({
  container: {
    margin: '50px 100px',
    [theme.breakpoints.down('md')]: {
        margin: 0
    },
},
 image:{
    width:"100%",
    height:'50vh',
    objectFit: 'cover'
  },
  icons:{
    float:'right'
  },
  icon:{
    margin:7,
    border:'1px solid #878787',
    padding: 5,
    borderRedius:10
  },
  header:{
    fontSize:30,
    fontWeight:600,
    textAlign:'center',
    margin :'50px 0 10px 0'
  },
  subheading:{
    color:'#878787',
    display:'flex',
    margin:'20px 0' ,
    [theme.breakpoints.down('sm')]: {
      display:'block'
  },
  }
}))
function DetailView(props) {  
  const history = useHistory();
// console.log(props)
const params = useParams();
// console.log(params)
  const [post, setPost] = useState({}) 
  // const { account, setAccount } = useContext(LoginContext);
  
  useEffect(() => {
    const fetchData = async () => {

        let data = await  getPost(params.id);

        console.log(data);

        setPost(data);
        
    }
    fetchData();
    
   
}, [params.id]);
const deleteBlog = async () => {    
  await deletePost(post._id);
  history.push('/')
}

    const classes = useStyle();
    const url = 'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80';
  return  <>
  <Box className={classes.container}> 
  <img src={post.picture || url} alt="post" className={classes.image} />
  
  <Box className={classes.icons}> 
 
   <Link to= {`/update/${post._id}`} style={{textDecoration:'none', color:'inherit'}}>   <Edit className={classes.icon} color='primary'/>  </Link>
    < Delete onClick={() => deleteBlog()} className={classes.icon} color='error'/>
  
  </Box> 
  <Typography className={classes.header}> {post.title}</Typography> 
  <Box className= {classes.subheading}> 
  <Link style={{textDecoration:'none', color:'inherit'}}  to={`/?username=${post.username}`}>  <Typography> Author: <span style={{fontWeight:600}}> {`/?username=${post.username}`} </span>   </Typography> </Link>
   
    <Typography style={{marginLeft:'auto'}}> {new Date(post.createdDate).toDateString()}</Typography>
    </Box>
    <Typography className={classes.detail}>{post.description}</Typography> 
    <Comments/>
  </Box>
  
  ; </>
}



export default DetailView;
