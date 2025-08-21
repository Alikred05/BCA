import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Sample notification data
const mockNotifications = [
  {
    id: 1,
    title: "Annual Tech Fest Update",
    message: "The annual tech fest will be held on 25th October. All members must attend.",
    date: "2025-04-05",
    read: false,
  },
  {
    id: 2,
    title: "Meeting Reminder",
    message: "There will be an executive meeting tomorrow at 5 PM in Room 301.",
    date: "2025-04-03",
    read: true,
  },
  {
    id: 3,
    title: "New Member Onboarding",
    message: "Welcome to all new members! Please check your email for orientation details.",
    date: "2025-04-01",
    read: true,
  },
];

const Notice = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setNotifications(mockNotifications);
      setLoading(false);
    }, 600);
  }, []);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notice) =>
        notice.id === id ? { ...notice, read: true } : notice
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notice) => ({ ...notice, read: true }))
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white shadow rounded-lg p-4 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded w-full mb-4"></div>
              <div className="h-3 bg-gray-200 rounded w-1/4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 px-4 sm:px-6 lg:px-2">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-violet-600 hover:text-violet-800"
          >
            ← Back
          </button>
          <button
            onClick={markAllAsRead}
            className="text-sm text-violet-600 hover:text-violet-800 underline"
          >
            Mark all as read
          </button>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">Notifications</h1>

        {/* Notifications List */}
        {notifications.length > 0 ? (
          <div className="space-y-4">
            {notifications.map((notice) => (
              <div
                key={notice.id}
                className={`p-5 bg-white rounded-xl shadow-sm border-l-4 ${
                  notice.read ? 'border-gray-300' : 'border-violet-500 bg-violet-50'
                }`}
              >
                <div className="flex justify-between items-start">
                  <h2 className={`font-semibold ${notice.read ? 'text-gray-800' : 'text-violet-700'}`}>
                    {notice.title}
                  </h2>
                  <span className="text-xs text-gray-400">{new Date(notice.date).toLocaleDateString()}</span>
                </div>
                <p className="mt-2 text-gray-600">{notice.message}</p>
                {!notice.read && (
                  <button
                    onClick={() => markAsRead(notice.id)}
                    className="mt-3 text-xs text-violet-600 hover:text-violet-800"
                  >
                    Mark as read
                  </button>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <img src="/assets/no-notifications.png" alt="No notifications" className="w-24 h-24 mx-auto mb-4 opacity-60" />
            <h3 className="text-lg font-medium text-gray-600">No notifications yet</h3>
            <p className="text-sm text-gray-500 mt-1">You'll receive updates here from the admin.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;