import React, { useEffect, useRef, useState } from 'react'
import Sectors from './Sectors'
import { ToastContainer, toast,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function SectorForm() {
    const [sector, setSector] = useState(0);
    const [isValidated, SetValidated] = useState(false);
    const nameInput = useRef<HTMLInputElement>(null);
    const agrementInput = useRef<HTMLInputElement>(null);

    useEffect(() => {
        checkInputs(false);
    }, [sector]);

    const fakePromise = () => {
        return new Promise(function(resolve) {
            setTimeout(resolve, 2000);
        });
    }

    const onSubmit = (event: any) => {
        event.preventDefault();
        checkInputs(true);
    }

    const submit = () => {
        console.log(nameInput.current?.value, sector);
    }

    const onInputChange = (event: any) => {
        checkInputs(false);
    }

    const checkInputs = (isFromButton: boolean) => {
        if (isFromButton) {
            if (checkName(true) && checkAgreement(true) && sector > 0) {
                
                SetValidated(true);
                submit();
                toast.promise(fakePromise, {
                    pending: "Saving",
                    success: "Saved",
                    error: "error"
               },{
                position: "top-left",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
            else
            {
                toast.error('Please fill all fields', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
            }
        }
        else {
            if (checkName(false) && checkAgreement(false) && sector > 0) {
                SetValidated(true);
            }
            else {
                SetValidated(false);
            }
        }
    }

    const checkName = (isFromButton: boolean) => {

        if (isFromButton && nameInput.current?.value && nameInput.current?.value.length < 3) {
            return false;
        }

        if (nameInput.current?.value && nameInput.current?.value.length >= 3) {
            return true;
        }
        return false;
    }

    const checkAgreement = (isFromButton: boolean) => {
        if (isFromButton && agrementInput.current?.checked === false) {

            return false;
        }

        if (agrementInput.current?.checked === true)
            return true;
        return false;
    }

    return (
        <div className='flex h-full max-h-[60%] w-full sm:rounded-lg sm:w-[40rem] sm:h-100 bg-gray-100 p-6 '>
            <form onSubmit={onSubmit} className='flex flex-col space-y-4 h-full w-full '>
                <div className='flex flex-row items-start whitespace-pre space-x-5'>
                    <span className='font-semibold text-gray-700/80'>Name: </span>
                    <input type="text" placeholder='Name' id='name' onChange={onInputChange} ref={nameInput} className="outline-none w-60 border border-gray-200 px-3"/>
                </div>
                <span className='font-semibold self-start text-gray-700/80 whitespace-pre'>Sector: </span>
                <Sectors setSector={setSector} sector={sector} />
                <div className='flex flex-row self-start space-x-2'>
                    <span className='font-semibold'>Agree to terms</span>
                    <input type="checkbox" name="Agree to terms" ref={agrementInput} onChange={onInputChange} />
                </div>

                <button className={`w-32 transition-all duration-500 rounded-lg text-white p-2 ${isValidated ? "bg-green-500" : "bg-gray-200 text-gray-400  cursor-not-allowed"}`}>Save</button>
            </form>
            <ToastContainer/>
        </div>
    )
}

export default SectorForm