import ProfileHero from "@/components/ProfileHero";
import profile from "@/../mocks/users.json";
import DisplayProfileContent from "@/components/DisplayProfileContent";

export default async function Profile({ params }) {
    const { id: userId } = await params;
    const user = profile.find(u => u.id === Number(userId));

    return (
        <section className="w-full max-w-screen-lg mx-auto px-3 md:px-6 mt-16">
            <ProfileHero user={user} />
            <DisplayProfileContent user={user} />
        </section>

    )
}