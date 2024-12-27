import Link from "next/link";

export default function ImageFeedDisplay({ image }) {

    const link = '/post/' + image.id;

   return(
       <Link href={link}>
           <div className="relative group">
               <img src={image.link} alt={image.id} loading="lazy" className="w-full object-contain rounded-2xl hover:opacity-80"/>
               <div className="w-full absolute left-2 top-2 hidden group-hover:block">
                   <p className="inline-block bg-red-600 text-white py-2 px-3 rounded-full text-sm font-semibold">Save</p>
               </div>
           </div>
       </Link>
   )
}