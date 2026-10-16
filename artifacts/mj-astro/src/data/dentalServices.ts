export interface DentalService {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  heroTagline: string;
  emotionalIntro: string;
  mainProblem: string;
  symptomsChecklist: string[];
  benefits: { title: string; description: string }[];
  procedureTimeline: { step: string; title: string; description: string }[];
  technology: { name: string; description: string }[];
  microcopy: {
    duration: string;
    recovery: string;
    frequency: string;
    aftercare: string;
  };
  faq: { question: string; answer: string; aeoSummary: string }[];
  whatsappText: string;
}

export interface DentalHubData {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  tagline: string;
  emotionalIntro: string;
  values: { title: string; description: string; icon: string }[];
  servicesList: {
    slug: string;
    name: string;
    category: string;
    shortDesc: string;
    icon: string;
  }[];
  faq: { question: string; answer: string; aeoSummary: string }[];
}

export const dentalHubData: Record<"es" | "en", DentalHubData> = {
  es: {
    seoTitle: "Clínica Dental en Siquirres | Salud, Estética y Sonrisas de Confianza",
    seoDescription: "Atención odontológica integral y emocional en Siquirres, Costa Rica. Odontología sin dolor, tecnología avanzada y un equipo humano enfocado en devolverte la confianza de sonreír.",
    h1: "Odontología de Vanguardia y Cuidado Humano en Siquirres",
    tagline: "Volver a sonreír con libertad no es solo salud. Es volver a conectar contigo.",
    emotionalIntro: "No siempre duele. A veces simplemente dejas de sonreír en las fotografías, cubres tu boca al hablar o evitas reír a carcajadas con las personas que amas. En nuestra clínica dental en Siquirres entendemos que cuidar tus dientes va mucho más allá de un procedimiento médico: es cuidar tu tranquilidad, tu autoestima y tu calidad de vida.",
    values: [
      {
        title: "Odontología Sin Dolor y Sin Miedo",
        description: "Anestesia computarizada, técnicas no invasivas y un ambiente sereno para que dejes atrás la ansiedad dental.",
        icon: "ShieldCheck"
      },
      {
        title: "Tecnología de Diagnóstico Preciso",
        description: "Radiografía digital HD y escáneres que permiten diagnosticar con exactitud y sin molestias.",
        icon: "Sparkles"
      },
      {
        title: "Atención Cálida y Empática",
        description: "Escuchamos tu historia antes de tocar tus dientes. Tratamientos personalizados paso a paso.",
        icon: "Heart"
      },
      {
        title: "Especialistas Integrales",
        description: "Desde prevención y estética hasta cirugía e implantología en la comodidad de Siquirres.",
        icon: "UserCheck"
      }
    ],
    servicesList: [
      { slug: "limpieza-dental", name: "Limpieza Dental Profunda", category: "Prevención & Cuidado", shortDesc: "Elimina sarro, placa y manchas sin dolor para encías sanas y un aliento fresco.", icon: "Sparkles" },
      { slug: "blanqueamiento-dental", name: "Blanqueamiento Dental", category: "Estética Dental", shortDesc: "Devuelve el brillo y la blancura natural a tu sonrisa en una sola sesión.", icon: "Smile" },
      { slug: "calzas-de-resina", name: "Calzas de Resina Estética", category: "Restauración", shortDesc: "Restauraciones invisibles del tono exacto de tus dientes sin amalgamas.", icon: "Shield" },
      { slug: "coronas-dentales", name: "Coronas Dentales", category: "Restauración Avanzada", shortDesc: "Protección y estética completa de porcelana o zirconio para piezas debilitadas.", icon: "Award" },
      { slug: "carillas-dentales", name: "Carillas Dentales", category: "Diseño de Sonrisa", shortDesc: "Láminas ultra finas para perfeccionar forma, tono y alineación de tus dientes.", icon: "Star" },
      { slug: "endodoncia", name: "Endodoncia (Tratamiento de Conducto)", category: "Salva tu Diente", shortDesc: "Elimina el dolor intenso y salva tus piezas dentales naturales.", icon: "Activity" },
      { slug: "extracciones", name: "Extracciones Dentales", category: "Cirugía Oral", shortDesc: "Procedimiento suave, rápido y sin dolor cuando una pieza no puede conservarse.", icon: "Scissors" },
      { slug: "extraccion-cordales", name: "Extracción de Cordales", category: "Cirugía Oral", shortDesc: "Cirugía especializada de muelas del juicio para evitar dolores y apiñamiento.", icon: "Zap" },
      { slug: "implantes-dentales", name: "Implantes Dentales", category: "Rehabilitación", shortDesc: "La solución fija y definitiva para recuperar piezas dentales perdidas.", icon: "CheckCircle" },
      { slug: "protesis-dentales", name: "Prótesis Dentales", category: "Rehabilitación", shortDesc: "Prótesis cómodas, estéticas y estables para masticar y sonreír con seguridad.", icon: "Smile" },
      { slug: "ortodoncia", name: "Ortodoncia Tradicional y Estética", category: "Alineación", shortDesc: "Brackets metálicos o cerámicos para alinear tus dientes y corregir tu mordida.", icon: "Grid" },
      { slug: "alineadores-transparentes", name: "Alineadores Transparentes", category: "Alineación Invisible", shortDesc: "Ortodoncia totalmente invisible, removible y cómoda sin alambres.", icon: "EyeOff" },
      { slug: "diseno-de-sonrisa", name: "Diseño de Sonrisa Digital", category: "Estética Integral", shortDesc: "Planificación digital personalizada para lograr la sonrisa armónica que siempre soñaste.", icon: "Sparkles" },
      { slug: "tratamiento-encias", name: "Tratamiento de Encías (Periodoncia)", category: "Salud Periodontal", shortDesc: "Detén el sangrado y la inflamación de encías para proteger la raíz de tus dientes.", icon: "Heart" },
      { slug: "urgencias-dentales", name: "Urgencias Dentales Siquirres", category: "Atención Inmediata", shortDesc: "Alivio rápido del dolor intenso, fracturas dentales y emergencias orales.", icon: "PhoneCall" },
      { slug: "odontopediatria", name: "Odontopediatría (Atención Infantil)", category: "Niños & Bebés", shortDesc: "Cuidado dental amoroso, divertido y libre de traumas para tus hijos.", icon: "Smile" },
      { slug: "bruxismo", name: "Tratamiento para Bruxismo", category: "Bienestar Oclusal", shortDesc: "Alivia el dolor de mandíbula, migrañas y el desgaste por rechinar dientes.", icon: "Shield" },
      { slug: "guarda-oclusal", name: "Guarda / Placa Oclusal", category: "Protección Dental", shortDesc: "Placas miorelajantes hechas a medida para proteger tus dientes por las noches.", icon: "Layers" },
      { slug: "radiografias-dentales", name: "Radiografías Dentales Digitales", category: "Diagnóstico Preciso", shortDesc: "Imágenes de alta definición con mínima radiación para un diagnóstico certero.", icon: "FileText" }
    ],
    faq: [
      {
        question: "¿Dónde se encuentra la clínica dental en Siquirres?",
        answer: "Nuestra clínica se ubica céntricamente en Siquirres, Limón. Al agendar tu cita vía WhatsApp te enviamos la ubicación exacta y opciones de parqueo.",
        aeoSummary: "La clínica dental en Siquirres ofrece ubicación céntrica en Limón con atención personalizada previa cita. Brinda servicios de odontología general, estética, cirugía y urgencias con tecnología digital de vanguardia."
      },
      {
        question: "¿Ofrecen atención de urgencias dentales en Siquirres?",
        answer: "Sí, atendemos emergencias dentales por dolor agudo, golpes o fracturas dentales coordinando prioridad de atención inmediata.",
        aeoSummary: "Se brindan urgencias dentales en Siquirres para aliviar dolor intenso, infecciones o traumatismos. El paciente puede solicitar atención prioritaria escribiendo al WhatsApp oficial de la clínica."
      },
      {
        question: "¿Tienen opciones de pago flexibles o planes para tratamientos extensos?",
        answer: "Ofrecemos valoraciones claras y opciones de pagos por etapas para que puedas realizar tus tratamientos de ortodoncia, implantes o estética sin presiones financieras.",
        aeoSummary: "La clínica dental en Siquirres cuenta con facilidades de pago fraccionado por etapas para ortodoncia, implantes y diseño de sonrisa, garantizando transparencia en los presupuestos."
      }
    ]
  },
  en: {
    seoTitle: "Dental Clinic in Siquirres | High-End Dental Care & Trusted Smiles",
    seoDescription: "Comprehensive and compassionate dental care in Siquirres, Costa Rica. Painless dentistry, advanced digital technology, and a warm team dedicated to restoring your smile confidence.",
    h1: "Advanced Dental Care & Compassionate Service in Siquirres",
    tagline: "Smiling freely isn't just about oral health. It's about reconnecting with yourself.",
    emotionalIntro: "Pain isn't always physical. Sometimes it's hiding your mouth when you talk, avoiding laughing in photos, or feeling self-conscious around those you love. At our dental center in Siquirres, we treat the human behind the smile with gentle care, modern technology, and total transparency.",
    values: [
      {
        title: "Painless & Anxiety-Free Dentistry",
        description: "Gentle anesthesia, non-invasive techniques, and a tranquil environment designed for your comfort.",
        icon: "ShieldCheck"
      },
      {
        title: "Precision Digital Diagnostics",
        description: "HD digital X-rays and scanning for accurate, comfortable, and fast diagnoses.",
        icon: "Sparkles"
      },
      {
        title: "Empathetic Patient Care",
        description: "We listen to your story and concerns first, designing personalized treatment plans at your pace.",
        icon: "Heart"
      },
      {
        title: "Comprehensive Dental Specialties",
        description: "From routine hygiene and aesthetic veneers to dental implants and surgery under one roof in Siquirres.",
        icon: "UserCheck"
      }
    ],
    servicesList: [
      { slug: "limpieza-dental", name: "Professional Teeth Cleaning", category: "Prevention & Care", shortDesc: "Painless ultrasonic plaque and stain removal for healthy gums and fresh breath.", icon: "Sparkles" },
      { slug: "blanqueamiento-dental", name: "Teeth Whitening", category: "Aesthetic Dentistry", shortDesc: "Restore the bright, natural radiance of your teeth in a single safe session.", icon: "Smile" },
      { slug: "calzas-de-resina", name: "Composite Resin Fillings", category: "Restoration", shortDesc: "Tooth-colored, invisible restorations replacing old dark amalgam fillings.", icon: "Shield" },
      { slug: "coronas-dentales", name: "Dental Crowns", category: "Advanced Restoration", shortDesc: "Durable porcelain or zirconia crowns providing complete protection for damaged teeth.", icon: "Award" },
      { slug: "carillas-dentales", name: "Porcelain Veneers", category: "Smile Design", shortDesc: "Ultra-thin custom shells to perfect the shape, tone, and alignment of your smile.", icon: "Star" },
      { slug: "endodoncia", name: "Root Canal Treatment", category: "Save Your Tooth", shortDesc: "Relieve severe toothache and preserve your natural teeth gently.", icon: "Activity" },
      { slug: "extracciones", name: "Dental Extractions", category: "Oral Surgery", shortDesc: "Gentle, quick, and painless extractions when a tooth cannot be saved.", icon: "Scissors" },
      { slug: "extraccion-cordales", name: "Wisdom Teeth Removal", category: "Oral Surgery", shortDesc: "Specialized removal of impacted wisdom teeth to prevent pain and crowding.", icon: "Zap" },
      { slug: "implantes-dentales", name: "Dental Implants", category: "Rehabilitation", shortDesc: "The permanent, fixed solution to replace missing teeth with natural look and feel.", icon: "CheckCircle" },
      { slug: "protesis-dentales", name: "Dental Dentures", category: "Rehabilitation", shortDesc: "Comfortable, custom-fitted fixed or removable dentures to chew and smile confidently.", icon: "Smile" },
      { slug: "ortodoncia", name: "Traditional & Ceramic Braces", category: "Alignment", shortDesc: "Metal or tooth-colored braces to align your teeth and fix bite issues.", icon: "Grid" },
      { slug: "alineadores-transparentes", name: "Clear Aligners", category: "Invisible Alignment", shortDesc: "Removable, comfortable, and completely invisible aligners without wires.", icon: "EyeOff" },
      { slug: "diseno-de-sonrisa", name: "Digital Smile Design", category: "Comprehensive Aesthetics", shortDesc: "Digital smile planning tailored to achieve your ideal, harmonious aesthetic result.", icon: "Sparkles" },
      { slug: "tratamiento-encias", name: "Gum Disease Treatment", category: "Periodontal Health", shortDesc: "Stop gum bleeding and inflammation to safeguard tooth roots and bone support.", icon: "Heart" },
      { slug: "urgencias-dentales", name: "Emergency Dentistry", category: "Immediate Care", shortDesc: "Fast relief for severe toothaches, broken teeth, or urgent dental trauma.", icon: "PhoneCall" },
      { slug: "odontopediatria", name: "Pediatric Dentistry", category: "Children & Kids", shortDesc: "Compassionate, fun, and fear-free dental care for babies and children.", icon: "Smile" },
      { slug: "bruxismo", name: "Bruxism & TMJ Treatment", category: "Occlusal Wellness", shortDesc: "Relieve jaw pain, headaches, and tooth wear caused by night teeth grinding.", icon: "Shield" },
      { slug: "guarda-oclusal", name: "Night Guard Appliance", category: "Tooth Protection", shortDesc: "Custom night guards designed to protect your teeth while sleeping comfortably.", icon: "Layers" },
      { slug: "radiografias-dentales", name: "Digital Dental X-Rays", category: "Precision Diagnostics", shortDesc: "High-definition, low-radiation digital imaging for accurate treatment planning.", icon: "FileText" }
    ],
    faq: [
      {
        question: "Where is the dental clinic located in Siquirres?",
        answer: "Our dental office is conveniently located in downtown Siquirres, Limón, Costa Rica. Exact directions are sent upon WhatsApp appointment confirmation.",
        aeoSummary: "The dental clinic in Siquirres, Limón provides comprehensive aesthetic, restorative, surgical, and emergency dental services using state-of-the-art digital dentistry in a comfortable environment."
      },
      {
        question: "Do you accept emergency dental walk-ins in Siquirres?",
        answer: "Yes, we prioritize urgent cases involving severe toothache, dental trauma, or sudden swelling. Contact our WhatsApp hotline for prompt scheduling.",
        aeoSummary: "Emergency dental care in Siquirres is available for severe pain, tooth fractures, or infections. Priority appointments can be booked directly via WhatsApp."
      }
    ]
  }
};

export const dentalServicesData: Record<"es" | "en", DentalService[]> = {
  es: [
    {
      slug: "limpieza-dental",
      name: "Limpieza Dental Profunda y Ultrasónica",
      seoTitle: "Limpieza Dental en Siquirres | Ultrasónica y Sin Dolor",
      seoDescription: "Limpieza dental profesional en Siquirres. Remoción de sarro, placa bacteriana y manchas sin molestias para encías sanas y sonrisa luminosa.",
      h1: "Limpieza Dental Profunda en Siquirres: Frescura y Salud Real para tu Sonrisa",
      heroTagline: "Siente la frescura inigualable de unos dientes sanos, limpios y protegidos.",
      emotionalIntro: "A veces postergamos la limpieza dental por temor al dolor o a la sensibilidad. Pero la acumulación de sarro no solo afecta el aliento o el color de tus dientes; debilita silenciosamente tus encías. Nuestro protocolo de limpieza ultrasónica está diseñado para ser suave, indoloro y renovador.",
      mainProblem: "Acumulación de sarro, placa bacteriana, sangrado al cepillarse y manchas causadas por café, té o alimentos que opacan el aliento y la luminosidad natural.",
      symptomsChecklist: [
        "Encías rojas, inflamadas o que sangran al cepillarte",
        "Sensación de aspereza o acumulación amarillenta entre tus dientes",
        "Mal aliento constante a pesar de lavarte los dientes",
        "Manchas oscuras o amarillas en la superficie dental"
      ],
      benefits: [
        { title: "Encías Libres de Inflamación", description: "Detiene el sangrado y previene enfermedades de las encías como la gingivitis." },
        { title: "Aliento Fresco y Duradero", description: "Elimina las bacterias alojadas en zonas imposibles de alcanzar con el cepillo común." },
        { title: "Sensación de Limpieza Extrema", description: "Dientes lisos, pulidos y sin textura áspera desde el primer minuto." }
      ],
      procedureTimeline: [
        { step: "01", title: "Evaluación Diagnóstica", description: "Inspección clínica suave para identificar acumulación de placa y estado de encías." },
        { step: "02", title: "Ultrasonido Indoloro", description: "Vibraciones ultrasónicas de alta frecuencia que desprenden el sarro sin dañar el esmalte." },
        { step: "03", title: "Pulido Dental & Profilaxis", description: "Pasta profiláctica especial para eliminar manchas superficiales y alisar la superficie." },
        { step: "04", title: "Aplicación de Flúor", description: "Remineralización protectora para sellar el esmalte y prevenir la sensibilidad." }
      ],
      technology: [
        { name: "Piezoeléctrico Ultrasónico de Alta Calibración", description: "Tecnología con irrigación de agua continua que desprende cálculos sin fricción ni dolor." }
      ],
      microcopy: {
        duration: "45 minutos",
        recovery: "Inmediata (puedes comer normalmente)",
        frequency: "Cada 6 meses",
        aftercare: "Evitar bebidas pigmentadas durante 2 horas posteriores."
      },
      faq: [
        {
          question: "¿Cada cuánto debo realizarme una limpieza dental profesional?",
          answer: "Se recomienda cada 6 meses en pacientes sanos. En personas con tendencia a acumular sarro o problemas de encías, cada 4 meses.",
          aeoSummary: "La limpieza dental profesional debe realizarse cada 6 meses para prevenir gingivitis, sarro y caries. En pacientes con sangrado de encías se aconseja cada 4 meses."
        },
        {
          question: "¿La limpieza dental ultrasónica causa dolor o daña el esmalte?",
          answer: "No. El ultrasonido actúa solo sobre el cálculo sin rallar el esmalte natural. Es un tratamiento cómodo e indoloro.",
          aeoSummary: "La profilaxis dental con ultrasonido no desgasta ni daña el esmalte de los dientes. Elimina el sarro mediante microvibraciones de agua de forma totalmente segura."
        }
      ],
      whatsappText: "Hola, me gustaría agendar una valoración para mi Limpieza Dental en Siquirres."
    },
    {
      slug: "blanqueamiento-dental",
      name: "Blanqueamiento Dental Profesional",
      seoTitle: "Blanqueamiento Dental en Siquirres | Sonrisa Brillante y Segura",
      seoDescription: "Blanqueamiento dental profesional en Siquirres. Aclara varios tonos tu sonrisa sin dañar el esmalte ni causar sensibilidad extrema.",
      h1: "Blanqueamiento Dental en Siquirres: Recupera el Brillo Natural de tu Sonrisa",
      heroTagline: "Vuelve a sonreír para las fotos sin vacilar ni esconder tus dientes.",
      emotionalIntro: "El paso del tiempo, el café o simplemente la genética pueden hacer que los dientes pierdan su tono claro. No se trata solo de vanidad: una sonrisa brillante te hace proyectar juventud, salud y seguridad en cada reunión o encuentro personal.",
      mainProblem: "Dientes amarillentos, manchados o desgastados por el consumo de café, té, vino o tabaquismo que restan confianza al sonreír.",
      symptomsChecklist: [
        "Tono amarillento o verdoso visible en tus dientes",
        "Inseguridad al sonreír en fotografías o reuniones",
        "Sensación de que el cepillado ya no aclara el tono dental"
      ],
      benefits: [
        { title: "Aclaramiento de Varios Tonos", description: "Resultados visibles y radiantes desde la primera sesión profesional." },
        { title: "Protección contra Sensibilidad", description: "Fórmulas de gel enriquecidas con nitrato de potasio para proteger la pulpa." },
        { title: "Resultados Duraderos", description: "Sonrisa blanca y natural manteniendo cuidados sencillos en casa." }
      ],
      procedureTimeline: [
        { step: "01", title: "Valoración & Limpieza", description: "Aseguramos que no haya caries ni sarro activo antes de iniciar el aclaramiento." },
        { step: "02", title: "Protección de Encías", description: "Colocación de barrera protectora para aislar las encías delicadas." },
        { step: "03", title: "Aplicación Gel LED", description: "Gel blanqueador de grado médico activado con luz fría especial." },
        { step: "04", title: "Revelado & Desensibilización", description: "Enjuague y aplicación de sellador protector contra la sensibilidad." }
      ],
      technology: [
        { name: "Luz LED Fría de Espectro Controlado", description: "Acelera el proceso de aclaramiento sin generar calor ni quemaduras en el tejido dental." }
      ],
      microcopy: {
        duration: "60 a 75 minutos",
        recovery: "Inmediata",
        frequency: "1 vez al año o retóques según estilo de vida",
        aftercare: "Seguir 'dieta blanca' (sin colorantes ni café) por 48 horas."
      },
      faq: [
        {
          question: "¿Cuánto tiempo duran los resultados del blanqueamiento dental?",
          answer: "Entre 1 y 2 años, dependiendo de hábitos alimenticios como el consumo de café, vino tinto o tabaquismo.",
          aeoSummary: "El blanqueamiento dental profesional dura entre 12 y 24 meses. Se mantiene con buena higiene bucal y limpiezas dentales periódicas."
        }
      ],
      whatsappText: "Hola, deseo información sobre el Blanqueamiento Dental en Siquirres."
    },
    {
      slug: "calzas-de-resina",
      name: "Calzas de Resina Estética",
      seoTitle: "Calzas de Resina en Siquirres | Restauraciones Invisibles Sin Dolor",
      seoDescription: "Calzas de resina del color natural de tu diente en Siquirres. Reemplaza amalgamas oscuras y elimina caries con estética perfecta.",
      h1: "Calzas de Resina Estética en Siquirres: Restaura la Salud de tus Dientes de Forma Invisible",
      heroTagline: "Elimina las caries y reemplaza las antiguas amalgamas grises sin que nadie note la diferencia.",
      emotionalIntro: "Las amalgamas grises o las caries visibles en los dientes posteriores pueden hacerte sentir incómodo al reírte abiertamente. Las calzas de resina de última generación imitan a la perfección la textura, tono y translucidez de un diente natural, devolviéndole su fuerza original.",
      mainProblem: "Caries dentales, fracturas en los bordes o amalgamas metálicas oscuras antiguas que afectan la estética y la salud estructural del diente.",
      symptomsChecklist: [
        "Sensibilidad al comer dulces o bebidas muy frías",
        "Manchas oscuras o pequeños orificios visibles en los dientes",
        "Amalgamas grises o metálicas que se notan al abrir la boca"
      ],
      benefits: [
        { title: "Mismo Color de tu Diente", description: "Resinas fotocurables de alta gama que se mimetizan de forma imperceptible." },
        { title: "Sellado Hermético sin Fugas", description: "Protege el diente frente a futuras filtraciones bacterianas." },
        { title: "Sin Mercurio ni Metales", description: "Materiales biocompatibles, seguros y estéticos." }
      ],
      procedureTimeline: [
        { step: "01", title: "Anestesia Local Suave", description: "Adormecimiento preciso de la zona para cero molestias durante el proceso." },
        { step: "02", title: "Remoción de Caries", description: "Limpieza minuciosa del tejido afectado preservando la estructura sana." },
        { step: "03", title: "Estrado de Resina", description: "Aplicación por capas de resina estética y pulido con luz polimerizadora." },
        { step: "04", title: "Ajuste de Mordida & Pulido", description: "Verificación de la oclusión para masticar con total comodidad." }
      ],
      technology: [
        { name: "Resinas Nano-híbridas Fotocurables", description: "Material de alta resistencia a la abrasión con acabado brillante y duradero." }
      ],
      microcopy: {
        duration: "30 a 45 minutos por pieza",
        recovery: "Inmediata",
        frequency: "Revisión anual",
        aftercare: "Evitar masticar hielo o alimentos extremadamente duros."
      },
      faq: [
        {
          question: "¿Es doloroso colocarse una calza de resina?",
          answer: "No. El procedimiento se realiza bajo anestesia local totalmente indolora.",
          aeoSummary: "La colocación de calzas de resina es indolora gracias a la anestesia local previa. El paciente puede comer con normalidad poco después."
        }
      ],
      whatsappText: "Hola, quisiera agendar una valoración para Calzas de Resina en Siquirres."
    },
    {
      slug: "coronas-dentales",
      name: "Coronas Dentales de Zirconio y Porcelana",
      seoTitle: "Coronas Dentales en Siquirres | Protección y Estética Total",
      seoDescription: "Coronas dentales libres de metal en Siquirres. Restaura dientes destruidos o con endodoncia con máxima resistencia y belleza.",
      h1: "Coronas Dentales en Siquirres: Recupera la Fuerza y Forma Completa de tus Dientes",
      heroTagline: "Protege piezas debilitadas con fundas dentales ultra resistentes y del tono exacto de tus dientes.",
      emotionalIntro: "Cuando un diente sufre un desgaste severo, un golpe o un tratamiento de conducto, pierde su fortaleza natural. Dejarlo desprotegido puede llevar a una fractura irreparable. Una corona dental devuelve la anatomía, funcionalidad y estética para que vuelvas a masticar sin temor.",
      mainProblem: "Dientes fracturados, con grandes calzas defectuosas, o debilitados tras una endodoncia que corren riesgo de romperse.",
      symptomsChecklist: [
        "Diente roto o fracturado considerablemente",
        "Molestia o inseguridad al masticar alimentos sólidos",
        "Pieza dental tratada con endodoncia sin protección adecuada"
      ],
      benefits: [
        { title: "Resistencia Extrema al Masticar", description: "Soporta las fuerzas de masticación igual o mejor que un diente natural." },
        { title: "Estética Premium Sin Bordes Negros", description: "Coronas de zirconio sin metal que jamás muestran líneas oscuras en la encía." },
        { title: "Protección para Toda la Vida", description: "Sella completamente el diente subyacente para evitar fisuras." }
      ],
      procedureTimeline: [
        { step: "01", title: "Preparación Dental", description: "Tallado suave del diente para dar espacio a la estructura protectora." },
        { step: "02", title: "Impresión / Escáner Digital", description: "Toma de molde exacto de tu boca sin molestias." },
        { step: "03", title: "Corona Provisional", description: "Colocación de pieza temporal mientras el laboratorio elabora la definitiva." },
        { step: "04", title: "Cementación Definitiva", description: "Adhesión de alta fuerza y ajuste preciso de tu nueva corona." }
      ],
      technology: [
        { name: "Zirconio Monolítico de Alta Translucidez", description: "Material cerámico biocompatible de dureza superior y tono natural." }
      ],
      microcopy: {
        duration: "2 a 3 citas",
        recovery: "Inmediata",
        frequency: "Duración de 10 a 20+ años",
        aftercare: "Mantener uso de hilo dental e higiene bucal constante."
      },
      faq: [
        {
          question: "¿De qué material son las coronas dentales recomendadas?",
          answer: "El zirconio y la porcelana pura son las mejores opciones actuales por su estética impecable y resistencia.",
          aeoSummary: "Las coronas de zirconio son la opción más recomendada en odontología moderna al no contener metal, ofrecer alta resistencia masticatoria y tono natural."
        }
      ],
      whatsappText: "Hola, necesito información sobre Coronas Dentales en Siquirres."
    },
    {
      slug: "carillas-dentales",
      name: "Carillas Dentales Estéticas",
      seoTitle: "Carillas Dentales en Siquirres | Transforma tu Sonrisa",
      seoDescription: "Carillas dentales en Siquirres. Corrige manchas, formas irregulares y espacios en tus dientes para una sonrisa perfecta de portada.",
      h1: "Carillas Dentales en Siquirres: La Sonrisa Armónica que Siempre Soñaste",
      heroTagline: "Alinea, blanquea y perfecciona la forma de tus dientes frontales con elegancia.",
      emotionalIntro: "Si no te gusta el tamaño de tus dientes, tienes pequeñas desviaciones o manchas que no se quitan con blanqueamiento, las carillas dentales son el tratamiento estético por excelencia. Una transformación discreta que respeta tu armonía facial.",
      mainProblem: "Dientes pequeños, desgastados, con bordes irregulares, espacios (diastemas) o decoloración severa.",
      symptomsChecklist: [
        "Desgaste visible en los bordes de los dientes frontales",
        "Espacios abiertos entre diente y diente que restan armonía",
        "Manchas profundas que no responden al blanqueamiento habitual"
      ],
      benefits: [
        { title: "Transformación Estética Rápida", description: "Resultados espectaculares y naturales en pocas sesiones." },
        { title: "Resistencia a las Manchas", description: "La porcelana no se mancha con café, vino ni alimentos pigmentados." },
        { title: "Diseño 100% Personalizado", description: "Forma y brillo elegidos de acuerdo a tus rasgos faciales." }
      ],
      procedureTimeline: [
        { step: "01", title: "Diseño & Diagnóstico", description: "Evaluación estética y simulación digital de tu nueva sonrisa." },
        { step: "02", title: "Micro-preparación Mínima", description: "Desgaste imperceptible del esmalte de ser necesario." },
        { step: "03", title: "Prueba de Prueba Mock-up", description: "Verificación en boca antes de la fabricación final." },
        { step: "04", title: "Adhesión de Carillas", description: "Fijación definitiva con cementos de alta resistencia." }
      ],
      technology: [
        { name: "Porcelana Inyectada Disilicato de Litio", description: "Láminas ultrafinas de increíble dureza y estética natural." }
      ],
      microcopy: {
        duration: "2 citas principales",
        recovery: "Inmediata",
        frequency: "Duración de 10 a 15+ años",
        aftercare: "Evitar morder objetos duros como empaques o uñas."
      },
      faq: [
        {
          question: "¿Hay que desgastar mucho el diente para colocar carillas?",
          answer: "No. Con las carillas modernas el desgaste es mínimo (fracciones de milímetro) o en algunos casos nulo.",
          aeoSummary: "Las carillas dentales modernas requieren un desgaste mínimo del esmalte preservando la estructura dental natural de forma segura."
        }
      ],
      whatsappText: "Hola, quisiera consultar sobre Carillas Dentales en Siquirres."
    },
    {
      slug: "endodoncia",
      name: "Endodoncia (Tratamiento de Conducto)",
      seoTitle: "Endodoncia en Siquirres | Elimina el Dolor y Salva tu Diente",
      seoDescription: "Endodoncia sin dolor en Siquirres. Tratamiento de conductos especializado para eliminar infecciones y aliviar dolores agudos.",
      h1: "Endodoncia en Siquirres: Alivio Inmediato del Dolor y Conservación Dental",
      heroTagline: "Dile adiós al dolor pulsante y evita perder tu pieza dental natural.",
      emotionalIntro: "El dolor de muela persistente e intenso no te deja dormir, trabajar ni concentrarte. Surge cuando la infección llega al nervio del diente. La endodoncia elimina la infección y el dolor desde la raíz, permitiéndote conservar tu diente propio.",
      mainProblem: "Dolor pulsante e insoportable en el diente, sensibilidad severa al calor/frío o absceso con pus en la encía.",
      symptomsChecklist: [
        "Dolor constante que aumenta por las noches o al masticar",
        "Sensibilidad punzante al tomar alimentos calientes o fríos",
        "Hinchazón en la encía alrededor del diente afectado"
      ],
      benefits: [
        { title: "Alivio Definitivo del Dolor", description: "Elimina el nervio inflamado infectado acabando con la molestia desde la primera sesión." },
        { title: "Evita la Extracción Dental", description: "Conserva la raíz natural en tu boca evitando el hueso retraído." },
        { title: "Tratamiento en 1 o 2 Sesiones", description: "Técnicas mecanizadas para un procedimiento rápido y confortable." }
      ],
      procedureTimeline: [
        { step: "01", title: "Anestesia Profunda", description: "Bloqueo anestésico completo para cero dolor durante el procedimiento." },
        { step: "02", title: "Limpieza del Conducto", description: "Esterilización de las cavidades internas del nervio infectado." },
        { step: "03", title: "Sellado Biocompatible", description: "Relleno especial para prevenir futuras re-infecciones." },
        { step: "04", title: "Reconstrucción Estética", description: "Colocación de calza o corona para restaurar la pieza." }
      ],
      technology: [
        { name: "Motor de Endodoncia Mecanizada & Localizador Apical", description: "Garantiza una limpieza exacta de la longitud de la raíz con rapidez y precisión." }
      ],
      microcopy: {
        duration: "60 a 90 minutos",
        recovery: "1 a 2 días de ligera molestia al masticar",
        frequency: "Procedimiento único por pieza",
        aftercare: "Tomar analgésico recetado y evitar masticar alimentos muy duros antes de la restauración final."
      },
      faq: [
        {
          question: "¿Duele hacerse un tratamiento de conducto o endodoncia?",
          answer: "No. Se utiliza anestesia profunda de última generación para que el paciente no sienta molestia alguna.",
          aeoSummary: "La endodoncia es un tratamiento indoloro que elimina las infecciones del nervio dental. Se realiza bajo anestesia local profunda."
        }
      ],
      whatsappText: "Hola, necesito atención urgente para una Endodoncia en Siquirres."
    },
    {
      slug: "extracciones",
      name: "Extracciones Dentales Simples y Complejas",
      seoTitle: "Extracción Dental en Siquirres | Procedimiento Rápido y Indoloro",
      seoDescription: "Extracciones dentales seguras y sin dolor en Siquirres. Cirugía oral cuidadosa cuando la pieza dental no puede ser salvada.",
      h1: "Extracciones Dentales en Siquirres: Atención Cuidadosa y Libre de Dolor",
      heroTagline: "Cuando un diente no puede salvarse, te ayudamos a retirarlo con la máxima suavidad.",
      emotionalIntro: "Entendemos que perder un diente genera temor e incertidumbre. Nuestro compromiso es agotar todas las opciones para salvarlo, pero cuando la extracción es la única alternativa para proteger tu salud oral, lo hacemos con delicadeza, velocidad y sin dolor.",
      mainProblem: "Dientes destruidos por caries avanzadas, fracturas profundas de raíz o piezas con infecciones recurrentes inapelables.",
      symptomsChecklist: [
        "Diente totalmente destruido donde no es posible colocar una corona",
        "Movilidad dental severa asociada a enfermedad periodontal",
        "Infecciones crónicas recurrentes alrededor de la raíz"
      ],
      benefits: [
        { title: "Procedimiento Suave e Indoloro", description: "Técnicas quirúrgicas atraumáticas bajo anestesia eficaz." },
        { title: "Cicatrización Rápida", description: "Indicaciones y preservación de hueso para futuros implantes." },
        { title: "Prevención de Infecciones Mayores", description: "Detiene la propagación de bacterias a piezas vecinas." }
      ],
      procedureTimeline: [
        { step: "01", title: "Anestesia Local Profunda", description: "Aseguramos insensibilidad total de la zona a intervenir." },
        { step: "02", title: "Luxación Delicada", description: "Técnica atraumática para aflojar la pieza sin dañar el tejido óseo." },
        { step: "03", title: "Extracción Limpia", description: "Retiro completo del diente y desinfección del alvéolo." },
        { step: "04", title: "Sutura & Cuidados", description: "Colocación de puntos solubles si es necesario e instrucciones posoperatorias." }
      ],
      technology: [
        { name: "Suturas de Alta Absorción & Instrumental Atraumático", description: "Minimiza la inflamación postquirúrgica y acelera la recuperación." }
      ],
      microcopy: {
        duration: "30 a 45 minutos",
        recovery: "2 a 3 días de reposo relativo",
        frequency: "Según necesidad",
        aftercare: "Aplicar hielo local, evitar escupir y no consumir alimentos calientes las primeras 24 horas."
      },
      faq: [
        {
          question: "¿Cuánto tarda en cicatrizar una extracción dental?",
          answer: "La encía cierra superficialmente en 7 a 10 días, y la regeneración ósea completa toma unos 3 meses.",
          aeoSummary: "Tras una extracción dental, la encía inicia cicatrización en 7 días. Es fundamental seguir los cuidados de higiene e indicaciones de descanso."
        }
      ],
      whatsappText: "Hola, necesito consultar por una Extracción Dental en Siquirres."
    },
    {
      slug: "extraccion-cordales",
      name: "Extracción de Cordales (Muelas del Juicio)",
      seoTitle: "Extracción de Cordales en Siquirres | Cirugía de Muelas del Juicio",
      seoDescription: "Cirugía de cordales en Siquirres. Extrae tus muelas del juicio impactadas sin dolor y evita apiñamiento y quistes.",
      h1: "Extracción de Cordales en Siquirres: Cirugía Especializada y Segura",
      heroTagline: "Evita dolores intensos, infecciones y desalineación en tus dientes.",
      emotionalIntro: "Las cordales o muelas del juicio suelen erupcionar sin espacio suficiente, quedando atrapadas o empujando al resto de tus dientes. La extracción a tiempo previene dolores severos, quistes y el daño a las piezas vecinas.",
      mainProblem: "Cordales retenidas, inclinadas o infectadas (pericoronaritis) que causan dolor de oído, mandíbula y apiñamiento.",
      symptomsChecklist: [
        "Dolor e inflamación al fondo de la boca o dificultad para abrirla",
        "Mal sabor o pus cerca de la última muela",
        "Empuje o presión sobre los dientes frontales"
      ],
      benefits: [
        { title: "Cirugía Rápida y Planificada", description: "Diagnóstico radiológico para planificar un abordaje seguro." },
        { title: "Cero Dolor Durante la Cirugía", description: "Técnicas anestésicas potentes y ambiente seguro." },
        { title: "Prevención de Apiñamiento", description: "Protege la alineación lograda por tu tratamiento de ortodoncia." }
      ],
      procedureTimeline: [
        { step: "01", title: "Radiografía Panorámica", description: "Estudio exacto de la posición de la raíz y nervios adyacentes." },
        { step: "02", title: "Anestesia Local Completa", description: "Insensibilización profunda del área posterior." },
        { step: "03", title: "Odontosección Quirúrgica", description: "Extracción fragmentada para no lesionar la encía ni el hueso." },
        { step: "04", title: "Sutura & Receta Médica", description: "Cierre hermético y receta de analgésicos y antiinflamatorios." }
      ],
      technology: [
        { name: "Piezoquirúrgico / Turbina Quirúrgica de Alta Velocidad", description: "Cortes ultra precisos en hueso sin quemar el tejido." }
      ],
      microcopy: {
        duration: "45 a 60 minutos",
        recovery: "3 a 5 días",
        frequency: "Única vez en la vida",
        aftercare: "Dieta blanda fría, reposo físico y medicación puntual recetada."
      },
      faq: [
        {
          question: "¿Es peligroso extraerse las cordales?",
          answer: "No. Con una radiografía previa y un cirujano experimentado es un procedimiento de rutina muy seguro.",
          aeoSummary: "La cirugía de cordales es un procedimiento seguro que previene infecciones y apiñamiento dental. Se planifica con radiografía previa."
        }
      ],
      whatsappText: "Hola, quisiera agendar cita para Extracción de Cordales en Siquirres."
    },
    {
      slug: "implantes-dentales",
      name: "Implantes Dentales Fijos",
      seoTitle: "Implantes Dentales en Siquirres | Solución Fija y Definitiva",
      seoDescription: "Implantes dentales en Siquirres. Recupera dientes perdidos con tornillos de titanio biocompatibles de apariencia natural.",
      h1: "Implantes Dentales en Siquirres: Vuelve a Comer y Sonreír con Dientes Fijos",
      heroTagline: "La alternativa moderna permanente que reemplaza dientes perdidos sin tocar las piezas sanas vecinas.",
      emotionalIntro: "Perder un diente afecta la masticación, la forma de tu rostro y la seguridad al sonreír. Los implantes dentales actúan como raíces artificiales de titanio sobre las que se coloca una corona fija que luce y se siente exactamente como un diente natural.",
      mainProblem: "Ausencia de una o varias piezas dentales que dificulta masticar, genera espacios vacíos y causa hundimiento facial.",
      symptomsChecklist: [
        "Espacios vacíos en la boca por dientes extraídos",
        "Incomodidad al usar prótesis removibles o puentes tradicionales",
        "Pérdida progresiva de hueso en la zona donde falta la pieza"
      ],
      benefits: [
        { title: "Dientes Fijos para Siempre", description: "Se integran al hueso de forma permanente brindando estabilidad total." },
        { title: "Mastica Todo lo que Te Guste", description: "Recupera la fuerza de mordida original de tu juventud." },
        { title: "Conserva el Hueso Facial", description: "Evita la reabsorción ósea y el envejecimiento prematuro del rostro." }
      ],
      procedureTimeline: [
        { step: "01", title: "Evaluación Tomográfica", description: "Análisis en 3D del volumen de hueso disponible." },
        { step: "02", title: "Colocación del Implante", description: "Fijación indolora del tornillo de titanio en el hueso." },
        { step: "03", title: "Osteointegración", description: "Período de cicatrización para que el titanio se fusione al hueso." },
        { step: "04", title: "Corona Definitiva", description: "Instalación de la corona de porcelana o zirconio fija." }
      ],
      technology: [
        { name: "Titanio Grado Médico Biocompatible", description: "Material hipoalergénico de máxima tasa de integración al hueso humano." }
      ],
      microcopy: {
        duration: "Fases distribuidas en unos meses",
        recovery: "2 a 3 días tras la colocación quirúrgica",
        frequency: "Resultado permanente",
        aftercare: "Excelente higiene dental e hilo especializado para implantes."
      },
      faq: [
        {
          question: "¿El cuerpo puede rechazar un implante dental?",
          answer: "El titanio es biocompatible y el porcentaje de éxito supera el 98% en pacientes sanos.",
          aeoSummary: "Los implantes dentales de titanio poseen una tasa de éxito superior al 98%. No producen rechazo biológico al ser hipoalergénicos."
        }
      ],
      whatsappText: "Hola, me interesa agendar valoración de Implantes Dentales en Siquirres."
    },
    {
      slug: "protesis-dentales",
      name: "Prótesis Dentales Fijas y Removibles",
      seoTitle: "Prótesis Dentales en Siquirres | Ajuste Cómodo y Estético",
      seoDescription: "Prótesis dentales en Siquirres. Recupera la función de masticar y la estética facial con dentaduras modernas y estables.",
      h1: "Prótesis Dentales en Siquirres: Comodidad, Firmeza y Sonrisas Completas",
      heroTagline: "Vuelve a disfrutar de tus comidas favoritas con dentaduras estéticas que no se mueven ni molestan.",
      emotionalIntro: "Faltarle múltiples dientes a una persona altera la digestión, el habla y la confianza personal. Diseñamos prótesis dentales modernas, ligeras y ultra estéticas adaptadas a la anatomía de tu boca para un ajuste firme y natural.",
      mainProblem: "Pérdida de múltiples o la totalidad de los dientes que dificulta comer, hablar claramente y desdibuja el contorno de los labios.",
      symptomsChecklist: [
        "Dificultad para triturar alimentos sólidos o carnes",
        "Prótesis viejas flojas, desajustadas o que causan llagas",
        "Hundimiento de mejillas y labios por falta de soporte dental"
      ],
      benefits: [
        { title: "Ajuste Firme y Anatómico", description: "Adaptación exacta que evita roces molestos y caídas al hablar." },
        { title: "Aspecto Natural e Imperceptible", description: "Dientes de acrílico o cerámica con matices de color realistas." },
        { title: "Mejora Digestiva y de Habla", description: "Permite triturar correctamente la comida y pronunciar sin dificultad." }
      ],
      procedureTimeline: [
        { step: "01", title: "Toma de Moldes", description: "Copia exacta de los maxilares para un diseño personalizado." },
        { step: "02", title: "Prueba de Cera & Color", description: "Selección conjunta del tono y tamaño ideal de los dientes." },
        { step: "03", title: "Prueba de Mordida", description: "Ajuste de la articulación para una masticación cómoda." },
        { step: "04", title: "Entrega & Calibración", description: "Colocación final y recomendaciones de adaptación." }
      ],
      technology: [
        { name: "Acrílicos y Polímeros Flexibles Termoinyectados", description: "Bases más ligeras, resistentes e hipoalergénicas." }
      ],
      microcopy: {
        duration: "3 a 4 citas de confección",
        recovery: "Período breve de adaptación",
        frequency: "Renovación cada 5 a 7 años",
        aftercare: "Limpieza diaria con cepillo especial para prótesis y pastillas efervescentes."
      },
      faq: [
        {
          question: "¿Qué diferencia hay entre prótesis fija y removible?",
          answer: "La fija se ancla sobre dientes o implantes y no se retira. La removible se puede retirar para su limpieza diaria.",
          aeoSummary: "Las prótesis dentales fijas brindan mayor firmeza permanente, mientras que las removibles permiten una higiene externa práctica."
        }
      ],
      whatsappText: "Hola, deseo información sobre Prótesis Dentales en Siquirres."
    },
    {
      slug: "ortodoncia",
      name: "Ortodoncia Tradicional y Estética",
      seoTitle: "Ortodoncia en Siquirres | Brackets Metálicos y Cerámicos",
      seoDescription: "Ortodoncia en Siquirres. Alinea tus dientes y corrige tu mordida con brackets metálicos o estéticos de porcelana.",
      h1: "Ortodoncia en Siquirres: Alinea tus Dientes y Transforma tu Sonrisa",
      heroTagline: "Consigue la alineación perfecta y la mordida saludable que durará toda tu vida.",
      emotionalIntro: "Los dientes apiñados o torcidos no solo afectan tu imagen; dificultan la higiene, aumentan el riesgo de caries y causan desgastes irregulares en tu mordida. La ortodoncia corrige la posición de cada pieza para una sonrisa funcional y deslumbrante.",
      mainProblem: "Dientes torcidos, apiñados, montados o mordidas cruzadas/abiertas que restan armonía y salud.",
      symptomsChecklist: [
        "Dientes visibles torcidos o empalmados unos sobre otros",
        "Dificultad para pasar el hilo dental entre piezas apretadas",
        "Molestias en la mandíbula al masticar o desgastes desiguales"
      ],
      benefits: [
        { title: "Dientes Perfectamente Alineados", description: "Sonrisa simétrica y estéticamente equilibrada." },
        { title: "Mordida Funcional Correcta", description: "Distribuye adecuadamente la fuerza de masticación." },
        { title: "Opciones Discretas Cerámicas", description: "Brackets del color del diente que pasan casi desapercibidos." }
      ],
      procedureTimeline: [
        { step: "01", title: "Estudio Ortodóntico", description: "Radiografías, fotografías y modelos de estudio 3D." },
        { step: "02", title: "Instalación de Brackets", description: "Fijación precisa de los alfileres/brackets en cada diente." },
        { step: "03", title: "Controles Mensuales", description: "Ajustes periódicos para guiar el movimiento dental." },
        { step: "04", title: "Retirada & Retenedores", description: "Retiro y colocación de retenedores para mantener los resultados." }
      ],
      technology: [
        { name: "Brackets Autoligables & Cerámicos de Zafiro", description: "Reducen la fricción, aceleran el movimiento y ofrecen máxima discreción." }
      ],
      microcopy: {
        duration: "12 a 24 meses promedio",
        recovery: "2 a 3 días de adaptación tras cada ajuste mensual",
        frequency: "Citas mensuales de control",
        aftercare: "Uso estricto de cepillos interdentales y cera para ortodoncia."
      },
      faq: [
        {
          question: "¿A qué edad se puede iniciar el tratamiento de ortodoncia?",
          answer: "A partir de los 7 años para ortodoncia interceptiva, y en adolescentes o adultos a cualquier edad.",
          aeoSummary: "La ortodoncia es efectiva a cualquier edad. En adultos alinea los dientes con el mismo éxito que en adolescentes."
        }
      ],
      whatsappText: "Hola, quisiera agendar una consulta de Ortodoncia en Siquirres."
    },
    {
      slug: "alineadores-transparentes",
      name: "Alineadores Transparentes (Ortodoncia Invisible)",
      seoTitle: "Alineadores Transparentes en Siquirres | Ortodoncia Invisible",
      seoDescription: "Alineadores transparentes en Siquirres. Alinea tus dientes de forma 100% invisible, removible y sin alambres.",
      h1: "Alineadores Transparentes en Siquirres: La Ortodoncia Invisible e Indetectable",
      heroTagline: "Alinea tus dientes sin que nadie note que estás en tratamiento ortodóntico.",
      emotionalIntro: "Si deseas alinear tus dientes pero no quieres llevar brackets metálicos por tu trabajo o estilo de vida, los alineadores transparentes son la solución perfecta. Placas invisibles hechas a la medida que mueven tus dientes suavemente mientras continúas tu vida normalmente.",
      mainProblem: "Dientes desalineados en pacientes adultos o jóvenes que rechazan el uso de brackets tradicionales visibles.",
      symptomsChecklist: [
        "Deseo de alinear tus dientes de forma completamente discreta",
        "Preocupación por llagas o molestias de alambres en la boca",
        "Necesidad de quitarte el aparato para comer o eventos especiales"
      ],
      benefits: [
        { title: "100% Invisibles", description: "Férulas transparentes que nadie notará que llevas puestas." },
        { title: "Removibles para Comer e Higiene", description: "Quítatelo para comer lo que quieras y lavarte los dientes con facilidad." },
        { title: "Sin Alambres ni Emergencias", description: "Olvídate de brackets caídos o alambres punzantes en la encía." }
      ],
      procedureTimeline: [
        { step: "01", title: "Escaneo Digital 3D", description: "Captura de tu boca en tres dimensiones sin pastas molestas." },
        { step: "02", title: "Planificación Virtual", description: "Diseño paso a paso de los movimientos dentales en computadora." },
        { step: "03", title: "Entrega de Alineadores", description: "Recepcionas tu kit de alineadores seriados." },
        { step: "04", title: "Cambio Progresivo", description: "Cambio de placas en casa cada 10 a 14 días según indicación." }
      ],
      technology: [
        { name: "Termopolímero Medico SmartTrack", description: "Material flexible de ajuste continuo que aplica fuerza constante y suave." }
      ],
      microcopy: {
        duration: "8 a 18 meses",
        recovery: "Sin molestias",
        frequency: "Uso recomendado de 22 horas al día",
        aftercare: "Lavar los alineadores con agua fría y jabón neutro."
      },
      faq: [
        {
          question: "¿Cuántas horas al día debo usar los alineadores transparentes?",
          answer: "Se deben llevar puestos mínimo 22 horas al día, retirándolos solo para comer y lavarse los dientes.",
          aeoSummary: "Los alineadores transparentes deben utilizarse 22 horas diarias para garantizar el movimiento dental planificado."
        }
      ],
      whatsappText: "Hola, me interesa consultar por Alineadores Transparentes en Siquirres."
    },
    {
      slug: "diseno-de-sonrisa",
      name: "Diseño de Sonrisa Digital Integral",
      seoTitle: "Diseño de Sonrisa en Siquirres | Planificación Digital Personalizada",
      seoDescription: "Diseño de sonrisa digital en Siquirres. Planifica y visualiza la sonrisa perfecta adaptada a la anatomía de tu rostro.",
      h1: "Diseño de Sonrisa Digital en Siquirres: Perfección Estética a la Medida",
      heroTagline: "Planificamos digitalmente cada detalle para lograr la sonrisa más armoniosa para tu rostro.",
      emotionalIntro: "Un diseño de sonrisa no consiste en hacer todos los dientes iguales y ultra blancos. Consiste en estudiar las proporciones de tus labios, rostro, encías y personalidad para crear una sonrisa única, elegante y natural que potencie tu atractivo.",
      mainProblem: "Sonrisas asimétricas, encías desproporcionadas, dientes con tonos desiguales o desgastes que opacan tu rostro.",
      symptomsChecklist: [
        "Inconformidad general con la apariencia de tus dientes al sonreír",
        "Dientes de tamaños dispares o desiguales",
        "Deseo de renovar tu imagen personal con máxima exigencia estética"
      ],
      benefits: [
        { title: "Visualización Antes de Iniciar", description: "Prueba digital en foto y simulación en boca antes de intervenir." },
        { title: "Tratamiento Multidisciplinario", description: "Combina blanqueamiento, carillas o contorneado según tu caso." },
        { title: "Resultado Natural e Impactante", description: "Sonrisa radiante respetando tu esencia personal." }
      ],
      procedureTimeline: [
        { step: "01", title: "Sesión Fotográfica & 3D", description: "Registro de alta resolución de tu rostro y sonrisa." },
        { step: "02", title: "Diseño Digital DSD", description: "Análisis computarizado de proporciones doradas faciales." },
        { step: "03", title: "Prueba Mock-up en Boca", description: "Colocación temporal para que veas tu futura sonrisa en vivo." },
        { step: "04", title: "Ejecución Master", description: "Realización de los tratamientos aprobados paso a paso." }
      ],
      technology: [
        { name: "Digital Smile Design (DSD) Software", description: "Planificación estética facial personalizada de precisión milimétrica." }
      ],
      microcopy: {
        duration: "2 a 4 citas según complejidad",
        recovery: "Inmediata",
        frequency: "Resultado de larga duración",
        aftercare: "Revisiones periódicas y limpiezas profesionales de mantenimiento."
      },
      faq: [
        {
          question: "¿Puedo ver cómo quedará mi sonrisa antes de empezar?",
          answer: "Sí, mediante la prueba Mock-Up aplicamos una simulación real en tus dientes para que la apruebes.",
          aeoSummary: "El diseño de sonrisa digital permite previsualizar en boca el resultado final antes de realizar cualquier procedimiento."
        }
      ],
      whatsappText: "Hola, deseo agendar una cita para Diseño de Sonrisa en Siquirres."
    },
    {
      slug: "tratamiento-encias",
      name: "Tratamiento de Encías (Periodoncia)",
      seoTitle: "Tratamiento de Encías en Siquirres | Detén el Sangrado y la Gingivitis",
      seoDescription: "Periodoncia y tratamiento de encías en Siquirres. Detén la gingivitis y periodontitis para salvar la base de tus dientes.",
      h1: "Tratamiento de Encías en Siquirres: Protege la Base de tus Dientes",
      heroTagline: "Detén la inflamación, el sangrado y el mal aliento protegiendo la raíz de tu sonrisa.",
      emotionalIntro: "Las encías son los cimientos de tus dientes. Si sangran al cepillarte o se ven rojas e inflamadas, estás ante una gingivitis o periodontitis. Si no se trata, la bacteria destruye el hueso de soporte provocando que los dientes se aflojen.",
      mainProblem: "Encías inflamadas, retraídas, sangrado frecuente, mal aliento persistente o movilidad en piezas dentales.",
      symptomsChecklist: [
        "Sangre en el cepillo de dientes o al morder alimentos como manzanas",
        "Encías rojas brillantes o hinchadas que molestan al tacto",
        "Sensación de que los dientes se ven más largos por encía retraída"
      ],
      benefits: [
        { title: "Detiene la Pérdida de Hueso", description: "Elimina las bolsas de bacterias subgingivales profundas." },
        { title: "Encías Rosadas y Sanas", description: "Elimina la inflamación y devuelve el color saludable a tus encías." },
        { title: "Salva Dientes con Movilidad", description: "Estabiliza la base ósea para no perder piezas dentales." }
      ],
      procedureTimeline: [
        { step: "01", title: "Sondaje Periodontal", description: "Medición de la profundidad de las bolsas bacterianas." },
        { step: "02", title: "Anestesia Local Suave", description: "Garantiza un procedimiento sin molestias." },
        { step: "03", title: "Raspado & Alisado Radicular", description: "Limpieza profunda bajo la encía para descontaminar la raíz." },
        { step: "04", title: "Mantenimiento Periodontal", description: "Controles de reevaluación y cicatrización de la encía." }
      ],
      technology: [
        { name: "Curetas Gracey de Precisión & Desinfectantes Ultrasónicos", description: "Remueven bacterias profundas respetando el tejido blando." }
      ],
      microcopy: {
        duration: "1 a 2 sesiones según cuadrantes",
        recovery: "1 a 2 días de cicatrización",
        frequency: "Controles cada 3 a 4 meses",
        aftercare: "Uso indispensable de enjuagues periodontales e hilo dental suave."
      },
      faq: [
        {
          question: "¿Por qué sangran las encías al cepillarse?",
          answer: "Es la señal principal de gingivitis causada por bacterias. Debe tratarse profesionalmente a tiempo.",
          aeoSummary: "El sangrado de encías es provocado por la acumulación de placa bacteriana. Un raspado periodontal elimina las bacterias y sana la encía."
        }
      ],
      whatsappText: "Hola, necesito consulta para Tratamiento de Encías en Siquirres."
    },
    {
      slug: "urgencias-dentales",
      name: "Urgencias Dentales 24/7",
      seoTitle: "Urgencias Dentales en Siquirres | Atencion Inmediata del Dolor",
      seoDescription: "Urgencias dentales en Siquirres. Atendemos dolor de muela insoportable, fracturas y traumas dentales de inmediato.",
      h1: "Urgencias Dentales en Siquirres: Alivio Rápido e Inmediato para tu Dolor",
      heroTagline: "Atención prioritaria cuando un dolor intenso o accidente dental interrumpe tu vida.",
      emotionalIntro: "Un dolor de muela agudo o una fractura dental inesperada no pueden esperar días para ser atendidos. En nuestra clínica coordinamos tu atención de urgencia para diagnosticar, calmar el dolor de inmediato y solucionar la causa del problema.",
      mainProblem: "Dolor dental insoportable, traumas por golpes, coronas/calzas caídas o flemones con hinchazón facial.",
      symptomsChecklist: [
        "Dolor punzante e incesante que no disminuye con analgésicos comunes",
        "Diente roto o desplazado por un golpe o accidente",
        "Hinchazón en la mejilla, encía o cara acompañada de fiebre"
      ],
      benefits: [
        { title: "Atención Prioritaria Inmediata", description: "Coordinación rápida por WhatsApp para atenderte sin demoras." },
        { title: "Alivio del Dolor en la Primera Sesión", description: "Tratamiento de choque para eliminar el malestar de inmediato." },
        { title: "Diagnóstico Digital Certero", description: "Radiografía instantánea para identificar el origen exacto." }
      ],
      procedureTimeline: [
        { step: "01", title: "Recepción de Urgencia", description: "Evaluación clínica rápida del estado general y dolor." },
        { step: "02", title: "Radiografía Digital", description: "Identificación de abscesos, fisuras o nervios expuestos." },
        { step: "03", title: "Anestesia & Tratamiento de Alivio", description: "Intervención de emergencia (drenaje, apertura de conducto o sedación)." },
        { step: "04", title: "Prescripción & Plan Definitivo", description: "Receta médica de antibióticos/analgésicos y cita de seguimiento." }
      ],
      technology: [
        { name: "Anestesia Local de Acción Rápida & Radiografía Inalámbrica", description: "Diagnóstico y adormecimiento inmediato en minutos." }
      ],
      microcopy: {
        duration: "30 a 60 minutos",
        recovery: "Alivio inmediato",
        frequency: "Según caso",
        aftercare: "Cumplir estrictamente la medicación indicada."
      },
      faq: [
        {
          question: "¿Qué debo hacer si se me rompe un diente por un golpe?",
          answer: "Guarda el fragmento si es posible en leche o saliva y acude de inmediato a nuestra clínica en Siquirres.",
          aeoSummary: "Ante un diente roto por golpe, conserve el fragmento húmedo en leche o solución salina y busque urgencia dental inmediata."
        }
      ],
      whatsappText: "URGENCIA DENTAL: Necesito atención inmediata en Siquirres por dolor/accidente."
    },
    {
      slug: "odontopediatria",
      name: "Odontopediatría (Atención Dental Infantil)",
      seoTitle: "Odontopediatra en Siquirres | Cuidado Dental Infantil Sin Trauma",
      seoDescription: "Odontopediatría en Siquirres. Atención dental cariñosa, paciente y divertida para niños y bebés en un entorno seguro.",
      h1: "Odontopediatría en Siquirres: Cuidado Dental Amoroso para tus Hijos",
      heroTagline: "Construimos experiencias positivas para que tus hijos crezcan disfrutando ir al dentista.",
      emotionalIntro: "La primera visita al dentista marca la relación que un niño tendrá con su salud oral para siempre. Nuestro equipo odontopediátrico utiliza técnicas de decir-mostrar-hacer, juegos y máxima paciencia para atender a tus pequeños sin miedo ni lagrimas.",
      mainProblem: "Caries infantiles (de biberón), traumas por caídas, miedo al dentista o hábitos como chuparse el dedo.",
      symptomsChecklist: [
        "Manchas blancas o marrones en los dientes de leche de tu hijo",
        "Quejas de dolor al comer dulces o bebidas frías",
        "Miedo extremo o llanto ante la idea de visitar al odontólogo"
      ],
      benefits: [
        { title: "Entorno Divertido y Cero Miedo", description: "Atención adaptada al ritmo psicológico de cada niño." },
        { title: "Sellantes & Aplicación de Flúor", description: "Protección preventiva para evitar caries en muelas infantiles." },
        { title: "Guía para Padres", description: "Consejos sobre cepillado, dieta y manejo de hábitos dentales." }
      ],
      procedureTimeline: [
        { step: "01", title: "Adaptación & Juego", description: "Presentación amigable del equipo e instrumental al niño." },
        { step: "02", title: "Revisión Diagnóstica", description: "Chequeo suave de dientes de leche y encías." },
        { step: "03", title: "Limpieza & Flúor de Sabores", description: "Profilaxis divertida con pastas de sabores agradables." },
        { step: "04", title: "Premio al Valor", description: "Refuerzo positivo para felicitar al pequeño paciente." }
      ],
      technology: [
        { name: "Flúor Barniz de Alta Adherencia & Sellantes de Fotocurado", description: "Protección anticorrosiva de rápida aplicación sin sabor amargo." }
      ],
      microcopy: {
        duration: "30 a 40 minutos",
        recovery: "Inmediata",
        frequency: "Cada 6 meses",
        aftercare: "Supervisión del cepillado nocturno por parte de los padres."
      },
      faq: [
        {
          question: "¿A qué edad debe ser la primera visita del bebé al dentista?",
          answer: "Al erupcionar el primer diente de leche o antes del primer año de vida.",
          aeoSummary: "La primera consulta dental infantil debe realizarse con la salida del primer diente de leche para prevenir caries tempranas."
        }
      ],
      whatsappText: "Hola, quisiera agendar una cita de Odontopediatría en Siquirres."
    },
    {
      slug: "bruxismo",
      name: "Tratamiento para Bruxismo y Rechinar de Dientes",
      seoTitle: "Tratamiento para Bruxismo en Siquirres | Alivio de Mandíbula y Desgaste",
      seoDescription: "Tratamiento para el bruxismo en Siquirres. Protege tus dientes del desgaste nocturno y elimina dolores de cabeza y mandíbula.",
      h1: "Tratamiento para Bruxismo en Siquirres: Libera la Tensión y Protege tus Dientes",
      heroTagline: "Detén el desgaste silencioso de tus dientes y despierta sin cansancio ni dolor mandibular.",
      emotionalIntro: "El estrés diario suele manifestarse por las noches apretando o rechinando los dientes involuntariamente. Este hábito silencioso fractura el esmalte, destruye calzas y provoca dolor en cuello, cabeza y articulación temporomandibular (ATM).",
      mainProblem: "Rechinar o apretar dientes por las noches, dolor al despertar en la mandíbula o sienes, y dientes gastados.",
      symptomsChecklist: [
        "Despertar con la mandíbula rígida, cansada o con dolor",
        "Dolores de cabeza o migrañas matutinas frecuentes",
        "Dientes visibles más cortos, desgastados o con bordes astillados"
      ],
      benefits: [
        { title: "Alivio del Dolor Mandibular y de Cabeza", description: "Relaja los músculos masticadores hiperactivos." },
        { title: "Frena el Desgaste Dental", description: "Interpone una barrera de protección entre ambas arcadas." },
        { title: "Sueño Reparador y Profundo", description: "Disminuye la tensión neuromuscular durante la noche." }
      ],
      procedureTimeline: [
        { step: "01", title: "Evaluación Articular & Oclusal", description: "Palpación de músculos masticadores y análisis de desgaste." },
        { step: "02", title: "Escaneo / Moldes de Alta Precisión", description: "Toma de impresión para la guarda protectora." },
        { step: "03", title: "Confección de Placa Miorelajante", description: "Fabricación rígida/semirrígida a medida." },
        { step: "04", title: "Ajuste de Contactos", description: "Calibración exacta de la mordida sobre la placa." }
      ],
      technology: [
        { name: "Acrílico Rígido Termocurado Clinicamente Calibrado", description: "Diseño ergonómico de desprogramación muscular eficiente." }
      ],
      microcopy: {
        duration: "2 citas cortas",
        recovery: "Inmediata desde la primera noche de uso",
        frequency: "Uso diario nocturno",
        aftercare: "Lavar la placa por las mañanas con agua y cepillo blando."
      },
      faq: [
        {
          question: "¿El bruxismo se cura por completo?",
          answer: "Se controla eficazmente protegiendo los dientes con una placa oclusal y gestionando el estrés.",
          aeoSummary: "El bruxismo se controla mediante placas miorelajantes nocturnas que evitan el desgaste dental y calman el dolor mandibular."
        }
      ],
      whatsappText: "Hola, necesito consulta por problemas de Bruxismo en Siquirres."
    },
    {
      slug: "guarda-oclusal",
      name: "Guarda / Placa Oclusal Miorelajante",
      seoTitle: "Guarda Oclusal en Siquirres | Placas Nocturnas Personalizadas",
      seoDescription: "Guarda oclusal a medida en Siquirres. Placas miorelajantes rígidas para proteger dientes, carillas y la articulación mandibular.",
      h1: "Guarda Oclusal en Siquirres: Protección Nocturna de Máxima Precisión",
      heroTagline: "La protección indispensable para mantener tus dientes, carillas e implantes a salvo de presiones.",
      emotionalIntro: "Si te has realizado tratamientos de estética, ortodoncia o sufres de apretamiento dental, una guarda oclusal hecha a la medida es tu mejor inversión. Diseñada con la rigidez y grosor exacto para desprogramar los músculos y evitar fracturas.",
      mainProblem: "Necesidad de proteger rehabilitaciones dentales (carillas, coronas) o aliviar la presión en la articulación mandibular.",
      symptomsChecklist: [
        "Uso previo de carillas o coronas que requieren protección nocturna",
        "Ruidos o chasquidos en la articulación del oído al abrir la boca",
        "Rechinar de dientes identificado durante el sueño"
      ],
      benefits: [
        { title: "Protege Carillas y Coronas", description: "Evita que las fuerzas nocturnas fracturen tus restauraciones." },
        { title: "Desprogramación Muscular Eficaz", description: "Relaja la articulación temporomandibular (ATM)." },
        { title: "Cómoda y Ajustada a la Perfección", description: "No se cae ni incomoda durante el descanso." }
      ],
      procedureTimeline: [
        { step: "01", title: "Impresión de la Arcada Superior", description: "Molde exacto de tus dientes." },
        { step: "02", title: "Elaboración en Laboratorio", description: "Confección en resina acrílica transparente de alta densidad." },
        { step: "03", title: "Prueba y Pulido", description: "Ajuste milimétrico de los contactos de mordida." }
      ],
      technology: [
        { name: "Acrílico Transparente Hipoalergénico de Grado Médico", description: "Máxima durabilidad y transparencia estética." }
      ],
      microcopy: {
        duration: "2 sesiones",
        recovery: "Inmediata",
        frequency: "Reemplazo cada 2 a 3 años según desgaste",
        aftercare: "Guardar en su estuche ventilado y no lavarla con agua caliente."
      },
      faq: [
        {
          question: "¿Cuál es la diferencia entre una guarda oclusal médica y un protector blando de farmacia?",
          answer: "Las guardas médicas son rígidas y ajustadas milimétricamente por el dentista; las blandas de farmacia pueden aumentar el apretamiento por reflejo de masticación.",
          aeoSummary: "Las guardas oclusales rígidas hechas por el dentista desprograman la musculatura. Las fundas blandas de farmacia no se recomiendan para bruxismo."
        }
      ],
      whatsappText: "Hola, quisiera consultar sobre una Guarda Oclusal a medida en Siquirres."
    },
    {
      slug: "radiografias-dentales",
      name: "Radiografías Dentales Digitales de Alta Definición",
      seoTitle: "Radiografía Dental Digital en Siquirres | Diagnóstico de Mínima Radiación",
      seoDescription: "Radiografías dentales digitales en Siquirres. Diagnóstico instantáneo, sin dolor y con 90% menos radiación.",
      h1: "Radiografías Dentales Digitales en Siquirres: Diagnóstico Preciso al Instante",
      heroTagline: "Visualizamos lo que no se ve a simple vista con tecnología digital de ultra baja radiación.",
      emotionalIntro: "Muchas caries o problemas en la raíz no son visibles en una exploración visual simple. Las radiografías digitales nos permiten detectar patologías en sus etapas iniciales, permitiendo tratamientos mucho más sencillos, económicos y preventivos.",
      mainProblem: "Necesidad de detectar caries interdentales ocultas, evaluar el hueso o planificar endodoncias y extracciones.",
      symptomsChecklist: [
        "Dolor dental no localizado donde visualmente no se observa caries",
        "Planificación previa de ortodoncia, implantes o cirugía de cordales",
        "Evaluación del nivel de hueso de soporte de las encías"
      ],
      benefits: [
        { title: "90% Menos Radiación", description: "Tecnología de sensores digitales ultra segura para niños y adultos." },
        { title: "Imagen Instantánea en Pantalla", description: "Ves junto con el doctor el problema en alta definición en segundos." },
        { title: "Diagnósticos Mínimamente Invasivos", description: "Permite detectar caries pequeñísimas antes de que causen dolor." }
      ],
      procedureTimeline: [
        { step: "01", title: "Colocación del Sensor Digital", description: "Posicionamiento de pequeño sensor suave en la zona a revisar." },
        { step: "02", title: "Captura Ultra Rápida", description: "Disparo de rayos X de una fracción de segundo." },
        { step: "03", title: "Procesamiento Inmediato", description: "Aparición inmediata de la radiografía en el monitor HD." }
      ],
      technology: [
        { name: "Sensor CMOS Digital & Rayos X de Frecuencia Controlada", description: "Obtiene nitidez absoluta con una dosis mínima de radiación." }
      ],
      microcopy: {
        duration: "5 minutos",
        recovery: "Inmediata",
        frequency: "Según indicación de diagnóstico",
        aftercare: "Ninguno requerido."
      },
      faq: [
        {
          question: "¿Son seguras las radiografías dentales digitales?",
          answer: "Sí, la radiación emitida es mínima e insignificante comparada con la radiación ambiental cotidiana.",
          aeoSummary: "Las radiografías dentales digitales son totalmente seguras debido a su tecnología de baja radiación focalizada."
        }
      ],
      whatsappText: "Hola, necesito realizarme una Radiografía Dental Digital en Siquirres."
    }
  ],
  en: [
    {
      slug: "limpieza-dental",
      name: "Deep & Ultrasonic Dental Cleaning",
      seoTitle: "Dental Cleaning in Siquirres | Ultrasonic & Painless Hygiene",
      seoDescription: "Professional dental cleaning in Siquirres, Costa Rica. Painless removal of calculus, tartar, and stains for healthy gums and a radiant smile.",
      h1: "Deep Dental Cleaning in Siquirres: Refreshing Care for Healthy Gums",
      heroTagline: "Feel the incomparable freshness of thoroughly cleaned, protected teeth.",
      emotionalIntro: "Many put off dental cleanings out of fear of sensitivity or discomfort. But tartar buildup silently compromises your gum health. Our gentle ultrasonic cleaning protocol is painless, refreshing, and protects your teeth from long-term disease.",
      mainProblem: "Tartar accumulation, plaque, bleeding gums, and surface stains caused by coffee or tea that dull your natural smile.",
      symptomsChecklist: [
        "Red, swollen, or bleeding gums when brushing",
        "Rough texture or yellowish buildup between teeth",
        "Persistent bad breath despite regular brushing"
      ],
      benefits: [
        { title: "Inflammation-Free Gums", description: "Stops bleeding and prevents gingivitis and periodontal issues." },
        { title: "Long-Lasting Fresh Breath", description: "Eliminates deep bacteria trapped in hard-to-reach areas." },
        { title: "Smooth & Polished Teeth", description: "Removes rough tartar buildup leaving your teeth feeling completely clean." }
      ],
      procedureTimeline: [
        { step: "01", title: "Diagnostic Examination", description: "Gentle inspection to assess gum health and tartar levels." },
        { step: "02", title: "Painless Ultrasonic Scaling", description: "High-frequency water vibrations detach tartar without scratching enamel." },
        { step: "03", title: "Polishing & Stain Removal", description: "Specialized prophylaxis paste removes superficial coffee/tea stains." },
        { step: "04", title: "Fluoride Treatment", description: "Protective remineralizing varnish to prevent sensitivity." }
      ],
      technology: [
        { name: "Calibrated Ultrasonic Piezo Scaler", description: "Gentle water-fed vibration scaling for painless calculus removal." }
      ],
      microcopy: {
        duration: "45 minutes",
        recovery: "Immediate",
        frequency: "Every 6 months",
        aftercare: "Avoid staining foods/drinks for 2 hours post-treatment."
      },
      faq: [
        {
          question: "How often should I get a professional dental cleaning?",
          answer: "Every 6 months for healthy patients, or every 4 months if you have a history of gum disease or rapid plaque buildup.",
          aeoSummary: "Professional dental cleanings should be scheduled every 6 months to maintain healthy gums and prevent tartar accumulation."
        }
      ],
      whatsappText: "Hello, I would like to book a Dental Cleaning appointment in Siquirres."
    },
    {
      slug: "blanqueamiento-dental",
      name: "Professional Teeth Whitening",
      seoTitle: "Teeth Whitening in Siquirres | Bright & Safe Smile Transformation",
      seoDescription: "Professional teeth whitening in Siquirres. Brighten your smile by several shades safely without damaging enamel.",
      h1: "Professional Teeth Whitening in Siquirres: Restore Your Smile's Sparkle",
      heroTagline: "Smile for photos again without hesitation or hiding your teeth.",
      emotionalIntro: "Coffee, tea, or natural aging can make teeth lose their bright white tone. A radiant smile boosts self-confidence, projecting health, youthfulness, and positive energy in every interaction.",
      mainProblem: "Yellowish, stained, or dull teeth that lower confidence when smiling or talking.",
      symptomsChecklist: [
        "Noticeable yellow or discolored teeth tone",
        "Hesitation to show your teeth in photos",
        "Brushing no longer brightens your enamel tone"
      ],
      benefits: [
        { title: "Multi-Shade Brightening", description: "Visible, radiant results in a single safe in-office session." },
        { title: "Sensitivity Protection", description: "Medical-grade gel enriched with potassium nitrate to protect enamel." },
        { title: "Long-Lasting Results", description: "A bright, natural white smile with simple home care." }
      ],
      procedureTimeline: [
        { step: "01", title: "Oral Health Check", description: "Ensuring teeth are clean and free of cavities before whitening." },
        { step: "02", title: "Gum Barrier Application", description: "Isolating delicate gum tissue with a protective barrier." },
        { step: "03", title: "LED Whitening Gel", description: "Applying medical whitening gel activated with cold LED light." },
        { step: "04", title: "Rinse & Desensitizing", description: "Enamel conditioning treatment for total comfort." }
      ],
      technology: [
        { name: "Cold LED Acceleration Light", description: "Activates whitening gel efficiently without generating heat or enamel damage." }
      ],
      microcopy: {
        duration: "60 to 75 minutes",
        recovery: "Immediate",
        frequency: "Once a year or as needed",
        aftercare: "Follow a 'white diet' (no dark liquids) for 48 hours."
      },
      faq: [
        {
          question: "How long do professional teeth whitening results last?",
          answer: "Typically 1 to 2 years, depending on your diet, coffee intake, and oral hygiene habits.",
          aeoSummary: "In-office teeth whitening lasts between 12 and 24 months with proper oral care and regular checkups."
        }
      ],
      whatsappText: "Hello, I would like information on Teeth Whitening in Siquirres."
    }
  ]
};
