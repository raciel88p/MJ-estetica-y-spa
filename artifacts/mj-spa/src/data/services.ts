export type ServiceItem = {
  title: string;
  description: string;
  duration?: string;
  price?: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  fullTitle?: string;
  tagline: string;
  heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba", string;
  heroBg?: string;
  benefits: string[];
  items: ServiceItem[];
  faq?: { question: string; answer: string }[];
};

export const medicoEsteticosLinks = [
  { name: "Nutrición", href: "/servicios/nutricion" },
  { name: "Botox Full Face", href: "/servicios/botox-full-face" },
  { name: "Hilos Tensores Turrialba", href: "/servicios/hilos-tensores" },
  { name: "Trasplante Capilar", href: "/servicios/trasplante-capilar" },
  { name: "Ácido Hialurónico", href: "/servicios/acido-hialuronico" },
  { name: "Biorevitalización", href: "/servicios/biorevitalizacion" },
  { name: "Implante de Barba", href: "/servicios/implante-barba" },
  { name: "Mesoterapia Capilar", href: "/servicios/mesoterapia-capilar" },
  { name: "Relleno de Labios", href: "/servicios/relleno-de-labios" },
];

export const tratamientosCorporalesLinks = [
  { name: "Masajes Corporales", href: "/servicios/masajes-corporales" },
  { name: "Masajes Relajantes", href: "/servicios/masajes-relajantes" },
  { name: "Masajes Post Operatorios", href: "/servicios/masajes-post-operatorios" },
  { name: "Tensado Corporal", href: "/servicios/tensado-corporal" },
  { name: "Depilación Láser", href: "/servicios/depilacion-laser" },
  { name: "Iron Beauty Fitness", href: "/servicios/iron-beauty-fitness" },
  { name: "Carboxiterapia", href: "/servicios/carboxiterapia" },
  { name: "Levantamiento de Glúteo", href: "/servicios/levantamiento-gluteo" },
  { name: "Levantamiento de Busto", href: "/servicios/levantamiento-busto" },
  { name: "Vendas Frías", href: "/servicios/vendas-frias" },
  { name: "Auriculoterapia", href: "/servicios/auriculoterapia" },
  { name: "Láser Despigmentante", href: "/servicios/blanqueamiento-zona-intima" },
];

export const tratamientosFacialesLinks = [
  { name: "Tratamientos Faciales", href: "/servicios/faciales" },
  { name: "Terapias Faciales", href: "/servicios/terapias-faciales" },
  { name: "Peeling Químico", href: "/servicios/peeling-quimico" },
  { name: "HOLLYWOOD PEEL EN TURRIALBA", href: "/servicios/hollywood-peel" },
  { name: "Eliminación de Manchas", href: "/servicios/eliminacion-manchas" },
  { name: "Radiofrecuencia Facial", href: "/servicios/radiofrecuencia-facial" },
  { name: "ADN de Salmón", href: "/servicios/adn-salmon" },
  { name: "Hilos de Colágeno", href: "/servicios/hilos-colageno" },
  { name: "Tratamiento de Ojeras", href: "/servicios/tratamiento-ojeras" },
];

export const tratamientosPiernasLinks = [
  { name: "Cuidado de Piernas Cansadas", href: "/servicios/piernas-cansadas" },
  { name: "Tratamiento Anticelulitis", href: "/servicios/tratamiento-anticelulitis" },
];

export const servicePages: ServicePageData[] = [
  {
    slug: "masajes-corporales",
    name: "Masajes Reductor con Hidrolicoplasia Turrialba",
    tagline: "Libera la tensión, renueva tu energía",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Nuestros masajes corporales combinan técnicas profesionales para aliviar el estrés, reducir tensiones musculares y promover una sensación de bienestar total. Reduce grasa localizada y redefine tu contorno corporal sin cirugía",
    benefits: [
      "Reducción del estrés y la ansiedad",
      "Alivio de dolores musculares",
      "Mejora de la circulación sanguínea",
      "Relajación profunda del sistema nervioso",
      "Recuperación muscular más rápida",
    ],
    items: [
      {
        title: "Masaje Anticelulítico",
        description:
          "Tratamiento específico que trabaja las zonas con celulitis mediante técnicas de amasamiento y drenaje, mejorando la textura de la piel y la circulación local.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Masaje con Piedras Calientes",
        description:
          "Técnica de termoterapia con piedras volcánicas que actúan en profundidad para aliviar contracturas y proporcionar una relajación profunda.",
        duration: "75 min",
        price: "Consultar precio",
      },
      {
        title: "Masaje Drenante",
        description:
          "Estimula el sistema linfático para eliminar toxinas y reducir la retención de líquidos, dejando el cuerpo más ligero y definido.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Envoltura Corporal",
        description:
          "Tratamiento nutritivo que envuelve el cuerpo con activos altamente hidratantes, dejando la piel suave, tersa y luminosa.",
        duration: "90 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Con qué frecuencia debo realizarme un masaje corporal?",
        answer:
          "Recomendamos una sesión quincenal o mensual para mantenimiento general. Para resultados terapéuticos o reductores, puede ser necesario un programa más intensivo.",
      },
      {
        question: "¿Debo prepararme de alguna forma antes del masaje?",
        answer:
          "Aconsejamos llegar bien hidratada y evitar comidas copiosas 2 horas antes. Tras el masaje, beber abundante agua para facilitar la eliminación de toxinas.",
      },
    ],
  },
  {
    slug: "faciales",
    name: "Tratamientos Faciales",
    tagline: "Luce una piel radiante y rejuvenecida",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Descubre nuestra gama completa de tratamientos faciales diseñados para cada tipo de piel. Técnicas avanzadas y productos de alta gama para resultados visibles.",
    benefits: [
      "Piel más limpia y luminosa",
      "Reducción de manchas e imperfecciones",
      "Hidratación profunda y duradera",
      "Efecto antiedad visible",
      "Poros minimizados",
    ],
    items: [
      {
        title: "Higiene Facial Completa",
        description:
          "Limpieza profunda que elimina impurezas, puntos negros y células muertas. Incluye vaporización, extracción y mascarilla personalizada.",
        duration: "75 min",
        price: "Consultar precio",
      },
      {
        title: "Tratamiento Hidratante Intensivo",
        description:
          "Aporta hidratación profunda a pieles secas y deshidratadas mediante activos de última generación y técnicas de penetración.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Tratamiento Antiacné",
        description:
          "Protocolo específico para pieles mixtas-grasas con tendencia acneica. Reduce la producción de sebo y previene futuras imperfecciones.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Facial Antienvejecimiento",
        description:
          "Combina activos reafirmantes, antioxidantes y técnicas de mesoterapia sin agujas para un efecto lifting y rejuvenecedor inmediato.",
        duration: "90 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones necesito para ver resultados?",
        answer:
          "Los resultados son visibles desde la primera sesión, aunque para tratamientos específicos como antiedad o antimanchas recomendamos un mínimo de 4-6 sesiones.",
      },
      {
        question: "¿Con qué frecuencia debo hacerme un facial?",
        answer:
          "Una higiene facial cada 4-6 semanas es lo ideal para mantener la piel limpia. Los tratamientos específicos siguen un protocolo personalizado.",
      },
    ],
  },
  {
    slug: "masajes-relajantes",
    name: "Masajes Relajantes",
    tagline: "Un viaje al bienestar total",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Déjate llevar por nuestros masajes relajantes, diseñados para desconectar mente y cuerpo. Técnicas suaves y profundas combinadas para una experiencia única de paz interior.",
    benefits: [
      "Reducción del cortisol (hormona del estrés)",
      "Mejora del sueño y el descanso",
      "Liberación de endorfinas naturales",
      "Relajación muscular profunda",
      "Sensación de bienestar prolongada",
    ],
    items: [
      {
        title: "Masaje Sueco",
        description:
          "El clásico masaje relajante con movimientos largos y deslizantes que liberan la tensión muscular y promueven la circulación.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Masaje Aromático",
        description:
          "Combina las técnicas de masaje sueco con aceites esenciales seleccionados según tu estado emocional para una experiencia sensorial completa.",
        duration: "75 min",
        price: "Consultar precio",
      },
      {
        title: "Masaje Californiano",
        description:
          "Movimientos amplios y envolventes que conectan el cuerpo como un todo, ideal para estados de estrés intenso o ansiedad.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Ritual Spa Completo",
        description:
          "Experiencia de 2 horas que incluye exfoliación corporal, masaje relajante, mascarilla facial y momento de relajación en ambiente spa.",
        duration: "120 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Qué diferencia hay entre un masaje relajante y uno terapéutico?",
        answer:
          "El masaje relajante se enfoca en el bienestar general y la reducción del estrés, con técnicas suaves. El terapéutico trabaja zonas específicas con mayor profundidad para abordar dolencias concretas.",
      },
      {
        question: "¿Puedo pedir una intensidad específica?",
        answer:
          "Por supuesto. Antes de comenzar, nuestra terapeuta hablará contigo para adaptar la presión y las técnicas a tus preferencias y necesidades.",
      },
    ],
  },
  {
    slug: "masajes-post-operatorios",
    name: "Masajes Post Operatorios en Turrialba",
    tagline: "Recuperación más rápida, resultados más visibles",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Recuperación estética con acompañamiento profesional, bienestar y protocolos diseñados para ayudarte a sentirte mejor más rápido<br /><br />Después de una cirugía estética, tu cuerpo necesita mucho más que reposo. Necesita atención especializada, drenaje adecuado y protocolos post operatorios diseñados para favorecer la recuperación, reducir inflamación y ayudarte a mejorar tu proceso de recuperación con mayor comodidad y confianza.",
    benefits: [
      "Reduce la inflamación y el edema post quirúrgico",
      "Previene y trata la fibrosis (dureza post cirugía)",
      "Mejora la cicatrización y la calidad de la piel",
      "Acelera la reabsorción de líquidos y hematomas",
      "Mejora los resultados finales de la cirugía",
      "Alivia el dolor y la sensación de tensión",
    ],
    items: [
      {
        title: "Drenaje Linfático Post Operatorio",
        description:
          "Técnica de masaje suave y especializada que activa el sistema linfático para eliminar el exceso de líquidos, reducir la hinchazón y acelerar la recuperación. Indicado desde las primeras 48–72 horas post cirugía.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Tratamiento Anti-Fibrosis",
        description:
          "Protocolo específico con maniobras de desfibrosis manual y herramientas profesionales para ablandar las zonas duras que se forman bajo la piel tras liposucciones, abdominoplastias u otras cirugías.",
        duration: "60–75 min",
        price: "Consultar precio",
      },
      {
        title: "Masaje de Recuperación Facial",
        description:
          "Protocolo suave diseñado para intervenciones como rinoplastia, bichectomía, lifting facial o cirugía de párpados. Descongestiona el área, reduce moretones y mejora la calidad de la cicatrización.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Integral Post Operatorio",
        description:
          "Sesión completa que combina drenaje linfático, trabajo anti-fibrosis y aplicación de ultrasonido terapéutico en un solo tratamiento. Ideal para optimizar la recuperación en todas las etapas.",
        duration: "90 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuándo puedo empezar los masajes tras la cirugía?",
        answer:
          "En general, el drenaje linfático suave puede iniciarse a partir de las 48–72 horas post operatorio, previa autorización del cirujano. El trabajo anti-fibrosis se recomienda a partir de la 3ª–4ª semana. En tu primera valoración te indicamos el protocolo exacto según tu caso.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "El número varía según el tipo de cirugía y tu evolución personal. En casos de liposucción o abdominoplastia se recomiendan entre 10 y 15 sesiones. Para cirugías más pequeñas, entre 5 y 8 pueden ser suficientes.",
      },
      {
        question: "¿Es doloroso el masaje post operatorio?",
        answer:
          "El drenaje linfático es una técnica muy suave y no debe causar dolor. El trabajo anti-fibrosis puede generar algo de molestia en zonas muy endurecidas, pero siempre adaptamos la presión a tu tolerancia.",
      },
      {
        question: "¿Para qué cirugías está indicado?",
        answer:
          "Liposucción, abdominoplastia, mamoplastia, rinoplastia, bichectomía, lifting, cirugía bariátrica y cualquier intervención que genere inflamación o fibrosis. Si tienes dudas sobre tu caso específico, consúltanos.",
      },
    ],
  },
  {
    slug: "depilacion-laser",
    name: "Depilación Láser",
    tagline: "Piel lisa para siempre, con tecnología avanzada",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Depilación Láser en Turrialba | MJ Estética & Wellness Center<br />Despídete del vello… y vuelve a sentirte cómoda con tu piel<br /><br />Reduce progresivamente el crecimiento del vello, evita irritación constante y luce una piel más suave y uniforme con tecnología de depilación láser profesional en MJ Estética & Wellness Center en Turrialba.",
    benefits: [
      "Eliminación permanente del vello",
      "Piel suave y sin irritaciones",
      "Ahorro a largo plazo frente a otros métodos",
      "Tratamiento rápido y cómodo",
      "Resultados visibles desde las primeras sesiones",
    ],
    items: [
      {
        title: "Depilación Facial",
        description:
          "Tratamiento para labio superior, mentón, patillas y cuello. Elimina el vello de forma progresiva y definitiva.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Axila / Zona Bikini",
        description:
          "Zonas delicadas tratadas con máxima precisión y confort. Resultados permanentes con protocolo de 6-8 sesiones.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Piernas Completas",
        description:
          "Tratamiento completo de piernas desde las ingles hasta los tobillos. Incluye rodillas y partes posteriores.",
        duration: "60-90 min",
        price: "Consultar precio",
      },
      {
        title: "Cuerpo Completo",
        description:
          "Protocolo integral para la eliminación del vello en todo el cuerpo. El paquete más completo con mayor ahorro.",
        duration: "120 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones son necesarias?",
        answer:
          "Generalmente entre 6 y 8 sesiones, separadas de 4 a 8 semanas, dependiendo de la zona y el tipo de vello. Algunas personas requieren sesiones de mantenimiento posteriores.",
      },
      {
        question: "¿El tratamiento es doloroso?",
        answer:
          "La sensación es mínima, similar a un ligero picor o calor. Nuestro equipo dispone de sistema de enfriamiento integrado para maximizar el confort durante el tratamiento.",
      },
      {
        question: "¿Hay alguna contraindicación?",
        answer:
          "No está indicado durante el embarazo, si se toma fotosensibilizantes o con bronceado activo. En la consulta previa evaluamos tu caso de forma personalizada.",
      },
    ],
  },
  {
    slug: "terapias-faciales",
    name: "Terapias Faciales",
    tagline: "Tecnología y naturaleza al servicio de tu piel",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Combinamos tecnologías estéticas avanzadas con principios naturales para tratar en profundidad los problemas más comunes de la piel y devolverte un rostro sano y luminoso.",
    benefits: [
      "Resultados visibles y medibles",
      "Tratamientos personalizados",
      "Tecnología de última generación",
      "Sin efectos secundarios",
      "Mejora progresiva de la calidad de la piel",
    ],
    items: [
      {
        title: "Radiofrecuencia Facial",
        description:
          "Estimula la producción de colágeno y elastina mediante calor controlado. Efecto tensor y reafirmante visible desde la primera sesión.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Mesoterapia Facial",
        description:
          "Microinyecciones con cóctail de vitaminas, ácido hialurónico y antioxidantes que hidratan, nutren y rejuvenecen la piel en profundidad.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Fototerapia LED",
        description:
          "Luz LED de diferentes longitudes de onda que estimula la regeneración celular, reduce la inflamación y mejora la textura cutánea.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Microdermoabrasión",
        description:
          "Exfoliación mecánica controlada que elimina las capas superficiales de la piel revelando una tez más suave, uniforme y luminosa.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Las terapias faciales son compatibles entre sí?",
        answer:
          "Sí, muchas de ellas se pueden combinar en un mismo protocolo para potenciar los resultados. Nuestra especialista diseñará el plan más adecuado para ti.",
      },
      {
        question: "¿Cuánto tiempo duran los resultados?",
        answer:
          "Depende del tratamiento y de los cuidados en casa. La radiofrecuencia tiene efectos acumulativos que pueden durar varios meses con sesiones de mantenimiento.",
      },
    ],
  },
  {
    slug: "peeling-quimico",
    name: "Peeling Químico",
    tagline: "Renueva tu piel, transforma tu confianza",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "El peeling químico es uno de los tratamientos más efectivos para renovar la piel, corregir manchas, reducir arrugas y mejorar la textura cutánea de forma controlada y segura.",
    benefits: [
      "Eliminación de manchas e hiperpigmentación",
      "Reducción de arrugas finas",
      "Mejora de la textura y luminosidad",
      "Tratamiento del acné y sus marcas",
      "Estimulación de la renovación celular",
    ],
    items: [
      {
        title: "Peeling Superficial",
        description:
          "Actúa en las capas más externas de la epidermis. Ideal para pieles apagadas, deshidratadas o con leve fotodaño. Sin tiempo de recuperación.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Peeling de Ácido Glicólico",
        description:
          "El alfaahidroxiácido más utilizado en estética. Estimula la renovación celular, mejora las manchas y aporta una luminosidad excepcional.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Peeling de Ácido Salicílico",
        description:
          "Especialmente indicado para pieles grasas y con acné. Regula la producción de sebo, desobstruye los poros y reduce las imperfecciones.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Peeling Mandélico",
        description:
          "Indicado para pieles sensibles y morenas. Acción despigmentante suave, antiaging y antibacteriana. Sin riesgo de hiperpigmentación post-tratamiento.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿El peeling duele?",
        answer:
          "Durante la aplicación puede sentirse un leve calor o picor que dura pocos minutos. Es perfectamente tolerable y controlado por nuestra especialista.",
      },
      {
        question: "¿Cuánto tiempo de recuperación necesito?",
        answer:
          "Los peelings superficiales no requieren recuperación. Los más intensos pueden producir descamación 2-5 días. Te daremos pautas detalladas de cuidado post-tratamiento.",
      },
      {
        question: "¿Cuándo no se puede hacer un peeling?",
        answer:
          "No se realiza con piel bronceada, durante el embarazo, con algunas medicaciones fotosensibilizantes ni en pieles con heridas activas.",
      },
    ],
  },
  {
    slug: "botox-full-face",
    name: "Botox Full Face en Turrialba",
    tagline: "Recupera la frescura de tu mirada con armonía total",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba", "Apariencia más fresca, descansada y natural sin perder tu esencia<br /><br />Tu rostro habla antes que tú.<br />Las líneas de expresión, el cansancio facial o la tensión acumulada pueden hacerte lucir agotada incluso cuando te sientes bien.",
    benefits: [
      "Reducción visible de arrugas de expresión",
      "Aspecto rejuvenecido y natural",
      "Sin cicatrices ni tiempo de recuperación",
      "Efecto preventivo frente a futuras arrugas",
      "Resultados inmediatos que mejoran en 15 días",
    ],
    items: [
      {
        title: "Frente y Entrecejo",
        description:
          "Suaviza las líneas horizontales de la frente y las arrugas del entrecejo (código de barras y número 11), manteniendo expresividad natural.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Patas de Gallo",
        description:
          "Tratamiento de las líneas de expresión en el contorno ocular que aportan un aspecto más joven y descansado.",
        duration: "20 min",
        price: "Consultar precio",
      },
      {
        title: "Lifting de Cejas",
        description:
          "Técnica de botox que eleva el arco de la ceja dando un efecto lifting no quirúrgico. Abre la mirada de forma sutil y armoniosa.",
        duration: "20 min",
        price: "Consultar precio",
      },
      {
        title: "Full Face Completo",
        description:
          "Protocolo integral que trata todas las zonas del tercio superior e inferior del rostro. Resultado global, armónico y completamente natural.",
        duration: "60 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Duele el procedimiento?",
        answer: "Generalmente las molestias son mínimas y rápidas.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer: "La duración puede variar según cada persona y hábitos individuales.",
      },
      {
        question: "¿Puedo volver a trabajar el mismo día?",
        answer: "Muchas personas retoman sus actividades normales rápidamente.",
      },
      {
        question: "¿Ayuda a prevenir líneas de expresión?",
        answer: "Sí, puede ayudar a disminuir la formación de marcas dinámicas.",
      },
      {
        question: "¿Se puede combinar con otros tratamientos?",
        answer: "Sí, según valoración profesional personalizada.",
      },
      {
        question: "¿Cuáles cuidados debo tener?",
        answer: "Evitar ciertas actividades durante las primeras horas y seguir recomendaciones posteriores.",
      },
    ],
  },
  {
    slug: "nutricion",
    name: "Nutrición",
    tagline: "Alimenta tu cuerpo, transforma tu vida",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Nuestro servicio de nutrición personalizada te acompaña en el camino hacia una alimentación equilibrada y saludable, adaptada a tus objetivos, estilo de vida y necesidades específicas.",
    benefits: [
      "Plan nutricional completamente personalizado",
      "Mejora del peso y composición corporal",
      "Mayor energía y vitalidad diaria",
      "Reducción de enfermedades metabólicas",
      "Hábitos alimentarios sostenibles a largo plazo",
    ],
    items: [
      {
        title: "Consulta Nutricional Inicial",
        description:
          "Evaluación completa de tu estado de salud, historial alimentario, objetivos y mediciones corporales para diseñar un plan totalmente personalizado.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Plan de Alimentación Personalizado",
        description:
          "Diseño de un menú semanal adaptado a tus gustos, necesidades calóricas y objetivos de salud o estética.",
        duration: "Plan escrito",
        price: "Consultar precio",
      },
      {
        title: "Seguimiento Nutricional",
        description:
          "Sesiones de seguimiento para ajustar el plan según tu evolución, resolver dudas y mantener la motivación.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Nutrición Deportiva",
        description:
          "Plan específico para personas activas o deportistas, enfocado en mejorar el rendimiento, la recuperación y la composición corporal.",
        duration: "60 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "Recomendamos una consulta inicial y al menos 2-3 sesiones de seguimiento durante el primer mes para establecer hábitos y ajustar el plan según tu evolución.",
      },
      {
        question: "¿El plan incluye recetas?",
        answer:
          "Sí, el plan nutricional incluye sugerencias de recetas sencillas y adaptadas a tus preferencias para facilitar la adherencia al nuevo estilo alimentario.",
      },
    ],
  },
  {
    slug: "trasplante-capilar",
    name: "Trasplante Capilar",
    fullTitle: "Recupera tu Confianza con un Trasplante Capilar de Apariencia Natural en Turrialba",
    tagline: "Recupera tu cabello, recupera tu confianza",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "El trasplante capilar es la solución definitiva para la alopecia y la pérdida de cabello. Utilizamos las técnicas más avanzadas para resultados naturales, permanentes y de alta densidad.",
    benefits: [
      "Resultado permanente y natural",
      "Técnicas mínimamente invasivas",
      "Sin cicatrices visibles",
      "Alta tasa de supervivencia del injerto",
      "Recuperación rápida y sencilla",
    ],
    items: [
      {
        title: "Técnica FUE (Follicular Unit Extraction)",
        description:
          "Extracción folicular unitaria que obtiene folículos de la zona donante sin incisiones. Sin cicatriz lineal, recuperación rápida y resultados muy naturales.",
        duration: "4-8 horas",
        price: "Consultar precio",
      },
      {
        title: "Trasplante de Barba",
        description:
          "Diseño y relleno de zonas sin cobertura en la barba o bigote, logrando una barba densa, uniforme y completamente natural.",
        duration: "3-5 horas",
        price: "Consultar precio",
      },
      {
        title: "Trasplante de Cejas",
        description:
          "Reconstrucción o densificación de las cejas con folículos del área donante, para una apariencia definida y duradera.",
        duration: "2-4 horas",
        price: "Consultar precio",
      },
      {
        title: "Consulta y Diagnóstico Capilar",
        description:
          "Evaluación del grado de alopecia, análisis del área donante y diseño personalizado de la línea de implantación según tus rasgos faciales.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuándo se ven los resultados definitivos?",
        answer:
          "Los injertos entran en un ciclo de reposo durante los primeros 2-3 meses. El crecimiento progresivo comienza alrededor del mes 4 y el resultado definitivo se aprecia entre los 12-18 meses.",
      },
      {
        question: "¿Es doloroso el trasplante capilar?",
        answer:
          "El procedimiento se realiza bajo anestesia local, por lo que no se siente dolor durante la intervención. Las molestias post-operatorias son leves y controlables con analgesia convencional.",
      },
      {
        question: "¿Cuánto tiempo de recuperación necesito?",
        answer:
          "Puedes retomar actividades cotidianas a los 2-3 días. Se recomienda evitar ejercicio intenso y exposición solar directa durante las primeras 2-4 semanas.",
      },
    ],
  },
  {
    slug: "hilos-tensores",
    name: "Hilos Tensores Turrialba",
    fullTitle: "Hilos Tensores Turrialba",
    tagline: "El lifting sin bisturí más efectivo del mercado",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Los hilos tensores son la alternativa no quirúrgica al lifting facial. Devuelven la firmeza y tensión perdida de forma inmediata, estimulando la producción natural de colágeno.",
    benefits: [
      "Efecto lifting inmediato y progresivo",
      "Estimulación de colágeno natural",
      "Sin cirugía ni cicatrices",
      "Resultados que mejoran con el tiempo",
      "Recuperación mínima, rutina normal al día siguiente",
    ],
    items: [
      {
        title: "Hilos Reabsorbibles Faciales",
        description:
          "Utilizamos hilos de PDO o PLLA que se reabsorben solos dejando un andamiaje de colágeno nuevo. Tratan mejillas, mandíbula y cuello.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Tensor de Cejas",
        description:
          "Eleva y define las cejas caídas de forma no invasiva, abriendo la mirada y suavizando el aspecto cansado.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Tensor de Cuello",
        description:
          "Reafirma y tensa la piel del cuello y el mentón, mejorando la definición de la línea mandibular.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Facial Completo",
        description:
          "Tratamiento integral con hilos tensores que aborda todo el tercio medio e inferior del rostro para un rejuvenecimiento global y natural.",
        duration: "90 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuánto duran los hilos tensores?",
        answer:
          "Los hilos se reabsorben entre 6 y 18 meses dependiendo del tipo, pero el colágeno estimulado permanece mucho más tiempo, manteniendo el efecto tensor.",
      },
      {
        question: "¿El tratamiento es doloroso?",
        answer:
          "Se aplica anestesia local tópica o infiltrada antes del procedimiento. Las molestias post-tratamiento son mínimas y controlables con analgesia convencional.",
      },
      {
        question: "¿Quién es buen candidato para los hilos tensores?",
        answer:
          "Personas entre 35 y 65 años con flacidez leve-moderada que quieren un resultado notable sin recurrir a la cirugía.",
      },
    ],
  },

  // ── CORPORALES NUEVOS ──────────────────────────────
  {
    slug: "tensado-corporal",
    name: "Tensado Corporal en Turrialba",
    tagline: "Reafirma y esculpe tu silueta sin cirugía",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Firmeza, bienestar y remodelación corporal progresiva en un solo protocolo",
    benefits: [
      "Reafirmación visible de la piel desde las primeras sesiones",
      "Estimula la producción de colágeno y elastina",
      "Sin cirugía, sin anestesia, sin recuperación",
      "Resultados naturales y progresivos",
      "Efectivo en abdomen, muslos, brazos y glúteos",
    ],
    items: [
      {
        title: "Tensado Abdominal",
        description:
          "Protocolo específico para reafirmar la piel del abdomen y reducir la flacidez postparto o por pérdida de peso, con tecnología de radiofrecuencia multipolar.",
        duration: "50 min",
        price: "Consultar precio",
      },
      {
        title: "Tensado de Muslos y Glúteos",
        description:
          "Tratamiento enfocado en las zonas de mayor pérdida de firmeza, devolviendo elasticidad y definición a los glúteos y la cara interna y externa de los muslos.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Tensado de Brazos",
        description:
          "Protocolo para la zona del tríceps y la cara interna del brazo, ideal para recuperar firmeza y combatir la piel colgante sin cirugía.",
        duration: "40 min",
        price: "Consultar precio",
      },
      {
        title: "Tensado Corporal Integral",
        description:
          "Sesión combinada que trabaja varias zonas en un mismo tratamiento, diseñando un protocolo integral adaptado a las necesidades de cada clienta.",
        duration: "80 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "Para resultados óptimos recomendamos entre 6 y 10 sesiones, con frecuencia semanal o bisemanal. En la valoración gratuita te indicamos el número exacto según tu caso.",
      },
      {
        question: "¿Es doloroso el tratamiento?",
        answer:
          "No. La sensación es de calor agradable en la zona tratada. Es un procedimiento completamente cómodo y relajante que no requiere ningún tiempo de recuperación.",
      },
      {
        question: "¿Cuándo se notan los resultados?",
        answer:
          "Muchas clientas notan mayor firmeza desde las primeras sesiones. Los resultados más significativos se aprecian a partir de la 4ª–6ª sesión y continúan mejorando semanas después del tratamiento.",
      },
    ],
  },
  // ── FACIALES NUEVOS ────────────────────────────────
  {
    slug: "hollywood-peel",
    name: "Hollywood Peel",
    fullTitle: "HOLLYWOOD PEEL EN TURRIALBA",
    tagline: "Piel luminosa, uniforme y rejuvenecida en una sola sesión",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "El Hollywood Peel, también conocido como Carbon Laser Peel, es un tratamiento láser no invasivo que revitaliza la piel, unifica el tono, reduce manchas y estimula la producción de colágeno para un aspecto más joven y radiante.",
    benefits: [
      "Unificación del tono de la piel desde la primera sesión",
      "Reducción de manchas, líneas finas y cicatrices de acné",
      "Estimulación del colágeno para una piel más joven",
      "Sin tiempo de recuperación ni efectos secundarios",
      "Apto para todos los tipos de piel",
    ],
    items: [
      {
        title: "Hollywood Peel Facial",
        description:
          "Aplicación de carbono líquido sobre el rostro y posterior tratamiento con láser para exfoliar, unificar el tono y estimular la renovación celular.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Hollywood Peel Cuello y Escote",
        description:
          "Extensión del tratamiento al cuello y escote para tratar manchas solares, envejecimiento y mejorar la textura en estas zonas.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Hollywood Peel + Radiofrecuencia",
        description:
          "Protocolo combinado para máximos resultados: exfoliación y rejuvenecimiento láser más radiofrecuencia para efecto tensor profundo.",
        duration: "75 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Duele el Hollywood Peel?",
        answer:
          "No, el tratamiento es prácticamente indoloro. Puede notarse una ligera sensación de calor durante la aplicación del láser.",
      },
      {
        question: "¿Con qué frecuencia se puede realizar?",
        answer:
          "Se recomienda una sesión mensual para mantenimiento. Para resultados más intensivos, se puede hacer cada 2–3 semanas.",
      },
    ],
  },
  {
    slug: "eliminacion-manchas",
    name: "Eliminación de Manchas",
    tagline: "Recupera un tono de piel uniforme y luminoso",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Las manchas en la piel (melasma, manchas solares, hiperpigmentación) son tratadas con métodos de última generación que eliminan la pigmentación de forma segura y efectiva, devolviendo la uniformidad y luminosidad natural de tu piel.",
    benefits: [
      "Eliminación definitiva de manchas solares y melasma",
      "Unificación del tono cutáneo",
      "Piel más luminosa y uniforme",
      "Tratamientos seguros y eficaces",
      "Sin cicatrices ni efectos secundarios severos",
    ],
    items: [
      {
        title: "Tratamiento con Luz Pulsada (IPL)",
        description:
          "La luz pulsada intensa destruye selectivamente las células pigmentadas sin dañar los tejidos circundantes. Ideal para manchas solares y rojeces.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Peeling Despigmentante",
        description:
          "Combinación de ácidos específicos que actúan sobre la melanina para aclarar manchas y unificar progresivamente el tono de la piel.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Mesoterapia Despigmentante",
        description:
          "Microinfiltración de activos despigmentantes directamente en la zona afectada para resultados más rápidos y precisos.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Antimelasma Completo",
        description:
          "Programa personalizado de varias sesiones que combina tratamientos en cabina con protocolo domiciliario para combatir el melasma de forma integral.",
        duration: "Según protocolo",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones son necesarias?",
        answer:
          "Depende del tipo y profundidad de la mancha. Las manchas superficiales pueden aclararse en 3–5 sesiones; el melasma requiere un tratamiento más prolongado y constante.",
      },
      {
        question: "¿Debo usar protector solar?",
        answer:
          "Sí, es imprescindible. El uso de SPF 50+ a diario es parte fundamental del tratamiento y garantiza que no aparezcan nuevas manchas ni reaparezcan las tratadas.",
      },
    ],
  },
  {
    slug: "radiofrecuencia-facial",
    name: "Radiofrecuencia Facial",
    tagline: "Reafirmación y rejuvenecimiento sin cirugía",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "La radiofrecuencia facial es un tratamiento no invasivo que utiliza energía electromagnética para calentar las capas profundas de la piel, estimulando la producción de colágeno y elastina para un efecto tensor, reafirmante y rejuvenecedor visible.",
    benefits: [
      "Reafirmación y efecto lifting visible",
      "Estimulación natural del colágeno y elastina",
      "Reducción de arrugas y líneas de expresión",
      "Sin cirugía, sin agujas, sin recuperación",
      "Resultados que mejoran progresivamente",
    ],
    items: [
      {
        title: "Radiofrecuencia Facial Completa",
        description:
          "Tratamiento de todo el rostro para mejorar la firmeza, reducir la flacidez y atenuar arrugas de forma global.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Radiofrecuencia de Contorno",
        description:
          "Tratamiento focalizado en el óvalo facial, papada y cuello para definir y tensar la línea mandibular.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Radiofrecuencia Ocular",
        description:
          "Tratamiento específico para el contorno de ojos: suaviza las patas de gallo, reduce bolsas y ojeras y levanta el párpado caído.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Radiofrecuencia + Mesoterapia",
        description:
          "Protocolo combinado de máxima eficacia: la radiofrecuencia abre canales en la piel que potencian la absorción de activos de la mesoterapia.",
        duration: "75 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuándo se notan los resultados?",
        answer:
          "Se aprecia una mejoría inmediata tras la primera sesión. Los mejores resultados se obtienen a partir de la 4ª–6ª sesión y siguen mejorando semanas después.",
      },
      {
        question: "¿Es dolorosa?",
        answer:
          "No. La sensación es de calor agradable y confortable. Es un tratamiento muy relajante que muchas clientas comparan con un masaje cálido.",
      },
    ],
  },

  {
    slug: "hilos-colageno",
    name: "Hilos de Colágeno",
    fullTitle: "Hilos de Colágeno en Turrialba",
    tagline: "Rejuvenecimiento Facial Natural, Firmeza y Glow Premium",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Diseñamos protocolos personalizados con Hilos de Colágeno orientados a rejuvenecimiento progresivo, firmeza facial y armonización estética natural en Turrialba.",
    benefits: [
      "Apariencia de firmeza facial",
      "Rejuvenecimiento progresivo",
      "Glow y luminosidad natural",
      "Definición facial elegante",
      "Armonización estética natural",
      "Bienestar facial premium",
      "Apariencia más descansada y fresca",
      "Protocolos antiaging personalizados",
    ],
    items: [
      {
        title: "Protocolo Hilos de Colágeno",
        description: "Sesión personalizada de hilos de colágeno para firmeza y rejuvenecimiento facial.",
        duration: "45-60 min",
        price: "Consultar precio",
      }
    ],
    faq: [
      {
        question: "¿Qué son los Hilos de Colágeno?",
        answer: "Son procedimientos estéticos orientados a protocolos de firmeza y rejuvenecimiento facial progresivo."
      }
    ]
  },
  {
    slug: "adn-salmon",
    name: "ADN de Salmón",
    tagline: "Regeneración celular profunda para una piel radiante",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba", "✨ EL SECRETO COREANO QUE ESTÁ REVOLUCIONANDO EL REJUVENECIMIENTO FACIAL YA LLEGÓ A TURRIALBA ✨<br /><br />¿Te imaginas despertar con una piel más luminosa, hidratada y rejuvenecida… sin cirugías ni cambios artificiales?<br /><br />Eso es exactamente lo que muchas personas están logrando gracias al tratamiento de ADN de Salmón, una de las terapias más innovadoras en medicina estética avanzada.<br /><br />Y ahora puedes vivirlo en MJ Estética Wellness Center.<br /><br />👇",
    benefits: [
      "Rejuvenece la piel de forma natural",
      "Mejora líneas finas y signos tempranos de envejecimiento",
      "Estimula colágeno y elasticidad",
      "Aporta hidratación profunda",
      "Mejora textura y luminosidad",
      "Ayuda a revitalizar piel cansada o estresada",
      "Efecto “glow” saludable y elegante"
    ],
    items: [
      {
        title: "ADN de Salmón Facial",
        description:
          "Microinyecciones de PDRN en todo el rostro para estimular la producción de colágeno, mejorar la hidratación y recuperar el aspecto joven y luminoso de la piel. Indicado para pieles apagadas, con falta de firmeza o deshidratadas.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "ADN de Salmón Ocular",
        description:
          "Protocolo específico para el contorno de ojos: reduce ojeras, bolsas, patas de gallo y la apariencia de cansancio. Una de las zonas que más se beneficia de la regeneración con PDRN.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "ADN de Salmón + Mesoterapia",
        description:
          "Combinación de PDRN con cóctel de vitaminas y ácido hialurónico no reticulado para una regeneración máxima. Resultados más visibles y duraderos desde la primera sesión.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "ADN de Salmón Capilar",
        description:
          "Aplicación en cuero cabelludo para estimular los folículos pilosos, frenar la caída del cabello y mejorar la densidad y calidad capilar. Ideal como complemento a tratamientos de alopecia.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Es doloroso el tratamiento?",
        answer:
          "Se utilizan agujas muy finas y podemos aplicar crema anestésica tópica previamente. La molestia es mínima — la mayoría de las pacientes lo describen como pequeños pellizcos rápidos que se toleran sin problema.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "Para resultados óptimos recomendamos entre 3 y 4 sesiones, con una separación de 2 a 3 semanas entre cada una. Posteriormente, una sesión de mantenimiento cada 3–6 meses es suficiente.",
      },
      {
        question: "¿Cuándo se notan los resultados?",
        answer:
          "Desde la primera sesión se aprecia mayor luminosidad e hidratación. Los cambios más significativos en textura, firmeza y arrugas finas se observan a partir de la 2ª–3ª sesión.",
      },
      {
        question: "¿En qué se diferencia del ácido hialurónico?",
        answer:
          "El ácido hialurónico rellena y volumiza. El ADN de Salmón actúa a nivel celular regenerando los tejidos y estimulando tu propio colágeno. Son tratamientos complementarios que con frecuencia se combinan para resultados superiores.",
      },
    ],
  },

  // ── PIERNAS ────────────────────────────────────────
  {
    slug: "piernas-cansadas",
    name: "Cuidado de Piernas Cansadas",
    tagline: "Piernas ligeras, activas y sin pesadez",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "La sensación de pesadez, hinchazón y cansancio en las piernas es muy frecuente y puede mejorar significativamente con tratamientos especializados que activan la circulación y el drenaje linfático.",
    benefits: [
      "Alivio inmediato de la pesadez y el dolor",
      "Reducción de la hinchazón en piernas y tobillos",
      "Mejora de la circulación venosa y linfática",
      "Tratamientos relajantes y no invasivos",
      "Prevención de retención de líquidos",
    ],
    items: [
      {
        title: "Masaje Circulatorio de Piernas",
        description:
          "Masaje específico que activa la circulación venosa de retorno y favorece el drenaje de toxinas acumuladas en las piernas.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Presoterapia de Piernas",
        description:
          "Botas de presión neumática que comprimen y descomprimen las piernas de forma progresiva para estimular el drenaje linfático y venoso.",
        duration: "40 min",
        price: "Consultar precio",
      },
      {
        title: "Electro-estimulación Circulatoria",
        description:
          "Corrientes de baja frecuencia que activan los músculos de la pantorrilla, mejorando el retorno venoso y reduciendo la sensación de pesadez.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Completo Piernas Cansadas",
        description:
          "Sesión combinada de presoterapia, masaje circulatorio y aplicación de activos vasotónicos para un resultado global y duradero.",
        duration: "90 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Con qué frecuencia debo hacer el tratamiento?",
        answer:
          "Para mantenimiento, una sesión semanal o quincenal. En épocas de mayor estrés circulatorio (verano, trabajo de pie) se puede intensificar la frecuencia.",
      },
    ],
  },

  // ── MÉDICOS ESTÉTICOS NUEVOS ───────────────────────
  {
    slug: "acido-hialuronico",
    name: "Ácido Hialurónico",
    tagline: "Volumen, hidratación y relleno natural",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "El ácido hialurónico es un componente natural de la piel que se reduce con la edad. Su aplicación mediante infiltración restituye el volumen perdido, rellena arrugas profundas y mejora la hidratación cutánea de forma natural y duradera.",
    benefits: [
      "Resultados inmediatos y de aspecto completamente natural",
      "Relleno de arrugas y recuperación de volúmenes faciales",
      "Sin cirugía; procedimiento mínimamente invasivo",
      "Producto biodegradable y reabsorbible",
      "Efecto hidratante profundo desde dentro",
    ],
    items: [
      {
        title: "Relleno de Surcos Nasogenianos",
        description:
          "Suavizado de los pliegues entre nariz y comisuras labiales (arrugas de amargura) para un aspecto más descansado y joven.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Relleno de Ojeras",
        description:
          "Corrección del surco lagrimal y la ojera hundida para eliminar el aspecto de cansancio y oscurecer la zona periocular.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Hidratación Profunda con Bioestimuladores",
        description:
          "Ácido hialurónico de baja densidad infiltrado en múltiples puntos para mejorar la hidratación, luminosidad y calidad de la piel.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Remodelación del Óvalo Facial",
        description:
          "Aumento y definición de pómulos, mentón y mandíbula mediante rellenos estratégicos para un efecto lifting no quirúrgico.",
        duration: "60 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuánto dura el ácido hialurónico?",
        answer:
          "Depende de la zona y el producto utilizado. Por norma general dura entre 9 y 18 meses en zonas estáticas como los pómulos, y algo menos en zonas con mayor movimiento como los labios.",
      },
      {
        question: "¿El resultado es natural?",
        answer:
          "Sí, cuando es aplicado por un profesional capacitado. El objetivo es realzar los rasgos propios sin alterar la expresión natural.",
      },
    ],
  },
  {
    slug: "biorevitalizacion",
    name: "Biorevitalización",
    tagline: "Revitaliza tu piel desde dentro",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "La biorevitalización es un tratamiento médico estético que consiste en la infiltración de vitaminas, aminoácidos, oligoelementos y ácido hialurónico no reticulado directamente en la dermis para restaurar la vitalidad, elasticidad y luminosidad de la piel.",
    benefits: [
      "Mejora visible de la calidad y textura de la piel",
      "Aumento de la luminosidad y el tono cutáneo",
      "Hidratación profunda y duradera",
      "Estimulación natural del colágeno",
      "Apto para cara, cuello, escote y manos",
    ],
    items: [
      {
        title: "Biorevitalización Facial",
        description:
          "Infiltración de cocktail vitamínico y ácido hialurónico no reticulado en cara y cuello para restaurar la luminosidad y vitalidad de la piel.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Biorevitalización de Cuello y Escote",
        description:
          "Tratamiento específico para rejuvenecer y mejorar la calidad de la piel del cuello y el escote, zonas que suelen envejecer antes.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Biorevitalización de Manos",
        description:
          "Las manos son una de las zonas que más delatan la edad. Este tratamiento restaura la hidratación, el volumen y la textura de la piel de las manos.",
        duration: "30 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones son necesarias?",
        answer:
          "Para resultados óptimos se recomiendan 3–4 sesiones con 2–3 semanas de separación, seguidas de sesiones de mantenimiento cada 3–6 meses.",
      },
      {
        question: "¿Hay tiempo de recuperación?",
        answer:
          "Pueden aparecer pequeñas ronchas o enrojecimiento en los puntos de infiltración que desaparecen en pocas horas. No impide realizar las actividades habituales.",
      },
    ],
  },

  // ── CARBOXITERAPIA ─────────────────────────────────
  {
    slug: "carboxiterapia",
    name: "Carboxiterapia",
    tagline: "La potencia del CO₂ para renovar y rejuvenecer tu cuerpo",
    heroBg: "carboxiterapia-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Descubre una piel con apariencia más uniforme y un bienestar corporal más integral <br /> La carboxiterapia es uno de los tratamientos wellness y médico-estéticos más buscados por personas que desean complementar sus objetivos corporales y faciales con protocolos personalizados, naturales y progresivos.",
    benefits: [
      "Elimina la celulitis y la grasa localizada de forma eficaz",
      "Estimula la producción natural de colágeno y elastina",
      "Mejora la circulación y oxigenación del tejido",
      "Reafirma y tensa la piel de forma duradera",
      "Tratamiento corporal y facial: cara, cuello, abdomen, muslos",
      "Sin anestesia general ni tiempo de inactividad",
    ],
    items: [
      {
        title: "Carboxiterapia Corporal",
        description:
          "Aplicación de CO₂ en zonas corporales (abdomen, flancos, muslos, glúteos) para reducir la celulitis, afinar la silueta y mejorar la textura de la piel. Protocolo intensivo con resultados progresivos y acumulativos.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Carboxiterapia Facial y de Cuello",
        description:
          "Inyecciones superficiales de CO₂ en rostro, cuello y escote para estimular la renovación celular, mejorar el tono y reducir ojeras y surcos. Efecto lifting inmediato y mejora progresiva de la calidad de la piel.",
        duration: "35 min",
        price: "Consultar precio",
      },
      {
        title: "Carboxiterapia para Estrias",
        description:
          "Protocolo específico con microinyecciones de CO₂ en la zona de estrías para estimular la síntesis de colágeno, mejorar la vascularización y reducir la visibilidad de estrías tanto blancas como rojas.",
        duration: "40 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Duele la carboxiterapia?",
        answer:
          "Las microinyecciones producen una ligera sensación de presión o calor que desaparece en segundos. La mayoría de las clientas lo describen como completamente tolerable. No se requiere anestesia.",
      },
      {
        question: "¿Cuántas sesiones son necesarias?",
        answer:
          "Para resultados óptimos recomendamos entre 8 y 12 sesiones (2 por semana). Los cambios en circulación y textura de piel se notan desde las primeras 3-4 sesiones. Posteriormente se realizan sesiones de mantenimiento mensuales.",
      },
      {
        question: "¿Tiene contraindicaciones?",
        answer:
          "No es apta para personas con enfermedades cardiovasculares graves, embarazo o epilepsia. En la valoración inicial revisamos tu historial para garantizar que el tratamiento sea seguro y adecuado para ti.",
      },
    ],
  },

  // ── LEVANTAMIENTO DE GLÚTEO ─────────────────────────
  {
    slug: "levantamiento-gluteo",
    name: "Levantamiento de Glúteo en Turrialba",
    tagline: "Glúteos firmes y elevados sin cirugía ni implantes",
    heroBg: "levantamiento-gluteo-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Mejora la apariencia, firmeza y proyección de tus glúteos con un enfoque natural, armónico y personalizado",
    benefits: [
      "Apariencia más firme y tonificada",
      "Mejor proyección visual de los glúteos",
      "Contorno corporal más armónico",
      "Complemento ideal para ejercicio y wellness corporal",
      "Resultados progresivos y naturales",
      "Sensación de mayor seguridad y confianza corporal",
      "Protocolos personalizados según objetivos",
      "Mejor armonización estética corporal"
    ],
    items: [
      {
        title: "Radiofrecuencia Glútea Focalizada",
        description:
          "Calor controlado en profundidad que estimula la síntesis de colágeno y reafirma el tejido cutáneo, consiguiendo un efecto lifting visible y una piel más tersa sobre los glúteos.",
        duration: "50 min",
        price: "Consultar precio",
      },
      {
        title: "Electroestimulación Muscular Glútea",
        description:
          "Corrientes de alta frecuencia que generan contracciones musculares intensas equivalentes a cientos de abdominales. Tonifica, define y da volumen de forma segura y progresiva.",
        duration: "40 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Completo Lifting Glúteo",
        description:
          "Combinación de radiofrecuencia + electroestimulación + carboxiterapia en una sola sesión para maximizar el efecto lifting, la firmeza y el volumen. El protocolo estrella de nuestro servicio.",
        duration: "75 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿El levantamiento de glúteo es invasivo?",
        answer: "Depende del protocolo recomendado. Durante la valoración corporal explicamos todas las opciones disponibles y cuál se adapta mejor a tus objetivos."
      },
      {
        question: "¿Cuándo se ven resultados?",
        answer: "Muchas pacientes comienzan a notar cambios progresivos conforme avanzan las sesiones y se complementan hábitos saludables."
      },
      {
        question: "¿Los resultados son naturales?",
        answer: "Sí. Nuestro enfoque prioriza armonización corporal y apariencia estética natural."
      },
      {
        question: "¿Se puede combinar con ejercicio?",
        answer: "Sí. De hecho, muchas pacientes utilizan el tratamiento como complemento wellness corporal."
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer: "Cada cuerpo es diferente. La cantidad ideal se define durante la evaluación personalizada."
      },
      {
        question: "¿Tiene tiempo de recuperación?",
        answer: "Muchos protocolos permiten retomar actividades habituales rápidamente."
      },
      {
        question: "¿Ayuda con firmeza?",
        answer: "Uno de los principales objetivos es contribuir a mejorar la apariencia de firmeza y proyección corporal."
      },
      {
        question: "¿Qué cuidados debo tener?",
        answer: "Te brindaremos recomendaciones específicas según el protocolo aplicado y tus objetivos corporales."
      }
    ],
  },

  // ── LEVANTAMIENTO DE BUSTO ──────────────────────────
  {
    slug: "levantamiento-busto",
    name: "Levantamiento de Busto en Turrialba",
    tagline: "Busto firme, elevado y reafirmado sin cirugía",
    heroBg: "levantamiento-busto-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba", "Recupera armonía, firmeza y confianza con un enfoque wellness femenino.",
    benefits: [
      "Lifting y reafirmación visibles sin cirugía ni implantes",
      "Mejora la elasticidad y calidad de la piel del escote",
      "Protocolo adaptado al grado de flacidez y objetivo de cada clienta",
      "Completamente indoloro y sin tiempo de recuperación",
      "También mejora la apariencia del escote y la piel de la zona pectoral",
      "Apto tras lactancia y pérdida de peso",
    ],
    items: [
      {
        title: "Radiofrecuencia Reafirmante de Busto",
        description:
          "Calor profundo con radiofrecuencia que estimula el colágeno y reafirma el tejido conjuntivo del busto y el escote, logrando un efecto lifting progresivo y natural.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Ultrasonidos Focalizados",
        description:
          "Tecnología de ultrasonidos que actúa en las capas profundas de la piel para tensar el tejido de soporte del busto, corrigiendo la caída y mejorando el contorno.",
        duration: "40 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Reafirmación Completa Busto y Escote",
        description:
          "Sesión combinada de radiofrecuencia + ultrasonidos + masaje reafirmante para tratamiento integral del busto, escote y zona pectoral. Máximo resultado en una sola sesión.",
        duration: "70 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Funciona si tengo mucha flacidez?",
        answer:
          "El tratamiento es eficaz en diferentes grados de flacidez. En casos avanzados, adaptamos el protocolo con más sesiones y combinación de técnicas para obtener el mejor resultado posible sin cirugía.",
      },
      {
        question: "¿Es seguro tras la lactancia?",
        answer:
          "Sí, está especialmente indicado para recuperar la firmeza después de la lactancia. Recomendamos esperar al menos 3 meses tras el fin de la lactancia antes de comenzar.",
      },
      {
        question: "¿Cuántas sesiones necesito?",
        answer:
          "Para resultados visibles y duraderos recomendamos entre 8 y 10 sesiones, 2 por semana. El mantenimiento mensual ayuda a sostener los resultados a largo plazo.",
      },
    ],
  },

  // ── VENDAS FRÍAS ────────────────────────────────────
  {
    slug: "vendas-frias",
    name: "Vendas Frías",
    fullTitle: "Vendas Frías en Turrialba",
    tagline: "Pérdida de centímetros y detox corporal en una sola sesión",
    heroBg: "vendas-frias-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Sensación de frescura, relajación y bienestar corporal en una experiencia wellness premium",
    benefits: [
      "Pérdida de centímetros medible desde la primera sesión",
      "Reduce la retención de líquidos y la inflamación",
      "Activa la circulación y el drenaje linfático",
      "Mejora la textura y firmeza de la piel",
      "Efecto detox que elimina toxinas acumuladas",
      "Ideal para preparar el cuerpo para eventos especiales",
    ],
    items: [
      {
        title: "Vendas Frías Reductoras",
        description:
          "Aplicación de vendas impregnadas con activos reductores y drenantes en abdomen, cintura, flancos y muslos. La compresión progresiva y los principios activos actúan en sinergia para afinar la silueta.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Vendas Frías Anticelulíticas",
        description:
          "Fórmula específica con activos anticelulíticos (cafeína, centella asiática, L-carnitina) que mejoran el aspecto de piel de naranja y la microcirculación. Indicadas para muslos y glúteos.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Vendas Frías Detox Full Body",
        description:
          "Tratamiento corporal completo con vendas en todo el cuerpo para una sesión de detox intensiva. Elimina toxinas, activa el metabolismo y deja la piel suave y luminosa.",
        duration: "75 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántos centímetros se pierden en una sesión?",
        answer:
          "Los resultados varían según cada persona, pero es habitual perder entre 2 y 6 centímetros medibles en la primera sesión. Con el ciclo completo, la reducción acumulada es significativa y duradera.",
      },
      {
        question: "¿Es un tratamiento adecuado antes de un evento?",
        answer:
          "Sí, es uno de los más solicitados para preparar el cuerpo antes de bodas, eventos sociales o épocas de playa. Los resultados son visibles el mismo día del tratamiento.",
      },
      {
        question: "¿Hay que seguir alguna dieta o restricción?",
        answer:
          "Recomendamos hidratación abundante antes y después de la sesión para potenciar el efecto drenante. No es necesario seguir una dieta especial, aunque combinar el tratamiento con hábitos saludables mejora los resultados.",
      },
    ],
  },

  // ── MADEROTERAPIA ──────────────────────────────────
  {

  // ── AURICULOTERAPIA ─────────────────────────────────
    slug: "auriculoterapia",
    name: "Auriculoterapia",
    fullTitle: "Auriculoterapia en Turrialba para Ansiedad, Estrés y Control de Peso",
    tagline: "El equilibrio del cuerpo a través del oído",
    heroBg: "auriculoterapia-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "La auriculoterapia es una técnica de medicina tradicional china que trabaja sobre los puntos de energía del pabellón auricular para equilibrar el organismo, reducir la ansiedad, controlar el apetito, aliviar el dolor y potenciar el bienestar general. Una herramienta complementaria poderosa para el control de peso, el estrés y la salud integral.",
    benefits: [
      "Reduce la ansiedad y el apetito emocional de forma natural",
      "Apoya el control de peso y los hábitos alimenticios",
      "Alivia el estrés crónico y mejora la calidad del sueño",
      "Técnica indolora y completamente no invasiva",
      "Equilibra el sistema nervioso y endocrino",
      "Compatible con cualquier otro tratamiento estético o médico",
    ],
    items: [
      {
        title: "Auriculoterapia para Control de Peso",
        description:
          "Estimulación de los puntos auriculares relacionados con el metabolismo, el apetito y la ansiedad alimentaria. Especialmente indicada como complemento a programas de alimentación y tratamientos reductores.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Auriculoterapia Antiestres y Bienestar",
        description:
          "Protocolo de equilibrio emocional y del sistema nervioso para reducir el estrés crónico, la ansiedad y el insomnio. Produce una sensación de calma profunda y bienestar que se mantiene días después.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Auriculoterapia para Control del Dolor",
        description:
          "Estimulación de los puntos auriculares analgésicos para el manejo de dolores musculares, articulares o cefaleas tensionales. Un enfoque complementario natural al tratamiento del dolor crónico.",
        duration: "30 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Es dolorosa la auriculoterapia?",
        answer:
          "No. Se utilizan semillas de mostaza o pequeñas agujas muy superficiales que producen una leve presión. La mayoría de las clientas lo viven como un tratamiento relajante y agradable.",
      },
      {
        question: "¿En cuántas sesiones se notan los efectos?",
        answer:
          "Muchas clientas sienten cambios desde la primera sesión: menor ansiedad, mejor calidad de sueño o reducción del apetito. Para resultados consolidados recomendamos un ciclo de 6 a 10 sesiones semanales.",
      },
      {
        question: "¿Puedo hacerla junto con otros tratamientos?",
        answer:
          "Sí, es perfectamente compatible y de hecho se potencia con tratamientos como el drenaje linfático, la nutrición o cualquier programa de reducción de medidas. Es un excelente complemento holístico.",
      },
    ],
  },

  // ── TRATAMIENTO ANTICELULITIS ──────────────────────
  {
    slug: "tratamiento-anticelulitis",
    name: "Tratamiento Anticelulitis",
    fullTitle: "Tratamientos Anticelulitis en Turrialba",
    tagline: "Elimina la celulitis de forma definitiva y sin cirugía",
    heroBg: "anticelulitis-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Una experiencia diseñada para que vuelvas a sentirte bien con tu cuerpo",
    benefits: [
      "Reducción visible de la celulitis desde la primera sesión",
      "Tecnología de radiofrecuencia + drenaje para resultados duraderos",
      "Protocolo personalizado según tu tipo y grado de celulitis",
      "Sin cirugía, sin anestesia, sin tiempo de recuperación",
      "Mejora la circulación y elimina toxinas acumuladas",
      "Piel más firme, lisa y uniforme en pocas semanas",
    ],
    items: [
      {
        title: "Drenaje Linfático Anticelulítico",
        description:
          "Técnica manual especializada que activa el sistema linfático, elimina la retención de líquidos y reduce el aspecto de piel de naranja desde las primeras sesiones. Ideal como tratamiento de base para preparar el tejido.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Radiofrecuencia Corporal Focalizada",
        description:
          "Aplicamos calor controlado en profundidad para romper los nódulos de grasa, estimular la producción de colágeno y reafirmar la piel de muslos, glúteos y abdomen. Resultado: piel más tersa y visible reducción de medidas.",
        duration: "50 min",
        price: "Consultar precio",
      },
      {
        title: "Vendas Frías Anticelulíticas",
        description:
          "Vendas impregnadas con activos reductores, drenantes y reafirmantes en frío que potencian la pérdida de centímetros y mejoran la textura de la piel en una sola sesión. Efecto inmediato y acumulativo.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Presoterapia + Ultrasonidos",
        description:
          "Combinación de presoterapia para drenar y desinflamar, junto con ultrasonidos focalizados que destruyen las células de grasa localizadas. Protocolo de alta eficacia para casos de celulitis resistente.",
        duration: "55 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿En cuántas sesiones veré resultados reales?",
        answer:
          "La mayoría de nuestras clientas notan una mejora visible en textura y firmeza desde la primera sesión. Para resultados duraderos y profundos, recomendamos un ciclo de 8 a 12 sesiones, 2 veces por semana. Al finalizar el ciclo, la reducción de la celulitis es significativa y medible.",
      },
      {
        question: "¿Funciona para todos los tipos y grados de celulitis?",
        answer:
          "Sí. Nuestros protocolos están adaptados a los 4 grados de celulitis. Realizamos una valoración inicial gratuita donde evaluamos tu caso y diseñamos el plan de tratamiento más efectivo para ti, combinando las técnicas adecuadas según tu tipo de piel y zona a tratar.",
      },
      {
        question: "¿Necesito dieta o ejercicio para que funcione?",
        answer:
          "No es un requisito, pero sí potencia los resultados. Los tratamientos son efectivos por sí solos, y combinados con hidratación adecuada y algo de actividad física los resultados se multiplican y duran más tiempo.",
      },
      {
        question: "¿Es doloroso? ¿Hay tiempo de recuperación?",
        answer:
          "Los tratamientos son indoloros o producen una sensación de calor agradable en el caso de la radiofrecuencia. No hay tiempo de recuperación — puedes retomar tus actividades normales inmediatamente después de cada sesión.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "Con mantenimiento mensual los resultados se sostienen en el tiempo. Te recomendamos sesiones de mantenimiento cada 3-4 semanas una vez completado el ciclo inicial, especialmente si combinas el tratamiento con hábitos saludables.",
      },
    ],
  },

  // ── IRON BEAUTY FITNESS ────────────────────────────
  {
    slug: "iron-beauty-fitness",
    name: "ESTÉTICA PARA FISICOCULTURISTAS Y ATLETAS EN TURRIALBA",
    tagline: "Estética especializada para atletas del mundo fitness",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Recuperación, definición corporal y wellness deportivo en un solo protocolo especializado<br /><br />Tu cuerpo entrena fuerte.<br />Tu recuperación también debería hacerlo.",
    heroBg: "iron-beauty-fitness-bg.webp",
    benefits: [
      "Protocolos diseñados exclusivamente para atletas de competencia",
      "Resultados visibles en la definición muscular y textura de piel",
      "Tratamientos que complementan tu entrenamiento y dieta",
      "Atención personalizada según tu categoría de competencia",
      "Técnicas que aceleran la recuperación muscular post-entrenamiento",
      "Sin tiempo de recuperación — sigue entrenando al día siguiente",
    ],
    items: [
      {
        title: "Vendas Frías en Turrialba",
        description:
          "Aplicación de vendas con activos reductores, drenantes y tentativos en frío que potencian la pérdida de medidas, reducen la retención de líquidos y marcan la musculatura. Ideal en la fase de definición previa a competencia.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Silicio Orgánico",
        description:
          "Tratamiento de aplicación corporal con silicio orgánico que mejora la calidad y elasticidad de la piel, favorece la síntesis de colágeno y da ese acabado de piel tensa y luminosa tan valorado en el escenario.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Tensado Corporal",
        description:
          "Protocolo de radiofrecuencia y ultrasonidos focalizado en zonas musculares clave para reafirmar la piel, mejorar la tonicidad y resaltar la definición muscular lograda con el entrenamiento.",
        duration: "60 min",
        price: "Consultar precio",
      },
      {
        title: "Electro-Estimulación Muscular",
        description:
          "Corrientes de electro-estimulación aplicadas sobre grupos musculares específicos para potenciar la contracción, mejorar el tono, acelerar la recuperación y complementar el trabajo en el gimnasio.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿En qué momento del proceso de preparación debo empezar?",
        answer:
          "Lo ideal es iniciar los tratamientos entre 8 y 12 semanas antes de la competencia, en la fase de definición. Sin embargo, los tratamientos de recuperación y electroestimulación pueden aplicarse durante todo el proceso.",
      },
      {
        question: "¿Puedo entrenar el mismo día del tratamiento?",
        answer:
          "Sí. La mayoría de los tratamientos no requieren tiempo de recuperación. En el caso de las vendas frías recomendamos esperar al menos 4 horas antes de una sesión intensa.",
      },
      {
        question: "¿Estos tratamientos son solo para competidores profesionales?",
        answer:
          "No. Están diseñados tanto para atletas profesionales como para aficionados al fitness que quieran mejorar su apariencia y sus resultados estéticos. Adaptamos el protocolo a tu nivel y objetivos.",
      },
      {
        question: "¿Cuántas sesiones recomienda para preparar una competencia?",
        answer:
          "Generalmente entre 8 y 12 sesiones distribuidas en las semanas previas al evento. Diseñamos un calendario personalizado según la fecha de tu competencia y la categoría en la que participas.",
      },
    ],
  },

  // ── IMPLANTE DE BARBA ───────────────────────────────
  {
    slug: "implante-barba",
    name: "Implante de Barba",
    tagline: "Barba densa, uniforme y completamente natural sin cirugía agresiva",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "El implante de barba es la solución definitiva para hombres que desean una barba completa, uniforme y con aspecto 100% natural. Mediante técnicas de trasplante capilar facial de última generación, redistribuimos folículos de zonas donantes hacia las áreas con escasez de vello para crear una barba permanente y de diseño personalizado.",
    benefits: [
      "Barba densa y uniforme de por vida, sin mantenimiento especial",
      "Diseño personalizado adaptado a tu estructura facial y preferencias",
      "Técnica mínimamente invasiva con recuperación rápida",
      "Resultados completamente naturales e imperceptibles",
      "Solución permanente para alopecia barba y zonas irregulares",
      "Procedimiento ambulatorio realizado por especialistas certificados",
    ],
    items: [
      {
        title: "Implante de Barba Completa",
        description:
          "Trasplante de folículos capilares en toda la zona de la barba — mentón, mandíbula, mejillas y bigote — para conseguir un aspecto completo y uniforme. Diseñamos la forma y densidad ideal según tu fisonomía.",
        duration: "4-6 h",
        price: "Consultar precio",
      },
      {
        title: "Relleno de Zonas Específicas",
        description:
          "Intervención focalizada en áreas concretas con escasez de vello — entradas del bigote, calvas en mejillas o zonas irregulares — para uniformar y completar la barba existente.",
        duration: "2-3 h",
        price: "Consultar precio",
      },
      {
        title: "Diseño y Definición de Contorno",
        description:
          "Implante preciso en el contorno de la barba y la perilla para crear líneas definidas, simétricas y con el aspecto que deseas. Ideal para quienes tienen barba pero sin definición de bordes.",
        duration: "2 h",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿El implante de barba es permanente?",
        answer:
          "Sí. Los folículos trasplantados son de zonas donantes resistentes y crecen de por vida. A los 3-4 meses empiezas a ver el crecimiento definitivo y a los 12 meses el resultado es completo y permanente.",
      },
      {
        question: "¿Cuánto tiempo tarda la recuperación?",
        answer:
          "La zona tratada puede presentar pequeñas costras durante 7-10 días. La mayoría de los pacientes retoman su actividad normal en 3-5 días. Se deben evitar actividades de alto impacto durante la primera semana.",
      },
      {
        question: "¿Se nota que es un implante?",
        answer:
          "No. Los folículos se implantan uno a uno con ángulos y direcciones que imitan el crecimiento natural del vello. El resultado es completamente indistinguible de una barba natural.",
      },
    ],
  },

  // ── MESOTERAPIA CAPILAR ─────────────────────────────
  {
    slug: "mesoterapia-capilar",
    name: "Mesoterapia Capilar",
    tagline: "Frena la caída y activa el crecimiento del cabello desde la raíz",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "La mesoterapia capilar es uno de los tratamientos más eficaces y seguros para combatir la caída del cabello y estimular su crecimiento. Mediante microinyecciones de vitaminas, minerales, aminoácidos y factores de crecimiento directamente en el cuero cabelludo, nutrimos los folículos y reactivamos su función de forma natural y sin efectos secundarios.",
    benefits: [
      "Frena la caída del cabello desde las primeras sesiones",
      "Estimula el crecimiento de cabello nuevo y refuerza el existente",
      "Nutre directamente los folículos capilares desde la raíz",
      "Mejora la circulación del cuero cabelludo y oxigenación folicular",
      "Sin efectos secundarios sistémicos — acción local y precisa",
      "Compatible con otros tratamientos capilares y medicamentos",
    ],
    items: [
      {
        title: "Mesoterapia con Vitaminas y Minerales",
        description:
          "Microinyecciones de un cóctel rico en biotina, zinc, silicio, vitaminas del grupo B y aminoácidos esenciales que nutren los folículos debilitados y mejoran la calidad del cabello existente.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Mesoterapia con PRP (Plasma Rico en Plaquetas)",
        description:
          "Combinación de mesoterapia con tu propio plasma sanguíneo enriquecido en factores de crecimiento. Estimulación biológica máxima de los folículos capilares para resultados acelerados.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Intensivo Anticaída",
        description:
          "Ciclo completo de 8 sesiones de mesoterapia capilar con seguimiento fotográfico y ajuste de la fórmula según la respuesta. El protocolo más completo para casos de caída intensa o alopecia incipiente.",
        duration: "30 min/sesión",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones son necesarias para ver resultados?",
        answer:
          "La reducción de caída se nota ya en las primeras 3-4 sesiones. El crecimiento de cabello nuevo es visible a partir de la sesión 6-8. Recomendamos un ciclo inicial de 8-10 sesiones semanales, seguido de mantenimiento mensual.",
      },
      {
        question: "¿Es dolorosa la mesoterapia capilar?",
        answer:
          "Las microinyecciones producen una sensación mínima comparable a pequeños pellizcos. Aplicamos anestesia tópica si el paciente lo prefiere para garantizar la mayor comodidad posible.",
      },
      {
        question: "¿Para qué tipos de alopecia es eficaz?",
        answer:
          "Es especialmente eficaz para la alopecia androgénica incipiente, alopecia difusa por estrés o carencias nutricionales, y cabello debilitado. No sustituye al trasplante capilar en casos de alopecia avanzada, pero puede complementarlo.",
      },
    ],
  },

  // ── RELLENOS DE LABIOS ──────────────────────────────
  {
    slug: "relleno-de-labios",
    name: "Relleno de Labios en Turrialba",
    tagline: "Labios con volumen, contorno definido y aspecto completamente natural",
    heroBg: "acido-hialuronico-bg.webp",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Descubre cómo lograr labios más hidratados, definidos y armoniosos con resultados naturales y personalizados.",
    benefits: [
      "Volumen natural y proporcional adaptado a tu rostro",
      "Contorno labial perfectamente definido y simétrico",
      "Hidratación profunda y labios más suaves desde el primer día",
      "Resultado visible inmediato y duradero hasta 12 meses",
      "Técnica precisa que evita el efecto exagerado o artificial",
      "Producto biocompatible y reabsorbible — completamente seguro",
    ],
    items: [
      {
        title: "Relleno de Volumen Labial",
        description:
          "Aplicación de ácido hialurónico en el cuerpo de los labios para aumentar el volumen de forma natural y proporcional. Diseñamos el aumento según tus proporciones faciales para un resultado armonioso.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Definición de Contorno Labial",
        description:
          "Relleno preciso en el vermillón y el borde labial para crear un contorno nítido, simétrico y perfectamente definido. Ideal si tus labios tienen buen volumen pero falta de definición o asimetría.",
        duration: "25 min",
        price: "Consultar precio",
      },
      {
        title: "Tratamiento Completo Volumen + Contorno",
        description:
          "Diseño labial integral que combina el relleno de volumen con la definición del contorno para conseguir el resultado más completo. Incluye la corrección de asimetrías y la proyección del arco de cupido.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuánto dura el efecto del relleno de labios?",
        answer:
          "Dependiendo del tipo de ácido hialurónico utilizado y el metabolismo de cada persona, el efecto dura entre 6 y 12 meses. Se recomienda una sesión de retoque para mantener el resultado óptimo.",
      },
      {
        question: "¿Es doloroso el tratamiento?",
        answer:
          "Aplicamos crema anestésica tópica antes del procedimiento para minimizar las molestias. La mayoría de las pacientes lo describen como muy tolerable — solo una pequeña presión durante las inyecciones.",
      },
      {
        question: "¿Se puede ver el resultado inmediatamente?",
        answer:
          "Sí, el resultado es visible desde el momento del tratamiento. Los labios pueden presentar una leve inflamación durante 24-48 horas que potencia inicialmente el volumen. El resultado definitivo se aprecia a los 7-10 días.",
      },
    ],
  },

  // ── TRATAMIENTO DE OJERAS ───────────────────────────
  {
    slug: "tratamiento-ojeras",
    name: "Tratamiento de Ojeras",
    tagline: "Elimina las ojeras y recupera una mirada luminosa y descansada",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Las ojeras son uno de los problemas estéticos más comunes y difíciles de disimular con maquillaje. En MJ Fisio Estética y Spa combinamos las técnicas más avanzadas — ácido hialurónico, biorevitalización y peelings específicos — para reducir el color, el volumen y la textura de las ojeras de forma segura, natural y duradera.",
    benefits: [
      "Mirada más luminosa, descansada y juvenil desde la primera sesión",
      "Reducción del color oscuro y las sombras bajo los ojos",
      "Relleno de surcos lagrimales que proyectan cansancio",
      "Tratamientos no quirúrgicos con recuperación inmediata",
      "Protocolos personalizados según el tipo y causa de tu ojera",
      "Resultados visibles y duraderos sin cirugía",
    ],
    items: [
      {
        title: "Relleno de Surco Lagrimal con Ácido Hialurónico",
        description:
          "Microinyecciones de ácido hialurónico en el surco lagrimal para rellenar la depresión que genera sombra y aspecto de cansancio. Resultado inmediato, natural y de larga duración.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Biorevitalización Periocular",
        description:
          "Infiltración de vitaminas, aminoácidos y ácido hialurónico no reticulado en la zona del contorno de ojos para mejorar la hidratación, luminosidad y reducir el color oscuro.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Completo Antiojeras",
        description:
          "Combinación de relleno, biorevitalización y cuidado tópico especializado para resultados máximos en ojeras mixtas (vasculares + estructurales). Incluye seguimiento y retoque.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Cuántas sesiones necesito para ver resultados?",
        answer:
          "Para ojeras vasculares (de color) se recomiendan 3-4 sesiones de biorevitalización. Para ojeras estructurales (surco lagrimal hundido), el relleno con ácido hialurónico muestra resultado inmediato desde la primera sesión.",
      },
      {
        question: "¿Es un tratamiento doloroso?",
        answer:
          "Aplicamos crema anestésica antes del procedimiento. La mayoría de las pacientes lo describen como muy tolerable. La zona periocular es sensible pero el procedimiento completo dura muy pocos minutos.",
      },
      {
        question: "¿Cuánto dura el efecto?",
        answer:
          "El relleno con ácido hialurónico tiene una duración de 9 a 12 meses en la zona periocular. La biorevitalización se mantiene con sesiones de mantenimiento cada 3-4 meses.",
      },
    ],
  },

  // ── BLANQUEAMIENTO ZONA ÍNTIMA ──────────────────────
  {
    slug: "blanqueamiento-zona-intima",
    name: "Láser Despigmentante",
    fullTitle: "Láser Despigmentante en Turrialba",
    tagline: "Piel más luminosa, uniforme y revitalizada con tecnología estética avanzada",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Protocolos personalizados de láser despigmentante orientados a mejorar la apariencia de manchas, tono irregular y falta de luminosidad mediante skincare premium y tecnología de vanguardia en Turrialba.",
    benefits: [
      "Unificación del tono de piel en zonas de hiperpigmentación",
      "Tratamiento 100% seguro y respetuoso con la piel íntima",
      "Reducción de manchas por fricción, hormonales o post-depilación",
      "Mayor confianza y comodidad con tu cuerpo",
      "Sin tiempo de inactividad — retomas tu rutina al instante",
      "Protocolos personalizados según tu tipo de piel y grado de pigmentación",
    ],
    items: [
      {
        title: "Blanqueamiento con Peeling Enzimático",
        description:
          "Aplicación de enzimas despigmentantes específicas para zonas íntimas que exfolian y aclaran progresivamente la piel sin irritación. Ideal para pieles sensibles.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Tratamiento con Ácidos Despigmentantes",
        description:
          "Protocolo con ácidos dérmicos a baja concentración (kójico, mandélico, azelaico) diseñados para aclarar la piel de zonas íntimas de forma segura y eficaz.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Protocolo Intensivo de Luminosidad",
        description:
          "Ciclo completo de 6 sesiones que combina exfoliación enzimática, despigmentación ácida y tratamiento antioxidante para resultados óptimos y duraderos en hiperpigmentaciones moderadas o intensas.",
        duration: "45 min/sesión",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿El blanqueamiento de zona íntima es seguro?",
        answer:
          "Sí. Usamos productos específicamente formulados para zonas íntimas, con ingredientes aprobados dermatológicamente. El tratamiento no daña la piel ni las mucosas cuando se aplica correctamente por profesionales.",
      },
      {
        question: "¿Cuántas sesiones son necesarias?",
        answer:
          "Para pigmentaciones leves, 3-4 sesiones son suficientes. Para casos moderados o intensos, recomendamos un ciclo completo de 6 sesiones. Los resultados son progresivos y se potencian con cada sesión.",
      },
      {
        question: "¿Hay alguna contraindicación?",
        answer:
          "Se recomienda no realizarlo durante el embarazo o lactancia. Tampoco en pieles con heridas, dermatitis activa o infección en la zona. En la consulta previa evaluamos tu caso y adaptamos el protocolo a tu condición.",
      },
    ],
  },

  // ── NUEVOS SERVICIOS (PLANTILLAS VACÍAS) ────────────
  {
    slug: "nuevo-servicio-1",
    name: "Nuevo Servicio 1 (Plantilla)",
    tagline: "Descripción corta y atractiva del nuevo servicio 1",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Esta es una plantilla de prueba para el Nuevo Servicio 1. Aquí podrás agregar la descripción detallada sobre en qué consiste, para quién es ideal y los beneficios principales. Puedes editar este texto más adelante con la información final.",
    benefits: [
      "Beneficio destacado número 1 del servicio",
      "Beneficio destacado número 2 del servicio",
      "Beneficio destacado número 3 del servicio",
      "Beneficio destacado número 4 del servicio",
    ],
    items: [
      {
        title: "Opción de Tratamiento 1",
        description: "Breve descripción sobre esta variante específica del servicio.",
        duration: "45 min",
        price: "Consultar precio",
      },
      {
        title: "Opción de Tratamiento 2",
        description: "Breve descripción sobre esta variante específica del servicio.",
        duration: "60 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Pregunta frecuente de ejemplo 1?",
        answer: "Respuesta detallada a la pregunta frecuente número 1.",
      },
      {
        question: "¿Pregunta frecuente de ejemplo 2?",
        answer: "Respuesta detallada a la pregunta frecuente número 2.",
      },
    ],
  },
  {
    slug: "nuevo-servicio-2",
    name: "Nuevo Servicio 2 (Plantilla)",
    tagline: "Descripción corta y atractiva del nuevo servicio 2",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Esta es una plantilla de prueba para el Nuevo Servicio 2. Aquí podrás agregar la descripción detallada sobre en qué consiste, para quién es ideal y los beneficios principales. Puedes editar este texto más adelante con la información final.",
    benefits: [
      "Beneficio destacado número 1 del servicio",
      "Beneficio destacado número 2 del servicio",
      "Beneficio destacado número 3 del servicio",
      "Beneficio destacado número 4 del servicio",
    ],
    items: [
      {
        title: "Opción de Tratamiento 1",
        description: "Breve descripción sobre esta variante específica del servicio.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Pregunta frecuente de ejemplo 1?",
        answer: "Respuesta detallada a la pregunta frecuente número 1.",
      },
    ],
  },
  {
    slug: "nuevo-servicio-3",
    name: "Nuevo Servicio 3 (Plantilla)",
    tagline: "Descripción corta y atractiva del nuevo servicio 3",
    heroDescription: "Recupera el equilibrio de tu cuerpo y mente con auriculoterapia en Turrialba",
      "Esta es una plantilla de prueba para el Nuevo Servicio 3. Aquí podrás agregar la descripción detallada sobre en qué consiste, para quién es ideal y los beneficios principales. Puedes editar este texto más adelante con la información final.",
    benefits: [
      "Beneficio destacado número 1 del servicio",
      "Beneficio destacado número 2 del servicio",
      "Beneficio destacado número 3 del servicio",
      "Beneficio destacado número 4 del servicio",
    ],
    items: [
      {
        title: "Opción de Tratamiento 1",
        description: "Breve descripción sobre esta variante específica del servicio.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Pregunta frecuente de ejemplo 1?",
        answer: "Respuesta detallada a la pregunta frecuente número 1.",
      },
    ],
  },
];
