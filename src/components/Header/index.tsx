import navigation from '../../constants';
import type { NavigationItem } from '../../constants';
import ViteImg from '../../assets/react.svg';
const HeaderComponent = () => {
    
    return (
        <div className='px-15 flex items-center justify-between bg-[#030712] pt-2 pb-1'>
            <div className="flex text-lg">
                <a href="/"><img src={ViteImg} className='float-left -scale-125 px-15' /></a>
                <div className="flex text-lg">
                    {
                        navigation.map((item: NavigationItem, key: number) => (
                            <a href={item.href} className='outline-black px-5' key={key}>
                                <span className="px-4 py-2 bg-black-500 text-white  font-semibold rounded-lg shadow-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-black-400 focus:ring-opacity-75 cursor-pointer"
                                    role="button" tabIndex={0}>
                                    {item.name}
                                </span></a>
                        ))
                    }
                </div>
            </div>
            <div className='float-right pr-10 float-right'>
                {/* <img src="/images/profile.png" alt="" className='inline-block size-12 rounded-full ring-1 ring-black' /> */}
            </div>
        </div>
    )
}
export default HeaderComponent;