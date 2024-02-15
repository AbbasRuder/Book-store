import { cn } from "../../AppUtils";

const InputField = (props) => {
	return (
		<div class="w-full">
			{props.label ? (
				<label for={props.placeholder} class="block mb-2 text-lg font-medium">
					{props.label}
				</label>
			) : null}
			<div class="relative w-full h-full flex items-center shadow-sm rounded-xl bg-neutral">
				{props.leftIcon ? (
					<span class="absolute left-0 top-0 h-full flex item-center justify-center text-dark-secondary px-2">
						{props.leftIcon}
					</span>
				) : null}
				<input
					{...props}
					id={props.placeholder}
					class={cn(
						"bg-neutral block w-full rounded-xl border-0 py-3 px-10 text-lg text-dark-primary placeholder:text-dark-secondary focus:outline-none focus:ring-1 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6",
						props.class
					)}
					disabled={props.disabled}
					value={props.value}
				/>
				{props.rightIcon ? (
					<span class="absolute right-0 top-0 h-full flex items-center justify-center text-dark-secondary pl-2">
						{props.rightIcon}
					</span>
				) : null}
			</div>
		</div>
	);
};

export default InputField;
