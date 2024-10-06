import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAPI, getListProduct } from "../../api";
import { useNavigate } from "react-router-dom";
import { useGetAllUserQuery } from "../../store/slice/api";

const ListProductPage = () => {
    // const data = useSelector((state: any) => state.auth.infoUser)
    const ListProduct: any[] = [];
    const deleteProduct = (id: string) => {
        if(window.confirm('Ban muon xoa san pham nay khong')){
            // dispatch(deleteProductAPI(id));
        }
    }

    const {data, isLoading} = useGetAllUserQuery('1')
    return(
        <>
        <div className="max-w-[1280px] mx-auto px-2">
            <div className="flex justify-end text-[22px] font-bold" >
                {/* {data?.isAdmin ? 'Chào Admin,' : 'Chào '+data?.username} */}
            </div>
            <div className="flex justify-end" >
                {/* <div className={`${data?.isAdmin} ? 'block' : 'hidden' px-2 py-3 rounded border-[#ddd]`} onClick={() => navigate('/create-product')}>Them moi</div> */}
            </div>
            <h2 className="lg:text-[24px] text-[20px] text-center font-bold">Danh sách người dùng</h2>
            <table className="bao-gia my-2">
                <tr>
                    <th>STT</th>
                    <th>Tên người dùng</th>
                    <th>email</th>
                    <th>Số điện thoại</th>
                    <th>Địa chỉ</th>
                    <th>Vai tro</th>
                    <th>Hành động</th>
                </tr>
                {
                    data?.data?.content.map((user: any, index: number) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.address}</td>
                                <td>{user.roleName}</td>
                                <td>xem chi tiet

                                    {/* {
                                        data?.isAdmin && (
                                            <div className="flex gap-2">
                                                <div onClick={() => navigate('/edit-product'+product.id)}>Edit</div>
                                                <div onClick={() => deleteProduct(product.id)}>delete</div>
                                            </div>
                                        )
                                    } */}
                                </td>

                            </tr>
                        )
                    })
                }
            </table>
            {
                isLoading && (
                    <div className="relative">
  <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
    <div className="flex items-center">
      <span className="text-3xl mr-4">Loading</span>
      <svg
        className="animate-spin h-8 w-8 text-gray-800"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx={12}
          cy={12}
          r={10}
          stroke="currentColor"
          strokeWidth={4}
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  </div>
</div>

                )
            }
        </div>
        </>
    )
}
export default ListProductPage;