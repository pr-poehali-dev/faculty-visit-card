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
    <div className="min-h-screen bg-background">
      {/* Matrix Background */}
      <div className="fixed inset-0 matrix-bg opacity-30"></div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="floating">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 neon-text glitch-effect">
              &gt; АКТИВ_
            </h1>
          </div>

          <div className="terminal-text text-xl md:text-2xl mb-12 font-mono">
            <p className="mb-2">$ whoami</p>
            <p className="mb-2">факультетский_хакер</p>
            <p className="mb-2">$ ls /творчество</p>
            <p className="mb-2">эксперименты.exe безумие.jar драйв.py</p>
            <p className="mb-6">$ ./start_revolution.sh</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="cyber-border bg-primary hover:bg-primary/90 text-primary-foreground font-mono text-lg px-8 py-4 cyber-hover"
            >
              [ПОДКЛЮЧИТЬСЯ]
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cyber-border border-accent text-accent hover:bg-accent/10 font-mono text-lg px-8 py-4 cyber-hover"
            >
              [ИЗУЧИТЬ_КОД]
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 font-mono neon-text">
            &gt; СИСТЕМА.ВОЗМОЖНОСТИ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/20">
                  <Icon name="Zap" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-mono text-primary">
                  ТВОРЧЕСТВО.EXE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center font-mono text-sm">
                  Запуск креативных процессов
                  <br />
                  Статус: [АКТИВНО]
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/20">
                  <Icon name="Code" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-xl font-mono text-accent">
                  ХАКАТОН.SH
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center font-mono text-sm">
                  Скрипт решения задач
                  <br />
                  Статус: [ГОТОВ]
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary/20">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <CardTitle className="text-xl font-mono text-primary">
                  КОМАНДА.JSON
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center font-mono text-sm">
                  База данных участников
                  <br />
                  Статус: [РАСШИРЯЕТСЯ]
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-accent/20">
                  <Icon name="Rocket" size={32} className="text-accent" />
                </div>
                <CardTitle className="text-xl font-mono text-accent">
                  ДРАЙВ.PY
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center font-mono text-sm">
                  Модуль энергии и мотивации
                  <br />
                  Статус: [МАКСИМУМ]
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-16 font-mono neon-text">
            &gt; ПРОЕКТЫ.ДИРЕКТОРИЯ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover overflow-hidden">
              <div className="h-48 relative">
                <img
                  src="/img/eaa58a85-6d2c-4ca6-ad25-d67c6911f6a8.jpg"
                  alt="Творческие проекты"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-primary text-primary-foreground font-mono">
                    /творчество
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-mono text-primary">
                  ART_GENERATOR
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Создание визуальных экспериментов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Статус: В разработке
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Коммиты: 47
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Участники: 8
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover overflow-hidden">
              <div className="h-48 relative">
                <img
                  src="/img/edff92e4-ce18-4b11-b01d-36b40e8be2a9.jpg"
                  alt="Научные проекты"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-accent/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge className="bg-accent text-accent-foreground font-mono">
                    /наука
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-mono text-accent">
                  SPACE_RESEARCH
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Исследование космических данных
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Статус: Активная фаза
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Коммиты: 156
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Участники: 12
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-border bg-card/50 backdrop-blur-sm cyber-hover overflow-hidden">
              <div className="h-48 relative bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Icon name="Plus" size={48} className="text-primary" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-mono text-primary">
                  НОВЫЙ_ПРОЕКТ
                </CardTitle>
                <CardDescription className="font-mono text-sm">
                  Инициализация нового репозитория
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Статус: Ожидание идеи
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Коммиты: 0
                  </p>
                  <p className="text-muted-foreground font-mono text-sm">
                    &gt; Участники: ?
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terminal Contact */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="cyber-border bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl font-mono neon-text text-center">
                &gt; CONNECT.TERMINAL
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="terminal-text space-y-4 font-mono">
                <p>$ ssh актив@факультет.edu</p>
                <p>Connecting to server...</p>
                <p>Connection established.</p>
                <p></p>
                <p>Доступные команды:</p>
                <div className="pl-4 space-y-2">
                  <p className="flex items-center gap-2">
                    <Icon
                      name="MessageCircle"
                      size={16}
                      className="text-accent"
                    />
                    <span>/telegram - быстрая связь</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Mail" size={16} className="text-accent" />
                    <span>/email - официальные запросы</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="MapPin" size={16} className="text-accent" />
                    <span>/location - корпус А, ауд. 101</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Icon name="Github" size={16} className="text-accent" />
                    <span>/github - наш код</span>
                  </p>
                </div>
                <p></p>
                <p>$ █</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground font-mono text-sm">
            © 2024 АКТИВ.SYS // Запущено в космосе 🚀
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
