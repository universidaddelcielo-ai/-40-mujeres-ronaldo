import { useState, useEffect, useRef } from "react";

const COLORS = {
  bg: "#0a0a0a",
  bgCard: "#111111",
  bgCardAlt: "#161616",
  gold: "#C9A84C",
  goldLight: "#E8C86A",
  goldDark: "#A07830",
  white: "#FFFFFF",
  gray: "#999999",
  grayLight: "#CCCCCC",
  grayDark: "#444444",
  accent: "#C9A84C",
  danger: "#E74C3C",
  success: "#27AE60",
};

const questions = [
  {
    id: 1,
    emoji: "🎯",
    question: "¿Cuál es tu mayor objetivo en los próximos 28 días?",
    options: [
      { text: "Recuperar fuerza y energía", icon: "💪" },
      { text: "Mejorar mi movilidad y flexibilidad", icon: "🤸‍♀️" },
      { text: "Perder peso y tonificar", icon: "✨" },
      { text: "Sentirme mejor conmigo misma", icon: "❤️" },
    ],
  },
  {
    id: 2,
    emoji: "⏰",
    question: "¿Cuánto tiempo tienes disponible al día?",
    options: [
      { text: "5-10 minutos", icon: "⚡" },
      { text: "10-20 minutos", icon: "🕐" },
      { text: "20-30 minutos", icon: "🕒" },
      { text: "Más de 30 minutos", icon: "🕕" },
    ],
  },
  {
    id: 3,
    emoji: "🏠",
    question: "¿Dónde prefieres entrenar?",
    options: [
      { text: "En casa, sin equipos", icon: "🏠" },
      { text: "En el jardín o patio", icon: "🌳" },
      { text: "En el parque", icon: "🌿" },
      { text: "Donde sea, soy flexible", icon: "📍" },
    ],
  },
  {
    id: 4,
    emoji: "💫",
    question: "¿Cuánto tiempo llevas sin entrenar regularmente?",
    options: [
      { text: "Nunca he entrenado", icon: "🌱" },
      { text: "Más de 1 año", icon: "📅" },
      { text: "Varios meses", icon: "🗓️" },
      { text: "Entreno de vez en cuando", icon: "🔄" },
    ],
  },
  {
    id: 5,
    emoji: "🌟",
    question: "¿Qué parte de tu cuerpo quieres fortalecer más?",
    options: [
      { text: "Abdomen y cintura", icon: "🎯" },
      { text: "Glúteos y piernas", icon: "🦵" },
      { text: "Espalda y postura", icon: "🏋️‍♀️" },
      { text: "Todo el cuerpo", icon: "✨" },
    ],
  },
];

const testimonials = [
  {
    name: "María G., 47 años",
    text: "En 28 días recuperé la fuerza que creía haber perdido para siempre. Solo 10 minutos al día cambiaron mi vida.",
    stars: 5,
    avatar: "https://i.pravatar.cc/60?img=47",
  },
  {
    name: "Carmen R., 52 años",
    text: "No necesité gimnasio ni equipos. Desde mi salón, con el método AURA, me siento más fuerte y con más energía que a los 30.",
    stars: 5,
    avatar: "https://i.pravatar.cc/60?img=45",
  },
  {
    name: "Lucía M., 44 años",
    text: "Pensé que era demasiado tarde para mí. El reto de 28 días me demostró que estaba equivocada. ¡Increíble!",
    stars: 5,
    avatar: "https://i.pravatar.cc/60?img=41",
  },
];

const benefits = [
  { icon: "💪", title: "Fuerza Real", desc: "Ejercicios de calistenia militar adaptados al cuerpo femenino 40+" },
  { icon: "⏱️", title: "Solo 10 Minutos", desc: "Rutinas diseñadas para mujeres ocupadas que no tienen tiempo" },
  { icon: "🏠", title: "Sin Gimnasio", desc: "Entrena en casa, sin equipos, sin excusas" },
  { icon: "🧠", title: "Método Científico", desc: "Basado en biomecánica femenina y hormonas del ciclo de vida" },
  { icon: "📅", title: "28 Días Exactos", desc: "Un plan día a día para que nunca tengas que pensar qué hacer" },
  { icon: "❤️", title: "Para Ti", desc: "Pensado específicamente para la mujer de 40 años en adelante" },
];

const faqs = [
  {
    q: "¿Necesito experiencia previa en ejercicio?",
    a: "No. El programa está diseñado para comenzar desde cero. Cada ejercicio tiene su versión más sencilla para principiantes absolutas.",
  },
  {
    q: "¿Funciona si tengo más de 50 o 60 años?",
    a: "¡Absolutamente! El método AURA está adaptado para el cuerpo de la mujer de 40+ y tiene en cuenta los cambios hormonales y articulares propios de esta etapa.",
  },
  {
    q: "¿Necesito equipos o pesas?",
    a: "No necesitas absolutamente nada. Solo tu cuerpo, un espacio pequeño en casa y 10 minutos al día.",
  },
  {
    q: "¿Cuándo empiezo a ver resultados?",
    a: "La mayoría de las participantes reportan sentir más energía y fuerza desde la primera semana. Los cambios visibles comienzan a partir del día 14.",
  },
  {
    q: "¿Tengo acceso de por vida?",
    a: "Sí. Una vez que te unes, el acceso es tuyo para siempre. Puedes repetir el reto las veces que quieras.",
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} style={{ color: COLORS.gold, fontSize: "14px" }}>★</span>
      ))}
    </div>
  );
}

function CountdownTimer() {
  const [time, setTime] = useState({ hours: 23, minutes: 47, seconds: 33 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) { seconds = 59; minutes--; }
        if (minutes < 0) { minutes = 59; hours--; }
        if (hours < 0) { hours = 23; minutes = 59; seconds = 59; }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div style={{ display: "flex", gap: "8px", justifyContent: "center", alignItems: "center" }}>
      {[
        { label: "Horas", val: pad(time.hours) },
        { label: "Min", val: pad(time.minutes) },
        { label: "Seg", val: pad(time.seconds) },
      ].map((item, i) => (
        <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{
            background: COLORS.bgCard,
            border: `1px solid ${COLORS.goldDark}`,
            borderRadius: "8px",
            padding: "6px 10px",
            fontSize: "22px",
            fontWeight: "700",
            color: COLORS.gold,
            minWidth: "52px",
            textAlign: "center",
            fontFamily: "monospace",
          }}>{item.val}</div>
          <span style={{ fontSize: "10px", color: COLORS.gray, marginTop: "3px" }}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}

function ProgressBar({ current, total }) {
  const pct = Math.round((current / total) * 100);
  return (
    <div style={{ width: "100%", maxWidth: "480px", margin: "0 auto 24px auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
        <span style={{ fontSize: "12px", color: COLORS.gray }}>Pregunta {current} de {total}</span>
        <span style={{ fontSize: "12px", color: COLORS.gold, fontWeight: "700" }}>{pct}%</span>
      </div>
      <div style={{
        height: "8px",
        background: COLORS.grayDark,
        borderRadius: "99px",
        overflow: "hidden",
      }}>
        <div style={{
          height: "100%",
          width: `${pct}%`,
          background: `linear-gradient(90deg, ${COLORS.goldDark}, ${COLORS.gold})`,
          borderRadius: "99px",
          transition: "width 0.6s ease",
        }} />
      </div>
    </div>
  );
}

function QuizSection({ onComplete }) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [animating, setAnimating] = useState(false);

  const q = questions[current];

  const handleSelect = (idx) => {
    if (animating) return;
    setSelected(idx);
    setTimeout(() => {
      const newAnswers = [...answers, idx];
      setAnswers(newAnswers);
      if (current + 1 < questions.length) {
        setAnimating(true);
        setTimeout(() => {
          setCurrent(current + 1);
          setSelected(null);
          setAnimating(false);
        }, 300);
      } else {
        onComplete(newAnswers);
      }
    }, 400);
  };

  return (
    <div style={{
      opacity: animating ? 0 : 1,
      transform: animating ? "translateY(-10px)" : "translateY(0)",
      transition: "all 0.3s ease",
    }}>
      <ProgressBar current={current + 1} total={questions.length} />
      <div style={{
        background: COLORS.bgCard,
        border: `1px solid ${COLORS.grayDark}`,
        borderRadius: "16px",
        padding: "28px 20px",
        marginBottom: "16px",
      }}>
        <div style={{ textAlign: "center", fontSize: "40px", marginBottom: "12px" }}>{q.emoji}</div>
        <h2 style={{
          textAlign: "center",
          color: COLORS.white,
          fontSize: "18px",
          fontWeight: "700",
          lineHeight: "1.4",
          marginBottom: "24px",
          fontFamily: "Inter, sans-serif",
        }}>{q.question}</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {q.options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px 16px",
                borderRadius: "12px",
                border: selected === idx
                  ? `2px solid ${COLORS.gold}`
                  : `1px solid ${COLORS.grayDark}`,
                background: selected === idx
                  ? `linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))`
                  : COLORS.bgCardAlt,
                color: selected === idx ? COLORS.gold : COLORS.grayLight,
                fontSize: "15px",
                fontWeight: selected === idx ? "700" : "400",
                textAlign: "left",
                cursor: "pointer",
                transition: "all 0.2s ease",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span style={{ fontSize: "22px", flexShrink: 0 }}>{opt.icon}</span>
              <span>{opt.text}</span>
              {selected === idx && (
                <span style={{ marginLeft: "auto", color: COLORS.gold, fontWeight: "700" }}>✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResultsSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(20px)",
      transition: "all 0.6s ease",
    }}>
      {/* Resultado */}
      <div style={{
        background: `linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))`,
        border: `2px solid ${COLORS.gold}`,
        borderRadius: "16px",
        padding: "24px 20px",
        marginBottom: "20px",
        textAlign: "center",
      }}>
        <div style={{ fontSize: "48px", marginBottom: "8px" }}>🎉</div>
        <h2 style={{
          color: COLORS.gold,
          fontSize: "22px",
          fontWeight: "800",
          marginBottom: "10px",
          fontFamily: "Inter, sans-serif",
          lineHeight: "1.3",
        }}>¡Eres la candidata perfecta para el Reto!</h2>
        <p style={{
          color: COLORS.grayLight,
          fontSize: "15px",
          lineHeight: "1.6",
          fontFamily: "Inter, sans-serif",
        }}>
          Según tus respuestas, el <strong style={{ color: COLORS.white }}>Reto de 28 Días de Calistenia Militar Femenina</strong> está diseñado exactamente para ti. Tu perfil indica que en solo 10 minutos al día puedes transformar tu fuerza y movilidad desde casa.
        </p>
      </div>

      {/* CTA Principal */}
      <CTAButton />

      {/* Precio */}
      <div style={{
        textAlign: "center",
        marginTop: "12px",
        padding: "0 8px",
      }}>
        <p style={{ color: COLORS.gray, fontSize: "12px", marginBottom: "4px" }}>
          🔒 Pago 100% seguro · Acceso inmediato
        </p>
      </div>
    </div>
  );
}

function CTAButton({ large = false }) {
  const [hover, setHover] = useState(false);

  return (
    <a
      href="https://pay.hotmart.com/G107179617M"
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "block",
        width: "100%",
        padding: large ? "20px 24px" : "18px 24px",
        background: hover
          ? `linear-gradient(135deg, ${COLORS.goldLight}, ${COLORS.gold})`
          : `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
        color: "#000",
        borderRadius: "14px",
        textAlign: "center",
        fontWeight: "800",
        fontSize: large ? "18px" : "16px",
        fontFamily: "Inter, sans-serif",
        textDecoration: "none",
        boxShadow: hover
          ? `0 8px 30px rgba(201,168,76,0.5)`
          : `0 4px 20px rgba(201,168,76,0.3)`,
        transition: "all 0.3s ease",
        transform: hover ? "translateY(-2px) scale(1.02)" : "translateY(0) scale(1)",
        letterSpacing: "0.3px",
        lineHeight: "1.3",
      }}
    >
      🔥 QUIERO UNIRME AL RETO AHORA
      <span style={{
        display: "block",
        fontSize: "12px",
        fontWeight: "600",
        opacity: 0.8,
        marginTop: "3px",
      }}>
        Acceso inmediato · Solo por tiempo limitado
      </span>
    </a>
  );
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      border: `1px solid ${open ? COLORS.goldDark : COLORS.grayDark}`,
      borderRadius: "12px",
      overflow: "hidden",
      marginBottom: "10px",
      transition: "border-color 0.3s ease",
    }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 18px",
          background: open ? "rgba(201,168,76,0.08)" : COLORS.bgCard,
          color: open ? COLORS.gold : COLORS.white,
          fontSize: "14px",
          fontWeight: "600",
          textAlign: "left",
          cursor: "pointer",
          fontFamily: "Inter, sans-serif",
          gap: "12px",
          transition: "all 0.3s ease",
        }}
      >
        <span style={{ flex: 1 }}>{q}</span>
        <span style={{
          fontSize: "20px",
          transform: open ? "rotate(45deg)" : "rotate(0)",
          transition: "transform 0.3s ease",
          color: COLORS.gold,
          flexShrink: 0,
        }}>+</span>
      </button>
      {open && (
        <div style={{
          padding: "14px 18px",
          background: COLORS.bgCardAlt,
          color: COLORS.grayLight,
          fontSize: "14px",
          lineHeight: "1.6",
          fontFamily: "Inter, sans-serif",
          borderTop: `1px solid ${COLORS.grayDark}`,
        }}>
          {a}
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [phase, setPhase] = useState("landing"); // landing | quiz | results
  const [scrolled, setScrolled] = useState(false);
  const quizRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const startQuiz = () => {
    setPhase("quiz");
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const handleQuizComplete = () => {
    setPhase("results");
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div style={{
      background: COLORS.bg,
      minHeight: "100vh",
      fontFamily: "Inter, Roboto, sans-serif",
      overflowX: "hidden",
      color: COLORS.white,
    }}>
      {/* Navbar sticky */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: scrolled ? `1px solid ${COLORS.grayDark}` : "none",
        padding: "12px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}>
        <div style={{
          fontSize: "18px",
          fontWeight: "800",
          color: COLORS.gold,
          letterSpacing: "1px",
          fontFamily: "Inter, sans-serif",
        }}>
          ✦ MÉTODO AURA
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 20px 60px",
        background: `
          radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,168,76,0.12) 0%, transparent 60%),
          linear-gradient(180deg, #0a0a0a 0%, #0d0d0d 100%)
        `,
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        {/* Decorative lines */}
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `
            linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }} />

        <div style={{ maxWidth: "560px", width: "100%", position: "relative", zIndex: 1 }}>
          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            background: "rgba(201,168,76,0.12)",
            border: `1px solid rgba(201,168,76,0.3)`,
            borderRadius: "99px",
            padding: "6px 14px",
            fontSize: "12px",
            fontWeight: "600",
            color: COLORS.gold,
            marginBottom: "24px",
            letterSpacing: "0.5px",
          }}>
            ⚡ PROGRAMA EXCLUSIVO PARA MUJERES 40+
          </div>

          <h1 style={{
            fontSize: "clamp(28px, 8vw, 46px)",
            fontWeight: "900",
            lineHeight: "1.15",
            marginBottom: "20px",
            color: COLORS.white,
            fontFamily: "Inter, sans-serif",
          }}>
            El{" "}
            <span style={{
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Reto de 28 Días
            </span>{" "}
            de Calistenia Militar Femenina
          </h1>

          <p style={{
            fontSize: "clamp(15px, 4vw, 18px)",
            color: COLORS.grayLight,
            lineHeight: "1.7",
            marginBottom: "32px",
            fontWeight: "400",
          }}>
            Recupera tu fuerza y movilidad <strong style={{ color: COLORS.white }}>sin gimnasio, sin equipos</strong> y con solo <strong style={{ color: COLORS.gold }}>10 minutos al día</strong>. Adaptado al cuerpo de la mujer 40+.
          </p>

          {/* Social proof mini */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "12px",
            marginBottom: "32px",
            flexWrap: "wrap",
          }}>
            <div style={{ display: "flex" }}>
              {[47, 45, 41, 43, 48].map((n) => (
                <img
                  key={n}
                  src={`https://i.pravatar.cc/36?img=${n}`}
                  alt=""
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    border: `2px solid ${COLORS.bg}`,
                    marginLeft: "-8px",
                    objectFit: "cover",
                  }}
                />
              ))}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                {Array(5).fill(0).map((_, i) => (
                  <span key={i} style={{ color: COLORS.gold, fontSize: "12px" }}>★</span>
                ))}
              </div>
              <p style={{ fontSize: "12px", color: COLORS.gray, margin: 0 }}>
                +2.800 mujeres ya transformadas
              </p>
            </div>
          </div>

          {/* Hero CTA */}
          {phase === "landing" && (
            <button
              onClick={startQuiz}
              style={{
                width: "100%",
                maxWidth: "400px",
                padding: "20px 24px",
                background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                color: "#000",
                borderRadius: "14px",
                fontWeight: "800",
                fontSize: "17px",
                fontFamily: "Inter, sans-serif",
                cursor: "pointer",
                border: "none",
                boxShadow: `0 6px 30px rgba(201,168,76,0.4)`,
                marginBottom: "12px",
                animation: "pulse 2s infinite",
                lineHeight: "1.3",
              }}
            >
              🎯 DESCUBRE SI ES PARA TI
              <span style={{
                display: "block",
                fontSize: "12px",
                fontWeight: "500",
                opacity: 0.8,
                marginTop: "2px",
              }}>
                Test rápido de 5 preguntas
              </span>
            </button>
          )}

          {/* Garantías */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "16px",
            flexWrap: "wrap",
            marginTop: "12px",
          }}>
            {["🔒 Pago seguro", "📱 Acceso inmediato", "🌟 Para 40+"].map((item, i) => (
              <span key={i} style={{
                fontSize: "12px",
                color: COLORS.gray,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Imagen del programa */}
      <section style={{
        padding: "0 20px 60px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          borderRadius: "20px",
          overflow: "hidden",
          border: `2px solid ${COLORS.grayDark}`,
          boxShadow: `0 20px 60px rgba(0,0,0,0.5)`,
          background: COLORS.bgCard,
          padding: "24px",
        }}>
          <img
            src="https://media.atomicatmedia.net/u/IfjF3MAqCzSJIl3XmwJ47mbGEVr1/Pictures/IcGPdw4122931.jpeg"
            alt="Método AURA - Reto 28 Días"
            style={{
              width: "100%",
              borderRadius: "12px",
              display: "block",
              marginBottom: "16px",
            }}
            onError={(e) => {
              // Fallback si la imagen no carga
              e.target.style.display = "none";
            }}
          />
          <p style={{
            color: COLORS.gold,
            fontWeight: "700",
            fontSize: "16px",
            fontFamily: "Inter, sans-serif",
          }}>
            ✦ El último programa que vas a necesitar
          </p>
        </div>
      </section>

      {/* Temporizador de urgencia */}
      <section style={{
        padding: "20px",
        maxWidth: "560px",
        margin: "0 auto 40px",
      }}>
        <div style={{
          background: "rgba(231,76,60,0.08)",
          border: "1px solid rgba(231,76,60,0.3)",
          borderRadius: "14px",
          padding: "16px 20px",
          textAlign: "center",
        }}>
          <p style={{
            color: "#E74C3C",
            fontWeight: "700",
            fontSize: "13px",
            marginBottom: "10px",
            letterSpacing: "0.5px",
          }}>
            ⏰ OFERTA DE LANZAMIENTO — EXPIRA EN:
          </p>
          <CountdownTimer />
        </div>
      </section>

      {/* Beneficios */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{
            fontSize: "clamp(22px, 6vw, 32px)",
            fontWeight: "800",
            color: COLORS.white,
            fontFamily: "Inter, sans-serif",
            marginBottom: "10px",
          }}>
            ¿Qué incluye el{" "}
            <span style={{ color: COLORS.gold }}>Reto de 28 Días?</span>
          </h2>
          <p style={{ color: COLORS.gray, fontSize: "15px" }}>
            Todo lo que necesitas para transformarte, sin complicaciones
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "12px",
        }}>
          {benefits.map((b, i) => (
            <div key={i} style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.grayDark}`,
              borderRadius: "14px",
              padding: "20px 18px",
              display: "flex",
              alignItems: "flex-start",
              gap: "14px",
              transition: "border-color 0.3s ease",
            }}>
              <span style={{ fontSize: "28px", flexShrink: 0 }}>{b.icon}</span>
              <div>
                <p style={{
                  color: COLORS.gold,
                  fontWeight: "700",
                  fontSize: "14px",
                  marginBottom: "4px",
                  fontFamily: "Inter, sans-serif",
                }}>{b.title}</p>
                <p style={{
                  color: COLORS.gray,
                  fontSize: "13px",
                  lineHeight: "1.5",
                }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUIZ / RESULTS */}
      <section
        ref={quizRef}
        style={{
          padding: "40px 20px",
          maxWidth: "540px",
          margin: "0 auto",
          scrollMarginTop: "80px",
        }}
      >
        {phase === "landing" && (
          <div style={{
            background: COLORS.bgCard,
            border: `2px solid ${COLORS.goldDark}`,
            borderRadius: "20px",
            padding: "28px 20px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "40px", marginBottom: "12px" }}>🎯</div>
            <h2 style={{
              color: COLORS.white,
              fontSize: "20px",
              fontWeight: "700",
              marginBottom: "10px",
              fontFamily: "Inter, sans-serif",
            }}>
              ¿Es este programa para ti?
            </h2>
            <p style={{ color: COLORS.gray, fontSize: "14px", marginBottom: "20px" }}>
              Responde 5 preguntas rápidas y descúbrelo ahora mismo
            </p>
            <button
              onClick={startQuiz}
              style={{
                width: "100%",
                padding: "16px",
                background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
                color: "#000",
                borderRadius: "12px",
                fontWeight: "800",
                fontSize: "16px",
                fontFamily: "Inter, sans-serif",
                cursor: "pointer",
                border: "none",
              }}
            >
              COMENZAR TEST GRATIS →
            </button>
          </div>
        )}

        {phase === "quiz" && (
          <div>
            <h2 style={{
              textAlign: "center",
              color: COLORS.gold,
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
            }}>
              TEST PERSONALIZADO · MÉTODO AURA
            </h2>
            <QuizSection onComplete={handleQuizComplete} />
          </div>
        )}

        {phase === "results" && (
          <div>
            <h2 style={{
              textAlign: "center",
              color: COLORS.gold,
              fontSize: "13px",
              fontWeight: "600",
              letterSpacing: "1px",
              marginBottom: "20px",
              fontFamily: "Inter, sans-serif",
            }}>
              ✓ TUS RESULTADOS ESTÁN LISTOS
            </h2>
            <ResultsSection />
          </div>
        )}
      </section>

      {/* Testimoniales */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
        background: "transparent",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(20px, 5vw, 28px)",
          fontWeight: "800",
          color: COLORS.white,
          fontFamily: "Inter, sans-serif",
          marginBottom: "8px",
        }}>
          Lo que dicen las{" "}
          <span style={{ color: COLORS.gold }}>que ya lo hicieron</span>
        </h2>
        <p style={{
          textAlign: "center",
          color: COLORS.gray,
          fontSize: "14px",
          marginBottom: "28px",
        }}>
          Mujeres reales, resultados reales
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: COLORS.bgCard,
              border: `1px solid ${COLORS.grayDark}`,
              borderRadius: "14px",
              padding: "20px",
            }}>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "12px",
              }}>
                <img
                  src={t.avatar}
                  alt={t.name}
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: `2px solid ${COLORS.goldDark}`,
                  }}
                />
                <div>
                  <p style={{
                    color: COLORS.white,
                    fontWeight: "700",
                    fontSize: "14px",
                    marginBottom: "2px",
                    fontFamily: "Inter, sans-serif",
                  }}>{t.name}</p>
                  <StarRating count={t.stars} />
                </div>
              </div>
              <p style={{
                color: COLORS.grayLight,
                fontSize: "14px",
                lineHeight: "1.6",
                fontStyle: "italic",
              }}>"{t.text}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* TODO: Agregar sección de video testimonial real con URL de YouTube/Vimeo */}

      {/* Para quién es */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(20px, 5vw, 28px)",
          fontWeight: "800",
          color: COLORS.white,
          fontFamily: "Inter, sans-serif",
          marginBottom: "24px",
        }}>
          Este reto es para ti si...
        </h2>
        <div style={{
          background: COLORS.bgCard,
          border: `1px solid ${COLORS.grayDark}`,
          borderRadius: "16px",
          overflow: "hidden",
        }}>
          {[
            "Tienes 40 o más años y sientes que perdiste tu energía y vitalidad",
            "Quieres volverte a mover sin dolor ni limitaciones",
            "No tienes tiempo ni ganas de ir al gimnasio",
            "Has probado otras cosas que no funcionaron para tu cuerpo",
            "Quieres recuperar tu fuerza de manera progresiva y segura",
            "Solo tienes 10 minutos al día pero los quieres aprovechar al máximo",
          ].map((item, i) => (
            <div key={i} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              padding: "14px 18px",
              borderBottom: i < 5 ? `1px solid ${COLORS.grayDark}` : "none",
            }}>
              <span style={{
                color: COLORS.success,
                fontSize: "18px",
                flexShrink: 0,
                marginTop: "1px",
              }}>✓</span>
              <p style={{
                color: COLORS.grayLight,
                fontSize: "14px",
                lineHeight: "1.5",
                margin: 0,
              }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}>
        <h2 style={{
          textAlign: "center",
          fontSize: "clamp(20px, 5vw, 28px)",
          fontWeight: "800",
          color: COLORS.white,
          fontFamily: "Inter, sans-serif",
          marginBottom: "24px",
        }}>
          Preguntas frecuentes
        </h2>
        {faqs.map((faq, i) => (
          <FaqItem key={i} q={faq.q} a={faq.a} />
        ))}
      </section>

      {/* CTA Final */}
      <section style={{
        padding: "40px 20px 80px",
        maxWidth: "560px",
        margin: "0 auto",
        textAlign: "center",
      }}>
        <div style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 70%),
            ${COLORS.bgCard}
          `,
          border: `2px solid ${COLORS.goldDark}`,
          borderRadius: "20px",
          padding: "36px 24px",
        }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🔥</div>
          <h2 style={{
            fontSize: "clamp(22px, 6vw, 32px)",
            fontWeight: "900",
            color: COLORS.white,
            fontFamily: "Inter, sans-serif",
            marginBottom: "12px",
            lineHeight: "1.2",
          }}>
            Tu transformación empieza{" "}
            <span style={{ color: COLORS.gold }}>hoy</span>
          </h2>
          <p style={{
            color: COLORS.gray,
            fontSize: "15px",
            lineHeight: "1.6",
            marginBottom: "28px",
          }}>
            Únete a más de 2.800 mujeres que ya recuperaron su fuerza y vitalidad con el Método AURA. Sin excusas. Sin equipos. Solo 10 minutos al día.
          </p>

          {/* Precio */}
          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            gap: "8px",
            marginBottom: "24px",
          }}>
            <span style={{
              fontSize: "16px",
              color: COLORS.gray,
              textDecoration: "line-through",
            }}>€97</span>
            <span style={{
              fontSize: "42px",
              fontWeight: "900",
              color: COLORS.gold,
              fontFamily: "Inter, sans-serif",
            }}>€27</span>
          </div>

          <CTAButton large />

          {/* Garantía */}
          <div style={{
            marginTop: "20px",
            padding: "14px 16px",
            background: "rgba(39,174,96,0.08)",
            border: "1px solid rgba(39,174,96,0.2)",
            borderRadius: "10px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            textAlign: "left",
          }}>
            <span style={{ fontSize: "28px", flexShrink: 0 }}>🛡️</span>
            <div>
              <p style={{
                color: "#27AE60",
                fontWeight: "700",
                fontSize: "13px",
                marginBottom: "2px",
                fontFamily: "Inter, sans-serif",
              }}>Garantía de satisfacción 7 días</p>
              <p style={{
                color: COLORS.gray,
                fontSize: "12px",
                lineHeight: "1.4",
              }}>Si no estás satisfecha, te devolvemos tu dinero. Sin preguntas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: `1px solid ${COLORS.grayDark}`,
        padding: "24px 20px",
        textAlign: "center",
        background: "#050505",
      }}>
        <p style={{
          color: COLORS.gold,
          fontWeight: "800",
          fontSize: "16px",
          marginBottom: "8px",
          fontFamily: "Inter, sans-serif",
        }}>✦ MÉTODO AURA</p>
        <p style={{
          color: COLORS.grayDark,
          fontSize: "12px",
          lineHeight: "1.6",
          maxWidth: "400px",
          margin: "0 auto 8px",
        }}>
          Reto de 28 Días de Calistenia Militar Femenina para mujeres 40+
        </p>
        {/* TODO: Agregar enlaces a política de privacidad y términos de uso */}
        <p style={{ color: COLORS.grayDark, fontSize: "11px" }}>
          © 2025 Método AURA · Todos los derechos reservados
        </p>
      </footer>

      {/* Sticky bottom CTA (mobile) */}
      <div style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: "12px 16px",
        background: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(10px)",
        borderTop: `1px solid ${COLORS.grayDark}`,
        display: "flex",
        justifyContent: "center",
      }}>
        <a
          href="https://pay.hotmart.com/G107179617M"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            width: "100%",
            maxWidth: "480px",
            padding: "14px 20px",
            background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldDark})`,
            color: "#000",
            borderRadius: "12px",
            textAlign: "center",
            fontWeight: "800",
            fontSize: "15px",
            fontFamily: "Inter, sans-serif",
            textDecoration: "none",
            boxShadow: `0 4px 20px rgba(201,168,76,0.4)`,
          }}
        >
          🔥 ÚNETE AL RETO — €27
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
        @keyframes pulse {
          0%, 100% { box-shadow: 0 6px 30px rgba(201,168,76,0.4); }
          50% { box-shadow: 0 6px 40px rgba(201,168,76,0.65); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #0a0a0a; overflow-x: hidden; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #C9A84C; border-radius: 3px; }
      `}</style>
    </div>
  );
}