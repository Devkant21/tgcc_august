"use client";

import './BookNow.css';
import { useState } from 'react';

const BookNow = () => {
    const [name, setName] = useState('');
    const [pronoun, setPronoun] = useState('');
    const [tel, setTel] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [visitDate, setVisitDate] = useState('');
    const [visitTime, setVisitTime] = useState('');
    const [people, setPeople] = useState('');
    const [veg, setVeg] = useState('');
    const [nonVeg, setNonVeg] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setIsSuccess(false);

        const data = { name, pronoun, tel, age, email, visitDate, visitTime, people, veg, nonVeg };

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
                setName('');
                setPronoun('');
                setTel('');
                setAge('');
                setEmail('');
                setVisitDate('');
                setVisitTime('');
                setPeople('');
                setVeg('');
                setNonVeg('');
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
                <button className="text-4xl rounded-full bg-slate-900 p-8">Book Now</button>
                {/* <button className="text-4xl pb-10 rounded-full bg-slate-900 p-8">Book Now</button> */}
                
                {/* <div className="w-full">
                    <form className='flex flex-col flex-wrap gap-6 w-full md:space-y-4 justify-center' onSubmit={handleSubmit}>
                        <div className='flex flex-wrap gap-6 w-full'>
                            <input
                                aria-label="Name"
                                placeholder="Name: "
                                type='text'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                aria-label="Pronoun"
                                placeholder="Pronoun: "
                                type='text'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold max-w-[350px]"
                                required
                                value={pronoun}
                                onChange={(e) => setPronoun(e.target.value)}
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
                        </div>
                        <div className='flex flex-wrap gap-6 w-full'>
                            <input
                                aria-label="Age"
                                placeholder="Age: "
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold md:max-w-[150px]"
                                required
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
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
                            <input
                                aria-label="Visit Date"
                                placeholder="Visit Date: "
                                type='date'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={visitDate}
                                onChange={(e) => setVisitDate(e.target.value)}
                            />
                            <input
                                aria-label="Visit Time"
                                placeholder="Visit Time: "
                                type='time'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={visitTime}
                                onChange={(e) => setVisitTime(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-wrap gap-6 w-full md:px-[60px]'>
                            <input
                                aria-label="Number of Adults"
                                placeholder="Number of Adults: "
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                            />
                            <input
                                aria-label="No. of Vegetarians"
                                placeholder="No. of Vegetarians :"
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={veg}
                                onChange={(e) => setVeg(e.target.value)}
                            />
                            <input
                                aria-label="No. of Non-Vegetarians"
                                placeholder="No. of Non-Vegetarians :"
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                                value={nonVeg}
                                onChange={(e) => setNonVeg(e.target.value)}
                            />
                        </div>
                        {isSuccess && (
                            <p className='text-green-500 text-center'>Form submission successful!</p>
                        )}
                        <p className='text-center'>*Everyone in the group to be 25 and above</p>
                        <div className='flex items-center justify-center'>
                            <button
                                type="submit"
                                className={`p-4 min-w-[200px] rounded-3xl bg-[#D9D9D9] text-[#416E80] ${isSubmitting ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                disabled={isSubmitting}
                            >
                                <p>{isSubmitting ? 'Submitting...' : 'Submit'}</p>
                            </button>
                        </div>
                    </form>
                </div> */}
            </div>
        </section>
    );
}

export default BookNow;
