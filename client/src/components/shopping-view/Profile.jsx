import React, { useState } from 'react'
import CommonForm from '../common/form'
import { editProfileFormControls, registerFormControls, resetPasswordFormControls } from '@/config'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../ui/use-toast';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';


const initialState = {
    userName: "",
    email: "",
    password: "",
};


const Profile = () => {

    const [formData, setFormData] = useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { toast } = useToast();

    const onSubmit = () => {

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
                        formControls={resetPasswordFormControls}
                        buttonText={"Submit"}
                        formData={formData}
                        setFormData={setFormData}
                        onSubmit={onSubmit}
                    />
                </CardContent>
            </Card>
        </>
    )
}

export default Profile