import { mergeProps } from "solid-js";
import { clickOutside } from "../../AppUtils";
import { cn } from "../../AppUtils";
import { Icons } from "../../assets/icons";

clickOutside;

const BottomSheet = (_props) => {
	const props = mergeProps({ toggle: false, setToggle: () => {}, disableToggle: false }, _props);

	return (
		<>
			<div
				onClick={() => props.setToggle(false)}
				class={cn(
					"fixed w-full h-screen bg-[#00000099] flex justify-center items-center right-0 top-0 ease-in-out opacity-0 z-50 pointer-events-none duration-700",
					{ "opacity-100 pointer-events-auto": props.toggle }
				)}
			></div>
			<div
				class={cn(
					"fixed w-full md:w-96 min-h-[20rem] flex flex-col bg-white z-50 rounded-t-2xl -bottom-full left-0 duration-500 ease-in-out",
					{ "bottom-0": props.toggle }
				)}
			>
				<div
					// @ts-ignore
					use: clickOutside={() => {
						if (!props.disableToggle) {
							props.setToggle(false);
						}
					}}
					class="w-full p-4 border-b-2 flex items-center justify-between"
				>
					<p class="text-2xl text-primaryDark">{props.title ? props.title : null}</p>
					<div
						onClick={() => props.setToggle(false)}
						class="h-9 w-9 p-2 flex items-center justify-center rounded-full text-black hover:text-red-600 bg-stone-200 hover:bg-stone-400 active:scale-90 lg:cursor-pointer duration-500"
					>
						<Icons.CloseIcon class="w-full h-full" />
					</div>
				</div>
				<div class={cn("w-full flex flex-col p-4", { "p-0": props.fullWidth })}>
					{props?.children}
				</div>
			</div>
		</>
	);
};

export default BottomSheet;
