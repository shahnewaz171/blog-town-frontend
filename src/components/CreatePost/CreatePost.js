import React from 'react';
import { useForm } from "react-hook-form";

const CreatePost = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="mt-5 md:px-20">
            <div className="flex justify-center">
                <div className="p-4 sm:w-1/2 lg:w-1/3">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="bg-white">
                                <div className="grid grid-cols-1 space-y-2">
                                    <label className="text-sm font-semibold pt-3">Blog Title</label>
                                    <input name="title"  ref={register({ required: true })} className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" placeholder="Enter Title"/>
                                    {errors.title && <span className="text-red-400">This field is required</span>}
                                </div>
                                <div className="grid grid-cols-1 space-y-2">
                                    <label className="pt-5 font-semibold">Add Cover Photo</label>
                                    <input type="file" name="image" ref={register({ required: true })} className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500"/>
                                    {errors.image && <span className="text-red-400">This field is required</span>}
                                </div>
                                <div className="grid grid-cols-1 space-y-2">
                                    <label className="pt-5 font-semibold">Blog Content</label>
                                    <textarea name="description" ref={register({ required: true })} className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-green-500" rows="8" cols="50" />
                                    {errors.description && <span className="text-red-400">This field is required</span>}
                                </div>
                            </div>
                            <div>
                                <button className="mt-5 text-white bg-green-800 hover:bg-green-700 py-2 px-4 rounded" type="submit">Submit</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreatePost;