import React, { useEffect, useState } from 'react'
import CommonForm from '../common/form'
import { editProfileFormControls, registerFormControls, resetPasswordFormControls, resetPasswordProfileFormControls } from '@/config'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { updateUserDetails, userDetails } from '@/store/auth-slice';


const initialState = {
    userName: "",
    email: "",
    phone: "",
    companyName: "",
    taxId: ""
};

const initialResetFormState = {
    currentPassword: "",
    password: "",
    ReTypePassword: ""
};


const Profile = () => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState(initialState);
    const [resetPasswordFormData, setResetPasswordFormData] = useState(initialResetFormState)
    const user = useSelector((state) => state?.auth?.user)

    useEffect(() => {
        if (!user?.id) return
        dispatch(userDetails(user?.id)).then((response) => {
            const data = response?.payload?.data
            setFormData(data)
        })
    }, [user])

    const onSubmit = (e) => {
        e.preventDefault()
        try {
            dispatch(updateUserDetails(formData))
        } catch (error) {

        }
    }

    const onResetPasswordSubmit = (e) => {
            console.log("resetPasswordFormData",resetPasswordFormData)
    }

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>Manage your account</CardTitle>
                </CardHeader>
                <CardContent>
                    <CommonForm
                        formControls={editProfileFormControls}
                        buttonText={"Update"}
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={onSubmit}
                    />
                </CardContent>
            </Card>


            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Reset your password</CardTitle>
                </CardHeader>
                <CardContent>
                    <CommonForm
                        formControls={resetPasswordProfileFormControls}
                        buttonText={"Submit"}
                        formData={resetPasswordFormData}
                        setFormData={setResetPasswordFormData}
                        onSubmit={onResetPasswordSubmit}
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default Profile