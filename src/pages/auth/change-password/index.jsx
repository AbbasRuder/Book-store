import { createSignal } from "solid-js";
import { Icons } from "../../../assets/icons";
import { Button, InputField } from "../../../widgets";
import icon from '../../../assets/book-icon2.png'
import { useNavigate } from "@solidjs/router";

export default function ChangePassword() {
    const [showPassword, setShowPassword] = createSignal(false);
    const [password, setPassword] = createSignal("");
    const [confirmPassword, setConfirmPassword] = createSignal("");
    const [showConfirmPassword, setShowConfirmPassword] = createSignal(false);

    const navigate = useNavigate()

    return (
        <div class="p-[20px] flex flex-col justify-center items-center min-h-screen">
            <div class='flex items-center gap-4'>
                <img src={icon} alt="" class='w-12 h-12' />
                <p class='text-4xl font-bold'>Bookify</p>
            </div>
            <div class="mt-12 space-y-4 w-4/5">
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
                <InputField
                    placeholder="Confirm Password"
                    type={showConfirmPassword() ? "text" : "password"}
                    value={confirmPassword()}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    rightIcon={
                        <Button
                            onClick={() => setShowConfirmPassword(!showConfirmPassword())}
                            size="xs"
                            variant="ghost"
                            class="hover:bg-transparent"
                        >
                            <Show when={showConfirmPassword()}>
                                <Icons.EyeOpenIcon class="w-7 h-auto text-black_primary" />
                            </Show>
                            <Show when={!showConfirmPassword()}>
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
                Submit
            </Button>
        </div>
    )
}
