import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';
import { 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  Star, 
  TrendingUp, 
  Users, 
  Calendar,
  BarChart3,
  Sparkles,
  ArrowRight,
  Mail
} from 'lucide-react';

function App() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    }
  }, []);

  const handleNotImplemented = () => {
    toast({
      title: "🚧 Esta funcionalidade ainda não foi implementada",
      description: "Mas não se preocupe! Você pode solicitá-la no seu próximo prompt! 🚀",
      duration: 3000,
    });
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre seus serviços de gestão de redes sociais.', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/fabianamelo.sm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://linkedin.com/in/fabianamelo1', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:fabyannatenorio@gmail.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Toaster />
      
      <section id="hero" className="relative min-h-screen flex items-center justify-center hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="font-montserrat font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
              <span className="block">PARE DE SER</span>
              <span className="block neon-glow text-yellow-400">INVISÍVEL</span>
              <span className="block">NAS REDES SOCIAIS</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 font-light"
            >
              Eu te ajudo a transformar seu perfil em uma máquina de engajamento e vendas
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Button 
                onClick={handleNotImplemented}
                className="gold-gradient text-black font-montserrat font-bold text-lg px-12 py-6 rounded-full hover:scale-105 transition-all duration-300 pulse-glow"
              >
                QUERO SER VISTO! <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 float-animation"
          >
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden neon-border mx-auto">
                <img  
                  alt="Fabiana Melo - Especialista em Marketing Digital"
                  className="w-full h-full object-cover"
                 src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50d4b545-9baa-4005-9970-73d0f10bf2db/c9b598ac1e4dd3497a03c39511d08d8a.png" />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-black" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-montserrat font-black text-4xl md:text-6xl mb-6 neon-glow">
              MEUS SERVIÇOS
            </h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="w-12 h-12" />,
                title: "Gerenciamento Completo",
                description: "Cuido de todas as suas redes sociais com estratégia personalizada"
              },
              {
                icon: <TrendingUp className="w-12 h-12" />,
                title: "Estratégia de Conteúdo",
                description: "Desenvolvo conteúdos que engajam e convertem seu público"
              },
              {
                icon: <Calendar className="w-12 h-12" />,
                title: "Calendário de Conteúdo",
                description: "Planejamento estratégico para manter sua presença ativa"
              },
              {
                icon: <BarChart3 className="w-12 h-12" />,
                title: "Análise e Reestruturação",
                description: "Otimizo seu perfil para máximo impacto e resultados"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="scroll-reveal"
              >
                <div className="glass-effect rounded-2xl p-8 text-center hover:neon-border transition-all duration-300 group cursor-pointer h-full flex flex-col justify-between">
                  <div>
                    <div className="text-yellow-400 mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {service.icon}
                    </div>
                    <h3 className="font-montserrat font-bold text-xl mb-4 text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Button 
                    onClick={handleNotImplemented}
                    variant="outline" 
                    className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 mt-auto"
                  >
                    Saiba mais
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="scroll-reveal"
            >
              <div className="relative">
                <div className="w-full max-w-md mx-auto lg:mx-0">
                  <img  
                    alt="Fabiana Melo - Sobre mim, especialista em marketing"
                    className="w-full rounded-2xl neon-border"
                   src="https://storage.googleapis.com/hostinger-horizons-assets-prod/50d4b545-9baa-4005-9970-73d0f10bf2db/4b8fde026a59492fb31a7276d52fa68b.png" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Star className="w-12 h-12 text-black" />
                </div>
              </div>
            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="scroll-reveal"
            >
              <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-8 neon-glow">
                SOBRE MIM
              </h2>
              <div className="w-20 h-1 bg-yellow-400 mb-8"></div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Olá! Sou <span className="text-yellow-400 font-semibold">Fabiana Melo</span>, especialista em marketing digital com paixão por transformar marcas em verdadeiros fenômenos nas redes sociais.
                </p>
                <p>
                  Com anos de experiência no mercado digital, já ajudei centenas de empresas e profissionais a saírem da invisibilidade e conquistarem seu espaço no mundo online.
                </p>
                <p>
                  Minha missão é simples: fazer sua marca brilhar e gerar resultados reais através de estratégias personalizadas e conteúdos que realmente conectam com seu público.
                </p>
              </div>
              
              <div className="mt-10">
                <Button 
                  onClick={handleWhatsApp}
                  className="gold-gradient text-black font-montserrat font-bold text-lg px-10 py-4 rounded-full hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="mr-2" />
                  Fale comigo no WhatsApp
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 gradient-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 scroll-reveal">
            <h2 className="font-montserrat font-black text-4xl md:text-5xl mb-6 neon-glow">
              O QUE DIZEM SOBRE MIM
            </h2>
            <div className="w-32 h-1 bg-yellow-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                role: "CEO da Boutique Elegance",
                text: "Fabiana transformou completamente nossa presença digital. Em 3 meses, triplicamos nosso engajamento e as vendas online dispararam!"
              },
              {
                name: "João Santos",
                role: "Coach de Carreira",
                text: "Profissional incrível! Ela entendeu exatamente o que eu precisava e criou uma estratégia que me posicionou como autoridade no meu nicho."
              },
              {
                name: "Ana Costa",
                role: "Dentista",
                text: "Antes eu era invisível no Instagram. Hoje tenho uma agenda lotada de pacientes que me encontraram através das redes sociais. Obrigada, Fabi!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="scroll-reveal"
              >
                <div className="glass-effect rounded-2xl p-8 text-center hover:neon-border transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex justify-center mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic leading-relaxed">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-white text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-yellow-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-black py-16 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="font-montserrat font-black text-3xl md:text-4xl mb-4 neon-glow">
              SUA MARCA MERECE SER VISTA
            </h2>
            <p className="text-gray-400 text-lg">
              Vamos juntos transformar sua presença digital?
            </p>
          </div>
          
          <div className="flex justify-center space-x-4 md:space-x-8 mb-12 scroll-reveal">
            <Button
              onClick={handleWhatsApp}
              variant="ghost"
              size="lg"
              className="text-green-400 hover:text-green-300 hover:bg-green-400/10 transition-all duration-300 p-3"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
            </Button>
            <Button
              onClick={handleInstagram}
              variant="ghost"
              size="lg"
              className="text-pink-400 hover:text-pink-300 hover:bg-pink-400/10 transition-all duration-300 p-3"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7 md:w-8 md:h-8" />
            </Button>
            <Button
              onClick={handleLinkedIn}
              variant="ghost"
              size="lg"
              className="text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 transition-all duration-300 p-3"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-7 h-7 md:w-8 md:h-8" />
            </Button>
            <Button
              onClick={handleEmail}
              variant="ghost"
              size="lg"
              className="text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 transition-all duration-300 p-3"
              aria-label="Email"
            >
              <Mail className="w-7 h-7 md:w-8 md:h-8" />
            </Button>
          </div>
          
          <div className="text-center text-gray-500 scroll-reveal">
            <p className="mb-2">© {new Date().getFullYear()} Fabiana Melo - Gestão de Redes Sociais</p>
            <p>Transformando marcas em fenômenos digitais</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;