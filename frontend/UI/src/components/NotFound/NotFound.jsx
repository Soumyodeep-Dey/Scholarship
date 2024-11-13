// src/components/NotFound.jsx

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <h2 className="text-4xl font-semibold mt-2">Page Not Found</h2>
                <p className="mt-4 text-2xl text-gray-700">Sorry, the page you are looking for does not exist.</p>
                <p className="mt-4 text-xl text-gray-500">You can return to the <a href="/" className="text-blue-500 hover:underline">homepage</a> or check the URL for errors.</p>
            </div>
        </div>
    );
};

export default NotFound;
