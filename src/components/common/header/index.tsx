import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, Grid,InputBase } from "@mui/material";

export default function ButtonAppBar() {

    function getSearch(e:React.ChangeEvent<HTMLInputElement> ) {
        e.preventDefault();
        console.log(e.target.value)
    }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='transparent'>
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            className={'appbarid'}
          >
            <Grid item xs={3} sm={3} md={4}>
              <Typography component="div" sx={{ flexGrow: 1 }}>
                Movie Hub
              </Typography>
            </Grid>
            <Grid item xs={7} sm={6} md={4} container justifyContent={"center"} className='searchInputWrapper'>
              <InputBase type="search" placeholder="Find awesome movies" className="searchInput" onChange={getSearch} />
            </Grid>
            <Grid
              item
              xs={2}
              sm={3}
              md={4}
              container
              justifyContent={"flex-end"}
            >
              <Button color="inherit">Login</Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
