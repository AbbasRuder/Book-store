import { createSignal } from "solid-js";
import { Button, InputField } from "../../../widgets";
import icon from '../../../assets/book-icon2.png'
import { useNavigate } from "@solidjs/router";

export default function SendOTP() {
    const [email, setEmail] = createSignal("");

    const navigate = useNavigate()

    return (
        <div class="p-[20px] flex flex-col justify-center items-center min-h-screen">
            <div class='flex items-center gap-4'>
                <img src={icon} alt="" class='w-12 h-12' />
                <p class='text-4xl font-bold'>Bookify</p>
            </div>
            <div class="mt-12 space-y-4 w-4/5">
                <InputField
                    placeholder="Enter Email or Mobile Number"
                    type="text"
                    value={email()}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <Button
                onClick={() => navigate("/verify-otp")}
                size="lg"
                class="mt-16 w-4/5 rounded-2xl"
            >
                Submit
            </Button>
        </div>
    )
}
