// components/Loader.jsx
import logo from '../assets/logo.svg'
import logoName from '../assets/logoName.svg'




export default function Loader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black gap-5 z-50">
            <div className='flex flex-col items-center justify-center py-10 gap-4'>
                <img src={logo} alt="" className='w-25' />
                <img src={logoName} alt="" className='w-45' />
            </div>
            {/* <div className="w-96 h-96 overflow-hidden"> */}
                <div class="loader"></div>
            {/* </div> */}
        </div>
    );
}