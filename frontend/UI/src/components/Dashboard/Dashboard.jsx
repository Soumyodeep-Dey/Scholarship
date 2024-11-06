import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 flex flex-col">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-8 flex-grow">

        {/* Applicant Information Section */}
        <div className="flex items-center bg-blue-50 p-6 rounded-lg shadow-md mb-8">
          <img
            src="https://via.placeholder.com/150" // Replace with applicant's photo URL
            alt="Applicant Photo"
            className="w-24 h-24 rounded-full object-cover mr-6"
          />
          <div>
            <h2 className="text-2xl font-semibold text-blue-700">John Doe</h2> {/* Replace with dynamic name */}
            <p className="text-lg text-gray-600">Application ID: 1234567890</p> {/* Replace with dynamic application ID */}
          </div>
        </div>

        {/* Dashboard Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-semibold text-blue-700">Dashboard</h1>
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Dashboard Card 1 */}
          <div className="bg-blue-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-700 mb-4">Application Status</h3>
            <p className="text-lg">Pending Review</p>
          </div>

          {/* Dashboard Card 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-green-700 mb-4">Scholarship Awarded</h3>
            <p className="text-lg">₹50,000</p>
          </div>

          {/* Dashboard Card 3 */}
          <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-yellow-700 mb-4">Next Steps</h3>
            <p className="text-lg">Submit additional documents</p>
          </div>
        </div>

        {/* Recent Activity Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Recent Activity</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex justify-between text-lg">
                <span className="text-gray-700">Application submitted</span>
                <span className="text-gray-500 text-sm">2 days ago</span>
              </li>
              <li className="flex justify-between text-lg">
                <span className="text-gray-700">Documents verified</span>
                <span className="text-gray-500 text-sm">3 days ago</span>
              </li>
              <li className="flex justify-between text-lg">
                <span className="text-gray-700">Scholarship awarded</span>
                <span className="text-gray-500 text-sm">5 days ago</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Settings & Account Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Account Settings</h2>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <ul>
              <li className="text-lg py-2">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-200">
                  Update Profile Information
                </a>
              </li>
              <li className="text-lg py-2">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-200">
                  Change Password
                </a>
              </li>
              <li className="text-lg py-2">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition duration-200">
                  Manage Notifications
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Logout Button (at the bottom, aligned right) */}
        <div className="flex justify-end mt-4">
          <button
            className="px-8 py-4 bg-red-600 text-white text-xl rounded-lg hover:bg-red-700 transition-all duration-300"
            onClick={() => navigate('/')}
          >
            Log Out
          </button>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
