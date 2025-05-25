"use client";
// ReviewCarousel.tsx
import React, { useState, useEffect } from "react";

interface Review {
  id: string;
  rating: number;
  comment: string;
  daysAgo: number;
  reviewer: string;
}

interface ReviewCarouselProps {
  totalReviews: number;
  reviews: Review[];
}

const StarIcon = () => (
  <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
    <rect width="40" height="40" fill="#219653" />
    <path d="M20 27.3522L26.0833 25.7233L28.625 34L20 27.3522ZM34 16.6541H23.2917L20 6L16.7083 16.6541H6L14.6667 23.2579L11.375 33.9119L20.0417 27.3082L25.375 23.2579L34 16.6541Z" fill="white" />
  </svg>
);

const TrustpilotLogo: React.FC = () => (
  <div className="flex items-center justify-center text-green-500 font-semibold text-sm">
    <span>Trustpilot</span>
  </div>
);

const RatingSummary: React.FC<{ totalReviews: number }> = ({
  totalReviews,
}) => (
  <div className="bg-[#1D1825] rounded flex flex-col w-[280px] h-[220px] mx-1 p-5 shadow-sm justify-center items-center text-center">
    <div>
      <div className="font-medium mb-2 text-white text-xl">Excellent</div>
      <div className="flex justify-center mb-2 gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="w-8 h-8">
            <StarIcon />
          </span>
        ))}
      </div>
      <div className="text-xs text-white mb-2">
        Based on <span className="font-bold underline">{totalReviews} reviews</span>
      </div>
      <TrustpilotLogo />
    </div>
  </div>
);

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => (
  <div className="bg-[#1D1825] rounded flex flex-col w-[280px] h-[220px] mx-1 p-5 shadow-sm">
    <div className="flex items-start mb-2 justify-between">
      <div className="flex gap-1 max-w-[108px]">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="w-5 h-5">
            <StarIcon />
          </span>
        ))}
      </div>
      <span className="text-[12px] text-gray-400 font-light leading-tight text-right" style={{ lineHeight: '1.1' }}>
        {review.daysAgo} days ago
      </span>
    </div>
    <h3 className="font-bold text-[18px] leading-5 text-white mb-2 break-words">Best on the<br />market</h3>
    <p className="text-[14px] text-white font-light mb-2 flex-grow leading-snug">{review.comment}</p>
    <div className="w-full border-t border-gray-200 my-1" />
    <div className="text-[14px] font-semibold text-white mt-auto">{review.reviewer}</div>
  </div>
);

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({
  totalReviews,
  reviews,
}) => {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Card width (280px) + gap (8px * 2)
  const CARD_WIDTH = 280 + 16; // px

  // Auto-scroll when not hovering
  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const maxScroll = scrollRef.current.scrollWidth - scrollRef.current.clientWidth;
          const nextScroll = Math.min(
            scrollRef.current.scrollLeft + CARD_WIDTH,
            maxScroll
          );
          scrollRef.current.scrollTo({ left: nextScroll, behavior: "smooth" });
          // Loop back to start if at end
          if (nextScroll >= maxScroll) {
            setTimeout(() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
              }
            }, 500);
          }
        }
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovering]);

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
    }
  };

  return (
    <div
      className="w-full p-8"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative max-w-[90%] mx-auto overflow-visible">
        <div className="w-full overflow-visible">
          <div
            ref={scrollRef}
            className="flex scroll-smooth scrollbar-hide -mx-2 px-2 overflow-x-visible gap-2"
            style={{
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            <div className="flex-shrink-0" style={{ scrollSnapAlign: 'center' }}>
              <RatingSummary totalReviews={totalReviews} />
            </div>
            {reviews.map((review) => (
              <div key={review.id} className="flex-shrink-0" style={{ scrollSnapAlign: 'center' }}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Reviews() {
  const reviewData = {
    totalReviews: 456,
    reviews: [
      {
        id: "1",
        rating: 5,
        comment: "I love this product because the support is great. Please...",
        daysAgo: 2,
        reviewer: "Worldtraveler",
      },
      {
        id: "2",
        rating: 5,
        comment: "I love this product because the support is great. Please...",
        daysAgo: 2,
        reviewer: "Worldtraveler",
      },
      {
        id: "3",
        rating: 5,
        comment: "I love this product because the support is great. Please...",
        daysAgo: 2,
        reviewer: "Worldtraveler",
      },
      {
        id: "4",
        rating: 5,
        comment: "I love this product because the support is great. Please...",
        daysAgo: 2,
        reviewer: "Worldtraveler",
      },
    ],
  };

  return (
    <div className="container min-w-screen py-8 overflow-x-hidden">
      <ReviewCarousel
        totalReviews={reviewData.totalReviews}
        reviews={reviewData.reviews}
      />
    </div>
  );
}