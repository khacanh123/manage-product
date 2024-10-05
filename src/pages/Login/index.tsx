import { useState } from "react";
import { notify } from "../../utils/notify";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../api";
// import { UserData } from "../../store/selector";
import { useSendSignInMutation } from "../../store/slice/api";

type LoginInfo = {
    phone: string,
    password: string,
    deviceToken: string,
}
const LoginPage = () => {
    const [LoginData, setLoginData] = useState<LoginInfo>({
        phone: '',
        password: '',
        deviceToken: 'string'
    })
   const [sendSignIn, signInData] = useSendSignInMutation()
    const LoginFunction = () => {
        if(LoginData.phone.trim() == '' || LoginData.password == '') notify({type: 'error', message: 'Vui lòng nhập đủ thông tin!'})
        else {
          // dispatch(loginRequest(LoginData));
          // sendSignIn(LoginData);
          axios.post(`https://booking-driver-production.up.railway.app/api/auth/login`, LoginData).then((res: any) => {
            if(res.status == 200) {
              notify({
                type: 'success',
                message: 'Login successfully!'
              })
              localStorage.setItem('token', res.data.data.accessToken);
              window.location.href = '/'
            }
            
          })
        }
    }
    // const data = useSelector((state: any) => state.auth.dataUser)
  return (
    <div className=" h-[100vh] bg-[#fbd33d] flex justify-center items-center">
      <div className="w-[80%] mx-auto bg-white p-2.5 rounded-md lg:w-[35%]">
        <div className="flex justify-center my-2">
            <h3 className="text-[30px] text-red uppercase">Logo </h3>
        </div>
        <label htmlFor="" className="lg:text-[18px] text-[16px] font-bold">
          Tên đăng nhập
        </label>

        <input
          className="py-2 px-3 h-10 border rounded-md w-full my-2"
          type="text"
          onChange={(e: any) => setLoginData((pre) => {
            return {
                ...pre,
                phone: e.target.value
            }
        })}
        />
        <label htmlFor="" className="lg:text-[18px] text-[16px] font-bold">
          Mật khẩu
        </label>
        <input
          className="py-2 px-3 h-10 border rounded-md w-full my-2"
          type="password"
          onChange={(e: any) => setLoginData((pre) => {
            return {
                ...pre,
                password: e.target.value
            }
        })}
        />
        <div className="flex justify-center">
            <button className="py-2 px-3 bg-[#282c34] text-white font-bold lg:text-[17px] text-[15px] rounded-md" onClick={LoginFunction}>Đăng nhập</button>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
