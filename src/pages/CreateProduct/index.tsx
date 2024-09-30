import React, { useEffect, useState } from "react";
import { notify } from "../../utils/notify";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createProductAPI, getProductByID, updateProductAPI } from "../../api";

interface Product {
  tenSanPham: string;
  giaGoc: number;
  giaKhuyenMai: number;
  soLuong: number;
  moTa: string;
}

const CreateProductPage = () => {
  const detail_product = useSelector(
    (state: any) => state.product.detailProduct
  );
  const [product, setProduct] = useState<Product>({
    tenSanPham: detail_product?.tenSanPham || "",
    giaGoc: detail_product?.giaGoc || 0,
    giaKhuyenMai: detail_product?.giaKhuyenMai || 0,
    soLuong: detail_product?.soLuong || 0,
    moTa: detail_product?.moTa || "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]:
        name === "soLuong" || name === "giaGoc" || name === "giaKhuyenMai"
          ? Number(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Sản phẩm mới:", product);
    if (product.tenSanPham === "")
      notify({ type: "error", message: "Nhap ten san pham" });
    else {
      if (params.id !== undefined) {
        // update product
        dispatch(updateProductAPI(product));
        navigate("/");
      } else {
        //create product
        dispatch(createProductAPI(product));
        navigate("/");
      }
    }
  };
  // co su thay doi cua params id
  useEffect(() => {
    dispatch(getProductByID(params.id || ""));
  }, [params.id]);
  return (
    <div className="max-w-[1280px] mx-auto px-2">
      <h2 className="text-2xl font-bold text-center mb-6">Thêm mới sản phẩm</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="tenSanPham"
          >
            Tên sản phẩm:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            id="tenSanPham"
            name="tenSanPham"
            value={product.tenSanPham}
            onChange={handleChange}
            placeholder="Nhập tên sản phẩm"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="giaGoc"
          >
            Giá gốc:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="giaGoc"
            name="giaGoc"
            value={product.giaGoc}
            onChange={handleChange}
            placeholder="Nhập giá gốc"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="giaKhuyenMai"
          >
            Giá khuyến mãi:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="giaKhuyenMai"
            name="giaKhuyenMai"
            value={product.giaKhuyenMai}
            onChange={handleChange}
            placeholder="Nhập giá khuyến mãi"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="soLuong"
          >
            Số lượng:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="number"
            id="soLuong"
            name="soLuong"
            value={product.soLuong}
            onChange={handleChange}
            placeholder="Nhập số lượng"
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="moTa"
          >
            Mô tả:
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="moTa"
            name="moTa"
            value={product.moTa}
            onChange={handleChange}
            placeholder="Nhập mô tả sản phẩm"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Thêm sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductPage;
