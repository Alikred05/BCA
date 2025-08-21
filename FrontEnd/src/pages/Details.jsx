import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import {
  Mail,
  Phone,
  ArrowLeft,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';

const Details = () => {
  const { memId } = useParams();
  const { members } = useContext(AppContext);
  const navigate = useNavigate();
  const [memInfo, setMemInfo] = useState(null);
  const [showContactModal, setShowContactModal] = useState(false);

  // Fetch member info
  useEffect(() => {
    if (members && memId) {
      const member = members.find((mem) => mem._id === memId);
      setMemInfo(member);
    }
  }, [members, memId]);

  if (!memInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-violet-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800">
      {/* Back Button */}
      <div className="bg-white shadow-sm px-6 py-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-violet-600 hover:text-violet-800"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      {/* Two Equal Columns Layout */}
      <div className="max-w-6xl mx-auto px-2 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Profile Image */}
        <div className="bg-white p-2 rounded-xl flex flex-col items-center justify-center">
          <img
            src={memInfo.image}
            alt={memInfo.name}
            className="w-full h-200 max-h-[400px] object-cover rounded-lg shadow"
          />
        </div>

        {/* Right - Details Section */}
        <div className="bg-white p-8 rounded-xl shadow flex flex-col justify-center">
          {/* Name & Title */}
          <h1 className="text-3xl font-bold mb-2">{memInfo.name}</h1>
          <p className="text-xl text-violet-600 font-medium mb-1">{memInfo.position}</p>
          <p className="text-sm text-gray-600 mb-6">{memInfo.degree}, Age {memInfo.age}</p>

          {/* Contact Buttons */}
          <div className="mb-6">
            <button
              onClick={() => setShowContactModal(true)}
              className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white py-3 px-6 rounded-lg transition w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Contact
            </button>
          </div>

          {/* About */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">About</h3>
            <p className="text-gray-700 leading-relaxed">{memInfo.about}</p>
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="w-5 h-5 text-violet-600" />
              <span>{memInfo.email}</span>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="w-5 h-5 text-violet-600" />
              <span>{memInfo.phone}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-violet-600 rounded-xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg text-white font-semibold">Contact {memInfo.name}</h3>
              <button
                onClick={() => setShowContactModal(false)}
                className="text-white hover:text-gray-800"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <a
                href={`mailto:${memInfo.email}`}
                className="flex items-center gap-3 p-3 bg-white border rounded-lg hover:bg-gray-200 transition"
                onClick={() => setShowContactModal(false)}
              >
                <Mail className="w-5 h-5 text-violet-600" />
                <span>Send Email</span>
              </a>
              <a
                href={`tel:${memInfo.phone}`}
                className="flex items-center gap-3 p-3 bg-white border rounded-lg hover:bg-gray-200 transition"
                onClick={() => setShowContactModal(false)}
              >
                <Phone className="w-5 h-5 text-violet-600" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;