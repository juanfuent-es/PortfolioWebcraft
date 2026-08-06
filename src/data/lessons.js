export const course = {
  title: "Portfolio WebCraft",
  tagline:
    "Construye tu propio portafolio mientras aprendes cómo funciona la web.",
  descriptor:
    "Aprende a organizar tu contenido, estructurar información y construir un sistema visual para dar vida a tu portafolio y publicarlo en línea.",
  format: "12 semanas",
};

export function getModules() {
  return lessons;
}

export async function getLesson(slug) {
  let flatLessons = lessons.flatMap((mod, moduleIndex) =>
    mod.lessons.map((lesson, lessonIndex) => ({
      ...lesson,
      module: mod,
      moduleIndex,
      lessonIndex,
    })),
  );

  let index = flatLessons.findIndex(({ id }) => id === slug);

  if (index === -1) {
    return null;
  }

  return {
    ...flatLessons[index],
    next: flatLessons[index + 1] ?? null,
  };
}

const lessons = [
  {
    id: "universo-de-informacion",
    title: "Unidad 1 · Universo de Información",
    description:
      "Construir un inventario del trabajo y los recursos existentes para comprender el punto de partida antes de diseñar el portafolio.",
    technology:
      "Carpetas, documentos de texto, hojas de cálculo simples y repositorios de archivos.",
    lessons: [
      {
        id: "inventario-de-contenido",
        title: "Inventario de contenido",
        description:
          "Identificar proyectos, imágenes, textos, bocetos, publicaciones, archivos y cualquier otro material disponible.",
        question:
          "¿Qué materiales existen realmente y cuáles sólo están asumidos en la memoria del participante?",
        activity:
          "Reunir el material existente sin editarlo todavía y registrar nombre, formato, ubicación, estado y posible uso.",
        deliverable:
          "Inventario inicial del portafolio con proyectos, recursos disponibles y materiales pendientes.",
      },
      {
        id: "universo-completo-de-informacion",
        title: "Universo de información",
        description:
          "Visualizar el conjunto completo de recursos sin realizar aún una selección curatorial.",
        question:
          "¿Qué muestra el conjunto completo cuando se observa como sistema y no como piezas aisladas?",
        activity:
          "Mapear todo el material disponible para reconocer volumen, diversidad, repeticiones y ausencias.",
        deliverable: "Mapa general del universo de información del portafolio.",
      },
      {
        id: "estado-del-contenido",
        title: "Estado del contenido",
        description:
          "Reconocer qué información está completa, incompleta, duplicada o dispersa.",
        question:
          "¿Qué tan preparado está el contenido para convertirse en una experiencia web comprensible?",
        activity:
          "Clasificar materiales según completitud, calidad, vigencia, formato y nivel de documentación.",
        deliverable:
          "Diagnóstico del estado del contenido con prioridades de recuperación, edición o producción.",
      },
      {
        id: "organizacion-inicial",
        title: "Organización inicial",
        description:
          "Agrupar materiales de forma preliminar mediante carpetas, listas o colecciones.",
        question:
          "¿Qué agrupaciones aparecen antes de imponer una navegación o una plantilla?",
        activity:
          "Crear colecciones temporales y comparar distintas formas de ordenar los mismos materiales.",
        deliverable:
          "Estructura inicial de carpetas o colecciones para trabajar durante el curso.",
      },
      {
        id: "vacios-y-oportunidades",
        title: "Vacíos y oportunidades",
        description:
          "Detectar qué información hace falta producir, recuperar o documentar.",
        question:
          "¿Qué falta para que el portafolio represente la práctica profesional con claridad y criterio?",
        activity:
          "Cruzar el inventario con los objetivos profesionales para detectar ausencias relevantes.",
        deliverable:
          "Lista priorizada de contenidos por producir, recuperar o documentar.",
      },
    ],
  },
  {
    id: "identidad",
    title: "Unidad 2 · Identidad",
    description:
      "Descubrir y reafirmar la identidad profesional mediante patrones, intereses, motivaciones y decisiones presentes en el trabajo.",
    technology:
      "Documentos de síntesis, referencias organizadas y prompts de análisis asistido por IA.",
    lessons: [
      {
        id: "reconocimiento-de-patrones",
        title: "Reconocimiento de patrones",
        description:
          "Identificar elementos, temas, técnicas y procesos que aparecen de forma recurrente.",
        question:
          "¿Qué patrones aparecen en el trabajo cuando se observa como evidencia y no como intención declarada?",
        activity:
          "Comparar proyectos para detectar recurrencias visuales, conceptuales, técnicas y metodológicas.",
        deliverable:
          "Registro de patrones de práctica con ejemplos concretos del propio trabajo.",
      },
      {
        id: "intereses-y-motivaciones",
        title: "Intereses y motivaciones",
        description:
          "Comprender qué impulsa la práctica profesional y qué tipo de proyectos generan mayor satisfacción.",
        question:
          "¿Qué intereses sostienen la práctica y qué oportunidades conviene atraer o descartar?",
        activity:
          "Relacionar proyectos con motivaciones, condiciones de trabajo y tipos de colaboración deseados.",
        deliverable:
          "Mapa de intereses, motivaciones y criterios de oportunidad.",
      },
      {
        id: "curaduria",
        title: "Curaduría",
        description:
          "Diferenciar el trabajo que representa la práctica actual del que ya no refleja los intereses personales.",
        question:
          "¿Qué debe entrar al portafolio porque representa la dirección actual y qué debe quedar fuera?",
        activity:
          "Evaluar cada proyecto según relevancia, calidad, vigencia, intención y coherencia con el posicionamiento.",
        deliverable:
          "Primera selección curatorial de proyectos para el portafolio.",
      },
      {
        id: "sintesis-conceptual",
        title: "Síntesis conceptual",
        description:
          "Construir una descripción clara y coherente de la práctica profesional.",
        question:
          "¿Cómo puede explicarse la práctica sin reducirla a una lista de servicios o herramientas?",
        activity:
          "Redactar versiones breves de la práctica profesional y contrastarlas con los patrones encontrados.",
        deliverable:
          "Texto base de identidad profesional para usar y ajustar en el sitio.",
      },
      {
        id: "posicionamiento",
        title: "Posicionamiento",
        description:
          "Definir cómo se desea ser percibido y qué tipo de oportunidades se buscan atraer.",
        question:
          "¿Qué lectura debe construir el portafolio sobre la práctica profesional del participante?",
        activity:
          "Definir audiencia, tono, oportunidades deseadas y señales que deben aparecer en el sitio.",
        deliverable:
          "Declaración de posicionamiento y criterios de decisión para el portafolio.",
      },
    ],
  },
  {
    id: "arquitectura-de-informacion",
    title: "Unidad 3 · Arquitectura de Información",
    description:
      "Transformar contenidos en un sistema organizado, comprensible y escalable mediante estructura, jerarquía y navegación.",
    technology:
      "Mapas de sitio, esquemas de contenido, listas jerárquicas y documentación en Markdown.",
    lessons: [
      {
        id: "agrupacion",
        title: "Agrupación",
        description:
          "Reunir contenidos con características o propósitos similares.",
        question:
          "¿Qué contenidos pertenecen juntos por sentido, función o relación profesional?",
        activity:
          "Probar agrupaciones por tipo de proyecto, tema, técnica, audiencia, proceso o resultado.",
        deliverable: "Agrupaciones candidatas con criterios explícitos.",
      },
      {
        id: "categorizacion",
        title: "Categorización",
        description:
          "Definir categorías que faciliten la comprensión del contenido.",
        question:
          "¿Qué categorías ayudan a entender la práctica sin encasillarla artificialmente?",
        activity:
          "Nombrar categorías y evaluar si cada una ayuda a navegar, comparar y recordar el trabajo.",
        deliverable:
          "Sistema de categorías inicial para proyectos y contenidos.",
      },
      {
        id: "jerarquia",
        title: "Jerarquía",
        description:
          "Establecer prioridades y niveles de importancia entre la información.",
        question:
          "¿Qué información debe verse primero, cuál debe profundizarse y cuál puede quedar secundaria?",
        activity:
          "Ordenar mensajes, proyectos y detalles según relevancia para la audiencia definida.",
        deliverable:
          "Jerarquía de contenido para la portada, proyectos y navegación principal.",
      },
      {
        id: "relaciones",
        title: "Relaciones",
        description:
          "Identificar conexiones entre proyectos, categorías y contenidos.",
        question:
          "¿Qué relaciones entre proyectos revelan conocimiento, proceso o evolución profesional?",
        activity:
          "Conectar proyectos por temas, herramientas, colaboraciones, aprendizajes, formatos y decisiones.",
        deliverable: "Mapa de relaciones entre proyectos y contenidos.",
      },
      {
        id: "estructura-de-navegacion",
        title: "Estructura de navegación",
        description:
          "Diseñar una organización que permita recorrer la información de manera clara.",
        question:
          "¿Cómo debe recorrerse el portafolio para que la información sea comprensible y accionable?",
        activity:
          "Construir y comparar rutas de navegación para distintos tipos de visitantes.",
        deliverable:
          "Mapa de navegación del portafolio con rutas principales y secundarias.",
      },
    ],
  },
  {
    id: "lenguajes-de-representacion",
    title: "Unidad 4 · Lenguajes de Representación",
    description:
      "Comprender cómo la información puede representarse mediante texto plano, marcado y Markdown antes del desarrollo web.",
    technology:
      "Texto plano, Markdown, archivos README y especificaciones escritas.",
    lessons: [
      {
        id: "texto-plano",
        title: "Texto plano",
        description:
          "Comprender el texto como la representación más simple y universal de la información.",
        question:
          "¿Qué puede sostenerse en texto antes de depender de diseño, software o plataforma?",
        activity:
          "Describir proyectos, secciones y decisiones usando texto simple y verificable.",
        deliverable:
          "Base textual del portafolio con títulos, descripciones y notas de estructura.",
      },
      {
        id: "lenguajes-de-marcado",
        title: "Lenguajes de marcado",
        description:
          "Introducción al concepto de marcado y estructura documental.",
        question:
          "¿Cómo cambia la información cuando se marca su función dentro de un documento?",
        activity:
          "Distinguir encabezados, párrafos, listas, enlaces, imágenes y bloques de contenido.",
        deliverable:
          "Documento marcado que representa una página del portafolio.",
      },
      {
        id: "markdown",
        title: "Markdown",
        description:
          "Utilizar Markdown para organizar información mediante encabezados, listas, enlaces e imágenes.",
        question:
          "¿Cómo puede Markdown ayudar a pensar la estructura antes de construir la interfaz?",
        activity:
          "Convertir contenido de proyectos y páginas clave a Markdown limpio y reutilizable.",
        deliverable:
          "Archivos Markdown para proyectos o secciones principales.",
      },
      {
        id: "documentacion",
        title: "Documentación",
        description:
          "Escribir documentación clara y útil para describir proyectos y procesos.",
        question:
          "¿Qué necesita saber otra persona para entender, revisar o continuar el proyecto?",
        activity:
          "Documentar decisiones de contenido, estructura, sistema visual y desarrollo.",
        deliverable:
          "Documento de proyecto con decisiones vigentes y asuntos pendientes.",
      },
      {
        id: "especificacion",
        title: "Especificación",
        description:
          "Aprender a comunicar ideas y estructuras de manera precisa mediante texto.",
        question:
          "¿Qué debe quedar especificado para que una IA o una persona pueda construir con criterio?",
        activity:
          "Redactar instrucciones precisas para secciones, componentes, datos y comportamientos.",
        deliverable:
          "Especificación inicial del portafolio lista para implementación asistida.",
      },
    ],
  },
  {
    id: "sistema-visual",
    title: "Unidad 5 · Sistema Visual",
    description:
      "Traducir identidad y estructura de información en un sistema visual consistente para el desarrollo del portafolio.",
    technology:
      "Referencias visuales, tokens de diseño, variables CSS y pruebas de composición.",
    lessons: [
      {
        id: "concepto-visual",
        title: "Concepto visual",
        description: "Relacionar identidad y lenguaje gráfico.",
        question:
          "¿Qué concepto visual representa la práctica sin depender de una tendencia o plantilla genérica?",
        activity:
          "Traducir patrones de identidad en criterios visuales de tono, ritmo, densidad y presencia.",
        deliverable:
          "Dirección visual argumentada con principios y referencias pertinentes.",
      },
      {
        id: "tipografia",
        title: "Tipografía",
        description:
          "Seleccionar y utilizar sistemas tipográficos de manera coherente.",
        question:
          "¿Qué sistema tipográfico sostiene la lectura, la jerarquía y el carácter del portafolio?",
        activity:
          "Definir escalas, pesos, usos y reglas tipográficas para distintas piezas de contenido.",
        deliverable: "Sistema tipográfico inicial con reglas de aplicación.",
      },
      {
        id: "color",
        title: "Color",
        description:
          "Construir una paleta funcional basada en criterios de comunicación.",
        question:
          "¿Qué función cumple cada color dentro del sistema visual y la experiencia de lectura?",
        activity:
          "Definir paleta, contraste, roles funcionales y límites de uso.",
        deliverable: "Paleta con roles, valores y criterios de accesibilidad.",
      },
      {
        id: "composicion",
        title: "Composición",
        description:
          "Organizar los elementos visuales mediante principios de jerarquía y ritmo.",
        question:
          "¿Cómo debe organizarse la información para que el portafolio sea legible, reconocible y navegable?",
        activity:
          "Probar retículas, proporciones, espaciados y relaciones entre contenido textual y visual.",
        deliverable:
          "Sistema de composición para portada, listados y páginas de proyecto.",
      },
      {
        id: "consistencia",
        title: "Consistencia",
        description:
          "Definir reglas visuales que permitan mantener coherencia en todo el proyecto.",
        question:
          "¿Qué reglas deben mantenerse para que el sitio pueda crecer sin perder identidad?",
        activity:
          "Convertir decisiones visuales en reglas reutilizables y comprobar excepciones necesarias.",
        deliverable:
          "Guía visual mínima con reglas, componentes base y usos permitidos.",
      },
    ],
  },
  {
    id: "entorno-de-desarrollo",
    title: "Unidad 6 · Entorno de Desarrollo",
    description:
      "Preparar un entorno profesional para construir, documentar y mantener el proyecto durante su desarrollo.",
    technology:
      "GitHub, Git, Visual Studio Code, terminal y estructura de archivos del proyecto.",
    lessons: [
      {
        id: "github",
        title: "GitHub",
        description: "Crear y organizar repositorios para el proyecto.",
        question:
          "¿Cómo se convierte el portafolio en un proyecto versionado y compartible?",
        activity:
          "Crear el repositorio, revisar archivos principales y definir una estructura inicial.",
        deliverable: "Repositorio del portafolio creado y organizado.",
      },
      {
        id: "git",
        title: "Git",
        description:
          "Comprender el control de versiones como herramienta de trabajo.",
        question:
          "¿Qué decisiones conviene registrar para poder entender y revertir la evolución del proyecto?",
        activity:
          "Practicar cambios pequeños, commits descriptivos y revisión del historial.",
        deliverable: "Primer flujo de trabajo con commits claros y trazables.",
      },
      {
        id: "visual-studio-code",
        title: "Visual Studio Code",
        description:
          "Configurar el editor y conocer sus herramientas principales.",
        question:
          "¿Qué necesita el entorno de edición para que el código sea legible y mantenible?",
        activity:
          "Configurar extensiones, formato, vista de archivos, terminal integrada y ayudas de lectura.",
        deliverable:
          "Editor configurado para trabajar el portafolio con claridad.",
      },
      {
        id: "estructura-del-proyecto",
        title: "Estructura del proyecto",
        description:
          "Organizar carpetas y archivos siguiendo buenas prácticas.",
        question:
          "¿Qué estructura de archivos representa mejor contenido, presentación y comportamiento?",
        activity:
          "Definir carpetas para páginas, estilos, recursos, scripts, imágenes y documentación.",
        deliverable:
          "Estructura inicial del proyecto con responsabilidades claras.",
      },
      {
        id: "flujo-de-trabajo",
        title: "Flujo de trabajo",
        description:
          "Establecer una metodología de desarrollo y documentación.",
        question:
          "¿Cómo se avanza sin perder el vínculo entre concepto, contenido, diseño y código?",
        activity:
          "Definir un ciclo de trabajo: planear, editar, probar, documentar y publicar cambios.",
        deliverable:
          "Flujo de trabajo documentado para el desarrollo del portafolio.",
      },
    ],
  },
  {
    id: "html",
    title: "Unidad 7 · HTML",
    description:
      "Construir la estructura semántica y accesible del portafolio a partir de la arquitectura de información definida.",
    technology:
      "HTML semántico, atributos, rutas de archivos, enlaces e imágenes.",
    lessons: [
      {
        id: "documento-html",
        title: "Documento HTML",
        description: "Comprender la estructura básica de un documento web.",
        question:
          "¿Qué necesita un documento HTML para representar una página web válida y comprensible?",
        activity:
          "Construir la base de una página con metadatos, cuerpo, encabezados y contenido real.",
        deliverable: "Documento HTML inicial del portafolio.",
      },
      {
        id: "html-semantico",
        title: "HTML semántico",
        description:
          "Utilizar etiquetas con significado para organizar el contenido.",
        question:
          "¿Qué etiqueta expresa mejor la función de cada pieza de información?",
        activity:
          "Convertir la arquitectura de información en secciones, navegación, artículos y bloques semánticos.",
        deliverable: "Estructura semántica de una página clave del portafolio.",
      },
      {
        id: "componentes-html",
        title: "Componentes",
        description:
          "Construir bloques reutilizables para representar la información.",
        question:
          "¿Qué patrones de contenido se repiten lo suficiente para convertirse en componentes?",
        activity:
          "Identificar tarjetas, listados, fichas de proyecto, bloques de texto e imágenes reutilizables.",
        deliverable: "Biblioteca inicial de componentes HTML del portafolio.",
      },
      {
        id: "accesibilidad-html",
        title: "Accesibilidad",
        description:
          "Incorporar principios básicos de accesibilidad desde la estructura.",
        question:
          "¿Cómo puede la estructura HTML hacer que el portafolio sea navegable y comprensible para más personas?",
        activity:
          "Revisar jerarquía de encabezados, texto alternativo, enlaces, etiquetas y orden de lectura.",
        deliverable:
          "Página HTML revisada con criterios básicos de accesibilidad.",
      },
      {
        id: "contenido-estructurado",
        title: "Contenido estructurado",
        description: "Traducir la arquitectura de información a HTML.",
        question:
          "¿Cómo se convierte el sistema de contenido en marcado concreto sin perder jerarquía?",
        activity:
          "Representar proyectos, categorías, navegación y textos de identidad dentro del HTML.",
        deliverable: "Primera versión estructural del portafolio en HTML.",
      },
    ],
  },
  {
    id: "css",
    title: "Unidad 8 · CSS",
    description:
      "Materializar el sistema visual mediante reglas de presentación consistentes, reutilizables y adaptables.",
    technology:
      "CSS moderno, variables, modelo de caja, Flexbox, Grid y media queries.",
    lessons: [
      {
        id: "modelo-de-caja",
        title: "Modelo de caja",
        description: "Comprender la distribución espacial de los elementos.",
        question:
          "¿Cómo ocupan espacio los elementos y cómo afecta eso a la composición del sitio?",
        activity:
          "Ajustar dimensiones, márgenes, rellenos, bordes y separación entre bloques reales del portafolio.",
        deliverable:
          "Base espacial consistente para los componentes principales.",
      },
      {
        id: "layout-css",
        title: "Layout",
        description: "Construir estructuras flexibles mediante Flexbox y Grid.",
        question:
          "¿Qué estructura de layout permite mostrar el contenido con claridad en distintos contextos?",
        activity:
          "Implementar retículas, columnas, listados y relaciones entre texto e imagen.",
        deliverable:
          "Layouts principales del portafolio implementados con CSS.",
      },
      {
        id: "sistema-visual-css",
        title: "Sistema visual",
        description: "Implementar tipografía, color, espaciado y componentes.",
        question: "¿Cómo se traducen las reglas visuales en código mantenible?",
        activity:
          "Crear variables, reglas base y estilos de componentes alineados con la guía visual.",
        deliverable: "Sistema visual implementado como CSS reutilizable.",
      },
      {
        id: "diseno-responsive",
        title: "Diseño responsive",
        description: "Adaptar la interfaz a distintos dispositivos.",
        question:
          "¿Qué debe cambiar en la experiencia cuando el espacio disponible cambia?",
        activity:
          "Probar el portafolio en tamaños de pantalla distintos y ajustar jerarquía, navegación y layout.",
        deliverable: "Versión responsive funcional de las páginas principales.",
      },
      {
        id: "componentizacion-css",
        title: "Componentización",
        description: "Mantener consistencia mediante estilos reutilizables.",
        question:
          "¿Qué reglas conviene abstraer para evitar repetición sin volver rígido el sistema?",
        activity:
          "Extraer clases, patrones y variantes que aparezcan en más de una sección del portafolio.",
        deliverable: "Componentes visuales reutilizables y documentados.",
      },
    ],
  },
  {
    id: "javascript",
    title: "Unidad 9 · JavaScript",
    description:
      "Incorporar comportamiento, estados e interacciones significativas sin perder claridad ni simplicidad.",
    technology:
      "JavaScript nativo, DOM, eventos, estado de interfaz y mejora progresiva.",
    lessons: [
      {
        id: "fundamentos-de-javascript",
        title: "Fundamentos del lenguaje",
        description: "Comprender variables, funciones y estructuras básicas.",
        question:
          "¿Qué lógica necesita el portafolio y qué puede permanecer como HTML y CSS?",
        activity:
          "Practicar operaciones pequeñas con datos, funciones y condiciones vinculadas al contenido del sitio.",
        deliverable:
          "Ejercicios de lógica aplicados al contenido del portafolio.",
      },
      {
        id: "manipulacion-del-documento",
        title: "Manipulación del documento",
        description:
          "Modificar el contenido y comportamiento mediante JavaScript.",
        question:
          "¿Qué cambios de interfaz deben ocurrir en respuesta a una acción del usuario?",
        activity:
          "Seleccionar elementos del DOM y modificar clases, atributos o contenido de forma controlada.",
        deliverable: "Interacción DOM simple integrada al portafolio.",
      },
      {
        id: "interacciones",
        title: "Interacciones",
        description: "Diseñar acciones significativas para el usuario.",
        question:
          "¿Qué interacción aporta comprensión, navegación o expresión al portafolio?",
        activity:
          "Diseñar comportamientos para filtros, navegación, revelado de información o cambios de vista.",
        deliverable:
          "Interacción significativa construida sobre una necesidad real del sitio.",
      },
      {
        id: "estados",
        title: "Estados",
        description: "Gestionar cambios de interfaz según la interacción.",
        question:
          "¿Qué estados debe reconocer la interfaz para comunicar lo que está ocurriendo?",
        activity:
          "Definir estados activos, abiertos, filtrados, vacíos, cargados o seleccionados según el caso.",
        deliverable: "Estados de interfaz implementados y probados.",
      },
      {
        id: "experiencia",
        title: "Experiencia",
        description:
          "Integrar comportamiento como parte del concepto del sitio.",
        question:
          "¿Cómo puede la interacción reforzar el concepto del portafolio sin volverse decorativa?",
        activity:
          "Evaluar si cada comportamiento mejora claridad, ritmo, navegación o relación con el contenido.",
        deliverable:
          "Criterios de interacción y versión funcional de la experiencia principal.",
      },
    ],
  },
  {
    id: "publicacion",
    title: "Unidad 10 · Publicación",
    description:
      "Publicar el portafolio y comprender el proceso necesario para desplegarlo, optimizarlo, mantenerlo y evolucionarlo.",
    technology:
      "Git, GitHub, hosting estático, dominios, auditorías básicas y mantenimiento.",
    lessons: [
      {
        id: "control-de-versiones-publicacion",
        title: "Control de versiones",
        description: "Preparar el proyecto para su publicación.",
        question:
          "¿Qué estado del proyecto está listo para compartirse públicamente?",
        activity:
          "Revisar archivos, commits, ramas, contenido final y configuración antes del despliegue.",
        deliverable: "Versión candidata del portafolio lista para publicar.",
      },
      {
        id: "despliegue",
        title: "Despliegue",
        description: "Publicar el sitio utilizando plataformas de hosting.",
        question:
          "¿Cómo se convierte el proyecto local en un sitio disponible en línea?",
        activity:
          "Conectar repositorio, configurar plataforma de publicación y verificar el resultado.",
        deliverable: "Portafolio publicado en una URL accesible.",
      },
      {
        id: "dominio",
        title: "Dominio",
        description: "Configurar un dominio propio cuando sea necesario.",
        question:
          "¿Qué dirección pública conviene para la identidad profesional del participante?",
        activity:
          "Evaluar nombre, dominio, configuración DNS y relación con el posicionamiento.",
        deliverable: "Plan o configuración de dominio para el portafolio.",
      },
      {
        id: "optimizacion",
        title: "Optimización",
        description: "Mejorar rendimiento, accesibilidad y buenas prácticas.",
        question:
          "¿Qué ajustes hacen que el portafolio sea más claro, rápido, accesible y mantenible?",
        activity:
          "Revisar imágenes, metadatos, contraste, responsive, enlaces, rendimiento y errores visibles.",
        deliverable: "Checklist de optimización aplicado al sitio publicado.",
      },
      {
        id: "evolucion",
        title: "Evolución",
        description:
          "Mantener y actualizar el portafolio como un proyecto vivo.",
        question:
          "¿Cómo se actualiza el portafolio sin romper su sistema conceptual, visual o técnico?",
        activity:
          "Definir rutina de mantenimiento, criterios para nuevos proyectos y próximos ciclos de mejora.",
        deliverable: "Plan de evolución del portafolio después del curso.",
      },
    ],
  },
];
