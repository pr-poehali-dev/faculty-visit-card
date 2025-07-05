import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 fade-in">
            Факультетский Актив
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 fade-in">
            Актив — это не просто группа студентов
          </p>
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-lg leading-relaxed opacity-90 fade-in">
              Это место, где ты открываешь в себе нечто новое — таланты, о
              которых даже не подозревал. Окунаешься в необычную атмосферу без
              шаблонов, только эксперименты: от научных хакатонов до безумных
              творческих проектов.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg fade-in"
          >
            Присоединиться к активу
          </Button>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Что мы предлагаем
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <Icon
                  name="Lightbulb"
                  size={48}
                  className="text-blue-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Открытие талантов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Найди в себе способности, о которых даже не подозревал
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <Icon
                  name="Rocket"
                  size={48}
                  className="text-blue-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Эксперименты</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Никаких шаблонов — только смелые идеи и творческие проекты
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <Icon
                  name="Heart"
                  size={48}
                  className="text-blue-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Семья</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Надёжный круг людей, которые поддержат в любой ситуации
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <Icon
                  name="Zap"
                  size={48}
                  className="text-blue-500 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Драйв</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
                  Постоянная энергия, смех до утра и адреналин перед
                  мероприятиями
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Directions Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Наши направления
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 relative">
                <img
                  src="/img/4d61d8fd-abb0-4d72-b80b-b852ff691382.jpg"
                  alt="Творческие проекты"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Творческие проекты</CardTitle>
                <CardDescription>
                  Арт-объекты, перформансы, дизайн
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Воплощаем смелые идеи в жизнь, создаём уникальные арт-объекты
                  и организуем яркие мероприятия.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Дизайн</Badge>
                  <Badge variant="secondary">Арт</Badge>
                  <Badge variant="secondary">Перформанс</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 relative">
                <img
                  src="/img/a3c29bd2-ab28-403e-a8bf-829401f51306.jpg"
                  alt="Научные хакатоны"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">Научные хакатоны</CardTitle>
                <CardDescription>
                  Исследования, инновации, разработка
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Участвуем в конкурсах, создаём инновационные решения и
                  исследуем новые технологии.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Инновации</Badge>
                  <Badge variant="secondary">Исследования</Badge>
                  <Badge variant="secondary">Хакатоны</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 relative">
                <img
                  src="/img/c15db02a-9664-4f26-a56b-de835f7e7024.jpg"
                  alt="Студенческие мероприятия"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  Студенческие мероприятия
                </CardTitle>
                <CardDescription>
                  Организация, координация, развлечения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Планируем и проводим незабываемые мероприятия для всего
                  факультета.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Мероприятия</Badge>
                  <Badge variant="secondary">Развлечения</Badge>
                  <Badge variant="secondary">Координация</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Наша команда
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Palette" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">
                  Художественный руководитель
                </CardTitle>
                <CardDescription className="text-lg">
                  Координатор творческих проектов
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Вдохновляет на создание уникальных арт-объектов, координирует
                  все творческие инициативы и помогает раскрыть креативный
                  потенциал каждого участника.
                </p>
                <Button variant="outline" className="mt-4">
                  Связаться
                </Button>
              </CardContent>
            </Card>

            <Card className="card-hover border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Icon name="Calendar" size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl">Культорг</CardTitle>
                <CardDescription className="text-lg">
                  Организатор мероприятий и активностей
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-4">
                  Планирует и проводит все культурные мероприятия, создаёт
                  атмосферу единства и обеспечивает незабываемые впечатления для
                  всех участников.
                </p>
                <Button variant="outline" className="mt-4">
                  Связаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 hero-gradient text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-8">
            Готов стать частью нашей семьи?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Свяжись с нами любым удобным способом
          </p>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <a
              href="#"
              className="flex flex-col items-center p-4 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            >
              <Icon name="MessageCircle" size={40} className="mb-3" />
              <span className="font-semibold">Telegram</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center p-4 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            >
              <Icon name="Instagram" size={40} className="mb-3" />
              <span className="font-semibold">Instagram</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center p-4 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            >
              <Icon name="Mail" size={40} className="mb-3" />
              <span className="font-semibold">Email</span>
            </a>
            <a
              href="#"
              className="flex flex-col items-center p-4 rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
            >
              <Icon name="Phone" size={40} className="mb-3" />
              <span className="font-semibold">Телефон</span>
            </a>
          </div>

          <div className="text-center">
            <p className="text-lg mb-4">
              📍 Университет, корпус А, аудитория 101
            </p>
            <p className="text-lg opacity-90">
              Или просто приходи на наши мероприятия — мы всегда рады новым
              лицам!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Факультетский Актив. Здесь рождаются идеи, которые меняют
            мир.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
