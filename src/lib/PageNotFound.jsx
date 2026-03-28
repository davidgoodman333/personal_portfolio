import { Link } from "react-router-dom";

export default function PageNotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">404</h1>
                <p className="text-lg mb-6">Page not found.</p>
                <Link
                    to="/"
                    className="inline-block rounded-full border px-5 py-2"
                >
                    Go home
                </Link>
            </div>
        </div>
    );
}