import { mergeProps } from "solid-js";
import { cva } from "class-variance-authority";
import { cn } from "../../AppUtils";
import { Icons } from "../../assets/icons";

export const buttonVariants = cva("btn", {
	variants: {
		variant: {
			default: "btn-primary disabled:bg-primary-200 text-neutral",
			ghost: "btn-ghost text-primary hover:text-primary hover:bg-primary-200",
			outlined:
				"btn-outlined btn-primary bg-transparent hover:text-neutral hover:bg-primary",
		},
		size: {
			default: "btn-md",
			xs: "btn-xs",
			sm: "btn-sm",
			lg: "btn-lg",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});


const Button = (_props) => {
	const props = mergeProps({}, _props);

	return (
		<button
			{...props}
			class={cn(
				buttonVariants({
					variant: props.variant,
					size: props.size,
					class: props.class,
				})
			)}
			disabled={props.isLoading || props.disabled}
		>
			{props.isLoading ? (
				<Icons.LoadingIcon class="mr-2 h-4 w-4 animate-spin text-primary-400" />
			) : (
				props.leftIcon
			)}

			{props.children}
		</button>
	);
};

export default Button;
