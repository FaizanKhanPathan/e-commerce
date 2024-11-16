import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { forgetPasswordFormControls, resetPasswordFormControls } from "@/config";
import { forgetPasswordUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  otp:"",
  newPassword:""
};

function ResetPassword() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(forgetPasswordUser(formData)).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
        Please enter your email address below to receive otp.
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
