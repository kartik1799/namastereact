const Contact=()=>{
    return (
        <div className="p-8">
            <h1 className="font-bold text-2xl mb-4">Contact</h1>
            <form className="flex flex-col gap-4">
                <input type="text" placeholder="Name" className="border border-border-light p-1 w-[25%] outline-none"/>
                <input type="text" className="border border-border-light p-1 w-[40%] outline-none" placeholder="Message" />
                <button className="text-md font-bold border border-border-light px-2.5 py-1.5 cursor-pointer w-fit bg-black text-white rounded-lg">Submit</button>
            </form>
        </div>
    )
}

export default Contact;