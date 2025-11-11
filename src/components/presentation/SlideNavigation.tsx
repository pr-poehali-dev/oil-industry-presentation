import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Slide } from './slidesData';

interface SlideNavigationProps {
  slides: Slide[];
  currentSlide: number;
  onPrevSlide: () => void;
  onNextSlide: () => void;
  onSelectSlide: (index: number) => void;
}

const SlideNavigation = ({
  slides,
  currentSlide,
  onPrevSlide,
  onNextSlide,
  onSelectSlide,
}: SlideNavigationProps) => {
  return (
    <>
      <div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-6 z-50">
        <Button
          onClick={onPrevSlide}
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full bg-background/80 backdrop-blur hover:bg-primary/20"
        >
          <Icon name="ChevronLeft" size={24} />
        </Button>

        <div className="flex items-center gap-3 bg-background/80 backdrop-blur px-6 py-3 rounded-full">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => onSelectSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={onNextSlide}
          variant="outline"
          size="icon"
          className="w-12 h-12 rounded-full bg-background/80 backdrop-blur hover:bg-primary/20"
        >
          <Icon name="ChevronRight" size={24} />
        </Button>
      </div>

      <div className="fixed bottom-8 right-8 text-sm text-muted-foreground bg-background/80 backdrop-blur px-4 py-2 rounded-full">
        {currentSlide + 1} / {slides.length}
      </div>
    </>
  );
};

export default SlideNavigation;
