import React from "react";
import PropTypes from "prop-types";
import { VariantProps, cva } from "class-variance-authority";
import { cn, mergeRefs } from "@/lib/utils";

interface DropdownProps
    extends React.DetailsHTMLAttributes<HTMLDetailsElement> {}
interface DropdownLabelProps
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof summaryVariants> {}
interface DropdownContentProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof contentVariants> {}

const summaryVariants = cva(
    "cursor-pointer transition-colors duration-200 inline-flex justify-center items-center focus-visible:ring-ring focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background outline-transparent disabled:opacity-50 p-2",
    {
        variants: {
            rounded: {
                default: "rounded-full",
                sm: "rounded-sm",
                lg: "rounded-lg",
            },
            colors: {
                default: "bg-muted text-muted-foreground hover:bg-muted/90",
                primary:
                    "bg-primary text-primary-foreground hover:bg-primary/90",
                secondary:
                    "bg-secondary text-secondary-foreground hover:bg-secondary/90",
                accent: "bg-accent text-accent-foreground hover:bg-accent/90",
                ghost: "bg-transparent text-foreground hover:bg-accent/20",
            },
            size: {
                default: "h-9 w-max",
                icon: "w-8 h-8",
            },
        },
        defaultVariants: {
            rounded: "default",
            colors: "default",
            size: "default",
        },
    },
);

const contentVariants = cva(
    "min-w-[5rem] absolute bg-inherit p-2 border w-max",
    {
        variants: {
            rounded: {
                md: "rounded-md",
                sm: "rounded-sm",
                none: "rounded-none",
                lg: "rounded-lg",
            },
            offset: {
                default: "top-[100%]",
                5: "top-[105%]",
                10: "top-[110%]",
                "-5": "bottom-[105%]",
                "-10": "bottom-[110%]",
            },
            position: {
                left: "left-0",
                right: "right-0",
                center: "mx-auto left-0 right-0",
            },
        },
        defaultVariants: {
            rounded: "md",
            offset: "default",
            position: "left",
        },
    },
);

const Dropdown = React.forwardRef<HTMLDetailsElement, DropdownProps>(
    ({ className, children, ...props }, ref) => {
        const detailsRef = React.useRef<HTMLDetailsElement>(null);

        const handleClose = React.useCallback((e: MouseEvent) => {
            if (!detailsRef.current) {
                return;
            }

            const target = e.target as Element;

            for (const child of detailsRef.current.children) {
                if (target == child) {
                    return;
                } else {
                    for (const children of child.querySelectorAll("*")) {
                        if (target == children) {
                            return;
                        }
                    }
                }
            }

            detailsRef.current.removeAttribute("open");
        }, []);

        React.useEffect(() => {
            if (!detailsRef.current) {
                return;
            }

            document.addEventListener("click", handleClose);

            return () => {
                document.removeEventListener("click", handleClose);
            };
        }, [handleClose]);

        return (
            <details
                className={cn(
                    "marker:hidden disabled:opacity-50 disabled:cursor-default",
                    className,
                    "relative",
                )}
                ref={mergeRefs(ref, detailsRef)}
                {...props}
            >
                {children}
            </details>
        );
    },
);

const DropdownLabel = React.forwardRef<HTMLElement, DropdownLabelProps>(
    ({ className, children, rounded, colors, ...props }, ref) => {
        return (
            <summary
                className={cn(
                    summaryVariants({
                        rounded,
                        colors,
                        className,
                    }),
                )}
                ref={ref}
                {...props}
            >
                {children}
            </summary>
        );
    },
);

const DropdownContent = React.forwardRef<HTMLDivElement, DropdownContentProps>(
    ({ className, children, position, rounded, offset, ...props }, ref) => {
        return (
            <div
                className={cn(
                    contentVariants({
                        position,
                        offset,
                        rounded,
                        className,
                    }),
                )}
                ref={ref}
                {...props}
            >
                {children}
            </div>
        );
    },
);

Dropdown.propTypes = {
    children: PropTypes.arrayOf((propValue, key, componentName) => {
        return propValue[key].type != DropdownLabel &&
            propValue[key].type != DropdownContent
            ? new Error(
                  `${componentName} only accepts children of types: [${DropdownLabel.name}, ${DropdownContent.name}]`,
              )
            : null;
    }),
};

Dropdown.displayName = "Dropdown";
DropdownLabel.displayName = "DropdownLabel";
DropdownContent.displayName = "DropdownContent";

export { Dropdown, DropdownLabel, DropdownContent };
