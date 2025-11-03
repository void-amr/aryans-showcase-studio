/**
 * Connect Page - Social Media & Contact Links
 * 
 * Features:
 * - Social media cards with icons (YouTube, Gmail)
 * - Email reveal functionality for Gmail
 * - Back navigation to main page
 * - Responsive grid layout
 * - Smooth hover animations
 */

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SocialCard from "@/components/SocialCard";
import { Youtube, Mail } from "lucide-react";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      {/* Back Button */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <Button 
          variant="outline" 
          className="rounded-full px-6 hover-lift"
        >
          Back to main page
        </Button>
      </Link>

      {/* Main Content */}
      <div className="w-full max-w-2xl animate-scale-in">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Connect With Me
        </h1>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-lg mx-auto">
          
          {/* YouTube Card - Solid Black */}
          <SocialCard
            icon={<Youtube size={40} />}
            label="YouTube"
            href="https://www.youtube.com/@aryanssdiary"
            variant="solid"
          />

          {/* Gmail Card - Outline White with Reveal */}
          <SocialCard
            icon={<Mail size={40} />}
            label="Gmail"
            variant="outline"
            reveal="ranjanearyan82@gmail.com"
          />
        </div>

        {/* Optional tagline */}
        <p className="text-center text-muted-foreground mt-12">
          Let's create something together
        </p>
      </div>
    </div>
  );
};

export default Connect;
