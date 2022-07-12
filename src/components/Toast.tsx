import React from 'react';
import styled from 'styled-components';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//------Overwriting some toastify css classes--------//
//------in order to personalize the component.-------//



const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    color: #ffffff;
    background: rgb(51, 102, 255);
  }
.Toastify__toast--success {
    color: #ffffff;
    background: #222222;
  }
.Toastify__toast--warning {
    color: #f1f1f1;
    background-color: #222222;
  }
.Toastify__toast--error {
    color: #ffffff;
    background: rgb(255, 102, 102);
  }

`;

export const message = (type: string, msg: string) => {
  switch (type) {
    case 'success':
      toast.success(msg);
      break;
    case 'warn':
      toast.warn(msg);
      break;
    case 'error':
      toast.error(msg);
      break;
    default:
      toast.info(msg);
  }
};
export default function ToastVariant() {
  return <Toast />;
}