import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProductAPI, getListProduct } from "../../api";
import { useNavigate } from "react-router-dom";

const ListProductPage = () => {
    const data = useSelector((state: any) => state.auth.infoUser)
    const ListProduct = useSelector((state: any) => state.product.list_product);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const deleteProduct = (id: string) => {
        if(window.confirm('Ban muon xoa san pham nay khong')){
            dispatch(deleteProductAPI(id));
        }
    }
    useEffect(() => {
        dispatch(getListProduct(localStorage.getItem('token') || ''))
    },[])
    return(
        <>
        <div className="max-w-[1280px] mx-auto px-2">
            <div className="flex justify-end text-[22px] font-bold" >
                {data?.isAdmin ? 'Chào Admin,' : 'Chào '+data?.username}
            </div>
            <div className="flex justify-end" >
                <div className={`${data?.isAdmin} ? 'block' : 'hidden' px-2 py-3 rounded border-[#ddd]`} onClick={() => navigate('/create-product')}>Them moi</div>
            </div>
            <h2 className="lg:text-[24px] text-[20px] text-center font-bold">Danh sách sản phẩm</h2>
            <table className="bao-gia my-2">
                <tr>
                    <th>STT</th>
                    <th>Tên sản phẩm</th>
                    <th>Giá gốc</th>
                    <th>Giá khuyến mãi</th>
                    <th>Số lượng</th>
                    <th>Hành động</th>
                </tr>
                {
                    ListProduct?.map((product: any, index: number) => {
                        return (
                            <tr>
                                <td>{index+1}</td>
                                <td>{product.tenSanPham}</td>
                                <td>{product.giaGoc}</td>
                                <td>{product.giaKhuyenMai}</td>
                                <td>{product.soLuong}</td>
                                <td>
                                    {
                                        data?.isAdmin && (
                                            <div className="flex gap-2">
                                                <div onClick={() => navigate('/edit-product'+product.id)}>Edit</div>
                                                <div onClick={() => deleteProduct(product.id)}>delete</div>
                                            </div>
                                        )
                                    }
                                </td>

                            </tr>
                        )
                    })
                }
            </table>
        </div>
        </>
    )
}
export default ListProductPage;