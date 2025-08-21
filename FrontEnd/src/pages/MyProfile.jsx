import React, { useState } from 'react';
import { assets } from '../assets/assets';

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: 'Rojan Chandra Poudel',
    image: assets.profile_pic,
    email: 'poudelrojan05@gmail.com',
    phone: '9825396176',
    address: {
      line1: "Urlabari-9, Morang",
      line2: "Damak-12, Jhapa"
    },
    gender: 'Male',
    dob: '2001-09-21',
    bio: 'Passionate web developer and BCA graduate.',
  });

  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e, field, subField) => {
    if (subField) {
      setUserData((prev) => ({
        ...prev,
        [field]: {
          ...prev[field],
          [subField]: e.target.value
        }
      }));
    } else {
      setUserData((prev) => ({
        ...prev,
        [field]: e.target.value
      }));
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserData((prev) => ({ ...prev, image: e.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-3xl mx-2 my-2 bg-white rounded-xl shadow-lg p-8">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative group">
          <img
            src={userData.image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-violet-200 shadow-md"
          />
          {isEdit && (
            <label className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-full text-white text-sm cursor-pointer">
              Change Photo
              <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
            </label>
          )}
        </div>

        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => handleChange(e, 'name')}
            className="mt-4 text-2xl font-bold text-gray-800 border-none outline-none text-center"
          />
        ) : (
          <h1 className="mt-4 text-2xl font-bold text-gray-800">{userData.name}</h1>
        )}
      </div>

      {/* Edit Toggle Button */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsEdit(!isEdit)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            isEdit
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-violet-100 text-violet-700 hover:bg-violet-200'
          }`}
        >
          {isEdit ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Contact Info */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <p className="mt-1 text-gray-800">{userData.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Phone</label>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) => handleChange(e, 'phone')}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            ) : (
              <p className="mt-1 text-gray-800">{userData.phone}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600">Address</label>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) => handleChange(e, 'address', 'line1')}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) => handleChange(e, 'address', 'line2')}
                  className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </>
            ) : (
              <p className="mt-1 text-gray-800">{`${userData.address.line1}, ${userData.address.line2}`}</p>
            )}
          </div>
        </div>
      </div>

      {/* Basic Info */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">Gender</label>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) => handleChange(e, 'gender')}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="mt-1 text-gray-800">{userData.gender}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600">Birthday</label>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) => handleChange(e, 'dob')}
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            ) : (
              <p className="mt-1 text-gray-800">{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      {/* Bio / About */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Bio</h2>
        {isEdit ? (
          <textarea
            rows="4"
            value={userData.bio}
            onChange={(e) => handleChange(e, 'bio')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        ) : (
          <p className="text-gray-700">{userData.bio}</p>
        )}
      </div>
    </div>
  );
};

export default MyProfile;