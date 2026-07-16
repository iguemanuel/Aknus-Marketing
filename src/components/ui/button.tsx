import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "whatsapp" | "outline-light" | "outline-dark";
type Size = "default" | "sm";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-primary text-white shadow-cta hover:-translate-y-0.5 hover:shadow-cta-hover",
  whatsapp:
    "bg-gradient-whatsapp text-white shadow-cta-whatsapp hover:-translate-y-0.5 hover:shadow-cta-whatsapp-hover",
  "outline-light":
    "border-2 border-ink/15 bg-white/60 text-ink-strong hover:-translate-y-0.5 hover:border-brand-purple hover:text-brand-purple dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-brand-violet dark:hover:text-brand-violet-light",
  "outline-dark":
    "border-2 border-white/20 text-white hover:-translate-y-0.5 hover:border-brand-violet hover:text-brand-violet",
};

const sizeClasses: Record<Size, string> = {
  default: "px-7 py-3.5 text-base",
  sm: "px-5 py-2.5 text-sm",
};

export interface ButtonVariantProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

/** Classes do botão para uso em <a> (CTAs de link) e no próprio <Button>. */
export function buttonVariants({
  variant = "primary",
  size = "default",
  className,
}: ButtonVariantProps = {}) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    Omit<ButtonVariantProps, "className"> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={buttonVariants({ variant, size, className })} {...props} />
  ),
);
Button.displayName = "Button";
