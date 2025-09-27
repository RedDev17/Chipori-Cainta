import React, { useRef, useState, useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories } = useCategories();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScrollability = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 200;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 200;
    }
  };

  // Touch swipe handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && canScrollRight) {
      scrollRight();
    }
    if (isRightSwipe && canScrollLeft) {
      scrollLeft();
    }
  };

  // Handle mouse wheel horizontal scrolling for desktop
  const handleWheel = (e: WheelEvent) => {
    if (scrollContainerRef.current) {
      // Prevent page from scrolling vertically when scrolling categories horizontally
      e.preventDefault();
      e.stopPropagation();
      
      // Support both vertical wheel (deltaY) and horizontal wheel (deltaX)
      const scrollAmount = (e.deltaY || e.deltaX) * 0.8;
      scrollContainerRef.current.scrollBy({ 
        left: scrollAmount
      });
    }
  };

  useEffect(() => {
    checkScrollability();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollability);
      container.addEventListener('wheel', handleWheel, { passive: false });
      return () => {
        container.removeEventListener('scroll', checkScrollability);
        container.removeEventListener('wheel', handleWheel);
      };
    }
  }, [categories]);

  // Removed auto-scroll behavior - let users scroll manually with mouse wheel

  return (
    <div className="sticky top-16 z-40 bg-white md:hidden shadow-sm">
      <div className="relative w-full overflow-hidden">
        {/* Left scroll button */}
        {canScrollLeft && (
          <button
            onClick={scrollLeft}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-chipori-headerRed hover:bg-chipori-darkRed shadow-lg rounded-full p-2 text-white transition-all duration-200"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
        )}

        {/* Right scroll button */}
        {canScrollRight && (
          <button
            onClick={scrollRight}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-chipori-headerRed hover:bg-chipori-darkRed shadow-lg rounded-full p-2 text-white transition-all duration-200"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        )}

        <div
          ref={scrollContainerRef}
          className="flex px-4 py-3 space-x-3 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
        <button
          onClick={() => onCategoryClick('all')}
          data-category="all"
          className={`category-button flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 border-2 ${
            selectedCategory === 'all'
              ? 'bg-chipori-headerRed text-white border-chipori-headerRed shadow-lg'
              : 'bg-white text-black border-gray-300 hover:border-chipori-headerRed hover:shadow-md'
          }`}
        >
          <span className="text-sm font-chipori-bold whitespace-nowrap">All</span>
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.id)}
            data-category={category.id}
            className={`category-button flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 border-2 ${
              selectedCategory === category.id
                ? 'bg-chipori-headerRed text-white border-chipori-headerRed shadow-lg'
                : 'bg-white text-black border-gray-300 hover:border-chipori-headerRed hover:shadow-md'
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span className="text-sm font-chipori-bold whitespace-nowrap">{category.name}</span>
          </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;