export const WA_BASE = "https://api.whatsapp.com/message/EEYLUNVMY2UDJ1?autoload=1&app_absent=0";

export const WA_REDUCTIVOS =
  "https://wa.me/50688374010?text=Hola%2C+quiero+agendar+mi+valoraci%C3%B3n+GRATIS+para+reducir+medidas";

export const WA_FACIALES =
  "https://wa.me/50688374010?text=Hola%2C+quiero+informaci%C3%B3n+sobre+los+tratamientos+faciales+en+MJ+Est%C3%A9tica";

export interface Testimonial {
  id: number;
  age: number;
  location: string;
  area: string;
  duration: string;
  treatment: string;
  result: string;
  text: string;
  verified?: boolean;
}

export interface BeforeAfterItem {
  id: number;
  area: string;
  treatment: string;
  duration: string;
  result: string;
  areaIcon: string;
}

export interface ChatMessage {
  id: number;
  sender: "client" | "mj";
  text: string;
  time: string;
  clientLabel: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    age: 36,
    location: "Turrialba",
    area: "Abdomen",
    duration: "4 semanas",
    treatment: "Reductivo + Drenaje linfático",
    result: "2 tallas menos",
    text: "Logré bajar 2 tallas en abdomen en solo 1 mes. Me siento mucho más segura con mi cuerpo. Nunca pensé que sin cirugía pudiera ver estos resultados.",
    verified: true,
  },
  {
    id: 2,
    age: 42,
    location: "Turrialba",
    area: "Caderas y muslos",
    duration: "6 semanas",
    treatment: "Maderoterapia + Reductivo",
    result: "8 cm menos en caderas",
    text: "Después de mis embarazos no podía quitarme la grasa de las caderas. En 6 semanas perdí 8 centímetros. El equipo es súper profesional.",
    verified: true,
  },
  {
    id: 3,
    age: 29,
    location: "Turrialba",
    area: "Abdomen y cintura",
    duration: "3 semanas",
    treatment: "Carboxiterapia corporal",
    result: "1.5 tallas menos",
    text: "De verdad me funcionó demasiado. Solo llevo 3 semanas y ya noto el cambio. Mis amigos me preguntan qué hago diferente 😍",
    verified: true,
  },
  {
    id: 4,
    age: 51,
    location: "Turrialba",
    area: "Espalda y flancos",
    duration: "8 semanas",
    treatment: "Drenaje + Ultrasonido",
    result: "Eliminó grasa localizada",
    text: "Tenía esa grasa de la espalda que nada la quitaba. Después de 2 meses en MJ Estética desapareció. Lo recomiendo 100%.",
    verified: true,
  },
  {
    id: 5,
    age: 34,
    location: "Turrialba",
    area: "Abdomen postparto",
    duration: "5 semanas",
    treatment: "Reductivo intensivo",
    result: "Recuperó figura postparto",
    text: "Después de mi segundo bebé quedé con mucho abdomen flácido. En 5 semanas recuperé casi toda mi figura. Ojalá hubiera ido antes.",
    verified: true,
  },
  {
    id: 6,
    age: 38,
    location: "Turrialba",
    area: "Piernas y celulitis",
    duration: "6 semanas",
    treatment: "Maderoterapia + Drenaje",
    result: "Celulitis notablemente reducida",
    text: "La celulitis en mis piernas era mi complejo número 1. Las terapias de maderoterapia cambiaron todo. Me siento libre de usar shorts.",
    verified: true,
  },
];

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: 1,
    area: "Abdomen",
    treatment: "Reductivo + Drenaje linfático",
    duration: "4 semanas",
    result: "2 tallas menos en abdomen",
    areaIcon: "👙",
  },
  {
    id: 2,
    area: "Caderas",
    treatment: "Maderoterapia intensiva",
    duration: "6 semanas",
    result: "8 cm menos en caderas",
    areaIcon: "🩱",
  },
  {
    id: 3,
    area: "Piernas",
    treatment: "Drenaje + Ultrasonido",
    duration: "5 semanas",
    result: "Celulitis eliminada",
    areaIcon: "🦵",
  },
  {
    id: 4,
    area: "Espalda",
    treatment: "Reductivo focalizado",
    duration: "8 semanas",
    result: "Grasa localizada eliminada",
    areaIcon: "🤸",
  },
];

export const chatProofs: ChatMessage[] = [
  {
    id: 1,
    sender: "client",
    text: "De verdad me funcionó demasiado 😍 ya no me da pena ir a la playa",
    time: "10:24 a.m.",
    clientLabel: "Clienta de Turrialba, 34 años",
  },
  {
    id: 2,
    sender: "mj",
    text: "¡Nos alegra muchísimo! Tus resultados fueron increíbles 💙 Sigue así",
    time: "10:26 a.m.",
    clientLabel: "MJ Estética",
  },
  {
    id: 3,
    sender: "client",
    text: "En 3 semanas bajé una talla 😭😭 no lo puedo creer. Ya reservé para el próximo mes",
    time: "3:15 p.m.",
    clientLabel: "Clienta de Turrialba, 29 años",
  },
  {
    id: 4,
    sender: "client",
    text: "Mi esposo me preguntó qué había cambiado 😂 le dije que el secreto es MJ jaja",
    time: "9:02 a.m.",
    clientLabel: "Clienta de Turrialba, 42 años",
  },
  {
    id: 5,
    sender: "mj",
    text: "¡Qué lindo 😍! Eso es exactamente lo que queremos para vos. Te esperamos pronto 🌟",
    time: "9:05 a.m.",
    clientLabel: "MJ Estética",
  },
  {
    id: 6,
    sender: "client",
    text: "Oiga yo vine muy desconfiada y mire ahora no paro de recomendar el lugar 🙌🙌",
    time: "6:41 p.m.",
    clientLabel: "Clienta de Turrialba, 51 años",
  },
];
