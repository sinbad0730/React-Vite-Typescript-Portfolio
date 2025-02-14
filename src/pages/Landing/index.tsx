import ViteImg from '../../assets/react.svg';
import {PhoneIcon} from '@heroicons/react/outline'
const LandingPage = () => {
    return (
        <div className='py-50 space-y-5'>
            <div>
                <img className="py-1 mb-5 float-top size-10 sm:size-60 rounded-full ring-5 ring-white m-auto" src={ViteImg}></img>
                <p className='text-3 sm:text-5xl text-gray-200'>Lionel Messi</p>
                <p className='text-2 sm:text-4xl text-gray-400 mt-3'>★ Senior Front-End / AI / Unity Developer ★</p>
            </div>
            <div>
                <span><PhoneIcon className="w-[50px] h-[50px] text-gray-700 hover:text-blue-500" /></span>
            </div>
        </div>
    )
}
export default LandingPage;