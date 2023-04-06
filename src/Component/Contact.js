import React, { useRef, useState } from "react";
import '../App.css'
import emailjs from '@emailjs/browser';
import keys from '../hiddenKeys.js'




const Contact = () => {

    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [message , setMessage] = useState("")

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(keys.service,keys.template, form.current , keys.public_keys)
        .then((results) => {
            console.log(results.text);

            if(name || email || message){
                setName("")
                setMessage("")
                setEmail("")
            }
            alert("Message has been sent!")

        }, (error) => {
            console.log(error.text)
            alert("Message not sent!")

            
        });


    };



    return(
        <div id="contact" className="contactContainer container ">
             <div className="divider"></div>
            <h2>Contact Me</h2>
            {
                    process.env.REACT_APP_PUBLIC_KEY 
                  
            }

            <form ref={form}  onSubmit={sendEmail} className="form">
                <input onChange={(e) => setName(e.target.value)} className="form-control" type="text" name="user_name" placeholder="Name" value={name} />
                <input onChange={(e) => setEmail(e.target.value)} className="form-control" type="text" name="user_email" placeholder="Email" value={email} />
                <textarea onChange={(e) => setMessage(e.target.value)} className="form-control" minLength="0" name="message" maxLength="100" placeholder="Write here..." value={message} />
                <button type="submit" className="btn ">Send Message</button>
            </form>

            <div className="box"></div>

        </div>
    )
}

export default Contact;