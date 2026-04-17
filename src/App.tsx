/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  Camera, 
  Instagram,
  X,
  ChevronRight,
  MapPin,
  Calendar
} from "lucide-react";

// DADOS DO EXPERT
const EXPERT = {
  name: "Dr. Vinícius Braudes",
  profession: "IMPLANTES | LENTES",
  city: "Goianésia - GO",
  whatsappUrl: "https://api.whatsapp.com/send/?phone=5562981898708&text=Olá Dr. Vinícius, gostaria de agendar minha primeira consulta gratuita.&type=phone_number&app_absent=0",
  instagramUrl: "https://www.instagram.com/vbraudes_dentista/"
};

// IMAGENS
const IMAGES = {
  hero: "https://i.imgur.com/OUJhdmM.png",
  about: "https://i.imgur.com/y8tKQxW.jpeg",
  results: [
    "https://i.imgur.com/3BZ6bdw.jpeg",
    "https://i.imgur.com/BPhEnwG.jpeg",
    "https://i.imgur.com/hku9OUB.jpeg",
    "https://i.imgur.com/hVRASHH.jpeg"
  ]
};

const BENEFITS = [
  {
    icon: <ShieldCheck className="w-6 h-6 text-premium-gold" />,
    title: "Avaliação Honestidade",
    desc: "Diagnósticos claros e diretos, sem burocracia ou tratamentos desnecessários."
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-premium-gold" />,
    title: "Atendimento Personalizado",
    desc: "Cada sorriso é único. Planejamento 100% focado no seu resultado real."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-premium-gold" />,
    title: "Tecnologia de Ponta",
    desc: "O que há de mais moderno em Implantes e Lentes de Contato Dental."
  },
  {
    icon: <Clock className="w-6 h-6 text-premium-gold" />,
    title: "Foco na Agilidade",
    desc: "Respeito ao seu tempo com procedimentos otimizados e seguros."
  }
];

const STEPS = [
  {
    number: "01",
    title: "Contato via WhatsApp",
    desc: "Clique no botão e fale diretamente com minha equipe para tirar dúvidas."
  },
  {
    number: "02",
    title: "Agendamento",
    desc: "Escolhemos o melhor horário para você na nossa unidade em Goianésia."
  },
  {
    number: "03",
    title: "Sua Avaliação",
    desc: "Realizamos sua primeira consulta gratuita para planejar seu novo sorriso."
  }
];

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const CTAButton = ({ className = "" }: { className?: string }) => (
    <motion.a
      href={EXPERT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.02, backgroundColor: "#D4B16A" }}
      whileTap={{ scale: 0.98 }}
      className={`flex items-center justify-center gap-2 bg-premium-gold text-black font-extrabold py-5 px-6 rounded-xl shadow-2xl shadow-premium-gold/10 text-center uppercase tracking-wider text-sm active:opacity-90 transition-all ${className}`}
    >
      <MessageCircle size={22} strokeWidth={2.5} />
      Agendar primeira consulta gratuita
    </motion.a>
  );

  return (
    <div className="min-h-screen bg-premium-dark text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[60] py-6 px-6 flex justify-between items-center backdrop-blur-md bg-premium-dark/80 border-b border-premium-border">
        <div className="serif text-lg tracking-widest font-bold">
          DR. VINÍCIUS <span className="text-premium-gold font-normal">BRAUDES</span>
        </div>
        <a 
          href={EXPERT.instagramUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[10px] uppercase tracking-[0.2em] font-bold text-premium-text-muted hover:text-premium-gold transition-colors border border-premium-border px-4 py-2 rounded-full"
        >
          @vbraudes_dentista
        </a>
      </header>

      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-end overflow-hidden pt-24 border-b border-premium-border/50">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-premium-dark/40 to-premium-dark z-10" />
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top"
          />
        </div>
        
        <div className="relative z-20 w-full px-6 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-premium-gold font-semibold uppercase tracking-[0.2em] text-xs mb-4 block">
              Inovação e Estética em Goianésia
            </span>
            <h1 className="serif text-4xl md:text-6xl font-bold leading-tight mb-4 text-balance">
                Eu sou {EXPERT.name}, especialista em transformar sorrisos.
            </h1>
            <p className="text-premium-text-muted text-lg mb-8 max-w-sm mx-auto">
              Recupere sua autoestima com Implantes e Lentes de alto padrão.
            </p>
            
            <div className="max-w-md mx-auto">
              <CTAButton />
              <p className="text-[10px] text-premium-text-muted mt-3 uppercase tracking-widest font-bold">
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid gap-12"
          >
            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] shadow-2xl border border-premium-border">
              <img 
                src={IMAGES.about} 
                alt="Dr. Vinícius Braudes em atendimento" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="serif text-3xl font-bold">Autoridade que entende o seu desejo de sorrir.</h2>
              <div className="space-y-4 text-premium-text-muted leading-relaxed">
                <p>
                  Minha missão é devolver não apenas dentes, mas a confiança de quem deseja sorrir sem medo. 
                  Em Goianésia, trago um atendimento humanizado focado em resultados que parecem naturais.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                  {[
                    "Especialista em Reabilitação Oral",
                    "Foco em Lentes de Contato e Implantes",
                    "Atendimento claro e sem letras miúdas",
                    "Estrutura moderna para o seu conforto"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-premium-surface p-4 rounded-xl border border-premium-border">
                      <div className="bg-premium-gold/20 p-1.5 rounded-full shrink-0">
                        <CheckCircle2 size={16} className="text-premium-gold" />
                      </div>
                      <span className="font-semibold text-xs tracking-tight text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-20 bg-premium-dark text-white rounded-t-[3rem]">
        <div className="px-6 max-w-xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-premium-gold text-xs uppercase tracking-widest font-bold mb-4 block">Resultados Reais</span>
            <h2 className="serif text-3xl font-bold mb-4">A transformação que você também pode ter.</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {IMAGES.results.map((url, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                onClick={() => setSelectedImage(url)}
                className="relative aspect-square rounded-2xl overflow-hidden cursor-zoom-in group"
              >
                <img 
                  src={url} 
                  alt={`Resultado ${i + 1}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[0.2] transition-all group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Camera className="text-white w-6 h-6" />
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[10px] text-gray-500 mt-8 uppercase tracking-wider">
            Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 px-6">
        <div className="max-w-xl mx-auto">
          <h2 className="serif text-3xl font-bold text-center mb-16 underline decoration-premium-gold/30 underline-offset-8">Por que confiar em meu trabalho?</h2>
          
          <div className="grid gap-8">
            {BENEFITS.map((benefit, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="bg-premium-surface p-5 rounded-2xl shadow-lg border border-premium-border shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-sm text-premium-text-muted leading-relaxed">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 px-6 bg-premium-surface border-y border-premium-border text-center">
        <div className="max-w-sm mx-auto">
          <h2 className="serif text-2xl font-bold mb-4 italic">Sua segurança vem em primeiro lugar.</h2>
          <p className="text-premium-text-muted mb-10 text-sm">
            Tire suas dúvidas agora mesmo e entenda por que sou a escolha certa para o seu novo sorriso.
          </p>
          <CTAButton />
          <p className="text-xs text-premium-text-muted mt-4">Consulta gratuita e sem compromisso.</p>
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-xl mx-auto">
          <h2 className="serif text-3xl font-bold text-center mb-16">O caminho para o seu novo sorriso.</h2>
          
          <div className="relative space-y-16">
            <div className="absolute left-6 top-8 bottom-8 w-[1px] bg-premium-gold/20 z-0 hidden" />
            
            {STEPS.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex gap-8 relative z-10"
              >
                <div className="shrink-0 w-12 h-12 rounded-full border border-premium-gold flex items-center justify-center bg-premium-dark text-premium-gold font-serif font-bold italic text-xl shadow-lg shadow-premium-gold/10">
                  {step.number}
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                  <p className="text-sm text-premium-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 p-8 rounded-[2.5rem] bg-premium-surface text-white text-center border border-premium-border">
            <p className="font-black text-premium-gold uppercase tracking-[0.3em] text-[10px] mb-3">Lembre-se</p>
            <p className="text-xl font-serif italic text-balance">
              "A primeira consulta é gratuita e totalmente sem compromisso."
            </p>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (Bastidores) */}
      <section className="py-20 px-6 bg-premium-dark">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Camera className="text-premium-gold w-5 h-5" />
            <h2 className="serif text-2xl font-bold text-white">Bastidores & Atendimento</h2>
          </div>
          
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border border-premium-border aspect-video grayscale-[0.3] hover:grayscale-0 transition-all duration-1000">
            <img 
              src={IMAGES.about} 
              alt="Dr. Vinícius no consultório" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-6 text-sm italic text-premium-text-muted text-center">
            "Atendimento personalizado e focado no seu conforto."
          </p>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 px-6 bg-premium-dark relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 bg-premium-gold/10 rounded-full blur-[100px]" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-premium-gold/5 rounded-full blur-[100px]" />
        
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="serif text-4xl md:text-5xl font-bold mb-8 text-balance">
            Vamos planejar o seu novo sorriso hoje?
          </h2>
          <p className="text-premium-text-muted mb-12 text-lg">
            Não deixe para depois a mudança que você merece viver agora.
          </p>
          <CTAButton className="py-7 text-lg shadow-2xl" />
          
          <div className="mt-12 flex flex-col items-center gap-5">
             <div className="flex items-center gap-2 text-sm font-bold text-premium-text-muted uppercase tracking-widest">
                <MapPin size={18} className="text-premium-gold" />
                <span>Atendimento em {EXPERT.city}</span>
             </div>
             <a 
              href={EXPERT.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 border border-premium-border rounded-full flex items-center gap-2 text-white hover:border-premium-gold hover:text-premium-gold transition-all font-semibold"
             >
                <Instagram size={20} />
                <span>@vbraudes_dentista</span>
             </a>
          </div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-16 px-6 border-t border-premium-border text-center bg-premium-surface">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="serif text-2xl font-bold tracking-tight">DR. VINÍCIUS <span className="text-premium-gold">BRAUDES</span></div>
          <div className="text-[10px] text-premium-text-muted uppercase tracking-[0.4em] font-black">
            {EXPERT.profession} | {EXPERT.city}
          </div>
          <div className="pt-8 text-[10px] text-white/20 font-medium">
            © {new Date().getFullYear()} • Dr. Vinícius Braudes. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <button className="absolute top-6 right-6 text-white bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors">
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Resultado ampliado"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-full rounded-lg object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLOATING CTA MOBILE */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href={EXPERT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center justify-center w-16 h-16 bg-green-500 text-white rounded-full shadow-2xl shadow-green-600/40"
        >
          <MessageCircle size={32} />
        </motion.a>
      </div>

    </div>
  );
}
