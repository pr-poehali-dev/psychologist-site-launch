import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50 shadow-lg shadow-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="font-inter font-bold text-xl bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">
              Анна Петрова
            </div>
            <div className="hidden md:flex space-x-8">
              {['Главная', 'Услуги', 'Обо мне', 'Отзывы', 'Статьи', 'Контакты'].map((item, index) => (
                <a key={index} href={`#${item.toLowerCase()}`} className="text-modern-dark-light hover:text-modern-purple transition-all duration-300 font-medium relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-modern-purple to-modern-pink transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
            <Button className="bg-gradient-to-r from-modern-purple to-modern-pink hover:shadow-lg hover:shadow-purple-500/25 text-white font-medium transition-all duration-300 hover:scale-105">
              <Icon name="Calendar" size={16} className="mr-2" />
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-block px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/30 text-modern-purple font-medium mb-6">
                ✨ Современная психотерапия
              </div>
              <h1 className="font-inter text-5xl lg:text-7xl font-black text-modern-dark mb-6 leading-tight">
                Путь к <br />
                <span className="bg-gradient-to-r from-modern-purple via-modern-pink to-modern-blue bg-clip-text text-transparent animate-glow">
                  внутренней
                </span><br />
                гармонии
              </h1>
              <p className="font-open-sans text-xl text-gray-600 mb-8 leading-relaxed">
                Инновационные методы психотерапии в комфортной атмосфере. 
                Помогаю найти баланс и раскрыть потенциал.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Button size="lg" className="bg-gradient-to-r from-modern-purple to-modern-pink hover:shadow-xl hover:shadow-purple-500/25 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 animate-glow">
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  Начать путь к себе
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-modern-purple/30 text-modern-purple hover:bg-modern-purple/5 backdrop-blur-sm bg-white/50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105">
                  <Icon name="PlayCircle" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { number: "500+", label: "Клиентов" },
                  { number: "10+", label: "Лет опыта" },
                  { number: "98%", label: "Результат" }
                ].map((stat, index) => (
                  <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                    <div className="text-3xl font-black bg-gradient-to-r from-modern-purple to-modern-pink bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-scale-in relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-modern-purple/20 to-modern-pink/20 rounded-3xl blur-xl transform rotate-6"></div>
                <img 
                  src="/img/fca5d408-2ba8-417a-b4b8-7e49dedc04ad.jpg"
                  alt="Психолог Анна Петрова"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-2xl shadow-purple-500/20 transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-modern-pink to-modern-purple rounded-full flex items-center justify-center animate-float shadow-lg">
                  <Icon name="Heart" size={32} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-3xl lg:text-4xl font-bold text-calming-gray mb-4">
              Мои услуги
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Индивидуальный подход к каждому клиенту и современные методы психотерапии
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Brain",
                title: "Индивидуальная терапия",
                description: "Работа с тревожными расстройствами, депрессией, личностными кризисами"
              },
              {
                icon: "Users",
                title: "Семейная терапия",
                description: "Помощь в решении семейных конфликтов и улучшении отношений"
              },
              {
                icon: "Heart",
                title: "Работа с травмой",
                description: "Проработка психологических травм и посттравматического стресса"
              },
              {
                icon: "Target",
                title: "Коучинг",
                description: "Достижение личных и профессиональных целей, развитие потенциала"
              },
              {
                icon: "Smile",
                title: "Работа с самооценкой",
                description: "Повышение уверенности в себе и формирование здоровой самооценки"
              },
              {
                icon: "Zap",
                title: "Кризисная терапия",
                description: "Экстренная психологическая помощь в острых жизненных ситуациях"
              }
            ].map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={24} className="text-primary" />
                  </div>
                  <h3 className="font-inter font-semibold text-lg text-calming-gray mb-3">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-calming-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-inter text-3xl lg:text-4xl font-bold text-calming-gray mb-6">
                Обо мне
              </h2>
              <div className="space-y-4 font-open-sans text-gray-600">
                <p>
                  Меня зовут Анна Петрова, я практикующий психолог с более чем 10-летним опытом работы. 
                  Специализируюсь на когнитивно-поведенческой терапии и работе с тревожными расстройствами.
                </p>
                <p>
                  Получила образование в МГУ имени М.В. Ломоносова, регулярно повышаю квалификацию 
                  и изучаю новые методы психотерапии. Являюсь членом Российского психологического общества.
                </p>
                <p>
                  Верю, что каждый человек способен изменить свою жизнь к лучшему. Моя задача — 
                  создать безопасное пространство для вашего роста и самопознания.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Консультаций</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">95%</div>
                  <div className="text-sm text-gray-600">Довольных клиентов</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">15</div>
                  <div className="text-sm text-gray-600">Сертификатов</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg mb-3">Образование</h3>
                  <ul className="space-y-2 font-open-sans text-gray-600">
                    <li>• МГУ им. М.В. Ломоносова, факультет психологии</li>
                    <li>• Институт практической психологии "Иматон"</li>
                    <li>• Сертификация по КПТ (Европейский институт)</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-lg mb-3">Методы работы</h3>
                  <ul className="space-y-2 font-open-sans text-gray-600">
                    <li>• Когнитивно-поведенческая терапия</li>
                    <li>• Гештальт-терапия</li>
                    <li>• EMDR-терапия</li>
                    <li>• Системная семейная терапия</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-3xl lg:text-4xl font-bold text-calming-gray mb-4">
              Отзывы клиентов
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Что говорят люди о нашей работе
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Мария К.",
                text: "Анна помогла мне справиться с паническими атаками. Теперь я чувствую себя увереннее и спокойнее.",
                rating: 5
              },
              {
                name: "Дмитрий С.",
                text: "Профессиональный подход и человечное отношение. Рекомендую всем, кто ищет качественную помощь.",
                rating: 5
              },
              {
                name: "Елена В.",
                text: "Работа с семейными проблемами дала отличные результаты. Наши отношения значительно улучшились.",
                rating: 5
              }
            ].map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-open-sans text-gray-600 mb-4 italic">
                    "{review.text}"
                  </p>
                  <div className="font-inter font-semibold text-calming-gray">
                    {review.name}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-4 sm:px-6 lg:px-8 bg-calming-light">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-3xl lg:text-4xl font-bold text-calming-gray mb-4">
              Полезные статьи
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Практические советы и психологические инсайты
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Как справиться с тревогой",
                excerpt: "Простые техники, которые помогут управлять тревожными состояниями в повседневной жизни.",
                readTime: "5 мин"
              },
              {
                title: "Здоровые границы в отношениях",
                excerpt: "Почему важно устанавливать границы и как это делать без конфликтов.",
                readTime: "7 мин"
              },
              {
                title: "Эмоциональное выгорание",
                excerpt: "Признаки выгорания и способы восстановления психологических ресурсов.",
                readTime: "6 мин"
              }
            ].map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Icon name="Clock" size={14} className="mr-1" />
                    {article.readTime}
                  </div>
                  <h3 className="font-inter font-semibold text-lg text-calming-gray mb-3">
                    {article.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="text-primary font-medium hover:underline">
                    Читать далее →
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-inter text-3xl lg:text-4xl font-bold text-calming-gray mb-4">
              Контакты
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Готова ответить на ваши вопросы
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-calming-gray mb-2">Адрес</h3>
                  <p className="font-open-sans text-gray-600">
                    г. Москва, ул. Тверская, 15<br />
                    БЦ "Центральный", 7 этаж
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-calming-gray mb-2">Телефон</h3>
                  <p className="font-open-sans text-gray-600">
                    +7 (495) 123-45-67<br />
                    +7 (906) 789-01-23
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-calming-gray mb-2">Email</h3>
                  <p className="font-open-sans text-gray-600">
                    info@psychologist-anna.ru<br />
                    anna.petrova@therapy.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-inter font-semibold text-lg text-calming-gray mb-2">Режим работы</h3>
                  <p className="font-open-sans text-gray-600">
                    Пн-Пт: 9:00 - 21:00<br />
                    Сб-Вс: 10:00 - 18:00
                  </p>
                </div>
              </div>
            </div>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="font-inter font-semibold text-xl text-calming-gray mb-6">
                  Записаться на консультацию
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="block font-open-sans text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label className="block font-open-sans text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="+7 (xxx) xxx-xx-xx"
                    />
                  </div>
                  <div>
                    <label className="block font-open-sans text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                      placeholder="Расскажите кратко о вашем запросе"
                    />
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-calming-gray text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">
                Психолог Анна Петрова
              </h3>
              <p className="font-open-sans text-gray-300 leading-relaxed">
                Профессиональная психологическая помощь в комфортной атмосфере. 
                Путь к гармонии начинается здесь.
              </p>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">Услуги</h3>
              <ul className="space-y-2 font-open-sans text-gray-300">
                <li>Индивидуальная терапия</li>
                <li>Семейная терапия</li>
                <li>Работа с травмой</li>
                <li>Коучинг</li>
              </ul>
            </div>
            <div>
              <h3 className="font-inter font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 font-open-sans text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@psychologist-anna.ru</p>
                <p>г. Москва, ул. Тверская, 15</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-600 mt-8 pt-8 text-center font-open-sans text-gray-400">
            <p>&copy; 2024 Психолог Анна Петрова. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;