
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {  resendEmailOtp, verifyEmail } from "@/store/auth-slice";
import OtpInput from "react-otp-input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useToast } from "@/components/ui/use-toast";


function DialogVerifyEmail({ open, setOpen }) {
      const [otp, setOtp] = useState("");
      const [timer, setTimer] = useState(60); // Timer for resend OTP
      const [isResendDisabled, setIsResendDisabled] = useState(true); // Resend button state

      const dispatch = useDispatch();
    
  const { user } = useSelector((state) => state.auth);


  const { toast } = useToast();

function handleChange(otpValue) {
  setOtp(otpValue);
}


   function onSubmit(event) {
      event.preventDefault();
      dispatch(verifyEmail({ email: user?.email, otp: otp })).then(
        (data) => {
          if (data?.payload?.success) {
            toast({
              title: data?.payload?.message,
            });
            setOtp("");
            setOpen(false);
            window.location.reload();
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
      dispatch(resendEmailOtp({email: user?.email})).then((data) => {
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
    <Dialog open={open} >
      <DialogContent className="grid grid-cols-1 gap-1 sm:p-12 max-w-[40vw] sm:max-w-[40vw] lg:max-w-[40vw]">
      <div className="text-center">
        <h5 className="text-xl font-bold tracking-tight text-foreground">
          Please enter OTP sent to your email address.
        </h5>
      </div>
      <form onSubmit={onSubmit} className="grid place-items-center">
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
      </DialogContent>
    </Dialog>
  );
}

export default DialogVerifyEmail;
