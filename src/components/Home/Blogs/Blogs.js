import React from 'react';
import blog1 from '../../../images/house-5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './Blog.css';


const Blogs = () => {
    const handleSubmit = event => {
        event.preventDefault();
    }

    return (
        <div className="md:px-20">
            <div className="mt-12 flex flex-col justify-center items-center mb-5">
                <div className="sm:w-1/2 lg:w-1/3">
                    <form onSubmit={handleSubmit} className="flex justify-center">
                        <input className="focus:outline-none focus:bg-white focus:shadow-outline focus:border-gray-300 py-2 px-4 rounded w-full border-2 border-green-200" placeholder="Search blogs..." required />
                        <button type="submit" className="text-white bg-green-800 hover:bg-green-700 py-2 px-8 rounded">
                            Search
                        </button>
                    </form>
                </div>
            </div>
            <div className="flex flex-wrap -m-4 mt-5 pt-5">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col blog-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={blog1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm blog-title font-extrabold mt-3 text-xl">Going On A Road Trip Across The US</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col blog-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={blog1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm blog-title font-extrabold mt-3 text-xl">Washington Avenue</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col blog-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={blog1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm blog-title font-extrabold mt-3 text-xl">Family Apartment Three</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                        </div>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Blogs;