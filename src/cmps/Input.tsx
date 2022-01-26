import { ErrorMessage, Field } from 'formik';
import React from 'react';

type Props = {
    name: string,
    value:any
};

export default function Input({name,value }: Props) {
    return <div className="flex">
        <label htmlFor={name}>{name}</label>
        <Field type="text"  name={value} id={name}  />
        <ErrorMessage name={name} component="p" />
    </div>;
}
