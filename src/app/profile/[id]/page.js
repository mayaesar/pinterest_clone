import ProfileHero from "@/components/ProfileHero";

export default function Profile({ params }) {
    return (
        <section>
            <ProfileHero id={params.id} />
        </section>

    )
}