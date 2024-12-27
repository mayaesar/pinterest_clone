import ImageFeedDisplay from "@/components/ImageFeedDisplay";
import posts from "@/../mocks/posts.json";
import {useCallback, useMemo} from "react";

export default function Feed() {
    const generateColumns = useCallback((colAmount) => {
        const columns = new Array(colAmount).fill(0).map(() => []);

        posts.forEach((post, index) => {
            const i = index % colAmount;
            columns[i].push(post);
        });

        return columns;
    }, []);

    const columns = useMemo(() => generateColumns(5), [generateColumns]);

    return (
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
    )

}