import profile from "../../mocks/users.json";
import Link from "next/link";

export default function CommentDisplay({comment}) {

    const user = profile.find(u => u.id === Number(comment.user_id));

    return(
        <div>
            <Link href={`/profile/${user.id}`}>
                <div className="flex gap-2 items-center mb-2">
                    <img src={user.profile_img} alt="profile image" width={30} height={30}
                         className="rounded-full"/>
                    <p className="text-base font-semibold"> {user.username} </p>
                    <p className="text-sm text-gray-500">{comment.date}</p>
                </div>
            </Link>
            <div className="text-base bg-gray-100 rounded-2xl flex-1 px-4 py-2">{comment.comment}</div>
        </div>
    )
}