import Link from "next/link";
const AboutPage = () => {
    return (
        <div className="flex items-center justify-center bg-zinc-50 font-sans dark:bg-black mt-10">
            <main className="flex flex-col items-center justify-center">
                <h1>About Us</h1>
                <p>This is the about page of our Next.js application.</p>
                <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Go back to Home Page</Link>
            </main>
        </div>
    );
}

export default AboutPage;