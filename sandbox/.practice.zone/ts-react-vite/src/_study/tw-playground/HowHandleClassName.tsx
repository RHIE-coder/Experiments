import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';

export default function HowHandleClassName() {
    
    const isColorfulText = true

    const clsxStyle = clsx("p-2", isColorfulText && "text-red-500", [
        "text-xs",
        isColorfulText && "bg-cyan-500",
    ]);
    console.log(clsxStyle)

    console.log(twMerge("p-2 p-4"))         // -> "p-4"
    console.log(twMerge("text-sm text-lg")) // -> "text-lg"

    const cvaStyle = cva(
        "px-4 py-2 rounded",
        {
            variants: {
                intent: {
                    primary: "bg-blue-500",
                    secondary: "bg-red-500",
                },
                size: {
                    sm: "text-sm",
                    lg: "text-lg",
                },
            },
            defaultVariants: {
                intent: "primary",
                size: "sm"
            }
        }
    )

    console.log(cvaStyle())

    return (
       <>
        <h1 className={clsxStyle}>Hello World</h1>
        <button className={cvaStyle({
            intent: "secondary",
            size: "lg",
        })}>Click Me</button>
       </> 
    );
}