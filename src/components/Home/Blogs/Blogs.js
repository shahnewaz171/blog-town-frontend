import React from 'react';
import house1 from '../../../images/house-5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';


const Blogs = () => {
    return (
        <div className="md:px-20">
            <div className="mt-5 pt-5 flex flex-col justify-center items-center mb-5">
                <div className="text-3xl font-extrabold text-green-900 flex items-center">
                    <h2 className="mb-1">All Blogs</h2>
                </div>
            </div>
            <div className="flex flex-wrap -m-4 mt-5 pt-5">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Gorgeous House</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Washington Avenue</div>
                            <p className="mt-2 text-gray-600">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                <span className="ml-2">Nasirabad H/S, Chattagram</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div className="md:flex md:flex-col house-card">
                        <div className="">
                            <img className="rounded-lg max-w-full h-auto" src={house1} alt="Woman paying for a purchase" />
                        </div>
                        <div className="mt-4 md:mt-0 bg-white px-6">
                            <div className="tracking-wide text-sm house-title font-extrabold mt-3 text-xl">Family Apartment Three</div>
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