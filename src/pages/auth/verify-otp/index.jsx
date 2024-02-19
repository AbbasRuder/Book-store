import { createSignal } from "solid-js";
import { Button, InputField } from "../../../widgets";
import icon from '../../../assets/book-icon2.png'
import { useNavigate } from "@solidjs/router";

export default function VerifyOTP() {
    const [otp, setOTP] = createSignal("");

    const navigate = useNavigate()

    return (
        <div class="p-[20px] flex flex-col justify-center items-center min-h-screen">
            <div class='flex items-center gap-4'>
                <img src={icon} alt="" class='w-12 h-12' />
                <p class='text-4xl font-bold'>Bookify</p>
            </div>
            <div class="mt-12 space-y-4 w-4/5">
                <InputField
                    placeholder="Enter OTP code"
                    type="text"
                    value={otp()}
                    onChange={(e) => setOTP(e.target.value)}
                />
            </div>

            <Button
                onClick={() => navigate("/change-password")}
                size="lg"
                class="mt-16 w-4/5 rounded-2xl"
            >
                Verify
            </Button>
        </div>
    )
}
