import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { forgetPasswordUser, verifyUserOtp } from "@/store/auth-slice";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { Button } from "@/components/ui/button";

function EnterOtp() {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60); // Timer for resend OTP
  const [isResendDisabled, setIsResendDisabled] = useState(true); // Resend button state
  const dispatch = useDispatch();
  const { toast } = useToast();
  const state = useSelector((state) => state.auth);
  const navigate = useNavigate();

  function handleChange(otpValue) {
    setOtp(otpValue);
  }

  useEffect(() => {
    if (!state?.recoveryEmail) {
      navigate("/auth/forgot-password");
    }
  }, [state]);

  function onSubmit(event) {
    event.preventDefault();
    // dispatch(setRecoveryOtp({email:state?.recoveryEmail, otp: otp }));

    dispatch(verifyUserOtp({ email: state?.recoveryEmail, otp: otp })).then(
      (data) => {
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
          });
          setOtp("");
          navigate("/auth/reset-password");
        } else {
          toast({
            title: data?.error?.message,
            variant: "destructive",
          });
        }
      }
    );
  }

  function handleResendOtp() {
    setTimer(60);
    setIsResendDisabled(true);
    dispatch(forgetPasswordUser({email: state?.recoveryEmail,})).then((data) => {
      if (data?.payload?.success) {
        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.error?.message,
          variant: "destructive",
        });
      }
    })
  }

  useEffect(() => {
    let countdown;
    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendDisabled(false); // Enable resend button after timer ends
    }
    return () => clearInterval(countdown); // Clean up timer on component unmount
  }, [timer]);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
          Please enter OTP
        </h5>
      </div>
      <form onSubmit={onSubmit}>
        <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: "3rem",
                height: "3rem",
                textAlign: "center",
                margin: "0.5rem",
                fontSize: "2rem",
                borderRadius: 4,
                border: "1px solid rgba(0,0,0,0.3)",
              }}
            />
          )}
        />
        <Button
          type="submit"
          className="mt-4 w-full"
          disabled={!isResendDisabled}
        >
          {timer > 0 ? `Verify (${timer}s)` : "Submit"}
        </Button>
      </form>
      <Button
        onClick={handleResendOtp}
        className="mt-2 w-full"
        disabled={isResendDisabled}
      >
        {isResendDisabled ? `Resend OTP in ${timer}s` : "Resend OTP"}
      </Button>
      <p className="mt-1">
        Don't have an account?
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

export default EnterOtp;
