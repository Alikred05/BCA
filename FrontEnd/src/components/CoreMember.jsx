
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const CoreMember = () => {
  const navigate = useNavigate();
  const { members } = useContext(AppContext);

  return (
    <div id="members">
      {/* Hero Section */}
      <div className="container mx-auto px-2 py-8 lg:py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-700 rounded-full text-sm font-medium mb-6">
            ✨ Meet Our Team
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Top Core
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-600"> Members</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Meet the exceptional individuals who drive innovation and excellence in everything we do
          </p>
        </div>

        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 lg:gap-4 mb-16">
          {members.slice(0, 5).map((item, index) => (
            <div className="group relative bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden border border-gray-100 hover:border-violet-200 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img 
                  className="w-full h-100 sm:h-100 object-cover group-hover:scale-105 transition-transform duration-500" 
                  src={item.image} 
                  alt={item.name}
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/300x200/f3f4f6/9ca3af?text=No+Image';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-emerald-600 text-xs font-semibold">Active</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-violet-600 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm font-medium mb-3">
                  {item.position}
                </p>
                
              </div>

              {/* Hover Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-violet-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div> */}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default CoreMember;
