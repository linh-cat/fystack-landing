import Image from "next/image";
import { StaticImageData } from "next/image";

interface DashboardPreviewProps {
  imageSrc: string | StaticImageData;
  altText?: string;
  caption?: string;
  className?: string;
}

export function DashboardPreview({
  imageSrc,
  altText = "Dashboard Interface",
  caption = "Intuitive interface to manage your wallets and transactions in one place",
  className = "",
}: DashboardPreviewProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-blue-500/30 rounded-xl blur opacity-30"></div>
      <div className="relative bg-background rounded-lg border border-primary/10 shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 bg-gradient-to-l from-primary/10 to-transparent px-4 py-1.5 text-xs font-medium text-primary rounded-bl-lg backdrop-blur-sm">
          Dashboard Preview
        </div>
        <Image
          src={imageSrc}
          alt={altText}
          width={1200}
          height={700}
          className="w-full h-auto transform transition-transform duration-500 hover:scale-[1.01]"
        />
      </div>
    </div>
  );
} 