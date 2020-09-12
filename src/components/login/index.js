import React from 'react';
import Page from './page';
import { connect } from "react-redux";
import login from "../../redux/actions/user";

const Login = ({ login }) => {
    

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const authUser = (email,password) => {
        try{
            login(email,password)
        }catch(error){
            
        }
    }

    return (
            
        <Page handleClickOpen={handleClickOpen} handleClose={handleClose} open={open} authUser={authUser}/>
        
    );
    
}


const mapDispatchToProps = {
    login
};

const wrapper = connect(null, mapDispatchToProps);

const component = wrapper(Login);

export default component;