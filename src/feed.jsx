
export default function Feed(){
    return (
        <>
            <div  className="flex flex-col sm:flex-row gap-24 py-8">
                <div>
                <img className='h-80 w-80 sm:w-96 m-auto' src="undraw_Multitasking_re_ffpb.png" alt="CreativeMinds" />
                </div>
                <div className="flex flex-col">
                    <h2 className="text-xl sm:text-4xl font-bold text-blue-600">Creativity at its peak</h2>
                    <p className="text-sm sm:text-xl">
                        A world where you don't have to worry who handles your interior
                    </p>
                    <p className="text-sm p-10 my-16 bg-zinc-800 text-white rounded shadow">
                        "Creative minds is a multi-talented service providing firm with an excellent customer service" - Mr Maxwell
                    </p>
                        <input type="text" name="creativeminds" id="creative" placeholder="Email"   className="border m-2 sm:w-1/2"/>

                        <textarea name="creativeminds-message" id="" cols="30" rows="10" className="border m-2 sm:w-1/2"> Type..</textarea>
                        <input type="button" value="Send" className="rounded p-2 m-2 bg-blue-600 text-white sm:w-1/2"/>               
                </div>
            </div>
            
        </>
    )
}