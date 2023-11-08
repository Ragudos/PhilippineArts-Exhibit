import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const buttonVariants = cva(
    "transition-colors duration-200 inline-flex justify-center font-medium items-center focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-background focus-visible:ring-offset-2 outline-transparent disabled:opacity-50",
    {
        variants: {
            size: {
                default: "text-sm h-9 px-4 py-2",
                sm: "text-xs h-8 px-2 py-1",
                md: "text-sm h-8 px-3 py-2",
                icon: "w-8 h-8",
            },
            rounded: {
                default: "rounded-md",
                sm: "rounded-sm",
                lg: "rounded-lg",
            },
            colors: {
                default: "bg-transparent text-foreground",
                primary:
                    "bg-primary text-primary-foreground hover:bg-primary/80",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                accent: "bg-accent text-accent-foreground hover:bg-accent/80",
                ghost: "bg-transparent text-foreground hover:bg-accent/20",
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/80",
            },
        },
        defaultVariants: {
            size: "default",
            rounded: "default",
            colors: "default",
        },
    },
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, type, size, rounded, colors, ...props }, ref) => {
        return (
            <button
                type={type || "button"}
                className={cn(
                    buttonVariants({
                        size,
                        rounded,
                        colors,
                        className,
                    }),
                )}
                ref={ref}
                {...props}
            />
        );
    },
);

export { Button, buttonVariants };
