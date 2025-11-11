import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { slides } from '@/components/presentation/slidesData';
import SlideContent from '@/components/presentation/SlideContent';
import SlideNavigation from '@/components/presentation/SlideNavigation';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const nextSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const selectSlide = (index: number) => {
    setDirection(index > currentSlide ? 'left' : 'right');
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleExportPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <div className="fixed top-8 right-8 z-50 flex gap-3">
        <Button
          onClick={handleExportPDF}
          variant="outline"
          className="gap-2 bg-background/80 backdrop-blur"
        >
          <Icon name="Download" size={18} />
          Экспорт PDF
        </Button>
      </div>

      <div className="relative h-screen overflow-hidden">
        <SlideContent
          key={currentSlide}
          slide={slides[currentSlide]}
          direction={direction}
        />
      </div>

      <SlideNavigation
        slides={slides}
        currentSlide={currentSlide}
        onPrevSlide={prevSlide}
        onNextSlide={nextSlide}
        onSelectSlide={selectSlide}
      />

      <style>{`
        @media print {
          .fixed { display: none !important; }
          .absolute { position: relative !important; }
          .h-screen { height: auto !important; min-height: 100vh; page-break-after: always; }
          @page { margin: 1.5cm; size: landscape; }
          body { print-color-adjust: exact; -webkit-print-color-adjust: exact; }
        }
      `}</style>
    </div>
  );
};

export default Index;
