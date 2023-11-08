import { cn } from "@/lib/utils";
import React from "react";
import { VariantProps, cva } from "class-variance-authority";

const gridVariants = cva("grid", {
    variants: {
        gap: {
            default: "gap-3",
            md: "gap-5",
            lg: "gap-7",
        },
        gridAutoRows: {
            default: "grid-flow-row-dense",
        },
        gridColumns: {
            default: "grid-cols-[repeat(auto-fill,minmax(17.5rem,1fr))]",
            sm: "grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))]",
            md: "grid-cols-[repeat(auto-fill,minmax(15rem,1fr))]",
            lg: "grid-cols-[repeat(auto-fill,minmax(20rem,1fr))]",
        },
    },
    defaultVariants: {
        gap: "default",
        gridAutoRows: "default",
        gridColumns: "default",
    },
});

interface Props
    extends React.HTMLAttributes<HTMLElement>,
        VariantProps<typeof gridVariants> {
    listOfItems: (({
        style,
    }: {
        style: React.CSSProperties;
    }) => React.ReactElement)[];
}

/** The ref to this component is == the grid parent container */
export const Masonry = React.forwardRef<HTMLElement, Props>(
    React.memo(
        ({ className, gap, gridAutoRows, listOfItems, ...props }, ref) => {
            return (
                <section
                    className={cn("grid", gap, gridAutoRows, className)}
                    ref={ref}
                    {...props}
                >
                    {listOfItems.map((Item) => (
                        <Item />
                    ))}
                </section>
            );
        },
    ),
);

const Card: React.FC<{
    Item: ({ style }: { style: React.CSSProperties }) => React.ReactElement;
}> = ({ Item }) => {
    const ref = React.useRef<HTMLElement>(null);

    return <Item />;
};
