import { FolderIcon, PhoneIcon, KeyIcon } from '@heroicons/react/outline';

const FooterComponent = () => {
    return (
        <div className="flex justify-between w-full flex-wrap">
            <form className="w-full sm:w-2/3 text-center m-auto px-2 py-5">
                <div className='flex justify-between m-5'>
                    <input type="text" placeholder="Name*" className="p-2 mr-1 w-1/2 border border-gray-700 rounded-lg shadow-sm transition duration-700 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:shadow-md hover:border-gray-400" />
                    <input type="text" placeholder="Email*" className="p-2 ml-1 w-1/2 border border-gray-700 rounded-lg shadow-sm transition duration-300 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:shadow-md hover:border-gray-400" />
                </div>
                <div className=' grid-cols-3 gap-4 m-5'>
                    <input type="text" placeholder="Subject*" className="p-2 w-full border  border-gray-700 rounded-lg shadow-sm transition duration-300 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:shadow-md hover:border-gray-400" />
                </div>
                <div className=' grid-cols-3 gap-4  m-5'>
                    <textarea placeholder="Message*" className="p-2 w-full line-clamp-5 border border-gray-700 rounded-lg shadow-sm transition duration-300 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:shadow-md hover:border-gray-400" rows="7" />
                </div>
                <div className=' grid-cols-3 gap-4  m-5'>
                    <input type="text" placeholder="Phone*" className="p-2 w-full border border-gray-700 rounded-lg shadow-sm transition duration-300 ease-in-out focus:border-blue-500 focus:ring-2 focus:ring-blue-400 focus:shadow-md hover:border-gray-400" />
                </div>
                <div className='items-center py-5'>
                    <input type="submit" value="Send Me!" className=" w-1/3 py-3 px-4 bg-gray-900 text-xl text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-5 focus:ring-blue-400" />
                </div>
            </form>
            <div className="w-full sm:w-1/3 text-center items-center m-auto p-2">
                <div className='w-full sm:w-2/3 py-2'>
                    <div className="w-full m-auto flex space-x-3 items-center max-w-sm rounded-lg overflow-hidden shadow-lg">
                        <PhoneIcon className="w-[50px] h-[50px] text-gray-700 hover:text-blue-500" />
                        <div className="flex space-x-3 text-left">
                            <span className="text-2xl font-semibold text-white text-left">Phone</span>
                            <p className="text-left text-lg text-gray-400 mt-2">+1 343 554 0043</p>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-2/3 py-2'>
                    <div className="w-full m-auto flex space-x-3 items-center max-w-sm rounded-lg overflow-hidden shadow-lg">
                        <KeyIcon className="w-[50px] h-[50px] text-gray-700 hover:text-blue-500" />
                        {/* <img src={ViteImg} className="scale-x-full text-gray-700 hover:text-blue-500" /> */}
                        <div className="p-3 space-x-3 text-left">
                            <span className="text-2xl font-semibold text-white text-left">Address</span>
                            <span className="text-left text-gray-400 mt-2">110 Westgrove Way, Winnipeg, MB R3R 1R7, Canada</span>
                        </div>
                    </div>
                </div>
                <div className='w-full sm:w-2/3 py-1'>
                    <div className="w-full m-auto flex space-x-3 items-center max-w-sm rounded-lg overflow-hidden shadow-lg">
                        <FolderIcon className="w-[50px] h-[50px] text-gray-700 hover:text-blue-500" />
                        <div className="space-x-3 text-left">
                            <span className="text-2xl font-semibold text-white text-left">Email</span>
                            <span className="text-left text-lg text-gray-400 mt-2">messi.dev@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FooterComponent;