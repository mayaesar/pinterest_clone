'use client'

import {useCallback, useMemo, useState} from "react";
import posts from "@/../mocks/posts.json";
import ImageFeedDisplay from "@/components/ImageFeedDisplay";
import {cn} from "@/utils/cn";

export default function DisplayProfileContent({user}) {
    const [display, setDisplay] = useState("created");

    const userPosts = useMemo(() => {
        if (display === "created") {
            return posts.filter(post => post.user_id === user.id);
        }

        return posts.filter(post => user.saved_ids.includes(post.id));
    }, [user, display]);

    const generateColumns = useCallback((colAmount) => {
        const columns = new Array(colAmount).fill(0).map(() => []);

        userPosts.forEach((userPost, index) => {
            const i = index % colAmount;
            columns[i].push(userPost);
        });

        return columns;
    }, [userPosts]);

    const columns = useMemo(() => generateColumns(5), [generateColumns]);

    return(
        <section>
            <div className="flex justify-center gap-4 text-xl ">
                <button
                    onClick={() => setDisplay("created")}
                    className={cn("px-4 py-2", {
                        "bg-gray-200 rounded-3xl": display === "created",
                    })}
                >
                    Created
                </button>
                <button
                    onClick={() => setDisplay("saved")}
                    className={cn("px-4 py-2", {
                        "bg-gray-200 rounded-3xl": display === "saved",
                    })}
                >
                    Saved
                </button>
            </div>
            <section className="px-20 py-20">
                <div className="grid gap-4 items-start grid-cols-5">
                    {
                        columns.map((column, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                {
                                    column.map(post => (
                                        <ImageFeedDisplay image={post} key={post.id} />
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </section>
        </section>
    )
}