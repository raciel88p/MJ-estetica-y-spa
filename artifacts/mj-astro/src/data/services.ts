export type ServiceItem = {
  title: string;
  description: string;
  duration?: string;
  price?: string;
  badge?: string;
  link?: string;
  linkText?: string;
  features?: string[];
};

export type ServicePageData = {
  slug: string;
  name: string;
  fullTitle?: string;
  tagline: string;
  heroDescription: string;
  heroBg?: string;
  benefits: string[];
  items: ServiceItem[];
  faq?: { question: string; answer: string }[];
};

export type MultiLangServicePageData = {
  es: ServicePageData;
  en: ServicePageData;
};

export const medicoEsteticosLinks = {
  es: [
    { name: "Nutrición", href: "/servicios/nutricion" },
    { name: "Botox Full Face", href: "/servicios/botox-full-face" },
    { name: "Hilos Tensores Turrialba", href: "/servicios/hilos-tensores" },
    { name: "Trasplante Capilar", href: "/servicios/trasplante-capilar" },
    { name: "Ácido Hialurónico", href: "/servicios/acido-hialuronico" },
    { name: "Biorevitalización", href: "/servicios/biorevitalizacion" },
    { name: "Implante de Barba", href: "/servicios/implante-barba" },
    { name: "Mesoterapia Capilar", href: "/servicios/mesoterapia-capilar" },
    { name: "Relleno de Labios", href: "/servicios/relleno-de-labios" },
    { name: "InBody", href: "/servicios/inbody" },
  ],
  en: [
    { name: "Nutrition", href: "/en/services/nutrition" },
    { name: "Botox Full Face", href: "/en/services/botox-full-face" },
    { name: "PDO Thread Lift", href: "/en/services/thread-lift" },
    { name: "Hair Transplant", href: "/en/services/hair-transplant" },
    { name: "Hyaluronic Acid", href: "/en/services/hyaluronic-acid" },
    { name: "Biorevitalization", href: "/en/services/biorevitalization" },
    { name: "Beard Implant", href: "/en/services/beard-implant" },
    { name: "Hair Mesotherapy", href: "/en/services/hair-mesotherapy" },
    { name: "Lip Filler", href: "/en/services/lip-filler" },
    { name: "InBody", href: "/en/services/inbody" },
  ]
};

export const tratamientosCorporalesLinks = {
  es: [
    { name: "Masajes Corporales", href: "/servicios/masajes-corporales" },
    { name: "Masajes Relajantes", href: "/servicios/masajes-relajantes" },
    { name: "Masajes Profundos", href: "/servicios/masajes-profundos" },
    { name: "Masajes Post Operatorios", href: "/servicios/masajes-post-operatorios" },
    { name: "Tensado Corporal", href: "/servicios/tensado-corporal" },
    { name: "Depilación Láser", href: "/servicios/depilacion-laser" },
    { name: "Iron Beauty Fitness", href: "/servicios/iron-beauty-fitness" },
    { name: "Carboxiterapia", href: "/servicios/carboxiterapia" },
    { name: "Levantamiento de Glúteo", href: "/servicios/levantamiento-gluteo" },
    { name: "Levantamiento de Busto", href: "/servicios/levantamiento-busto" },
    { name: "Vendas Frías", href: "/servicios/vendas-frias" },
    { name: "Auriculoterapia", href: "/servicios/auriculoterapia" },
    { name: "Aromaterapia", href: "/servicios/aromaterapia" },
    { name: "Boda Spa", href: "/servicios/boda-spa" },
    { name: "Blanqueamiento Zona Íntima", href: "/servicios/blanqueamiento-zona-intima" },
  ],
  en: [
    { name: "Body Massages", href: "/en/services/body-massages" },
    { name: "Relaxing Massages", href: "/en/services/relaxing-massages" },
    { name: "Deep Tissue Massages", href: "/en/services/deep-tissue-massages" },
    { name: "Post-Operative Massages", href: "/en/services/post-op-massages" },
    { name: "Body Tightening", href: "/en/services/body-tightening" },
    { name: "Laser Hair Removal", href: "/en/services/laser-hair-removal" },
    { name: "Iron Beauty Fitness", href: "/en/services/iron-beauty-fitness" },
    { name: "Carboxitherapy", href: "/en/services/carboxitherapy" },
    { name: "Glute Lift", href: "/en/services/glute-lift" },
    { name: "Bust Lift", href: "/en/services/bust-lift" },
    { name: "Cold Wraps", href: "/en/services/cold-wraps" },
    { name: "Auriculotherapy", href: "/en/services/auriculotherapy" },
    { name: "Aromatherapy", href: "/en/services/aromatherapy" },
    { name: "Wedding Spa", href: "/en/services/wedding-spa" },
    { name: "Intimate Area Whitening", href: "/en/services/intimate-whitening" },
  ]
};

export const tratamientosFacialesLinks = {
  es: [
    { name: "Tratamientos Faciales", href: "/servicios/faciales" },
    { name: "Limpieza Facial", href: "/servicios/limpieza-facial" },
    { name: "Limpieza Facial Profunda", href: "/servicios/limpieza-facial-profunda" },
    { name: "Limpieza Facial Hidratante", href: "/servicios/limpieza-facial-hidratante" },
    { name: "Terapias Faciales", href: "/servicios/terapias-faciales" },
    { name: "Peeling Facial", href: "/servicios/peeling-quimico" },
    { name: "Hollywood Peel en Turrialba", href: "/servicios/hollywood-peel" },
    { name: "Eliminación de Manchas", href: "/servicios/eliminacion-manchas" },
    { name: "Radiofrecuencia Facial", href: "/servicios/radiofrecuencia-facial" },
    { name: "ADN de Salmón", href: "/servicios/adn-salmon" },
    { name: "Hilos de Colágeno", href: "/servicios/hilos-colageno" },
    { name: "Microagujas", href: "/servicios/microagujas" },
    { name: "Microagujas con Ginkgo Biloba", href: "/servicios/microagujas-ginkgo-biloba" },
    { name: "Microagujas con Vitamina C", href: "/servicios/microagujas-vitamina-c" },
    { name: "Microagujas con MelanOut", href: "/servicios/microagujas-melanout" },
    { name: "Rejuvenecimiento Facial", href: "/servicios/rejuvenecimiento-facial" },
    { name: "Rejuvenecimiento Facial Láser", href: "/servicios/rejuvenecimiento-facial-laser" },
    { name: "Microdermoabrasión", href: "/servicios/microdermoabrasion" },
    { name: "Tratamiento para Ojeras en Turrialba", href: "/servicios/tratamiento-ojeras" },
    { name: "Masaje Maxilofacial", href: "/servicios/masaje-maxilofacial" },
    { name: "Láser para Acné", href: "/servicios/laser-acne" },
    { name: "Mascarillas Faciales", href: "/servicios/mascarillas-faciales" },
  ],
  en: [
    { name: "Facial Treatments", href: "/en/services/facials" },
    { name: "Facial Cleansing", href: "/en/services/facial-cleansing" },
    { name: "Deep Facial Cleansing", href: "/en/services/deep-cleansing" },
    { name: "Hydrating Facial Cleansing", href: "/en/services/hydrating-cleansing" },
    { name: "Facial Therapies", href: "/en/services/facial-therapies" },
    { name: "Chemical Peel", href: "/en/services/chemical-peel" },
    { name: "Hollywood Peel", href: "/en/services/hollywood-peel" },
    { name: "Spot Removal", href: "/en/services/spot-removal" },
    { name: "Facial Radiofrequency", href: "/en/services/facial-rf" },
    { name: "Salmon DNA", href: "/en/services/salmon-dna" },
    { name: "Collagen Threads", href: "/en/services/collagen-threads" },
    { name: "Microneedling", href: "/en/services/microneedling" },
    { name: "Microneedling with Ginkgo Biloba", href: "/en/services/microneedling-ginkgo" },
    { name: "Microneedling with Vitamin C", href: "/en/services/microneedling-vit-c" },
    { name: "Microneedling with MelanOut", href: "/en/services/microneedling-melanout" },
    { name: "Facial Rejuvenation", href: "/en/services/facial-rejuvenation" },
    { name: "Laser Facial Rejuvenation", href: "/en/services/laser-rejuvenation" },
    { name: "Microdermabrasion", href: "/en/services/microdermabrasion" },
    { name: "Dark Circles Treatment", href: "/en/services/dark-circles" },
    { name: "Maxillofacial Massage", href: "/en/services/maxillofacial-massage" },
    { name: "Acne Laser", href: "/en/services/acne-laser" },
    { name: "Facial Masks", href: "/en/services/facial-masks" },
  ]
};

export const tratamientosPiernasLinks = {
  es: [
    { name: "Cuidado de Piernas Cansadas", href: "/servicios/piernas-cansadas" },
    { name: "Tratamiento Anticelulitis", href: "/servicios/tratamiento-anticelulitis" },
  ],
  en: [
    { name: "Tired Legs Care", href: "/en/services/tired-legs" },
    { name: "Anti-Cellulite Treatment", href: "/en/services/anti-cellulite" },
  ]
};

export const mjCreativoLinks = {
  es: [
    { name: "Arteterapia", href: "/servicios/arteterapia" },
  ],
  en: [
    { name: "Art Therapy", href: "/en/services/art-therapy" },
  ]
};

export const servicePages: MultiLangServicePageData[] = [
  {
    es: {
      slug: "masajes-corporales",
      name: "Masajes Reductor con Hidrolicoplasia Turrialba",
      tagline: "Libera la tensión, renueva tu energía",
      heroDescription: "Nuestros masajes corporales combinan técnicas profesionales para aliviar el estrés, reducir tensiones musculares y promover una sensación de bienestar total. Reduce grasa localizada y redefine tu contorno corporal sin cirugía",
      benefits: ["Reducción del estrés y la ansiedad", "Alivio de dolores musculares", "Mejora de la circulación sanguínea", "Relajación profunda del sistema nervioso", "Recuperación muscular más rápida"],
      items: [
        { title: "Masaje Anticelulítico", description: "Tratamiento específico que trabaja las zonas con celulitis mediante técnicas de amasamiento y drenaje, mejorando la textura de la piel y la circulación local.", duration: "60 min", price: "Consultar precio" },
        { title: "Masaje con Piedras Calientes", description: "Técnica de termoterapia con piedras volcánicas que actúan en profundidad para aliviar contracturas y proporcionar una relajación profunda.", duration: "75 min", price: "Consultar precio" },
        { title: "Masaje Drenante", description: "Estimula el sistema linfático para eliminar toxinas y reducir la retención de líquidos, dejando el cuerpo más ligero y definido.", duration: "60 min", price: "Consultar precio" },
        { title: "Envoltura Corporal", description: "Tratamiento nutritivo que envuelve el cuerpo con activos altamente hidratantes, dejando la piel suave, tersa y luminosa.", duration: "90 min", price: "Consultar precio" }
      ],
      faq: [
        { question: "¿Con qué frecuencia debo realizarme un masaje corporal?", answer: "Recomendamos una sesión quincenal o mensual para mantenimiento general. Para resultados terapéuticos o reductores, puede ser necesario un programa más intensivo." },
        { question: "¿Debo prepararme de alguna forma antes del masaje?", answer: "Aconsejamos llegar bien hidratada y evitar comidas copiosas 2 horas antes. Tras el masaje, beber abundante agua para facilitar la eliminación de toxinas." }
      ]
    },
    en: {
      slug: "body-massages",
      name: "Reducing Massage with Hydrolipoclasia Turrialba",
      tagline: "Release tension, renew your energy",
      heroDescription: "Our body massages combine professional techniques to relieve stress, reduce muscle tension, and promote a sense of total well-being. Reduce localized fat and redefine your body contour without surgery.",
      benefits: ["Stress and anxiety reduction", "Muscle pain relief", "Improved blood circulation", "Deep relaxation of the nervous system", "Faster muscle recovery"],
      items: [
        { title: "Anti-Cellulite Massage", description: "Specific treatment targeting cellulite areas through kneading and drainage techniques, improving skin texture and local circulation.", duration: "60 min", price: "Contact for price" },
        { title: "Hot Stone Massage", description: "Thermotherapy technique using volcanic stones that act deeply to relieve contractures and provide deep relaxation.", duration: "75 min", price: "Contact for price" },
        { title: "Draining Massage", description: "Stimulates the lymphatic system to eliminate toxins and reduce fluid retention, leaving the body lighter and more defined.", duration: "60 min", price: "Contact for price" },
        { title: "Body Wrap", description: "Nourishing treatment that wraps the body with highly hydrating active ingredients, leaving the skin soft, smooth, and luminous.", duration: "90 min", price: "Contact for price" }
      ],
      faq: [
        { question: "How often should I get a body massage?", answer: "We recommend a biweekly or monthly session for general maintenance. For therapeutic or reducing results, a more intensive program may be necessary." },
        { question: "Should I prepare in any way before the massage?", answer: "We advise arriving well-hydrated and avoiding heavy meals 2 hours before. After the massage, drink plenty of water to facilitate toxin elimination." }
      ]
    }
  },
  {
    es: {
      slug: "faciales",
      name: "Tratamientos Faciales",
      tagline: "Luce una piel radiante y rejuvenecida",
      heroDescription: "Descubre nuestra gama completa de tratamientos faciales diseñados para cada tipo de piel. Técnicas avanzadas y productos de alta gama para resultados visibles.",
      benefits: ["Piel más limpia y luminosa", "Reducción de manchas e imperfecciones", "Hidratación profunda y duradera", "Efecto antiedad visible", "Poros minimizados"],
      items: [
        { title: "Limpieza facial profunda", description: "Ideal para quienes buscan una sensación de limpieza intensiva y renovación facial.", features: ["Limpieza profesional", "Bienestar facial", "Sensación de frescura profunda"], linkText: "Escríbenos por WhatsApp" },
        { title: "Limpieza facial hidratante", description: "Pensada para pieles que buscan hidratación, suavidad y luminosidad natural.", features: ["Glow saludable", "Sensación de hidratación", "Apariencia revitalizada"], linkText: "Escríbenos por WhatsApp" },
        { title: "Facial premium glow", description: "Una experiencia skincare orientada al bienestar, relajación y luminosidad facial.", features: ["Experiencia wellness", "Productos especializados", "Cuidado facial premium"], linkText: "Escríbenos por WhatsApp" },
        { title: "Protocolos skincare avanzados", description: "Tratamientos personalizados según necesidades específicas evaluadas profesionalmente.", features: ["Valoración individual", "Protocolos personalizados", "Seguimiento profesional"], linkText: "Escríbenos por WhatsApp" }
      ],
      faq: [
        { question: "¿Cuántas sesiones necesito para ver resultados?", answer: "Los resultados son visibles desde la primera sesión, aunque para tratamientos específicos como antiedad o antimanchas recomendamos un mínimo de 4-6 sesiones." },
        { question: "¿Con qué frecuencia debo hacerme un facial?", answer: "Una higiene facial cada 4-6 semanas es lo ideal para mantener la piel limpia. Los tratamientos específicos siguen un protocolo personalizado." }
      ]
    },
    en: {
      slug: "facials",
      name: "Facial Treatments",
      tagline: "Look radiant and rejuvenated",
      heroDescription: "Discover our full range of facial treatments designed for every skin type. Advanced techniques and high-end products for visible results.",
      benefits: ["Cleaner, more luminous skin", "Reduction of spots and imperfections", "Deep and lasting hydration", "Visible anti-aging effect", "Minimized pores"],
      items: [
        { title: "Deep Facial Cleansing", description: "Ideal for those looking for an intensive cleansing and facial renewal sensation.", features: ["Professional cleaning", "Facial well-being", "Deep freshness sensation"], linkText: "Contact us via WhatsApp" },
        { title: "Hydrating Facial Cleansing", description: "Designed for skin looking for hydration, softness, and natural luminosity.", features: ["Healthy glow", "Hydration sensation", "Revitalized appearance"], linkText: "Contact us via WhatsApp" },
        { title: "Premium Glow Facial", description: "A skincare experience focused on well-being, relaxation, and facial luminosity.", features: ["Wellness experience", "Specialized products", "Premium facial care"], linkText: "Contact us via WhatsApp" },
        { title: "Advanced Skincare Protocols", description: "Customized treatments based on specific needs evaluated professionally.", features: ["Individual assessment", "Customized protocols", "Professional follow-up"], linkText: "Contact us via WhatsApp" }
      ],
      faq: [
        { question: "How many sessions do I need to see results?", answer: "Results are visible from the first session, although for specific treatments like anti-aging or anti-spot, we recommend a minimum of 4-6 sessions." },
        { question: "How often should I get a facial?", answer: "A facial hygiene every 4-6 weeks is ideal for keeping the skin clean. Specific treatments follow a customized protocol." }
      ]
    }
  },
  {
    es: {
      slug: "depilacion-laser",
      name: "Depilación Láser",
      tagline: "Piel lisa para siempre, con tecnología avanzada",
      heroDescription: "Depilación Láser en Turrialba | MJ Estética & Wellness Center<br />Despídete del vello… y vuelve a sentirte cómoda con tu piel<br /><br />Reduce progresivamente el crecimiento del vello, evita irritación constante y luce una piel más suave y uniforme con tecnología de depilación láser profesional en MJ Estética & Wellness Center en Turrialba.",
      benefits: ["Eliminación permanente del vello", "Piel suave y sin irritaciones", "Ahorro a largo plazo frente a otros métodos", "Tratamiento rápido y cómodo", "Resultados visibles desde las primeras sesiones"],
      items: [
        { title: "Depilación Facial", description: "Tratamiento para labio superior, mentón, patillas y cuello. Elimina el vello de forma progresiva y definitiva.", duration: "30 min", price: "Consultar precio" },
        { title: "Axila / Zona Bikini", description: "Zonas delicadas tratadas con máxima precisión y confort. Resultados permanentes con protocolo de 6-8 sesiones.", duration: "30 min", price: "Consultar precio" },
        { title: "Piernas Completas", description: "Tratamiento completo de piernas desde las ingles hasta los tobillos. Incluye rodillas y partes posteriores.", duration: "60-90 min", price: "Consultar precio" },
        { title: "Cuerpo Completo", description: "Protocolo integral para la eliminación del vello en todo el cuerpo. El paquete más completo con mayor ahorro.", duration: "120 min", price: "Consultar precio" }
      ],
      faq: [
        { question: "¿Cuántas sesiones son necesarias?", answer: "Generalmente entre 6 y 8 sesiones, separadas de 4 a 8 semanas, dependiendo de la zona y el tipo de vello. Algunas personas requieren sesiones de mantenimiento posteriores." },
        { question: "¿El tratamiento es doloroso?", answer: "La sensación es mínima, similar a un ligero picor o calor. Nuestro equipo dispone de sistema de enfriamiento integrado para maximizar el confort durante el tratamiento." },
        { question: "¿Hay alguna contraindicación?", answer: "No está indicado durante el embarazo, si se toma fotosensibilizantes o con bronceado activo. En la consulta previa evaluamos tu caso de forma personalizada." }
      ]
    },
    en: {
      slug: "laser-hair-removal",
      name: "Laser Hair Removal",
      tagline: "Smooth skin forever, with advanced technology",
      heroDescription: "Laser Hair Removal in Turrialba | MJ Estética & Wellness Center<br />Say goodbye to hair… and feel comfortable in your skin again<br /><br />Progressively reduce hair growth, avoid constant irritation, and look smoother and more uniform with professional laser hair removal technology at MJ Estética & Wellness Center in Turrialba.",
      benefits: ["Permanent hair removal", "Smooth and irritation-free skin", "Long-term savings compared to other methods", "Quick and comfortable treatment", "Visible results from the first sessions"],
      items: [
        { title: "Facial Hair Removal", description: "Treatment for upper lip, chin, sideburns, and neck. Eliminates hair progressively and permanently.", duration: "30 min", price: "Contact for price" },
        { title: "Underarm / Bikini Area", description: "Delicate areas treated with maximum precision and comfort. Permanent results with a protocol of 6-8 sessions.", duration: "30 min", price: "Contact for price" },
        { title: "Full Legs", description: "Complete leg treatment from the groin to the ankles. Includes knees and back parts.", duration: "60-90 min", price: "Contact for price" },
        { title: "Full Body", description: "Integral protocol for hair removal across the entire body. The most complete package with the greatest savings.", duration: "120 min", price: "Contact for price" }
      ],
      faq: [
        { question: "How many sessions are necessary?", answer: "Generally between 6 and 8 sessions, spaced 4 to 8 weeks apart, depending on the area and hair type. Some people require subsequent maintenance sessions." },
        { question: "Is the treatment painful?", answer: "The sensation is minimal, similar to a slight prickle or heat. Our equipment features an integrated cooling system to maximize comfort during treatment." },
        { question: "Are there any contraindications?", answer: "It is not indicated during pregnancy, if taking photosensitizing medications, or with an active tan. During the preliminary consultation, we evaluate your case individually." }
      ]
    }
  },
  {
    es: {
      slug: "limpieza-facial",
      name: "Limpieza Facial",
      fullTitle: "Limpieza Facial en Turrialba",
      tagline: "Glow natural, bienestar facial y skincare premium",
      heroDescription: "En MJ Estética & Wellness Center entendemos que una limpieza facial no se trata solo de “limpiar la piel”.<br />Se trata de ayudarte a recuperar frescura, glow natural y bienestar facial mediante protocolos personalizados y una experiencia skincare premium en Turrialba.",
      benefits: ["Valoración facial personalizada", "Protocolos adaptados según tu tipo de piel", "Experiencia relajante y profesional", "Productos especializados skincare", "Atención enfocada en bienestar y luminosidad facial", "Glow y luminosidad facial", "Sensación de limpieza profunda", "Bienestar general de la piel", "Apariencia más fresca y revitalizada", "Textura facial más uniforme", "Rutinas de skincare personalizadas", "Cuidado facial preventivo", "Sensación de hidratación y frescura"],
      items: [
        { title: "Limpieza facial profunda", description: "Ideal para quienes buscan una sensación de limpieza intensiva y renovación facial.", features: ["Limpieza profesional", "Bienestar facial", "Sensación de frescura profunda"], linkText: "Consulta disponibilidad" },
        { title: "Limpieza facial hidratante", description: "Pensada para pieles que buscan hidratación, suavidad y luminosidad natural.", features: ["Glow saludable", "Sensación de hidratación", "Apariencia revitalizada"], linkText: "Agenda tu valoración facial" },
        { title: "Facial premium glow", description: "Una experiencia skincare orientada al bienestar, relajación y luminosidad facial.", features: ["Experiencia wellness", "Productos especializados", "Cuidado facial premium"], linkText: "Descubre el protocolo ideal para tu piel" },
        { title: "Protocolos skincare avanzados", description: "Tratamientos personalizados según necesidades específicas evaluadas profesionalmente.", features: ["Valoración individual", "Protocolos personalizados", "Seguimiento profesional"], linkText: "Escríbenos por WhatsApp" }
      ],
      faq: [
        { question: "¿Qué incluye una limpieza facial?", answer: "Incluye valoración facial, limpieza profesional, protocolo personalizado y recomendaciones posteriores." },
        { question: "¿Cada cuánto se recomienda?", answer: "Depende del tipo de piel y objetivos individuales. La frecuencia ideal se define en valoración." },
        { question: "¿Ayuda con glow facial?", answer: "Muchas personas buscan este tratamiento para apoyar luminosidad y bienestar facial." },
        { question: "¿Tiene recuperación?", answer: "Generalmente las personas continúan sus actividades normales el mismo día." },
        { question: "¿Qué productos utilizan?", answer: "Utilizamos productos especializados seleccionados según las necesidades de cada piel." },
        { question: "¿Se puede combinar con otros tratamientos faciales?", answer: "Sí, dependiendo de la valoración profesional y objetivos skincare." },
        { question: "¿Cuánto dura la sesión?", answer: "Entre 60 y 90 minutos aproximadamente." },
        { question: "¿Qué cuidados posteriores se recomiendan?", answer: "Hidratación, protector solar y seguimiento de recomendaciones profesionales." },
        { question: "¿Duele una limpieza facial?", answer: "Puede haber una ligera molestia al extraer impurezas, pero es un proceso diseñado para ser relajante, profesional y cómodo." },
        { question: "¿Puedo maquillarme después del tratamiento?", answer: "Recomendamos esperar 24 horas para permitir que la piel se recupere y absorba mejor los nutrientes y productos aplicados." },
        { question: "¿Qué es una limpieza facial?", answer: "Es un tratamiento skincare diseñado para apoyar la limpieza profunda, mejorar la frescura facial y favorecer una apariencia más luminosa y revitalizada." },
        { question: "¿Cómo funciona el proceso?", answer: "Incluye valoración personalizada, limpieza profesional, aplicación del protocolo skincare específico y recomendaciones de cuidado posterior." }
      ]
    },
    en: {
      slug: "facial-cleansing",
      name: "Facial Cleansing",
      fullTitle: "Facial Cleansing in Turrialba",
      tagline: "Natural glow, facial well-being, and premium skincare",
      heroDescription: "At MJ Estética & Wellness Center, we understand that a facial cleansing is not just about \"cleaning the skin.\"<br />It's about helping you regain freshness, natural glow, and facial well-being through personalized protocols and a premium skincare experience in Turrialba.",
      benefits: ["Personalized facial assessment", "Protocols adapted to your skin type", "Relaxing and professional experience", "Specialized skincare products", "Focus on well-being and facial luminosity", "Facial glow and luminosity", "Deep cleaning sensation", "General skin well-being", "Fresher and revitalized appearance", "More uniform facial texture", "Customized skincare routines", "Preventive facial care", "Hydration and freshness sensation"],
      items: [
        { title: "Deep Facial Cleansing", description: "Ideal for those looking for an intensive cleaning and facial renewal sensation.", features: ["Professional cleaning", "Facial well-being", "Deep freshness sensation"], linkText: "Check availability" },
        { title: "Hydrating Facial Cleansing", description: "Designed for skin looking for hydration, softness, and natural luminosity.", features: ["Healthy glow", "Hydration sensation", "Revitalized appearance"], linkText: "Schedule your facial assessment" },
        { title: "Premium Glow Facial", description: "A skincare experience focused on well-being, relaxation, and facial luminosity.", features: ["Wellness experience", "Specialized products", "Premium facial care"], linkText: "Discover the ideal protocol for your skin" },
        { title: "Advanced Skincare Protocols", description: "Customized treatments based on specific needs evaluated professionally.", features: ["Individual assessment", "Customized protocols", "Professional follow-up"], linkText: "Contact us via WhatsApp" }
      ],
      faq: [
        { question: "What does a facial cleansing include?", answer: "It includes a facial assessment, professional cleaning, personalized protocol, and subsequent recommendations." },
        { question: "How often is it recommended?", answer: "It depends on the skin type and individual goals. The ideal frequency is defined during assessment." },
        { question: "Does it help with facial glow?", answer: "Many people seek this treatment to support luminosity and facial well-being." },
        { question: "Is there a recovery time?", answer: "Generally, people continue their normal activities the same day." },
        { question: "What products are used?", answer: "We use specialized products selected according to the needs of each skin." },
        { question: "Can it be combined with other facial treatments?", answer: "Yes, depending on the professional assessment and skincare goals." },
        { question: "How long is the session?", answer: "Approximately between 60 and 90 minutes." },
        { question: "What post-care is recommended?", answer: "Hydration, sunscreen, and following professional recommendations." },
        { question: "Does a facial cleansing hurt?", answer: "There may be a slight discomfort when extracting impurities, but it's a process designed to be relaxing, professional, and comfortable." },
        { question: "Can I wear makeup after the treatment?", answer: "We recommend waiting 24 hours to allow the skin to recover and better absorb the nutrients and products applied." },
        { question: "What is a facial cleansing?", answer: "It's a skincare treatment designed to support deep cleansing, improve facial freshness, and promote a more luminous and revitalized appearance." },
        { question: "How does the process work?", answer: "It includes a personalized assessment, professional cleaning, application of the specific skincare protocol, and post-care recommendations." }
      ]
    }
  },
  {
    es: {
      slug: "masajes-relajantes",
      name: "Masajes Relajantes",
      fullTitle: "Masajes en Turrialba | Relajantes, Terapéuticos y Descontracturantes",
      tagline: "Un viaje al bienestar total",
      heroDescription: "Recupera tu bienestar con masajes profesionales en Turrialba. ¿Buscas un lugar donde puedas relajarte, aliviar tensiones musculares y desconectarte del estrés diario?",
      benefits: ["Reducción del cortisol (hormona del estrés)", "Mejora del sueño y el descanso", "Liberación de endorfinas naturales", "Relajación muscular profunda", "Sensación de bienestar prolongada"],
      items: [
        { title: "Masaje Relajante", description: "Ideal para reducir estrés, ansiedad y tensión acumulada.", duration: "60-90 min", linkText: "Escríbenos por WhatsApp" },
        { title: "Masaje Descontracturante", description: "Perfecto para personas con molestias musculares causadas por trabajo físico, deporte o estrés.", duration: "60-90 min", linkText: "Escríbenos por WhatsApp" },
        { title: "Masaje Terapéutico", description: "Tratamiento enfocado en mejorar la condición muscular y promover el bienestar físico.", duration: "60-90 min", linkText: "Escríbenos por WhatsApp" },
        { title: "Aromaterapia", description: "Combinamos técnicas de masaje con aceites esenciales para potenciar la relajación.", duration: "60-90 min", linkText: "Escríbenos por WhatsApp" },
        { title: "Spa para Parejas", description: "Comparte una experiencia única de relajación con alguien especial.", duration: "90 min", linkText: "Escríbenos por WhatsApp" }
      ],
      faq: [
        { question: "¿Necesito reservar con anticipación?", answer: "Sí. Trabajamos con cita previa para brindar una atención personalizada." },
        { question: "¿Cuánto dura una sesión?", answer: "Dependiendo del tratamiento, las sesiones pueden durar entre 60 y 90 minutos." },
        { question: "¿Cuál masaje recomiendan para el estrés?", answer: "El masaje relajante combinado con aromaterapia suele ser una de las opciones más solicitadas." },
        { question: "¿Atienden parejas?", answer: "Sí. Contamos con opciones de Spa y masajes para parejas." }
      ]
    },
    en: {
      slug: "relaxing-massages",
      name: "Relaxing Massages",
      fullTitle: "Massages in Turrialba | Relaxing, Therapeutic and Decontracting",
      tagline: "A journey to total well-being",
      heroDescription: "Regain your well-being with professional massages in Turrialba. Looking for a place where you can relax, relieve muscle tension, and disconnect from daily stress?",
      benefits: ["Cortisol reduction (stress hormone)", "Improved sleep and rest", "Natural endorphin release", "Deep muscle relaxation", "Prolonged sense of well-being"],
      items: [
        { title: "Relaxing Massage", description: "Ideal for reducing stress, anxiety, and accumulated tension.", duration: "60-90 min", linkText: "Contact us via WhatsApp" },
        { title: "Decontracting Massage", description: "Perfect for people with muscle discomfort caused by physical work, sports, or stress.", duration: "60-90 min", linkText: "Contact us via WhatsApp" },
        { title: "Therapeutic Massage", description: "Treatment focused on improving muscle condition and promoting physical well-being.", duration: "60-90 min", linkText: "Contact us via WhatsApp" },
        { title: "Aromatherapy", description: "We combine massage techniques with essential oils to enhance relaxation.", duration: "60-90 min", linkText: "Contact us via WhatsApp" },
        { title: "Couples Spa", description: "Share a unique relaxation experience with someone special.", duration: "90 min", linkText: "Contact us via WhatsApp" }
      ],
      faq: [
        { question: "Do I need to book in advance?", answer: "Yes. We work by appointment to provide personalized attention." },
        { question: "How long does a session last?", answer: "Depending on the treatment, sessions can last between 60 and 90 minutes." },
        { question: "Which massage do you recommend for stress?", answer: "Relaxing massage combined with aromatherapy is usually one of the most requested options." },
        { question: "Do you cater to couples?", answer: "Yes. We have Spa and massage options for couples." }
      ]
    }
  },
  {
    es: {
      slug: "nutricion",
      name: "Nutricionista en Turrialba | Planes Nutricionales Personalizados",
      tagline: "Alimenta tu cuerpo, transforma tu vida",
      heroDescription: "Transforma tus hábitos alimenticios con acompañamiento profesional y un plan nutricional diseñado específicamente para ti.",
      benefits: ["Plan nutricional completamente personalizado", "Mejora del peso y composición corporal", "Mayor energía y vitalidad diaria", "Reducción de enfermedades metabólicas", "Hábitos alimentarios sostenibles a largo plazo"],
      items: [
        { title: "Consulta Nutricional Inicial", description: "Evaluación completa de tu estado de salud, historial alimentario, objetivos y mediciones corporales.", duration: "60 min", price: "Consultar precio" },
        { title: "Plan de Alimentación Personalizado", description: "Diseño de un menú semanal adaptado a tus gustos y necesidades.", duration: "Plan escrito", price: "Consultar precio" },
        { title: "Seguimiento Nutricional", description: "Sesiones de seguimiento para ajustar el plan según tu evolución.", duration: "30 min", price: "Consultar precio" }
      ],
      faq: [
        { question: "¿Cuántas sesiones necesito?", answer: "Recomendamos una consulta inicial y al menos 2-3 sesiones de seguimiento durante el primer mes." },
        { question: "¿El plan incluye recetas?", answer: "Sí, el plan nutricional incluye sugerencias de recetas sencillas y adaptadas a tus preferencias." }
      ]
    },
    en: {
      slug: "nutrition",
      name: "Nutritionist in Turrialba | Personalized Nutritional Plans",
      tagline: "Feed your body, transform your life",
      heroDescription: "Transform your eating habits with professional support and a nutritional plan designed specifically for you.",
      benefits: ["Completely personalized nutritional plan", "Improved weight and body composition", "Greater energy and daily vitality", "Reduction of metabolic diseases", "Long-term sustainable eating habits"],
      items: [
        { title: "Initial Nutritional Consultation", description: "Complete assessment of your health status, food history, goals, and body measurements.", duration: "60 min", price: "Contact for price" },
        { title: "Personalized Feeding Plan", description: "Design of a weekly menu adapted to your tastes and needs.", duration: "Written plan", price: "Contact for price" },
        { title: "Nutritional Follow-up", description: "Follow-up sessions to adjust the plan according to your evolution.", duration: "30 min", price: "Contact for price" }
      ],
      faq: [
        { question: "How many sessions do I need?", answer: "We recommend an initial consultation and at least 2-3 follow-up sessions during the first month." },
        { question: "Does the plan include recipes?", answer: "Yes, the nutritional plan includes suggestions for simple recipes adapted to your preferences." }
      ]
    }
  },
  {
    es: {
      slug: "botox-full-face",
      name: "Botox Full Face en Turrialba",
      tagline: "Recupera la frescura de tu mirada con armonía total",
      heroDescription: "Apariencia más fresca, descansada y natural sin perder tu esencia. Las líneas de expresión o el cansancio facial pueden hacerte lucir agotada incluso cuando te sientes bien.",
      benefits: ["Reducción visible de arrugas de expresión", "Aspecto rejuvenecido y natural", "Sin cicatrices ni tiempo de recuperación", "Efecto preventivo frente a futuras arrugas", "Resultados inmediatos que mejoran en 15 días"],
      items: [
        { title: "Frente y Entrecejo", description: "Suaviza las líneas horizontales de la frente y las arrugas del entrecejo.", duration: "30 min", price: "Consultar precio" },
        { title: "Patas de Gallo", description: "Tratamiento de las líneas de expresión en el contorno ocular.", duration: "20 min", price: "Consultar precio" },
        { title: "Full Face Completo", description: "Protocolo integral que trata todas las zonas del tercio superior e inferior del rostro.", duration: "60 min", price: "Consultar precio" }
      ],
      faq: [
        { question: "¿Duele el procedimiento?", answer: "Generalmente las molestias son mínimas y rápidas." },
        { question: "¿Cuánto duran los resultados?", answer: "La duración puede variar según cada persona y hábitos individuales." }
      ]
    },
    en: {
      slug: "botox-full-face",
      name: "Botox Full Face in Turrialba",
      tagline: "Regain the freshness of your gaze with total harmony",
      heroDescription: "Fresher, more rested, and natural appearance without losing your essence. Expression lines or facial fatigue can make you look exhausted even when you feel good.",
      benefits: ["Visible reduction of expression wrinkles", "Rejuvenated and natural appearance", "No scars or recovery time", "Preventive effect against future wrinkles", "Immediate results that improve in 15 days"],
      items: [
        { title: "Forehead and Frown Lines", description: "Smooths horizontal forehead lines and frown lines.", duration: "30 min", price: "Contact for price" },
        { title: "Crow's Feet", description: "Treatment of expression lines around the eyes.", duration: "20 min", price: "Contact for price" },
        { title: "Complete Full Face", description: "Integral protocol treating all areas of the upper and lower third of the face.", duration: "60 min", price: "Contact for price" }
      ],
      faq: [
        { question: "Does the procedure hurt?", answer: "Generally, discomfort is minimal and quick." },
        { question: "How long do results last?", answer: "Duration can vary depending on each person and individual habits." }
      ]
    }
  }
];

export function getServiceBySlug(slug: string, lang: 'es' | 'en'): ServicePageData | undefined {
  const multiLangService = servicePages.find(s => s.es.slug === slug || s.en.slug === slug);
  return multiLangService ? multiLangService[lang] : undefined;
}
