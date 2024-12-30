'use client'

import ButtonBack from "@/components/ButtonBack";
import {useMemo, useState} from "react";

export default function CreatePostPage() {

    const [typedURL, setTypedURL] = useState();

    const createPost = () => {

    }
    const getValue = (event) => {
        setTypedURL(event.target.value);
    };

    const getImg = useMemo(() => {

    }, [typedURL]);

    return(
        <section className='max-w-screen-xl w-full mx-auto mt-16 flex items-start gap-4 text-xl'>
            <ButtonBack/>
            <div className='rounded-2xl grid grid-cols-2 gap-2 border border-gray-300 overflow-hidden'>
                <div className="px-5 py-4">
                    <p className="text-2xl font-semibold">Create A new post</p>
                    <form className="py-4" onSubmit={() => createPost()}>
                        <div className="flex gap-4">
                            <label>Image URL:</label>
                            <input name="url"
                               value={typedURL}
                               onChange={getValue}
                            />
                        </div>
                        <div className="flex gap-4">
                            <label>Title:</label>
                            <input name="title"/>
                        </div>
                        <div className="flex gap-4">
                            <label>Description:</label>
                            <input name="description"/>
                        </div>
                    </form>
                </div>
                <div>
                    (show image here)
                </div>
            </div>
        </section>
    )
}