import React from "react";
import "../css/bookingManagement.css"; // custom CSS

const BookingManagement = () => {
  const bookings = [
    {
      id: "BK001",
      name: "John Smith",
      room: "Room 205",
      checkin: "2025-08-15",
      checkout: "2025-08-18",
      status: "Confirmed",
      total: "$387",
    },
    {
      id: "BK002",
      name: "Sarah Johnson",
      room: "Room 314",
      checkin: "2025-08-16",
      checkout: "2025-08-20",
      status: "Pending",
      total: "$796",
    },
    {
      id: "BK003",
      name: "Mike Davis",
      room: "Room 421",
      checkin: "2025-08-17",
      checkout: "2025-08-19",
      status: "Confirmed",
      total: "$598",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar (fixed width) */}
      <aside className="w-64 bg-gradient-to-b from-indigo-600 to-purple-600 text-white p-6">
        <h2 className="text-2xl font-bold mb-10">Hotel Admin</h2>
        <nav>
          <ul className="space-y-5 text-sm">
            <li><a href="#" className="hover:text-yellow-300">📊 Dashboard</a></li>
            <li><a href="#" className="hover:text-yellow-300">🛏 Rooms</a></li>
            <li className="font-semibold"><a href="#">📖 Bookings</a></li>
            <li><a href="#" className="hover:text-yellow-300">👥 Customers</a></li>
            <li><a href="#" className="hover:text-yellow-300">⚙ Settings</a></li>
          </ul>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {/* Header */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h1 className="text-xl font-bold">Booking Management</h1>
          <p className="text-gray-600 text-sm">View and manage all room bookings</p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Status</label>
            <select className="w-full border rounded-md px-3 py-2 text-sm">
              <option>All Bookings</option>
              <option>Confirmed</option>
              <option>Pending</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Date Range</label>
            <input
              type="date"
              className="w-full border rounded-md px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Room Type</label>
            <select className="w-full border rounded-md px-3 py-2 text-sm">
              <option>All Types</option>
              <option>Single</option>
              <option>Double</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-6 rounded-xl shadow overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Booking ID</th>
                <th className="p-3">Guest Name</th>
                <th className="p-3">Room</th>
                <th className="p-3">Check-in</th>
                <th className="p-3">Check-out</th>
                <th className="p-3">Status</th>
                <th className="p-3">Total</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((b, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-3"><span className="badge">{b.id}</span></td>
                  <td className="p-3">{b.name}</td>
                  <td className="p-3">{b.room}</td>
                  <td className="p-3">{b.checkin}</td>
                  <td className="p-3">{b.checkout}</td>
                  <td className="p-3">
                    <span className={`status ${b.status.toLowerCase()}`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="p-3">{b.total}</td>
                  <td className="p-3">
                    <button className="view-btn">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default BookingManagement;
