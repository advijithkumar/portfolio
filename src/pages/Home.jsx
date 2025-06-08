const Home = () =>{
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
            <p className="text-lg text-gray-700">This is the main content area of the application.</p>
            <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
                <p className="text-gray-600">Here you can add more content or components as needed.</p>
            </div>
        </div>
    )
}
export default Home;