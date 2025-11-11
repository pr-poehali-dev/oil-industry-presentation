import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Progress } from '@/components/ui/progress';

export interface Slide {
  id: number;
  title: string;
  subtitle?: string;
  content: JSX.Element;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: 'Нефтяная отрасль Югры',
    subtitle: 'Ханты-Мансийский автономный округ • 2024',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon name="Droplets" size={28} className="text-primary" />
            </div>
            <div>
              <p className="text-4xl font-inter font-bold text-primary">242</p>
              <p className="text-sm text-muted-foreground">млн тонн/год</p>
            </div>
          </div>
          <p className="text-lg font-medium">Добыча нефти</p>
          <p className="text-sm text-muted-foreground mt-2">46% от общероссийской добычи</p>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-secondary/50 transition-all hover:scale-105">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
              <Icon name="TrendingUp" size={28} className="text-secondary" />
            </div>
            <div>
              <p className="text-4xl font-inter font-bold text-secondary">85%</p>
              <p className="text-sm text-muted-foreground">бюджета округа</p>
            </div>
          </div>
          <p className="text-lg font-medium">Доля в экономике</p>
          <p className="text-sm text-muted-foreground mt-2">Основной источник доходов региона</p>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all hover:scale-105">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Icon name="Factory" size={28} className="text-primary" />
            </div>
            <div>
              <p className="text-4xl font-inter font-bold text-primary">300+</p>
              <p className="text-sm text-muted-foreground">месторождений</p>
            </div>
          </div>
          <p className="text-lg font-medium">Ресурсная база</p>
          <p className="text-sm text-muted-foreground mt-2">Крупнейший нефтедобывающий регион РФ</p>
        </Card>
      </div>
    ),
  },
  {
    id: 2,
    title: 'Динамика добычи нефти',
    subtitle: 'ХМАО-Югра 2020-2024',
    content: (
      <div className="space-y-8 mt-12 max-w-4xl mx-auto">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-inter font-semibold">2024</span>
            <span className="text-2xl font-bold text-primary">242 млн т</span>
          </div>
          <Progress value={100} className="h-4" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-inter font-semibold">2023</span>
            <span className="text-2xl font-bold text-primary">246 млн т</span>
          </div>
          <Progress value={98} className="h-4" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-inter font-semibold">2022</span>
            <span className="text-2xl font-bold text-primary">251 млн т</span>
          </div>
          <Progress value={96} className="h-4" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-inter font-semibold">2021</span>
            <span className="text-2xl font-bold text-primary">256 млн т</span>
          </div>
          <Progress value={94} className="h-4" />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-inter font-semibold">2020</span>
            <span className="text-2xl font-bold text-primary">260 млн т</span>
          </div>
          <Progress value={93} className="h-4" />
        </div>

        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary mb-2">-1.6%</p>
            <p className="text-sm text-muted-foreground">Изменение к 2023</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary mb-2">4.7</p>
            <p className="text-sm text-muted-foreground">млн барр/сутки</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-secondary mb-2">46%</p>
            <p className="text-sm text-muted-foreground">Доля в РФ</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Крупнейшие компании',
    subtitle: 'Нефтедобыча в Югре 2024',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-primary">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">Роснефть-Yuganskneftegaz</h3>
              <p className="text-muted-foreground">Крупнейший оператор в регионе</p>
            </div>
            <Icon name="Building2" className="text-primary" size={32} />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Добыча</span>
              <span className="font-inter font-bold text-xl">94 млн т</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Доля в округе</span>
              <span className="font-inter font-bold text-xl text-primary">39%</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-secondary">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">Сургутнефтегаз</h3>
              <p className="text-muted-foreground">Региональный лидер</p>
            </div>
            <Icon name="Building2" className="text-secondary" size={32} />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Добыча</span>
              <span className="font-inter font-bold text-xl">62 млн т</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Доля в округе</span>
              <span className="font-inter font-bold text-xl text-secondary">26%</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-primary">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">Лукойл-Западная Сибирь</h3>
              <p className="text-muted-foreground">Дочернее предприятие Лукойл</p>
            </div>
            <Icon name="Building2" className="text-primary" size={32} />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Добыча</span>
              <span className="font-inter font-bold text-xl">41 млн т</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Доля в округе</span>
              <span className="font-inter font-bold text-xl text-primary">17%</span>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-card/50 backdrop-blur border-l-4 border-l-secondary">
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">Газпром нефть-Хантос</h3>
              <p className="text-muted-foreground">Подразделение Газпром нефти</p>
            </div>
            <Icon name="Building2" className="text-secondary" size={32} />
          </div>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Добыча</span>
              <span className="font-inter font-bold text-xl">28 млн т</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Доля в округе</span>
              <span className="font-inter font-bold text-xl text-secondary">12%</span>
            </div>
          </div>
        </Card>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Ключевые месторождения',
    subtitle: 'Крупнейшие активы Югры',
    content: (
      <div className="space-y-8 mt-12 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur border-t-4 border-t-primary">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="MapPin" size={28} className="text-primary" />
              <h3 className="text-xl font-montserrat font-bold">Самотлорское</h3>
            </div>
            <p className="text-muted-foreground mb-4">Легендарное месторождение, открыто в 1965 году</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Извлекаемые запасы</span>
                <span className="font-inter font-bold">7.1 млрд т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Текущая добыча</span>
                <span className="font-inter font-bold text-primary">21 млн т/год</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-t-4 border-t-secondary">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="MapPin" size={28} className="text-secondary" />
              <h3 className="text-xl font-montserrat font-bold">Приобское</h3>
            </div>
            <p className="text-muted-foreground mb-4">Крупнейшее действующее месторождение</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Извлекаемые запасы</span>
                <span className="font-inter font-bold">5.0 млрд т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Текущая добыча</span>
                <span className="font-inter font-bold text-secondary">58 млн т/год</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-t-4 border-t-primary">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="MapPin" size={28} className="text-primary" />
              <h3 className="text-xl font-montserrat font-bold">Федоровское</h3>
            </div>
            <p className="text-muted-foreground mb-4">Одно из крупнейших в Сургутском районе</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Извлекаемые запасы</span>
                <span className="font-inter font-bold">2.7 млрд т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Текущая добыча</span>
                <span className="font-inter font-bold text-primary">13 млн т/год</span>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur border-t-4 border-t-secondary">
            <div className="flex items-center gap-3 mb-4">
              <Icon name="MapPin" size={28} className="text-secondary" />
              <h3 className="text-xl font-montserrat font-bold">Мамонтовское</h3>
            </div>
            <p className="text-muted-foreground mb-4">Стратегический актив Роснефти</p>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Извлекаемые запасы</span>
                <span className="font-inter font-bold">1.5 млрд т</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Текущая добыча</span>
                <span className="font-inter font-bold text-secondary">8 млн т/год</span>
              </div>
            </div>
          </Card>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-4xl font-bold text-primary mb-2">100 млн т</p>
            <p className="text-muted-foreground">Суммарная добыча с 4 месторождений</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: 'Инвестиции и перспективы',
    subtitle: 'Развитие отрасли в Югре',
    content: (
      <div className="space-y-8 mt-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="DollarSign" size={32} className="text-primary" />
              <h3 className="text-2xl font-montserrat font-bold">Инвестиции 2024</h3>
            </div>
            <p className="text-5xl font-inter font-bold text-primary mb-2">₽580 млрд</p>
            <p className="text-muted-foreground">в развитие нефтедобычи</p>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <Icon name="Users" size={32} className="text-secondary" />
              <h3 className="text-2xl font-montserrat font-bold">Занятость</h3>
            </div>
            <p className="text-5xl font-inter font-bold text-secondary mb-2">156 тыс</p>
            <p className="text-muted-foreground">человек в отрасли</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <Card className="p-8 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Zap" size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Цифровизация</h3>
            <p className="text-muted-foreground mb-4">Внедрение цифровых технологий и систем мониторинга добычи</p>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-inter font-bold">2,500+</span>
              <span className="text-sm">скважин с цифровым контролем</span>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Icon name="Wrench" size={28} className="text-secondary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Модернизация</h3>
            <p className="text-muted-foreground mb-4">Программы повышения нефтеотдачи и бурение боковых стволов</p>
            <div className="flex items-center gap-2 text-secondary">
              <span className="font-inter font-bold">1,200</span>
              <span className="text-sm">скважин в год</span>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="Leaf" size={28} className="text-primary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Экология</h3>
            <p className="text-muted-foreground mb-4">Снижение вредных выбросов и утилизация попутного газа</p>
            <div className="flex items-center gap-2 text-primary">
              <span className="font-inter font-bold">95%</span>
              <span className="text-sm">утилизация ПНГ</span>
            </div>
          </Card>

          <Card className="p-8 bg-card/50 backdrop-blur hover:border-secondary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
              <Icon name="Target" size={28} className="text-secondary" />
            </div>
            <h3 className="text-xl font-montserrat font-bold mb-3">Цели на 2025-2030</h3>
            <p className="text-muted-foreground mb-4">Стабилизация добычи и разработка новых месторождений</p>
            <div className="flex items-center gap-2 text-secondary">
              <span className="font-inter font-bold">240+ млн т</span>
              <span className="text-sm">ежегодно</span>
            </div>
          </Card>
        </div>
      </div>
    ),
  },
];
