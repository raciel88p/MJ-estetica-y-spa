export type ServiceItem = {
  title: string;
  description: string;
  duration?: string;
  price?: string;
};

export type ServicePageData = {
  slug: string;
  name: string;
  tagline: string;
  heroDescription: string;
  benefits: string[];
  items: ServiceItem[];
  faq?: { question: string; answer: string }[];
};

export const medicoEsteticosLinks = [
  { name: "Nutrición", href: "/servicios/nutricion" },
  { name: "Botox Full Face", href: "/servicios/botox-full-face" },
  { name: "Hilos Tensores", href: "/servicios/hilos-tensores" },
  { name: "Trasplante Capilar", href: "/servicios/trasplante-capilar" },
];

export const servicePages: ServicePageData[] = [
  {
    slug: "masajes-corporales",
    name: "Masajes Corporales",
    tagline: "Libera la tensión, renueva tu energía",
    heroDescription:
      "Nuestros masajes corporales combinan técnicas profesionales para aliviar el estrés, reducir tensiones musculares y promover una sensación de bienestar total.",
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
    heroDescription:
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
    heroDescription:
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
    slug: "depilacion-laser",
    name: "Depilación Láser",
    tagline: "Piel lisa para siempre, con tecnología avanzada",
    heroDescription:
      "Olvídate del vello permanentemente con nuestra tecnología láser de última generación. Resultados duraderos, seguros y eficaces en todo tipo de pieles.",
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
    heroDescription:
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
    heroDescription:
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
    name: "Botox Full Face",
    tagline: "Rejuvenece de forma natural y armoniosa",
    heroDescription:
      "El tratamiento con toxina botulínica es el más demandado en medicina estética. Con nuestra técnica Full Face consigues una armonía facial completa, con resultados naturales que preservan tu expresividad.",
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
        question: "¿Cuánto tiempo duran los resultados?",
        answer:
          "Los efectos duran entre 4 y 6 meses en función de la zona tratada y del metabolismo de cada paciente. Con tratamientos continuados el efecto tiende a prolongarse.",
      },
      {
        question: "¿El botox es seguro?",
        answer:
          "Sí, es un tratamiento aprobado y ampliamente utilizado en medicina estética desde hace décadas. Siempre se realiza por profesionales sanitarios cualificados.",
      },
      {
        question: "¿Cuándo se ven los resultados?",
        answer:
          "El efecto empieza a notarse a las 48-72 horas y el resultado definitivo se aprecia a los 15 días.",
      },
    ],
  },
  {
    slug: "relleno-de-labios",
    name: "Relleno de Labios",
    tagline: "Labios perfectos, volumen natural y armónico",
    heroDescription:
      "Consigue unos labios más voluminosos, definidos y simétricos con nuestros rellenos de ácido hialurónico. Resultados naturales adaptados a la armonía de tu rostro.",
    benefits: [
      "Mayor volumen y definición labial",
      "Hidratación profunda y duradera",
      "Corrección de asimetrías",
      "Resultado completamente natural",
      "Sin tiempo de recuperación significativo",
    ],
    items: [
      {
        title: "Relleno Voluminizador",
        description:
          "Añade volumen de forma controlada y progresiva, respetando la proporción natural de tu rostro para un resultado estético y armónico.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Perfilado Labial",
        description:
          "Define el contorno del labio con precisión para corregir bordes difuminados y aportar nitidez y estructura sin añadir volumen excesivo.",
        duration: "30 min",
        price: "Consultar precio",
      },
      {
        title: "Hidratación Profunda",
        description:
          "Tratamiento con ácido hialurónico de baja densidad que mejora la calidad y textura de los labios, dándoles hidratación y suavidad.",
        duration: "20 min",
        price: "Consultar precio",
      },
      {
        title: "Tratamiento Combinado",
        description:
          "Combina volumen, perfilado y corrección de arrugas peribucales para un resultado global rejuvenecedor de la zona labial.",
        duration: "45 min",
        price: "Consultar precio",
      },
    ],
    faq: [
      {
        question: "¿Es doloroso el relleno de labios?",
        answer:
          "Aplicamos crema anestésica antes del tratamiento para minimizar el discomfort. La molestia es mínima y de muy corta duración.",
      },
      {
        question: "¿Cuánto duran los resultados?",
        answer:
          "Entre 8 y 12 meses, dependiendo del tipo de relleno y del metabolismo de cada persona. El ácido hialurónico se reabsorbe de forma natural y segura.",
      },
      {
        question: "¿Puedo hacer vida normal tras el tratamiento?",
        answer:
          "Sí, aunque es normal algo de hinchazón y pequeños hematomas los primeros días. El resultado definitivo se aprecia a la semana.",
      },
    ],
  },
  {
    slug: "nutricion",
    name: "Nutrición",
    tagline: "Alimenta tu cuerpo, transforma tu vida",
    heroDescription:
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
    tagline: "Recupera tu cabello, recupera tu confianza",
    heroDescription:
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
    name: "Hilos Tensores",
    tagline: "El lifting sin bisturí más efectivo del mercado",
    heroDescription:
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
];
