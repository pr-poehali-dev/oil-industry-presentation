import { Slide } from './slidesData';

interface SlideContentProps {
  slide: Slide;
  direction: 'left' | 'right';
}

const SlideContent = ({ slide, direction }: SlideContentProps) => {
  return (
    <div
      className={`absolute inset-0 ${
        direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'
      }`}
    >
      <div className="container mx-auto px-8 h-full flex flex-col justify-center">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl font-montserrat font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="text-2xl text-muted-foreground font-medium">
                {slide.subtitle}
              </p>
            )}
          </div>

          {slide.content}
        </div>
      </div>
    </div>
  );
};

export default SlideContent;
