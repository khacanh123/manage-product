const AdminLayout = ({children}: any) => {
    return (
        <div className="flex">
  {/* Sidebar */}
  <div className="w-[120px] h-screen bg-gray-800">
    {/* Nội dung sidebar */}
    <ul className="text-white">
      <li className="p-4 hover:bg-gray-700">Dashboard</li>
      <li className="p-4 hover:bg-gray-700">Users</li>
      <li className="p-4 hover:bg-gray-700">Settings</li>
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