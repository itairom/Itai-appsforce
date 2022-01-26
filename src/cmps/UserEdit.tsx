import { useEffect } from 'react';
import { User } from '../Interface/UserInterface';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import Input from './Input';
import { updateUser } from '../actions/UserActions';
import { useDispatch } from 'react-redux';

type Props = {
    user: User
    onSetIsEdit: any
};

export default function UserEdit({ user, onSetIsEdit }: Props) {

    const dispatch = useDispatch()
    useEffect(() => {
        console.log(user);

    }, [])

    const validate = Yup.object({
        // name: Yup.string()
        //     .required('Required'),
        email: Yup.string()
            .required('Required')
            .min(3),


    })
    function isEmail(email: string) {
        return( /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(email))
    }

    const onSubmit = (values: any) => {
        const userCopy = { ...user, ...values }
        if (!isEmail(values.email)) {
            alert('Email is not valid')
            return
        }


        // console.log(userCopy);
        dispatch(updateUser(userCopy))



    }
    return <div className='user-edit'>
        <Formik
            initialValues={{
                name: {
                    first: user.name.first,
                    last: user.name.last,
                    title: user.name.title,
                },
                location: {
                    city: user.location.city,
                    country: user.location.country,
                    street: {
                        name: user.location.street.name
                    }
                },
                email: user.email
            }}
            validationSchema={validate}
            onSubmit={(values) => {
                onSubmit(values)
            }} >
            <Form className="flex column align-center">
                <div className="name-form">
                    <Input name="Email" value="email" />
                    <h2>Info</h2>
                    <Input name="First name" value="name.first" />
                    <Input name="Last name" value="name.last" />
                    <Input name="Title" value="name.title" />
                </div>
                <div className="location-form">
                    <h2>Location</h2>
                    <Input name="City" value="location.city" />
                    <Input name="Country" value="location.country" />
                </div>
                <button type="submit" className="primary-btn login-signup-btn">Update</button>
                <div className="back-btn"
                    onClick={() => {
                        onSetIsEdit(false)
                    }}>Back</div>
            </Form>
        </Formik>




    </div>;
}
