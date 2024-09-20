"use client";

import './BookNow.css';
import { useState } from 'react';

const BookNow = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        const data = { firstname, lastname, tel, email };

        try {
            const response = await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (result.success) {
                // Clear form fields
                setFirstname('');
                setLastname('');
                setTel('');
                setEmail('');

                // Show success message
                setIsSuccess(true);
            } else {
                alert('Failed to submit booking.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="BookNow md:px-[56px] pb-20">
            <div className="bg-[#2E4149] flex flex-col items-center justify-center p-10">
                <h1 className="sm:text-6xl text-lg p-8">Know More</h1>
                <div className="w-full">
                    <form className='flex flex-col flex-wrap gap-6 w-full md:space-y-4 justify-center' onSubmit={handleSubmit}>
                        <div className='flex flex-wrap gap-6 w-full'>
                            <input
                                aria-label="First Name"
                                placeholder=" First Name: "
                                type='text'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={firstname}
                                onChange={(e) => setFirstname(e.target.value)}
                            />
                            <input
                                aria-label="Last Name"
                                placeholder="Last Name: "
                                type='text'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold max-w-[350px]"
                                required
                                value={lastname}
                                onChange={(e) => setLastname(e.target.value)}
                            />
                            <input
                                aria-label="Contact"
                                placeholder="Contact No.: "
                                type='tel'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={tel}
                                onChange={(e) => setTel(e.target.value)}
                            />
                            <input
                                aria-label="Email"
                                placeholder="Email ID: "
                                type='email'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {isSuccess ? (
                            <p className='text-green-500 text-center'>Form submission successful! Please allow us to get back to you.</p>
                        ) : (
                            <div className='flex items-center justify-center'>
                                <button
                                    type="submit"
                                    className={`p-4 min-w-[200px] rounded-3xl bg-[#D9D9D9] text-[#416E80] ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                    disabled={isSubmitting}
                                >
                                    <p>{isSubmitting ? 'Submitting...' : 'Submit'}</p>
                                </button>
                            </div>
                        )}
                        <p className='text-center'>*Everyone in the group to be 25 and above</p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BookNow;
