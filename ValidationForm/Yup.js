import React from 'react';
import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    userName: Yup.string()
        .min(5, 'Tên đăng nhập quá ngắn!')
        .required('Trường này là bắt buộc!'),
    password: Yup.string()
        .min(5, 'Mật khẩu phải trên 6 kí tự!')
        .required('Trường này là bắt buộc!'),
    email: Yup.string()
        .email('Không hợp lệ')
        .required('Trường này là bắt buộc!'),
    numberPhone: Yup.string()        
        .required('Trường này là bắt buộc!'),
});