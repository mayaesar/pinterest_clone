'use client'

import {useCallback, useMemo, useState} from "react";
import posts from "../../mocks/posts.json";
import ImageFeedDisplay from "@/components/ImageFeedDisplay";

export default function DisplayProfileContent({user}) {
    const [display, setDisplay] = useState("created");

    const userPosts = useMemo(() => {
        const postIds = display === "created" ? user.post_ids : user.saved_ids;
        return posts.filter(post => postIds.includes(post.id));
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
                <p onClick={() => setDisplay("created")} >Created</p>
                <p onClick={() => setDisplay("saved")}>Saved</p>
            </div>
            <section className="px-20 py-20">
                <div className="grid gap-4 items-start grid-cols-5">
                    {
                        columns.map((column, index) => (
                            <div className="flex flex-col gap-4" key={index}>
                                {
                                    column.map(post => (
                                        <ImageFeedDisplay image={post.link} key={post.id} />
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