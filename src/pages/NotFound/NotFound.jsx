import { Link } from "react-router-dom";


const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat bg-[url('https://i.ibb.co/5WtTKcZ/2.png')]">
  <div className="max-w-md mx-auto text-center bg-black/50 bg-opacity-90 p-8 rounded-lg shadow-lg">
    <div className="text-9xl font-bold text-green-600 mb-4">404</div>
    <h1 className="text-4xl font-bold text-white mb-6">Oops! Page Not Found</h1>
    <p className="text-lg text-white mb-8">The page you're looking for seems to have gone on a little adventure. Don't worry, we'll help you find your way back home.</p>
    <Link to="/"  className="btn btn-ghost text-green-400 border border-green-400">
      Go Back Home
    </Link>
  </div>
</div>
    );
};

export default NotFound;