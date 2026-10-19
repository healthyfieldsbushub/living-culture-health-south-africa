import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  message?: string;
  productName?: string;
  variant?: "default" | "floating" | "inline";
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({ variant = "default", className, children }: WhatsAppButtonProps) {
  const label = children || "Contact us";

  if (variant === "floating") {
    return (
      <Link
        to="/contact"
        className={cn(
          "fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#0B3D2E] px-4 py-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#15513f] group",
          className,
        )}
        aria-label="Contact Living Culture Health"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="hidden font-medium group-hover:inline-block">Contact us</span>
      </Link>
    );
  }

  if (variant === "inline") {
    return (
      <Link to="/contact" className={cn("inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-primary/80", className)}>
        <MessageCircle className="h-4 w-4" />
        {label}
      </Link>
    );
  }

  return (
    <Button asChild className={cn("gap-2 bg-[#0B3D2E] text-white hover:bg-[#15513f]", className)}>
      <Link to="/contact">
        <MessageCircle className="h-5 w-5" />
        {label}
      </Link>
    </Button>
  );
}

export const ContactButton = WhatsAppButton;
