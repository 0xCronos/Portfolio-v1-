import React, { useContext } from 'react'
import { classes } from '../../styles';
import BlurContext from '../../context/BlurContext';
import { ContactForm } from './ContactForm';

const { flexColWrapCenter } = classes;

export const Contact = () => {
    const { setBlur } = useContext(BlurContext);

    return (
        <div className={`${flexColWrapCenter} items-center px-4`}>
            <div className='sm:flex-0 2xl:flex-1 2xl:mr-8 px-0 md:px-40'>
                <h4 className={`text-4xl sm:text-4xl xl:text-5xl tracking-wide text-eastern-blue text-center font-light`}>
                    Interested in working together? <span className='text-aquamarine'>Let's talk!</span>
                </h4>
                <p className='sm:text-base md:text-lg xl:text-xl text-primary tracking-wider whitespace-pre-line text-center my-8'>
                    If you are interested in my work, have any feedback
                    <br />
                    or if you are looking for someone to develop your project,
                    <br />
                    send me a message and I'll get in touch as soon as possible.
                </p>
            </div>
            <ContactForm setSent={setBlur} />
        </div>
    )
}
