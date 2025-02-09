import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="dark:bg-gray-950 bg-gray-200 mt-24  ">
            <div className="max-w-[1120px] p-6  md:mx-12 xl:mx-auto flex justify-between items-center">
                <span className="text-xs md:text-sm lg:text-base">Copyright&copy;All Rights reserved 2025</span>
                <ul className="flex gap-6">
                    <li className="dark:bg-gray-800 bg-gray-300 cursor-pointer  p-2 rounded-full"><FaFacebookF /></li>
                    <li className="dark:bg-gray-800 bg-gray-300 cursor-pointer  p-2 rounded-full"><FaLinkedinIn /></li>
                    <li className="dark:bg-gray-800 bg-gray-300 cursor-pointer  p-2 rounded-full"><FaInstagram /></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer