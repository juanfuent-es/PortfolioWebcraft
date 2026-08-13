# Unidad 7 · Presentación (CSS)

## Objetivo

Traducir el sistema visual del portafolio a reglas de presentación mediante CSS. Construir una interfaz consistente, flexible y responsive, separando las decisiones visuales de la estructura semántica definida previamente en HTML.

## Temas

### CSS y presentación

**Objetivo:** Comprender CSS como el lenguaje encargado de definir la presentación visual de los documentos web.

**Descripción:** CSS —*Cascading Style Sheets*— permite controlar cómo se presentan los elementos definidos previamente mediante HTML. Mientras HTML describe qué es cada contenido y cómo se estructura, CSS establece propiedades como tipografía, color, espacio, tamaño, posición y composición.

Esta separación permite modificar la apariencia sin alterar el significado del documento. Una misma estructura HTML puede adoptar diferentes expresiones visuales dependiendo de las reglas que se apliquen.

El objetivo no es agregar estilos elemento por elemento, sino comenzar a traducir el sistema visual construido anteriormente a **reglas capaces de aplicarse consistentemente en todo el portafolio**.

---

### Selectores, cascada y herencia

**Objetivo:** Comprender cómo CSS identifica elementos y determina qué reglas deben aplicarse.

**Descripción:** Los selectores permiten identificar qué elementos recibirán determinadas propiedades. Es posible seleccionar elementos por su tipo, clase, atributos, relaciones con otros elementos o diferentes estados.

La **cascada** determina qué regla tiene prioridad cuando varias declaraciones afectan al mismo elemento. La **herencia** permite que ciertas propiedades, como algunas relacionadas con tipografía y color, se transmitan desde elementos superiores hacia sus descendientes.

Comprender estos mecanismos evita resolver cada elemento de manera independiente y permite construir reglas generales que puedan extenderse a todo el sistema.

---

### Variables y sistema visual

**Objetivo:** Convertir las decisiones fundamentales del sistema visual en valores reutilizables.

**Descripción:** Las propiedades personalizadas de CSS permiten almacenar valores que se utilizan repetidamente: colores, tipografías, espacios, tamaños, bordes u otras características del sistema.

En lugar de repetir un mismo valor en diferentes partes del código, puede definirse una variable y utilizarla como referencia. Esto permite modificar una decisión global desde un solo lugar y mantener consistencia entre diferentes componentes.

Las variables permiten comenzar a formalizar el sistema visual como un conjunto de **parámetros**. Algunas propiedades permanecen constantes mientras otras pueden cambiar dependiendo del contexto, contenido, estado o tamaño de pantalla.

---

### Tipografía, color y espacio

**Objetivo:** Implementar las decisiones tipográficas, cromáticas y espaciales definidas en el sistema visual.

**Descripción:** CSS permite traducir las decisiones de la Unidad 4 a propiedades concretas. Familias tipográficas, pesos, tamaños, interlineado, colores, márgenes y espacios pueden convertirse en reglas compartidas por diferentes contenidos.

La escala tipográfica debe expresar la jerarquía definida previamente sin comprometer la legibilidad. El color debe mantener relaciones funcionales entre fondos, textos, acentos y estados, considerando también niveles adecuados de contraste.

El espacio funciona como parte del sistema. En lugar de asignar valores arbitrarios a cada elemento, puede establecerse una escala que permita mantener relaciones consistentes entre contenidos.

---

### Composición y layout

**Objetivo:** Construir estructuras espaciales flexibles para organizar el contenido en diferentes vistas.

**Descripción:** CSS proporciona sistemas de composición como **Flexbox** y **Grid**, que permiten controlar relaciones entre elementos sin depender de posiciones rígidas.

Flexbox resulta especialmente útil para organizar elementos en una dimensión y controlar alineación, distribución y espacio. Grid permite construir relaciones bidimensionales mediante filas y columnas y resulta adecuado para estructuras más complejas.

El layout debe responder a la arquitectura de información y al contenido. Una retícula no es únicamente una decisión estética: establece reglas que permiten organizar diferentes cantidades y tipos de información dentro de un mismo sistema.

---

### Responsive design

**Objetivo:** Adaptar el sistema visual y la composición a diferentes tamaños, dispositivos y condiciones de visualización.

**Descripción:** Un sitio web no tiene un tamaño fijo. Puede visualizarse desde teléfonos, tabletas, computadoras, pantallas grandes o ventanas con dimensiones variables. El diseño responsive permite que la interfaz responda a estas condiciones.

La adaptación no consiste únicamente en reducir proporcionalmente una versión de escritorio. Dependiendo del espacio disponible pueden cambiar columnas, escalas, alineaciones, espacios, navegación o relaciones entre elementos.

CSS permite establecer comportamientos mediante unidades flexibles, funciones de tamaño y *media queries*. El objetivo es construir un sistema capaz de **adaptarse**, no una colección independiente de diseños para cada dispositivo.

---

### Estados e interacción visual

**Objetivo:** Definir cómo responde visualmente la interfaz ante diferentes acciones y estados.

**Descripción:** Los elementos interactivos necesitan comunicar su comportamiento. Enlaces, botones, controles y otros componentes pueden cambiar de apariencia cuando una persona pasa el cursor, utiliza el teclado, activa un elemento o interactúa con él.

Estados como `hover`, `focus`, `active` y `visited` permiten expresar estas diferencias mediante CSS. Cada estado debe mantener coherencia con el sistema visual y proporcionar información suficiente para comprender qué está ocurriendo.

Los estados también forman parte de la accesibilidad. La interacción no debe depender únicamente del color ni del uso del mouse, y los elementos que reciben foco mediante teclado deben permanecer claramente identificables.

---

## Bibliografía y recursos de referencia

- **Mozilla Developer Network (MDN).** Documentación y guías sobre CSS.  
  https://developer.mozilla.org/en-US/docs/Web/CSS
- **web.dev.** Curso introductorio y recursos sobre CSS.  
  https://web.dev/learn/css/
- **W3C.** Especificaciones y recursos relacionados con CSS.  
  https://www.w3.org/Style/CSS/
- **MDN.** Guía de Flexbox.  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Flexbox
- **MDN.** Guía de CSS Grid.  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Grids
- **MDN.** CSS Custom Properties.  
  https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
- **W3C Web Accessibility Initiative.** Recursos sobre accesibilidad visual y contraste.  
  https://www.w3.org/WAI/

---

# Actividades

Estas actividades traducirán el sistema visual definido anteriormente a CSS. El objetivo no será decorar las páginas, sino construir **reglas reutilizables capaces de mantener coherencia cuando cambian el contenido, la vista o el tamaño de pantalla**.

## Actividad 1 · Variables del sistema

### Objetivo

Convertir las principales decisiones del sistema visual en valores reutilizables mediante CSS.

### Instrucciones

Recupera el sistema desarrollado durante la Unidad 4.

Identifica sus valores fundamentales:

- Tipografías.
- Colores.
- Escala tipográfica.
- Espaciado.
- Anchos.
- Bordes.
- Otros valores recurrentes.

Crea un archivo:

```text
styles.css
```

Define las principales variables del sistema.

Por ejemplo:

```css
:root {
  --font-display: "Nombre Display", sans-serif;
  --font-text: "Nombre Texto", sans-serif;

  --color-background: #ffffff;
  --color-text: #111111;
  --color-accent: #0000ff;

  --space-small: 0.5rem;
  --space-medium: 1rem;
  --space-large: 2rem;
}
```

Los nombres deben describir la **función** de los valores dentro del sistema siempre que sea posible.

### Entregable

Un archivo CSS con las variables fundamentales del sistema visual.

---

## Actividad 2 · Tipografía, color y jerarquía

### Objetivo

Aplicar el sistema visual a la estructura HTML construida previamente.

### Instrucciones

Conecta `styles.css` con los documentos HTML.

Implementa:

- Tipografía principal.
- Tipografía de lectura.
- Color de fondo.
- Color de texto.
- Colores de acento.
- Escala de encabezados.
- Párrafos.
- Enlaces.
- Listas.
- Etiquetas.
- Espaciado básico.

Evita resolver cada página individualmente.

Busca reglas que puedan aplicarse de manera consistente a múltiples contenidos.

Comprueba:

- Legibilidad.
- Contraste.
- Jerarquía.
- Consistencia.
- Longitud de línea.
- Relaciones de espacio.

### Entregable

Las páginas HTML principales utilizando un sistema tipográfico, cromático y espacial común.

---

## Actividad 3 · Composición responsive

### Objetivo

Construir layouts capaces de adaptarse a diferentes cantidades de contenido y tamaños de pantalla.

### Instrucciones

Utiliza **Flexbox** y/o **Grid** para construir las principales composiciones del portafolio.

Prueba el sitio con:

- Una pantalla amplia.
- Una ventana reducida.
- Una tablet.
- Un teléfono.

Observa qué ocurre con:

- Navegación.
- Columnas.
- Imágenes.
- Tipografía.
- Márgenes.
- Espacios.
- Textos largos.
- Proyectos con diferente cantidad de contenido.

Evita utilizar valores fijos cuando el contenido pueda necesitar crecer o reducirse.

Define los cambios necesarios mediante reglas responsive.

Por ejemplo:

```css
.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-large);
}

@media (max-width: 768px) {
  .projects {
    grid-template-columns: 1fr;
  }
}
```

No se busca que todas las pantallas se vean iguales. Se busca que **el mismo sistema responda adecuadamente a condiciones diferentes**.

### Entregable

Las principales vistas del portafolio funcionando correctamente en diferentes tamaños de pantalla.

---

## Actividad 4 · Estados y consistencia

### Objetivo

Definir estados interactivos y revisar que las reglas visuales funcionen consistentemente en todo el portafolio.

### Instrucciones

Identifica todos los elementos interactivos.

Por ejemplo:

- Enlaces.
- Navegación.
- Botones.
- Tarjetas con enlace.
- Controles.
- Elementos seleccionables.

Define cuando corresponda:

```text
Normal
Hover
Focus
Active
Visited
```

Prueba la navegación utilizando mouse y teclado.

Después realiza una revisión general del sistema.

Comprueba:

- ¿Los mismos tipos de contenido utilizan las mismas reglas?
- ¿Las jerarquías son consistentes?
- ¿Los espacios siguen una lógica común?
- ¿Los colores tienen funciones claras?
- ¿Los estados interactivos son reconocibles?
- ¿El contenido funciona con diferentes longitudes?
- ¿El sistema continúa funcionando cuando agregas un proyecto nuevo?
- ¿La interfaz mantiene legibilidad en diferentes tamaños?

### Entregable

Una versión responsive del portafolio que incluya:

1. Variables del sistema.
2. Tipografía.
3. Color.
4. Espaciado.
5. Composición.
6. Estados interactivos.
7. Adaptaciones responsive.

Documenta brevemente las principales reglas:

```text
Tipografía:

Color:

Espaciado:

Layout:

Responsive:

Estados:

Variables principales:
```

Al finalizar esta unidad, la arquitectura de información, la estructura HTML y el sistema visual deben comenzar a funcionar como **un mismo sistema web**.

La siguiente etapa permitirá incorporar comportamiento e interacción mediante **JavaScript**, utilizando programación únicamente cuando aporte una función o experiencia que HTML y CSS por sí solos no puedan resolver.