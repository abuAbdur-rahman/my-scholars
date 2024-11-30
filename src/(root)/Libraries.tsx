import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card"; // Using Shadcn for styling

function Library() {
  return (
    <div className='flex flex-col p-6 space-y-6'>
      <h1 className='text-3xl font-semibold text-center'>
        Welcome to Al-Ma'wa Library
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* History Section */}
        <Card className='transition-shadow duration-300 hover:shadow-lg'>
          <div className='flex flex-col items-center'>
            <h3 className='text-xl font-medium'>Your History</h3>
            <p className='text-gray-500 mt-2'>
              View all previously listened lectures
            </p>
            <Link to='/history' className='mt-4 text-blue-500'>
              Go to History
            </Link>
          </div>
        </Card>

        {/* Downloads Section */}
        <Card className='transition-shadow duration-300 hover:shadow-lg'>
          <div className='flex flex-col items-center'>
            <h3 className='text-xl font-medium'>Your Downloads</h3>
            <p className='text-gray-500 mt-2'>
              Access all downloaded lectures offline
            </p>
            <Link to='/downloads' className='mt-4 text-blue-500'>
              Go to Downloads
            </Link>
          </div>
        </Card>

        {/* Favorites Section */}
        <Card className='transition-shadow duration-300 hover:shadow-lg'>
          <div className='flex flex-col items-center'>
            <h3 className='text-xl font-medium'>Your Favorites</h3>
            <p className='text-gray-500 mt-2'>Explore your favorite lectures</p>
            <Link to='/favorites' className='mt-4 text-blue-500'>
              Go to Favorites
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Library;
