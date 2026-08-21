# Unidad 5 · Entorno de Desarrollo

## Objetivo

Preparar un entorno de trabajo profesional para construir, organizar y mantener el portafolio. Comprender las herramientas fundamentales del desarrollo web y establecer un flujo de trabajo que permita editar archivos, visualizar cambios, registrar versiones y utilizar inteligencia artificial como asistente durante el proceso.

## Temas

### Archivos y estructura de proyecto

**Objetivo:** Comprender cómo se organiza un proyecto web mediante archivos, carpetas, nombres y extensiones.

**Descripción:** Un sitio web existe primero como un conjunto de archivos organizados dentro de una estructura. Antes de comenzar a escribir HTML, CSS o JavaScript es necesario comprender dónde viven los documentos, imágenes, tipografías y demás recursos que formarán parte del proyecto.

La organización de archivos debe responder a criterios claros y mantenerse comprensible conforme el proyecto crece. Los nombres de archivos y carpetas deben ser consistentes, descriptivos y compatibles con el entorno web.

Esta estructura será la base física del sistema desarrollado en las unidades anteriores: la información, contenidos y recursos visuales comenzarán a convertirse en archivos concretos que posteriormente podrán ser interpretados por el navegador.

---

### Editor de código

**Objetivo:** Configurar y utilizar un editor de código para trabajar con archivos de texto y proyectos web.

**Descripción:** Un editor de código permite trabajar directamente con los archivos que conforman un sitio. A diferencia de una herramienta visual de diseño, el editor muestra la estructura textual del proyecto y permite modificarla de manera explícita.

Visual Studio Code puede utilizarse para abrir carpetas completas, crear y modificar archivos, navegar entre recursos, realizar búsquedas y utilizar herramientas adicionales mediante extensiones.

El objetivo no es memorizar todas sus funciones, sino comprender el editor como el **espacio principal de trabajo** desde el cual se construirá y mantendrá el portafolio.

---

### Terminal y línea de comandos

**Objetivo:** Comprender los principios básicos de navegación y ejecución de instrucciones mediante la terminal.

**Descripción:** La terminal permite interactuar con el sistema mediante instrucciones de texto. Muchas herramientas de desarrollo utilizan este mecanismo para crear proyectos, instalar dependencias, ejecutar servidores o gestionar versiones.

En esta etapa solamente es necesario comprender operaciones fundamentales como identificar la ubicación actual, listar archivos, cambiar de directorio, crear carpetas y ejecutar comandos dentro del proyecto.

La terminal introduce una forma diferente de interactuar con la computadora: en lugar de realizar una acción mediante una interfaz gráfica, se expresa mediante una instrucción explícita y reproducible.

---

### Git y control de versiones

**Objetivo:** Comprender cómo registrar y consultar los cambios realizados durante el desarrollo de un proyecto.

**Descripción:** Un proyecto cambia constantemente. Git permite registrar diferentes estados del trabajo y conservar un historial de modificaciones, facilitando la experimentación, recuperación y seguimiento del proceso.

El control de versiones no debe entenderse únicamente como una herramienta para programadores. También funciona como un sistema de documentación: permite reconocer qué cambió, cuándo ocurrió y construir puntos de referencia dentro de la evolución del proyecto.

Conceptos como **repositorio, commit, estado e historial** serán suficientes para comenzar. El flujo podrá ampliarse conforme aumente la complejidad del portafolio.

---

### GitHub y repositorios remotos

**Objetivo:** Utilizar un repositorio remoto para respaldar, compartir y posteriormente publicar el proyecto.

**Descripción:** Mientras Git administra el historial local del proyecto, GitHub permite almacenar una copia del repositorio en línea y sincronizar los cambios realizados desde diferentes equipos o personas.

El repositorio también funciona como documentación pública o privada del proyecto. Archivos como `README.md` permiten explicar qué contiene, cómo está organizado y cuál es su propósito.

Más adelante el mismo flujo permitirá conectar el proyecto con servicios de publicación. Por ahora, el objetivo es comprender la relación entre **archivos locales, repositorio Git y repositorio remoto**.

---

### IA como asistente de desarrollo

**Objetivo:** Utilizar inteligencia artificial como herramienta de apoyo sin sustituir la comprensión y toma de decisiones sobre el proyecto.

**Descripción:** La inteligencia artificial puede ayudar a explicar código, proponer estructuras, detectar errores, generar fragmentos o transformar instrucciones escritas en lenguaje natural en posibles implementaciones.

Su utilidad depende de la calidad del contexto disponible. Una estructura de información clara, un sistema visual definido y archivos bien organizados permiten describir con mayor precisión qué se necesita construir. Por esta razón, la IA se incorpora después de haber trabajado las decisiones fundamentales del proyecto.

El código generado debe poder revisarse, probarse y modificarse. La IA funciona como **asistente técnico de implementación**; las decisiones sobre contenido, estructura, identidad, funcionamiento y dirección creativa permanecen en manos de quien construye el portafolio.

---

## Bibliografía y recursos de referencia

- **Mozilla Developer Network (MDN).** Recursos y documentación sobre tecnologías fundamentales de la web.  
  https://developer.mozilla.org/
- **Visual Studio Code.** Documentación oficial del editor.  
  https://code.visualstudio.com/docs
- **Git.** Documentación oficial y libro *Pro Git*.  
  https://git-scm.com/doc
- **GitHub Docs.** Documentación sobre repositorios, Git y flujos de trabajo.  
  https://docs.github.com/
- **GitHub Skills.** Ejercicios interactivos para aprender GitHub.  
  https://skills.github.com/
- **The Missing Semester of Your CS Education.** Recursos sobre terminal, línea de comandos, Git y herramientas de desarrollo.  
  https://missing.csail.mit.edu/

---

# Actividades

Estas actividades prepararán el entorno que utilizaremos durante el resto del proyecto. El objetivo no es comenzar todavía a desarrollar el portafolio, sino **comprender dónde viven sus archivos, cómo trabajar con ellos y cómo registrar su evolución**.

## Actividad 1 · Preparar el entorno

### Objetivo

Instalar y configurar las herramientas fundamentales que utilizaremos para desarrollar el portafolio.

### Instrucciones

Prepara las siguientes herramientas:

- Visual Studio Code.
- Git.
- Cuenta de GitHub.
- Navegador web actualizado.

Crea una carpeta local para tu proyecto.

Por ejemplo:

```text
portfolio/
```

Ábrela desde Visual Studio Code y crea un archivo:

```text
README.md
```

Incluye:

```text
Nombre:
Título:
Tagline:
Descriptor:
```

Utiliza la información desarrollada durante la Unidad 2.

### Entregable

Un proyecto local abierto correctamente desde Visual Studio Code que contenga un archivo `README.md`.

---

## Actividad 2 · Estructura de archivos

### Objetivo

Traducir los contenidos y recursos existentes a una estructura básica de archivos y carpetas.

### Instrucciones

Dentro de la carpeta del proyecto crea una estructura inicial.

Por ejemplo:

```text
portfolio/
│
├── README.md
│
├── content/
├── images/
├── fonts/
└── assets/
```

Adapta la estructura a las necesidades reales de tu proyecto.

Utiliza nombres:

- descriptivos;
- consistentes;
- preferentemente en minúsculas;
- sin espacios;
- sin caracteres especiales innecesarios.

Revisa también los archivos que utilizarás y comienza a nombrarlos siguiendo un criterio común.

Por ejemplo:

```text
proyecto-nombre-01.jpg
proyecto-nombre-02.jpg
retrato-perfil.jpg
```

No es necesario incorporar todavía todos los materiales.

### Entregable

Una estructura inicial de carpetas y archivos capaz de contener los recursos principales del portafolio.

---

## Actividad 3 · Primer repositorio

### Objetivo

Registrar el proyecto mediante control de versiones y crear una copia remota en GitHub.

### Instrucciones

Inicializa un repositorio Git dentro del proyecto.

Comprueba su estado y registra la primera versión de los archivos.

El flujo básico será:

```text
Proyecto local
      ↓
Git
      ↓
Commit
      ↓
GitHub
```

Crea posteriormente un repositorio en GitHub y conecta ambos proyectos.

Realiza un primer registro que represente el punto de partida.

Por ejemplo:

```text
Initial portfolio structure
```

Después realiza una modificación pequeña en `README.md`, registra nuevamente el estado y crea un segundo commit.

El objetivo es observar que Git conserva diferentes momentos dentro de la evolución del mismo proyecto.

### Entregable

Un repositorio que incluya:

1. Estructura inicial del proyecto.
2. Archivo `README.md`.
3. Repositorio Git inicializado.
4. Al menos dos commits.
5. Repositorio sincronizado con GitHub.

---

## Actividad 4 · IA como asistente

### Objetivo

Practicar el uso de inteligencia artificial como apoyo para comprender y modificar el proyecto sin delegar las decisiones fundamentales.

### Instrucciones

Utiliza un asistente de IA para realizar una tarea relacionada con tu proyecto.

Puedes pedirle, por ejemplo:

- Explicar la estructura de carpetas.
- Revisar nombres de archivos.
- Explicar un comando de Git.
- Proponer una estructura para un `README.md`.
- Explicar un error.
- Comparar dos posibles formas de organizar un recurso.

Antes de aplicar una respuesta:

1. Identifica qué estás intentando resolver.
2. Proporciona el contexto necesario.
3. Revisa la propuesta.
4. Pregunta sobre cualquier parte que no comprendas.
5. Modifica la solución cuando no corresponda con las decisiones de tu proyecto.
6. Comprueba el resultado.

### Entregable

Documenta brevemente:

```text
Problema o tarea:

Instrucción utilizada:

Respuesta obtenida:

Qué entendí:

Qué conservé:

Qué modifiqué:

Resultado:
```

El objetivo no es evaluar la complejidad de la instrucción utilizada, sino demostrar que puedes **comprender, evaluar y modificar el resultado antes de incorporarlo al proyecto**.

Al finalizar esta unidad tendrás un entorno preparado para comenzar a traducir la arquitectura de información y el sistema visual a estructuras web mediante **HTML, CSS y posteriormente JavaScript**.