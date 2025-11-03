/**
 * SocialCard Component
 * 
 * Displays a social media link as an interactive card
 * Features icon, label, and optional reveal functionality for email
 * Implements hover effects and responsive design
 * 
 * @param icon - React node containing the icon element
 * @param label - Display name of the social platform
 * @param href - URL link (optional for reveal type)
 * @param variant - Style variant ('solid' for black bg, 'outline' for white bg)
 * @param reveal - Email address to reveal on click (for Gmail)
 */

import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";

interface SocialCardProps {
  icon: ReactNode;
  label: string;
  href?: string;
  variant?: "solid" | "outline";
  reveal?: string;
}

const SocialCard = ({ icon, label, href, variant = "solid", reveal }: SocialCardProps) => {
  const [showReveal, setShowReveal] = useState(false);

  // Handle reveal functionality (for email)
  const handleClick = () => {
    if (reveal) {
      setShowReveal(true);
      // Auto-hide after 5 seconds
      setTimeout(() => setShowReveal(false), 5000);
    } else if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  const cardClasses = variant === "solid"
    ? "bg-primary text-primary-foreground"
    : "bg-background text-foreground border-2 border-border";

  return (
    <div className="relative w-full">
      <Button
        onClick={handleClick}
        className={`
          ${cardClasses}
          w-full h-32 rounded-2xl
          flex flex-col items-center justify-center gap-3
          hover-lift card-hover
          transition-all duration-300
          ${variant === "outline" ? "hover:border-primary" : ""}
        `}
        variant="ghost"
      >
        <div className="text-4xl">
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </Button>
      
      {/* Email reveal tooltip */}
      {reveal && showReveal && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg shadow-lg animate-fade-in z-10 whitespace-nowrap">
          {reveal}
        </div>
      )}
    </div>
  );
};

export default SocialCard;
