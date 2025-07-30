import { Star } from "lucide-react";

export const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0; // ✅ show half star for any decimal
  const totalStars = 5;

  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < fullStars) {
      // Full Star
      stars.push(
        <Star key={i} size={18} fill="#facc15" stroke="none" />
      );
    } else if (i === fullStars && hasHalfStar) {
      // Half Star (clipped with CSS)
      stars.push(
        <span key={i} className="relative w-[18px] h-[18px] inline-block">
          <Star size={18} fill="#e5e7eb" stroke="none" className="absolute top-0 left-0" />
          <div className="absolute top-0 left-0 overflow-hidden w-1/2 h-full">
            <Star size={18} fill="#facc15" stroke="none" />
          </div>
        </span>
      );
    } else {
      // Empty Star
      stars.push(
        <Star key={i} size={18} fill="#e5e7eb" stroke="none" />
      );
    }
  }

  return <div className="flex space-x-1">{stars}</div>;
};

