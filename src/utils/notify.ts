import { toast } from 'react-toastify';

toast.configure();
export type Notify = {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  autoClose?: boolean;
};
export const notify = ({ type, message }: Notify) => {
  toast[type](message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default toast;