import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Members = () => {

  const { position } = useParams()
  const [filterDoc,setFilterDoc] = useState([])
  const [showFilter,setShowFilter] = useState(false)
  const navigate = useNavigate()

  const {members} = useContext(AppContext)

  const applyFilter = () => {
    if (position){
      setFilterDoc(members.filter(doc => doc.position === position))
    } else{
      setFilterDoc(members)
    }
  }

  useEffect(()=> {
      applyFilter()
  },[members,position])
  return (
    <div>
         <p className='text-gray-600'>browse through the members of the association.</p>
         <div className='flex flex-col sm:flex-row items-start  gap-5 mt-5'>
          <button className={`${showFilter ? 'bg-violet-700 text-white' : ''}py-1 px-3 border rounded text-sm transition-all sm:hidden`}
           onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
          <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'} `}>
            <p onClick={()=> position === 'President' ? navigate('/members') : navigate('/members/President')} className={`w-[94vw] 
              sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "President" ?
               "bg-indigo-100 text-black" : ""}`}>President</p>
            <p onClick={()=> position === 'Vice-President' ? navigate('/members') : navigate('/members/Vice-President')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Vice-President" ? "bg-indigo-100 text-black" : ""}`}>Vice-President</p>
            <p onClick={()=> position === 'Secretary' ? navigate('/members') : navigate('/members/Secretary')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Secretary" ? "bg-indigo-100 text-black" : ""}`}>Secretary</p>
            <p onClick={()=> position === 'Treasurer' ? navigate('/members') : navigate('/members/Treasurer')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Treasurer" ? "bg-indigo-100 text-black" : ""}`}>Treasurer</p>
            <p onClick={()=> position === 'Deputy Secretary' ? navigate('/members') : navigate('/members/Deputy Secretary')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Deputy Secretary" ? "bg-indigo-100 text-black" : ""}`}>Deputy Secretary</p>
            <p onClick={()=> position === 'Graphics Team' ? navigate('/members') : navigate('/members/Graphics Team')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Graphics Team" ? "bg-indigo-100 text-black" : ""}`}>Graphics Team</p>
            <p onClick={()=> position === 'Tech Team' ? navigate('/members') : navigate('/members/Tech Team')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Tech Team" ? "bg-indigo-100 text-black" : ""}`}>Tech Team</p>
            <p onClick={()=> position === 'Executive Members' ? navigate('/members') : navigate('/members/Executive Members')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Executive Members" ? "bg-indigo-100 text-black" : ""}`}>Executive Members</p>
            <p onClick={()=> position === 'Sports Manager' ? navigate('/members') : navigate('/members/Sports Manager')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-violet-300 rounded transition-all cursor-pointer ${position === "Sports Manager" ? "bg-indigo-100 text-black" : ""}`}>Sports Manager</p>
          </div>
          <div className="w-full grid gap-4 pt-5 gap-y-6 px-3 sm:px-0"
        style={styles.gridContainer} >
            {
              filterDoc.map((item, index) => (
                <div
                  key={index}
                  onClick={() => navigate(`/details/${item._id || item.id}`)}
                  className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                >
                  <img className="bg-purple-50 w-full h-100 object-cover" src={item.image} alt={item.name} />
                  <div className="p-4">
                    <div className="flex items-center gap-2 text-sm text-green-500">
                      <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                      <p>Active</p>
                    </div>
                    <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                    <p className="text-gray-600 text-sm">{item.position}</p>
                  </div>
                </div>
              ))

            }
          </div>
         </div>
    </div>
  )
}

export default Members

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '16px',
  },
};

