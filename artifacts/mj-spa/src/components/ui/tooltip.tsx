import * as React from "react"

// Lightweight tooltip stub — @radix-ui/react-tooltip ships "use client"
// directives that cause Rollup sourcemap warnings in Vite production builds.
// Tooltips are not used in any rendered page of this SPA, so a passthrough
// stub that satisfies the type contract is sufficient.

const TooltipProvider = ({ children }: { children: React.ReactNode }) =>
  <>{children}</>

const Tooltip = ({ children }: { children: React.ReactNode }) =>
  <>{children}</>

const TooltipTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, ...props }, ref) => (
  <button ref={ref} {...props} style={{ all: "unset", ...props.style }}>
    {children}
  </button>
))
TooltipTrigger.displayName = "TooltipTrigger"

const TooltipContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((_props, _ref) => null)
TooltipContent.displayName = "TooltipContent"

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }
