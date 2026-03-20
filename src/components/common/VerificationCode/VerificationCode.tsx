import clsx from "clsx";
import React from "react";
import OTPInput, { ResendOTP, ResendOTPType } from "otp-input-react";
import { Button, Text } from "@/components/common";
import classes from "./VerificationCode.module.css";

interface VerificationCodeProps {
  OTP: string;
  setOTP: (val: string) => void;
  otpInvalid: boolean;
  setOtpInvalid: (val: boolean) => void;

  onVerify: () => void;
}

const renderButton = (buttonProps: ResendOTPType) => {
  return (
    <div className={classes.resendButonContainer}>
      <Text sm primitive500>
        Didn’t get the code?
      </Text>
      <button
        {...buttonProps}
        disabled={buttonProps.remainingTime !== 0}
        className={clsx(
          classes.resend,
          buttonProps.remainingTime !== 0 && classes.notAllowed
        )}
      >
        {buttonProps.remainingTime !== 0
          ? `Resend ${buttonProps.remainingTime}s`
          : "Resend"}
      </button>
    </div>
  );
};

const VerificationCode: React.FC<VerificationCodeProps> = ({
  otpInvalid,
  setOtpInvalid,
  OTP,
  setOTP,
  onVerify,
}) => {
  return (
    <div className={classes.wrapper}>
      <Text primitive500 sm textCenter>
        Enter 6-Digit Code
      </Text>
      <div className={classes.inputWrapper}>
        <OTPInput
          inputClassName={clsx(
            classes.input,
            otpInvalid && OTP.length === 6 && classes.hasError
          )}
          value={OTP}
          onChange={(value: string) => {
            setOTP(value);
            if (otpInvalid) {
              setOtpInvalid(false);
            }
          }}
          autoFocus
          OTPLength={6}
          otpType="number"
          disabled={false}
        />

        {otpInvalid && OTP.length === 6 && (
          <Text xs className={classes.helperError}>
            Please enter valid verification code.
          </Text>
        )}
      </div>
      <Button wFull onClick={onVerify}>
        Verify & Continue
      </Button>

      <ResendOTP
        renderButton={renderButton}
        maxTime={30}
        timeInterval={1000}
        renderTime={() => null}
        onResendClick={() => console.log("Resend clicked")}
      />
    </div>
  );
};

export default VerificationCode;
