import React from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'; 
import { Link, useHistory,  } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';



const useStyle = makeStyles({
  component: {
      background: '#FFFFFF',
      color: 'black',
      cursor: 'pointer',
      
  },
  container: {
      justifyContent: 'center',
      '&  >*': {
          padding: 20,
          color: 'black',
          textDecoration: 'none'
      } ,
      Link:{
         textDecoration:'none',
         color:'inherit'
      }
  }
})



export default function Header() {  
  const classes = useStyle();
  const history = useHistory();
  const { oktaAuth, authState } = useOktaAuth();
  if (authState && authState.isPending) return null;

  const login = async () => history.push('/login');
  
  const logout = async () => oktaAuth.signOut();

  const button = authState.isAuthenticated ? 
      <Button onClick={logout} style={{
          background: 'unset',
          border: 'none',
          fontSize: 17,
          textTransform: 'uppercase',
          fontFamily: 'Roboto',
          cursor: 'pointer',
          opacity: 0.8
      }}>Logout</Button> :
      <Button onClick={login}>Login</Button>;
 
    return (
    
      <AppBar className={classes.component}>
        <Toolbar className={classes.container}> 

        <Link className={classes.Link} to='/'>   <Typography variant="h6" >
             HOME
          </Typography> </Link> 
          <Link className={classes.Link} to='/'>   <Typography variant="h6" >
          ABOUT
          </Typography> </Link>
          <Link className={classes.Link} to='/'>   <Typography variant="h6" >
          CONTACT
          </Typography> </Link>
          <Link className={classes.Link} >  <Typography variant="h6" >
         {button}
          </Typography> </Link>
        
        </Toolbar>
      </AppBar>
    
    )
}
