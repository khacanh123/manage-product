import { useNavigate } from "react-router-dom";

const AdminLayout = ({children}: any) => {
    const navigate = useNavigate()
    return (
        <div className="flex">
  {/* Sidebar */}
  <div className="w-[120px] h-screen bg-gray-800">
    {/* Nội dung sidebar */}
    <ul className="text-white">
      <li className="p-4 hover:bg-gray-700">Dashboard</li>
      <li className="p-4 hover:bg-gray-700" onClick={()=>navigate('/')}>Users</li>
      <li className="p-4 hover:bg-gray-700" onClick={()=>navigate('/become-mechanic')}>Become Mechanic</li>
    </ul>
  </div>
  {/* Content */}
  <div className="flex-1 bg-white p-8">
    {children}
  </div>
</div>

    )
}
export default AdminLayout;