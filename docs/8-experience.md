# Unidad 8 · Experiencia (JavaScript)

## Objetivo

Incorporar comportamiento e interacciones que mejoren la navegación, comunicación y experiencia del portafolio mediante JavaScript. Comprender la relación entre acciones, estados y respuestas para utilizar la programación como una herramienta al servicio del contenido, la identidad y el sistema previamente construido.

## Temas

### JavaScript y comportamiento

**Objetivo:** Comprender JavaScript como la capa encargada de incorporar comportamiento y lógica a una experiencia web.

**Descripción:** HTML permite estructurar el contenido y CSS definir su presentación. JavaScript agrega la posibilidad de modificar el estado de una página, responder a acciones y construir comportamientos que dependen de determinadas condiciones.

La programación no debe incorporarse únicamente porque una tecnología esté disponible. Antes de agregar una interacción es necesario identificar **qué problema resuelve, qué información comunica o qué experiencia permite construir**.

Una interacción significativa surge de una intención. Puede facilitar la navegación, revelar información progresivamente, permitir explorar contenido, responder a una acción o convertirse en parte de la expresión conceptual del proyecto.

---

### Eventos y respuestas

**Objetivo:** Comprender la interacción como una relación entre una acción y una respuesta del sistema.

**Descripción:** Una experiencia interactiva puede describirse inicialmente mediante una relación sencilla: **cuando ocurre una acción, el sistema produce una respuesta**. JavaScript permite escuchar eventos generados por la persona, el navegador o el propio documento y ejecutar instrucciones cuando estos ocurren.

Eventos como `click`, `input`, `change`, `scroll`, `keydown` o `pointermove` permiten detectar diferentes formas de interacción. La elección debe responder al comportamiento que se desea construir y al dispositivo desde el cual puede utilizarse.

Antes de escribir código, una interacción puede describirse en lenguaje natural: **cuando la persona hace X, ocurre Y**. Esta formulación ayuda a separar la intención de su implementación técnica.

---

### DOM y manipulación de contenido

**Objetivo:** Comprender cómo JavaScript puede consultar y modificar elementos de un documento HTML.

**Descripción:** El navegador representa el documento HTML mediante una estructura conocida como **DOM —Document Object Model—**. JavaScript puede utilizar esta representación para localizar elementos, consultar información, modificar contenido, agregar clases o cambiar atributos.

Esta relación conecta las tres capas fundamentales del sitio: HTML proporciona la estructura, CSS define posibles estados visuales y JavaScript determina cuándo deben cambiar.

Siempre que sea posible, JavaScript debe trabajar sobre una estructura HTML comprensible y utilizar CSS para resolver la presentación. Esto mantiene separadas las responsabilidades y facilita comprender, modificar y mantener el sistema.

---

### Variables, condiciones y funciones

**Objetivo:** Utilizar estructuras fundamentales de programación para construir comportamientos comprensibles y reutilizables.

**Descripción:** Las variables permiten almacenar información que puede cambiar durante una interacción. Las condiciones permiten tomar decisiones dependiendo del estado del sistema, y las funciones permiten agrupar instrucciones que pueden ejecutarse cuando sea necesario.

Estas herramientas permiten pasar de una secuencia fija a un sistema capaz de responder a diferentes situaciones. Por ejemplo, una navegación puede estar abierta o cerrada; una categoría puede estar seleccionada o no; una imagen puede pertenecer a una posición determinada dentro de una galería.

El objetivo no es estudiar JavaScript de manera exhaustiva, sino comprender suficientes principios para **leer, describir, modificar y construir comportamientos sencillos**, incluyendo aquellos desarrollados con asistencia de IA.

---

### Estados e interacción

**Objetivo:** Diseñar comportamientos a partir de estados claros y transiciones comprensibles.

**Descripción:** Muchos componentes interactivos pueden entenderse como sistemas con diferentes estados. Un menú puede estar abierto o cerrado; un filtro puede estar activo o inactivo; una galería puede mostrar diferentes elementos; una sección puede estar visible u oculta.

Definir primero los estados permite comprender qué debe hacer la interacción antes de implementarla. JavaScript puede modificar estos estados y CSS encargarse de representar visualmente sus diferencias.

Pensar en estados ayuda a construir interacciones consistentes y evita depender de secuencias arbitrarias de instrucciones. También facilita detectar casos que deben considerarse durante el uso.

---

### Interacción y experiencia

**Objetivo:** Utilizar comportamiento e interacción como parte de la comunicación y no únicamente como efecto visual.

**Descripción:** Una interacción puede cumplir una función utilitaria, pero también puede formar parte de la identidad y narrativa de un proyecto. Movimiento, exploración, transformación, azar, respuesta al cursor o manipulación directa pueden convertirse en recursos expresivos cuando tienen relación con el concepto.

La experiencia debe mantener una relación con el contenido. Una interacción llamativa que dificulta acceder a la información puede entrar en conflicto con el propósito del portafolio; una interacción sencilla puede resultar significativa si refuerza la manera en que se quiere presentar una práctica.

El sistema visual puede extenderse así hacia un **sistema de comportamiento**, definiendo qué permanece estable, qué puede transformarse y bajo qué condiciones ocurre cada cambio.

---

### Accesibilidad y alternativas

**Objetivo:** Incorporar interacciones que puedan comprenderse y utilizarse bajo diferentes condiciones.

**Descripción:** Una interacción no debe asumir que todas las personas utilizan mouse, pantalla grande o las mismas capacidades de percepción y movimiento. Siempre que sea posible, las funciones principales deben mantenerse accesibles mediante diferentes formas de navegación.

Elementos interactivos deben utilizar estructuras HTML adecuadas, mantener estados de foco visibles y permitir interacción mediante teclado cuando corresponda. JavaScript debe complementar la estructura existente en lugar de sustituir innecesariamente funciones que HTML puede resolver de manera nativa.

También es importante considerar preferencias como la reducción de movimiento y evitar comportamientos que dificulten la lectura, orientación o control de la interfaz.

---

## Bibliografía y recursos de referencia

- **Mozilla Developer Network (MDN).** Documentación sobre JavaScript.  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript
- **MDN.** Introducción a eventos.  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events
- **MDN.** Introducción al DOM.  
  https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model
- **javascript.info.** Tutorial progresivo sobre JavaScript, DOM y eventos.  
  https://javascript.info/
- **Eloquent JavaScript.** Haverbeke, Marijn. Libro abierto sobre fundamentos de JavaScript.  
  https://eloquentjavascript.net/
- **W3C Web Accessibility Initiative.** Recursos sobre interacción y accesibilidad.  
  https://www.w3.org/WAI/
- **web.dev.** Recursos sobre accesibilidad y preferencias de movimiento.  
  https://web.dev/learn/accessibility/

---

# Actividades

Estas actividades incorporarán comportamiento al sistema construido durante las unidades anteriores. El objetivo no será agregar interacciones a todas las partes del sitio, sino **identificar dónde una respuesta del sistema puede mejorar la navegación, comprensión o expresión del portafolio**.

## Actividad 1 · Acción, estado y respuesta

### Objetivo

Describir una interacción antes de comenzar a programarla.

### Instrucciones

Recorre tu portafolio e identifica posibles situaciones donde exista una interacción.

Por ejemplo:

- Abrir o cerrar navegación.
- Filtrar proyectos.
- Cambiar entre imágenes.
- Mostrar información adicional.
- Seleccionar una categoría.
- Expandir un proceso.
- Recorrer una galería.
- Modificar una visualización.
- Responder al teclado, cursor o scroll.

Selecciona al menos tres posibilidades.

Describe cada una mediante:

```text
Acción:
¿Qué hace la persona?

Estado inicial:
¿Cómo se encuentra el sistema?

Respuesta:
¿Qué debe ocurrir?

Estado final:
¿Cómo queda el sistema?

Propósito:
¿Por qué esta interacción mejora la experiencia?
```

Por ejemplo:

```text
Acción:
Seleccionar la categoría "Experimental".

Estado inicial:
Todos los proyectos están visibles.

Respuesta:
El sistema identifica los proyectos relacionados con la categoría.

Estado final:
Se muestran únicamente los proyectos experimentales.

Propósito:
Permitir explorar el portafolio según diferentes áreas de práctica.
```

### Entregable

La descripción de al menos tres posibles interacciones y la selección de una para desarrollar.

---

## Actividad 2 · Primera interacción

### Objetivo

Implementar una relación sencilla entre un evento y una respuesta utilizando JavaScript.

### Instrucciones

Crea un archivo:

```text
script.js
```

Conéctalo con el documento HTML correspondiente.

Selecciona un elemento existente y construye una interacción sencilla.

Por ejemplo:

```javascript
const button = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

button.addEventListener("click", function () {
  navigation.classList.toggle("is-open");
});
```

Define el estado visual desde CSS:

```css
.navigation {
  display: none;
}

.navigation.is-open {
  display: block;
}
```

Identifica dentro del ejemplo:

- Elemento.
- Evento.
- Estado.
- Acción.
- Respuesta.

Modifica el comportamiento para adaptarlo a una necesidad real de tu portafolio.

### Entregable

Una interacción funcional integrada al sitio.

Documenta brevemente:

```text
Elemento:

Evento:

Estado:

Respuesta:

Propósito:
```

---

## Actividad 3 · Comportamiento del portafolio

### Objetivo

Diseñar e implementar una interacción relacionada con la estructura, identidad o contenido del proyecto.

### Instrucciones

Recupera las posibilidades identificadas durante la primera actividad.

Selecciona una interacción que aporte una función o experiencia relevante.

Puede estar relacionada con:

- Navegación.
- Exploración de proyectos.
- Categorías.
- Galerías.
- Información progresiva.
- Movimiento.
- Tipografía.
- Imágenes.
- Cursor.
- Scroll.
- Tiempo.
- Aleatoriedad.
- Transformación visual.

Antes de programar, escribe su lógica en lenguaje natural.

Por ejemplo:

```text
Cuando la persona selecciona una categoría:

1. Identificar la categoría seleccionada.
2. Revisar los proyectos disponibles.
3. Comparar la categoría de cada proyecto.
4. Mostrar los proyectos relacionados.
5. Ocultar los demás.
6. Indicar visualmente qué categoría está activa.
```

Después traduce progresivamente esta lógica a JavaScript.

Puedes utilizar IA como apoyo para explicar, proponer o revisar la implementación, pero debes poder describir qué hace el código y modificar sus principales parámetros.

### Entregable

Una interacción integrada al portafolio acompañada por:

1. Propósito.
2. Descripción en lenguaje natural.
3. Estados.
4. Eventos utilizados.
5. Código implementado.
6. Parámetros que pueden modificarse.

---

## Actividad 4 · Prueba y refinamiento

### Objetivo

Evaluar si las interacciones incorporadas mejoran realmente la experiencia del portafolio.

### Instrucciones

Prueba el sitio completo.

Observa:

- ¿La interacción tiene un propósito reconocible?
- ¿La persona entiende que puede interactuar?
- ¿La respuesta es clara?
- ¿Existe retroalimentación visual?
- ¿Funciona con diferentes tamaños de pantalla?
- ¿Puede utilizarse mediante teclado cuando corresponde?
- ¿El contenido sigue siendo accesible si JavaScript falla?
- ¿El movimiento dificulta la lectura?
- ¿La interacción pertenece al sistema visual y conceptual?
- ¿La experiencia mejora sin interacción adicional?

Pide a otra persona que utilice el portafolio sin explicarle previamente cómo funcionan las interacciones.

Observa qué intenta hacer, qué comprende y dónde encuentra dificultades.

No le indiques inmediatamente cómo utilizarlo. **La manera en que intenta interactuar también produce información sobre el sistema.**

### Entregable

Una versión revisada del portafolio que incluya:

1. Interacciones funcionales.
2. Estados claramente definidos.
3. Retroalimentación visual.
4. Adaptación responsive.
5. Consideraciones básicas de accesibilidad.
6. Correcciones realizadas después de las pruebas.

Documenta:

```text
Interacción:

Propósito:

Problema detectado:

Observación durante la prueba:

Cambio realizado:

Resultado:
```

Al finalizar esta unidad, el portafolio debe integrar **estructura, presentación y comportamiento** como partes de un mismo sistema.

La interacción no se entiende como una capa decorativa agregada al final, sino como una herramienta que puede reforzar la navegación, la identidad, el contenido y la experiencia que se quiere comunicar.