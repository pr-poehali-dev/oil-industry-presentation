import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: JSX.Element;
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const slides: Slide[] = [
    {
      id: 1,
      title: 'Нефтяная отрасль России',
      subtitle: 'Стратегический сектор экономики',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="Droplets" size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-4xl font-inter font-bold text-primary">524</p>
                <p className="text-sm text-muted-foreground">млн тонн/год</p>
              </div>
            </div>
            <p className="text-lg font-medium">Добыча нефти</p>
            <p className="text-sm text-muted-foreground mt-2">2-е место в мире по объему добычи</p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-secondary/50 transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <Icon name="TrendingUp" size={28} className="text-secondary" />
              </div>
              <div>
                <p className="text-4xl font-inter font-bold text-secondary">25%</p>
                <p className="text-sm text-muted-foreground">бюджета РФ</p>
              </div>
            </div>
            <p className="text-lg font-medium">Доля в экономике</p>
            <p className="text-sm text-muted-foreground mt-2">Основной источник экспортных доходов</p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Icon name="Users" size={28} className="text-primary" />
              </div>
              <div>
                <p className="text-4xl font-inter font-bold text-primary">1M+</p>
                <p className="text-sm text-muted-foreground">человек</p>
              </div>
            </div>
            <p className="text-lg font-medium">Занятость</p>
            <p className="text-sm text-muted-foreground mt-2">Работников в отрасли</p>
          </Card>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Статистика добычи',
      subtitle: 'Динамика последних лет',
      content: (
        <div className="space-y-8 mt-12 max-w-4xl mx-auto">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter font-semibold">2024</span>
              <span className="text-2xl font-bold text-primary">524 млн т</span>
            </div>
            <Progress value={100} className="h-4" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter font-semibold">2023</span>
              <span className="text-2xl font-bold text-primary">535 млн т</span>
            </div>
            <Progress value={96} className="h-4" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter font-semibold">2022</span>
              <span className="text-2xl font-bold text-primary">535 млн т</span>
            </div>
            <Progress value={96} className="h-4" />
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-inter font-semibold">2021</span>
              <span className="text-2xl font-bold text-primary">524 млн т</span>
            </div>
            <Progress value={94} className="h-4" />
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary mb-2">+2.1%</p>
              <p className="text-sm text-muted-foreground">Рост к 2023</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-primary mb-2">10.5</p>
              <p className="text-sm text-muted-foreground">млн барр/сутки</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary mb-2">14%</p>
              <p className="text-sm text-muted-foreground">Мировой добычи</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      title: 'Ключевые компании',
      subtitle: 'Лидеры российской нефтедобычи',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-primary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">Роснефть</h3>
                <p className="text-muted-foreground">Крупнейшая нефтяная компания</p>
              </div>
              <Icon name="Building2" className="text-primary" size={32} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Добыча</span>
                <span className="font-inter font-bold text-xl">199 млн т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Доля рынка</span>
                <span className="font-inter font-bold text-xl text-primary">38%</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-secondary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">Лукойл</h3>
                <p className="text-muted-foreground">Вторая по величине компания</p>
              </div>
              <Icon name="Building2" className="text-secondary" size={32} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Добыча</span>
                <span className="font-inter font-bold text-xl">88 млн т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Доля рынка</span>
                <span className="font-inter font-bold text-xl text-secondary">17%</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-primary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">Газпром нефть</h3>
                <p className="text-muted-foreground">Нефтяное подразделение Газпрома</p>
              </div>
              <Icon name="Building2" className="text-primary" size={32} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Добыча</span>
                <span className="font-inter font-bold text-xl">61 млн т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Доля рынка</span>
                <span className="font-inter font-bold text-xl text-primary">12%</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-secondary">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl font-montserrat font-bold mb-2">Татнефть</h3>
                <p className="text-muted-foreground">Региональный лидер</p>
              </div>
              <Icon name="Building2" className="text-secondary" size={32} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Добыча</span>
                <span className="font-inter font-bold text-xl">29 млн т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Доля рынка</span>
                <span className="font-inter font-bold text-xl text-secondary">6%</span>
              </div>
            </div>
          </Card>
        </div>
      ),
    },
    {
      id: 4,
      title: 'Экспорт и рынки',
      subtitle: 'География поставок',
      content: (
        <div className="space-y-8 mt-12 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="Globe" size={32} className="text-primary" />
                <h3 className="text-2xl font-montserrat font-bold">Объем экспорта</h3>
              </div>
              <p className="text-5xl font-inter font-bold text-primary mb-2">230 млн т</p>
              <p className="text-muted-foreground">нефти в год</p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur">
              <div className="flex items-center gap-3 mb-6">
                <Icon name="DollarSign" size={32} className="text-secondary" />
                <h3 className="text-2xl font-montserrat font-bold">Выручка</h3>
              </div>
              <p className="text-5xl font-inter font-bold text-secondary mb-2">$180 млрд</p>
              <p className="text-muted-foreground">экспортной выручки</p>
            </Card>
          </div>

          <div className="space-y-6 pt-8">
            <h3 className="text-xl font-montserrat font-bold mb-6">Основные направления:</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-inter font-semibold">Китай</span>
                </div>
                <span className="text-2xl font-bold text-primary">35%</span>
              </div>
              <Progress value={35} className="h-3" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="font-inter font-semibold">Европа</span>
                </div>
                <span className="text-2xl font-bold text-secondary">28%</span>
              </div>
              <Progress value={28} className="h-3" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <span className="font-inter font-semibold">Индия</span>
                </div>
                <span className="text-2xl font-bold text-primary">20%</span>
              </div>
              <Progress value={20} className="h-3" />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-secondary"></div>
                  <span className="font-inter font-semibold">Прочие</span>
                </div>
                <span className="text-2xl font-bold text-secondary">17%</span>
              </div>
              <Progress value={17} className="h-3" />
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 5,
      title: 'Технологии и перспективы',
      subtitle: 'Инновации и будущее отрасли',
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card className="p-8 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Zap" size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Цифровизация</h3>
            <p className="text-muted-foreground mb-4">Внедрение AI и IoT для оптимизации добычи и мониторинга месторождений</p>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-inter font-bold">+15%</span>
              <span className="text-sm">эффективности</span>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Icon name="Leaf" size={28} className="text-secondary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Экология</h3>
            <p className="text-muted-foreground mb-4">Снижение выбросов CO₂ и внедрение зелёных технологий переработки</p>
            <div className="flex items-center gap-2 text-secondary">
              <span className="font-inter font-bold">-20%</span>
              <span className="text-sm">выбросов к 2030</span>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Drill" size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Новые месторождения</h3>
            <p className="text-muted-foreground mb-4">Освоение арктического шельфа и труднодоступных регионов</p>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-inter font-bold">82 млрд т</span>
              <span className="text-sm">запасов</span>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Icon name="Factory" size={28} className="text-secondary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Глубокая переработка</h3>
            <p className="text-muted-foreground mb-4">Увеличение глубины переработки до 95% для производства высокомаржинальных продуктов</p>
            <div className="flex items-center gap-2 text-secondary">
              <span className="font-inter font-bold">85%</span>
              <span className="text-sm">текущий уровень</span>
            </div>
          </Card>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
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
          PDF
        </Button>
      </div>

      <div className="relative h-screen overflow-hidden">
        <div
          key={currentSlide}
          className={`absolute inset-0 ${
            direction === 'left' ? 'animate-slide-left' : 'animate-slide-right'
          }`}
        >
          <div className="container mx-auto px-8 h-full flex flex-col justify-center">
            <div className="animate-fade-in">
              <div className="mb-8">
                <h1 className="text-6xl font-montserrat font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {slides[currentSlide].title}
                </h1>
                {slides[currentSlide].subtitle && (
                  <p className="text-2xl text-muted-foreground font-medium">
                    {slides[currentSlide].subtitle}
                  </p>
                )}
              </div>

              {slides[currentSlide].content}
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-8 left-0 right-0 flex items-center justify-center gap-6 z-50">
        <Button
          onClick={prevSlide}
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
              onClick={() => {
                setDirection(index > currentSlide ? 'left' : 'right');
                setCurrentSlide(index);
              }}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={nextSlide}
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

      <style>{`
        @media print {
          .fixed { display: none !important; }
          .absolute { position: relative !important; }
          .h-screen { height: auto !important; min-height: 100vh; }
          @page { margin: 2cm; }
        }
      `}</style>
    </div>
  );
};

export default Index;
