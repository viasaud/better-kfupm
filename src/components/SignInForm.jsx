import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

const SignInForm = () => {

    // state variables to store the first & last name, email and password
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // function make the password field visibile whin entring the email address
    const [passwordFeildVisible, setPasswordFeildVisible] = React.useState(false);

    // functiiion to handle the click event on the sign in button
    const handleButtonClick = () => {
        if (email.target.valeu != null)
            setPasswordFeildVisible(true);
    }

    // object contains information about the entire form state 
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    // function to handle the submit event of the form
    const onSubmit = (values) => {
        if (!passwordFeildVisible)
            setPasswordFeildVisible(true)
        else {
            setfirstName(values.firstName);
            setlastName(values.lastName);
            setEmail(values.email);
            setPassword(values.password);
        }
    }

    // const to set the state of the review form
    const [showSignInForm, setShowSignInForm] = React.useState(true)

    // This function is used to close the sign in form when the user click close button
    const handleCloseBtn = () => {
        setShowSignInForm(false)
    }

    // This function is used to close the sign in form when the user click outside the form div
    const refClose = useRef(null)

    useEffect(() => {
        document.addEventListener('click', handleShowSignInForm, true);
    }, []);

    const handleShowSignInForm = (e) => {
        if (!refClose.current.contains(e.target)) {
            refClose.current.style.visibility = "hidden"
        }
        if (refCloseButton.current.contains(e.target)) {
            refClose.current.style.visibility = "hidden"
        }
    }


    return (

        <div ref={refClose} id="signInDiv" className="flex-col bg-jetBlack/[.9] border-2 border-[#DAD7CD] text-white rounded-lg items-center justify-center mx-auto max-w-2xl pt-12 pb-4 px-4 md:px-8">


            <h1 className="mb-8 text-sm text-center md:text-4xl font-Montserrat">Sign In to your account</h1>
            <form className="text-white w-full" onSubmit={handleSubmit(onSubmit)}>

                <div className="md:flex justify-between ">

                    <div className="mb-6">
                        <label for="firstName" className="block mb-2 text-sm font-Montserrat">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto md:w-half"
                            placeholder="first name"
                            required
                            {...register("firstName", {
                                required: true, pattern: /^[a-zA-Z][a-zA-Z '-.‘’]+$/
                            })}
                        />
                        {errors.firstName && <div><span className="text-sm text-red-500 ">Invalid first name</span></div>}
                    </div>

                    <div className="mb-6">
                        <label for="lastName" className="block mb-2 text-sm font-Montserrat">
                            Last Name
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto md:w-half"
                            placeholder="first name"
                            required
                            {...register("lastName", {
                                required: true, pattern: /^[a-zA-Z][a-zA-Z '-.‘’]+$/
                            })}
                        />
                        {errors.lastName && <div><span className="text-sm  text-red-500" >Invalid last name</span></div>}
                    </div>

                </div>

                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-Montserrat">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 font-Roboto"
                        placeholder="s201811111@kfupm.edu.sa"
                        required
                        {...register("email", {
                            required: true, pattern: /^[a-zA-Z0-9._-]+@kfupm.edu.sa/
                        })}
                    />
                    {errors.email && <div><span className="text-sm  text-red-500" >Invalid email</span></div>}
                </div>


                {!errors.email && passwordFeildVisible &&
                    <div className="mb-6">
                        <label for="password" className="block mb-2 text-sm font-Montserrat">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="font-Roboto w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 "
                            placeholder='••••••••'
                            required
                        ></input>
                    </div>
                }


                <div className="mb-6 flex justify-center">
                    <button
                        type="submit"
                        className=" text-white bg-mid-green hover:bg-dark-green focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-lg sm:w-auto px-5 py-2.5 text-center font-Montserrat capitalize"
                        onClick={handleButtonClick}
                    >
                        Sign In
                    </button>
                </div>

            </form>
        </div>
    )
}

export default SignInForm;