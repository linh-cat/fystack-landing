"use client";

import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
  title: string;
  excerpt?: string | null;
}

export default function ShareButton({ title, excerpt }: ShareButtonProps) {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title,
        text: excerpt || undefined,
        url: window.location.href,
      });
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        // You could add a toast notification here if needed
        console.log('URL copied to clipboard');
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="sm"
      className="w-full justify-start"
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  );
} 