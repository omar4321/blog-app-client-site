import { Grid } from "@material-ui/core";
import Banner from "./Banner";
import Categories from "./Categories";
import Posts from "./Posts";


const Home = () =>{
    return (
       <div>
  
           <Banner></Banner> 
           <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                <Categories/>
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                <Posts></Posts>
                </Grid>
            </Grid>
          
        
       </div>
    )
}

export default Home;