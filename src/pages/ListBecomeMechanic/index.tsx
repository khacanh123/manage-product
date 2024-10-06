
import Modal from 'react-modal';
import { useAcceptMechanicMutation, useGetListMechanicQuery } from "../../store/slice/api";
import { useState } from 'react';
import { notify } from '../../utils/notify';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '450px',
      transform: 'translate(-50%, -50%)',
    },
  };
//   Modal.setAppElement('#app');
const ListBecomeMechanicPage = () => {
    // const data = useSelector((state: any) => state.auth.infoUser)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [userData, setUserData] = useState<any>({})
  function openModal(user: any) {
    setIsOpen(true);
    setUserData(user)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
    const ListProduct: any[] = [];
    const deleteProduct = (id: string) => {
        if(window.confirm('Ban muon xoa san pham nay khong')){
            // dispatch(deleteProductAPI(id));
        }
    }

    const [acccept] = useAcceptMechanicMutation()
    const acceptMechanic = async(id: string) => {
        await acccept(id);
        notify({
            type: 'success',
            message: 'update successfully!'
        })
        setIsOpen(false)
    }
    const {data, isLoading, isFetching} = useGetListMechanicQuery('1')
    return(
        <>
        <div className="max-w-[1280px] mx-auto px-2">
            <div className="flex justify-end text-[22px] font-bold" >
                {/* {data?.isAdmin ? 'Chào Admin,' : 'Chào '+data?.username} */}
            </div>
            <div className="flex justify-end" >
                {/* <div className={`${data?.isAdmin} ? 'block' : 'hidden' px-2 py-3 rounded border-[#ddd]`} onClick={() => navigate('/create-product')}>Them moi</div> */}
            </div>
            <h2 className="lg:text-[24px] text-[20px] text-center font-bold">Danh sách người dùng muon tro thanh Mechanic</h2>
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
                                <td onClick={()=>openModal(user)}>xem chi tiet
                                </td>

                            </tr>
                        )
                    })
                }
            </table>
            {
                isLoading || isFetching && (<>
                <div className="relative">
  <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
    <div className="flex items-center">
      <span className="text-3xl mr-4">Loading Data...</span>
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

                </>)
            }
        </div>
        <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
       <div className='px-3 py-4'>
        <h3 className='text-center text-[24px] font-bold mb-2'>Thong tin nguoi dung</h3>
        <div className='text-[20px]'>
        <p>
        <strong>Ten nguoi dung: </strong> {userData?.name}
      </p>
      <p>
        <strong>Email: </strong> {userData?.email}
      </p>
      <p>
        <strong>So dien thoai: </strong> {userData?.phone}
      </p>
      <p>
        <strong>Dia chi: </strong> {userData?.address}
      </p>
        </div>
        <div className='flex justify-center gap-4'>
            <div className="p-2.5 rounded border-[red] border text-[red] text-[18px] cursor-pointer" onClick={closeModal}>Cancel</div>
            <div className="p-2.5 rounded border-[#1a73e8] bg-[#1a73e8] border text-[white] text-[18px] cursor-pointer"
            onClick={() => acceptMechanic(userData?.id)}
            >Phe duyet</div>
        </div>
       </div>
      </Modal>
        </>
    )
}
export default ListBecomeMechanicPage;