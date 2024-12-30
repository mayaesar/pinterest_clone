import {PiDownloadSimpleBold, PiHeartBold} from "react-icons/pi";
import profile from "@/../mocks/users.json";
import posts from "@/../mocks/posts.json";
import ButtonBack from "@/components/ButtonBack";
import Link from "next/link";
import CommentDisplay from "@/components/CommentDisplay";

export default async function Page({params}) {

    const {id: postId} = await params;
    const post = posts.find(p => p.id === Number(postId));

    const user = profile.find(u => u.id === Number(post.user_id));

    return (
        <section className='flex items-start flex-col sm:flex-row gap-4 max-w-screen-xl w-full mx-auto mt-16 px-3 md:px-6 pb-6'>
            <ButtonBack />
            <div className='rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-2 border border-gray-300 overflow-hidden'>
                <div>
                    <img src={post.link} alt={post.title}
                         loading="lazy"
                         className="object-contain"/>
                </div>
                <div className="px-5 py-4">
                    <div className="flex items-center gap-4 text-xl">
                        <p className="flex items-center gap-1"><PiHeartBold/> 6 </p>
                        <PiDownloadSimpleBold/>
                        <p className="inline-block bg-red-600 text-white py-3 px-4 rounded-full text-base font-semibold ml-auto">Save</p>
                    </div>
                    <Link href={`/profile/${user.id}`}>
                        <div className="py-4 flex gap-2 items-center">
                            <img src={user.profile_img} alt="profile image" width={30} height={30}
                                 className="rounded-full"/>
                            <p className="text-sm"> {user.username} </p>
                        </div>
                    </Link>

                    <div>
                        <p className="text-xl font-semibold">{post.title}</p>
                        <p>{post.description}</p>
                    </div>
                    <div className="py-4">
                        {post.comments.length > 0 ? (
                            <div>
                                <p> {post.comments.length} comments </p>
                                <div className="grid gap-4 mt-4">
                                    {
                                        post.comments.map((comment, index) => (
                                            <CommentDisplay key={index} comment={comment} />
                                        ))
                                    }
                                </div>
                            </div>
                        ) : (
                            <p>add a comment</p>
                        )}
                    </div>
                </div>
            </div>
        </section>

    )
}