import React, { useRef, useState, useEffect } from 'react';
import { useCategories } from '../hooks/useCategories';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SubNavProps {
  selectedCategory: string;
  onCategoryClick: (categoryId: string) => void;
}

const SubNav: React.FC<SubNavProps> = ({ selectedCategory, onCategoryClick }) => {
  const { categories, loading } = useCategories();
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

  // Handle mouse wheel horizontal scrolling
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
    <div className="sticky top-16 z-40 bg-white shadow-sm hidden md:block">
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
          className="flex items-center space-x-3 py-4 px-4 overflow-x-auto"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {loading ? (
            <div className="flex space-x-4">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="h-8 w-20 bg-gray-200 rounded animate-pulse" />
              ))}
            </div>
          ) : (
            <>
              <button
                onClick={() => onCategoryClick('all')}
                data-category="all"
                className={`px-4 py-2 rounded-lg text-sm font-chipori-bold transition-all duration-200 border-2 category-button ${
                  selectedCategory === 'all'
                    ? 'bg-chipori-headerRed text-white border-chipori-headerRed shadow-lg'
                    : 'bg-white text-black border-gray-300 hover:border-chipori-headerRed hover:shadow-md'
                }`}
              >
                All
              </button>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onCategoryClick(c.id)}
                  data-category={c.id}
                  className={`px-4 py-2 rounded-lg text-sm font-chipori-bold transition-all duration-200 border-2 flex items-center space-x-2 category-button ${
                    selectedCategory === c.id
                      ? 'bg-chipori-headerRed text-white border-chipori-headerRed shadow-lg'
                      : 'bg-white text-black border-gray-300 hover:border-chipori-headerRed hover:shadow-md'
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                </button>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubNav;


