import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import {
  forgetPasswordFormControls,
  resetPasswordFormControls,
} from "@/config";
import { forgetPasswordUser, resetPasswordUser } from "@/store/auth-slice";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  newPassword: "",
  password: "",
};

function ResetPassword() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();
  const state = useSelector((state) => state.auth);
  const { recoveryEmail } = state;
  const navigate = useNavigate();

  useEffect(() => {
    if (!state?.recoveryEmail) {
      navigate("/auth/forgot-password");
    }
  }, [state]);

  function onSubmit(event) {
    event.preventDefault();
    if (formData?.newPassword === formData?.password) {
      dispatch(
        resetPasswordUser({
          email: recoveryEmail,
          newPassword: formData?.password,
        })
      ).then((data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
          });
          navigate("/auth/login");
        } else {
          toast({
            title: data?.error?.message,
            variant: "destructive",
          });
        }
      });
    } else {
      toast({
        title: "Password mismatch.",
        variant: "destructive",
      });
    }

    console.log("formData", formData);
    // dispatch(forgetPasswordUser(formData)).then((data) => {
    //   if (data?.payload?.success) {
    //     toast({
    //       title: data?.payload?.message,
    //     });
    //   } else {
    //     toast({
    //       title: data?.payload?.message,
    //       variant: "destructive",
    //     });
    //   }
    // });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
          Please enter your new password.
        </h5>
      </div>
      <CommonForm
        formControls={resetPasswordFormControls}
        buttonText={"Submit"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <p className="mt-1">
        Don't have an account
        <Link
          className="font-medium ml-2 text-primary hover:underline"
          to="/auth/register"
        >
          Register
        </Link>
      </p>
    </div>
  );
}

export default ResetPassword;
