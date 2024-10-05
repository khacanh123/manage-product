import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductByID } from "../../api";
import { useParams } from "react-router-dom";

interface Product {
  tenSanPham: string;
  giaGoc: number;
  giaKhuyenMai: number;
  soLuong: number;
  moTa: string;
}

const DetailProduct = () => {
  const product: Product = useSelector(
    (state: any) => state.product.detailProduct
  );
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    // dispatch(getProductByID(params.id || ""));
  }, [params.id]);
  return (
    <div>
      <h2>Thông tin sản phẩm</h2>
      <p>
        <strong>Tên sản phẩm:</strong> {product.tenSanPham}
      </p>
      <p>
        <strong>Giá gốc:</strong> {product.giaGoc.toLocaleString()} VND
      </p>
      <p>
        <strong>Giá khuyến mãi:</strong> {product.giaKhuyenMai.toLocaleString()}{" "}
        VND
      </p>
      <p>
        <strong>Số lượng:</strong> {product.soLuong}
      </p>
      <p>
        <strong>Mô tả:</strong> {product.moTa}
      </p>
    </div>
  );
};

export default DetailProduct;
