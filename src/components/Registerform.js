import React, { useState } from 'react';

const Registerform = props => {
    const [ formState, setFormState ] = useState({

        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmpassword:"",
        submitted: false,
        errorName:""

        
    })

    // const [valid, setValid] = useState({
    //     errorName:""
    // })

    const onChangeHandler = event => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
        

    }

    
    const validate = () => {

        let errorName ;
        if(formState.firstName < 2){
            errorName="need more character";
        }
        if(errorName){
            setFormState({errorName});
            return false;
        }
        return true;
    }




    const onSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState);
        const isValid = validate();
        if(isValid){
            console.log(formState);
        }
    }



return(
    <div>
        {formState.submitted ? <h1>You have submitted the form</h1>:<h1>You have not yet submitted the form</h1>}

        <form onSubmit = {onSubmitHandler}> 
            <label>First Name</label>
            <input type="text" name="firstName" value={formState.firstName} onChange={onChangeHandler} />
            <div >{formState.errorName}</div>
            <br/>
            <label>Last Name</label>
            <input type="text" name="lastName" onChange={onChangeHandler}/>
            
            <br/>
            <label>Email</label>
            <input type="text" name="email" onChange={onChangeHandler}/>
            <br/>
            <label>Password</label>
            <input type="password" name="password" onChange={onChangeHandler}/>
            <br/>
            <label>Confirm Password</label>
            <input type="password" name="confirmPassword" onChange={onChangeHandler}/>
            <br/>
            <input type="submit"/>
        </form>
        <div>
            <h4>Your Form Data</h4>
            <p>first Name:{formState.firstName}</p>
            <p>Last Name:{formState.lastName}</p>
            <p>Email:{formState.email}</p>
            <p>Password:{formState.password}</p>
            <p>Confirm Password:{formState.confirmPassword}</p>
        </div>
    </div>
)
}


export default Registerform;