'use client'

import {PiMagnifyingGlass} from "react-icons/pi";
import {useMemo, useState} from "react";
import users from "@/../mocks/users.json";
import posts from "@/../mocks/posts.json";
import Link from "next/link";

export default function SearchBar() {
    const [typedValue, setTypedValue] = useState("");

    const getValue = (event) => {
        setTypedValue(event.target.value);
    };

    const userSuggestions = useMemo(() => {
        return users.filter(user => {
            return user.name.toLowerCase().includes(typedValue.toLowerCase()) || user.username.toLowerCase().includes(typedValue.toLowerCase());
        }).slice(0, 4);
    }, [typedValue]);

    const postSuggestions = useMemo(() => {
        return posts.filter(post => {
            return post.title.toLowerCase().includes(typedValue.toLowerCase()) ||
                post.description.toLowerCase().includes(typedValue.toLowerCase());
        }).slice(0, 4);
    }, [typedValue]);

    return (
        <section className="relative">
            <div className="flex items-center">
                <PiMagnifyingGlass className="absolute left-3 text-3xl text-gray-500"/>
                <input className="flex-1 gap-2 pl-14 pr-3 py-2 text-xl bg-gray-200 rounded-3xl" placeholder="search"
                       value={typedValue}
                       onChange={getValue}/>
            </div>
            {
                typedValue && (userSuggestions.length > 0 || postSuggestions.length > 0) && (
                    <div
                        className=" grid gap-2 py-4 text-xl absolute top-full translate-y-2 z-10 bg-white w-full shadow-md rounded-3xl ring-1 ring-gray-200 max-h-60 overflow-scroll">
                        {postSuggestions.length
                            ? postSuggestions.map((suggestion, index) => (
                                <Link href={`/post/${suggestion.id}`} key={index} onClick={() => setTypedValue("")}>
                                    <div className="px-10">
                                        <p className="text-base"> {suggestion.title} </p>
                                    </div>
                                </Link>
                            ))
                            : <div></div>
                        }
                        {userSuggestions.length
                            ? userSuggestions.map((suggestion, index) => (
                                <Link href={`/profile/${suggestion.id}`} key={index} onClick={() => setTypedValue("")}>
                                    <div className="px-10 flex gap-2 items-center">
                                        <img src={suggestion.profile_img} alt="profile image" width={30} height={30}
                                             className="rounded-full"/>
                                        <p className="text-base"> {suggestion.username} </p>
                                    </div>
                                </Link>
                            ))
                            : <div></div>
                        }
                    </div>
                )
            }
        </section>


    )
}