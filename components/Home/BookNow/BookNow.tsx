import './BookNow.css'

const BookNow = () => {
    return (
        <section className="BookNow md:px-[56px] pb-20">
            <div className="bg-[#2E4149] flex flex-col items-center justify-center p-10">
                <h1 className="pb-10">Book Now</h1>
                <div className="w-full">
                    <form className='flex flex-col flex-wrap gap-6 w-full md:space-y-4 justify-center'>
                        <div className='flex flex-wrap gap-6 w-full'>
                            <input
                                aria-label="Name"
                                placeholder="Name: "
                                type='text'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                            <input
                                aria-label="Pronoun"
                                placeholder="Pronoun: "
                                type='text'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold max-w-[350px]"
                                required
                            />
                            <input
                                aria-label="Contact"
                                placeholder="Contact No.: "
                                type='tel'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                        </div>
                        <div className='flex flex-wrap gap-6 w-full'>
                            <input
                                aria-label="Age"
                                placeholder="Age: "
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold md:max-w-[150px]"
                                required
                            />
                            <input
                                aria-label="Email"
                                placeholder="Email ID: "
                                type='email'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                            <input
                                aria-label="Visit Date"
                                placeholder="Visit Date: "
                                type='date'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                            <input
                                aria-label="Visit Time"
                                placeholder="Visit Time: "
                                type='time'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                        </div>
                        <div className='flex flex-wrap gap-6 w-full md:px-[60px]'>
                            <input
                                aria-label="Number of Adults"
                                placeholder="Number of Adults: "
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                            <input
                                aria-label="No. of Vegetarians"
                                placeholder="No. of Vegetarians :"
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                            <input
                                aria-label="No. of Non-Vegetarians"
                                placeholder="No. of Non-Vegetarians :"
                                type='number'
                                className="p-4 flex-grow bgColor text-white placeholder-white font-bold"
                                required
                            />
                        </div>
                        <p className='text-center'>*Everyone in the group to be 25 and above</p>
                        <div className='flex items-center justify-center'>
                            <button className='p-4 min-w-[200px] rounded-3xl bg-[#D9D9D9] text-[#416E80]'><p>Submit</p></button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default BookNow;
