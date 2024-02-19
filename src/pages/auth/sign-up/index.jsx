import { createSignal } from "solid-js";
import { Icons } from "../../../assets/icons"
import { Button, InputField } from "../../../widgets";
import icon from '../../../assets/book-icon2.png'
import { useNavigate } from "@solidjs/router";

export default function SignUp() {
    const [showPassword, setShowPassword] = createSignal(false);

    const [userName, setUserName] = createSignal("");
    const [password, setPassword] = createSignal("");
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
                    placeholder="Enter Full Name"
                    type="text"
                    value={userName()}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <InputField
                    placeholder="Enter Email"
                    type="text"
                    value={email()}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    placeholder="Enter Password"
                    type={showPassword() ? "text" : "password"}
                    value={password()}
                    onChange={(e) => setPassword(e.target.value)}
                    rightIcon={
                        <Button
                            onClick={() => setShowPassword(!showPassword())}
                            size="xs"
                            variant="ghost"
                            class="hover:bg-transparent"
                        >
                            <Show when={showPassword()}>
                                <Icons.EyeOpenIcon class="w-7 h-auto text-black_primary" />
                            </Show>
                            <Show when={!showPassword()}>
                                <Icons.EyeOffIcon class="w-7 h-auto text-black_primary" />
                            </Show>
                        </Button>
                    }
                />
            </div>

            <Button
                onClick={() => navigate("/home")}
                size="lg"
                class="mt-16 w-4/5 rounded-2xl"
            >
                Signup
            </Button>

            <div class="mt-10 w-4/5 border-t border-neutral py-12 flex items-center justify-between">
                <h3 class="">Already have an account?</h3>

                <Button
                    onClick={() => navigate("/login")}
                    variant="outlined"
                    class="px-8 rounded-2xl"
                >
                    Login
                </Button>
            </div>
        </div>
    )
}
