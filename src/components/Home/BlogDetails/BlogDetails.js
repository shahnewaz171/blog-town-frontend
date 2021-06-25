import React from 'react';
import blog1 from '../../../images/blog-images/westwind-air-service.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import './BlogDetails.css';

const BlogDetails = () => {
    return (
        <div className="md:px-20">
            <div className="blog-details flex flex-col justify-center items-center">
                <div className="tracking-wide font-extrabold mt-3 flex justify-center items-center ">
                    <h1 className="mt-12 text-4xl">Going On A Road Trip Across The US</h1>
                </div>
                <div className="p-4 mt-5 mb-5">
                    <div className="blogDetails-img">
                        <img width="1200" className="rounded-lg max-w-full h-auto" src={blog1} alt="Woman paying for a purchase" />
                    </div>
                </div>
                <div className="flex flex-wrap">
                    <div className="blog-description p-4">
                        <p>At sem sed arcu elementum aliquam. Curabitur non ligula auctor, hendrerit dui non, aliquet turpis. Cras tempus justo non elit dictum convallis. Aliquam imperdiet tortor ac ultricies rhoncus. Sed tristique laoreet sapien, sit amet sagittis magna accumsan a. Nam ultrices sem justo, vitae vehicula nibh finibus quis.</p>
                        <h3 className="text-3xl font-bold mt-5 pt-3">Here’s a list of things</h3>
                        <ol className="mt-3 mb-5 list-decimal ml-8">
                            <li>Blooming Onion</li>
                            <li>Blooming Onion</li>
                            <li>Blooming Onion</li>
                            <li>Blooming Onion</li>
                            <li>Blooming Onion</li>
                        </ol>
                        <p class="mt-3 mb-12">
                            Aliquam imperdiet tortor ac ultricies rhoncus. Sed tristique laoreet sapien, sit amet sagittis magna accumsan a. Nam ultrices sem justo, vitae vehicula nibh finibus quis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;