import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const {createUser, setUser} = use(AuthContext);
     const [nameError, setNameError] = useState("");
    const handleRegister = (e) => {
        e.preventDefault();
        //console.log(e.target)
        const form = e.target;
        const name = form.name.value;
        if(name.length < 5){
            setNameError("Name should be more than 5 character");
            return;
        }else{
            setNameError("")
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({name, photo, email, password});
        createUser(email, password)
        .then(result => {
            const user = result.user;
            // console.log(user);
            setUser(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter your name" required />
                        {
                            nameError && <p className='text-xs text-error'>{nameError}</p>
                        }
                        {/* photo */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Photo URL" required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Enter your Email" required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Enter your Password" required />
                    
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='text-center font-semibold pt-5'>Already Have An Account ? <Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </fieldset>
                </form>
            </div>
        </div>

    );
};

export default Register;