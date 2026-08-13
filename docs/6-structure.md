# Unidad 6 · Estructura (HTML)

## Objetivo

Traducir la arquitectura de información del portafolio a una estructura web mediante HTML semántico. Comprender cómo el contenido se organiza mediante elementos, jerarquías y relaciones antes de incorporar decisiones de presentación visual.

## Temas

### HTML y documentos web

**Objetivo:** Comprender HTML como lenguaje de marcado para describir la estructura y el significado del contenido.

**Descripción:** HTML —*HyperText Markup Language*— es el lenguaje utilizado para estructurar el contenido de una página web. A diferencia de un lenguaje de programación, HTML no define principalmente comportamientos o procesos: utiliza etiquetas para describir qué representa cada parte de un documento.

Un título, un párrafo, una imagen, una lista o un enlace tienen funciones diferentes. HTML permite hacer explícitas estas diferencias mediante elementos que el navegador interpreta para construir un documento.

El objetivo inicial no es controlar cómo se ve una página, sino construir una estructura que tenga sentido incluso antes de aplicar estilos visuales.

---

### Estructura de un documento

**Objetivo:** Reconocer y construir las partes fundamentales de un documento HTML.

**Descripción:** Todo documento HTML parte de una estructura básica que permite al navegador identificar el tipo de documento, su idioma, información general y contenido visible.

Elementos como `html`, `head` y `body` cumplen funciones diferentes. El `head` contiene información sobre el documento, mientras que el `body` contiene aquello que será presentado dentro de la página.

Comprender esta estructura permite distinguir entre **contenido, metadatos y configuración**, y proporciona una base consistente para construir las diferentes vistas del portafolio.

---

### HTML semántico

**Objetivo:** Utilizar elementos HTML de acuerdo con el significado y función del contenido.

**Descripción:** HTML ofrece elementos que permiten describir la función de diferentes partes de un documento. Elementos como `header`, `nav`, `main`, `section`, `article` y `footer` permiten expresar relaciones estructurales sin depender de su apariencia visual.

La semántica ayuda a que la estructura sea comprensible para navegadores, tecnologías de asistencia, motores de búsqueda, herramientas automatizadas y otras personas que trabajan con el código.

Elegir un elemento por su significado y no por cómo se ve permite separar **estructura y presentación**, una distinción fundamental para construir sistemas web mantenibles.

---

### Jerarquía y contenido

**Objetivo:** Representar correctamente las jerarquías definidas durante la arquitectura de información.

**Descripción:** Los niveles de información definidos previamente pueden traducirse a elementos HTML. Títulos, subtítulos, párrafos, listas, citas, imágenes y otros contenidos deben mantener relaciones comprensibles dentro del documento.

Los encabezados `h1` a `h6` permiten expresar niveles jerárquicos. No deben elegirse por su tamaño visual, sino por la posición que ocupa cada título dentro de la estructura del contenido.

Una jerarquía correcta permite comprender un documento incluso sin estilos y prepara una base sólida para accesibilidad, navegación y presentación visual.

---

### Enlaces, imágenes y medios

**Objetivo:** Incorporar recursos y relaciones entre documentos mediante elementos propios de la web.

**Descripción:** La web no está formada únicamente por documentos aislados. Los enlaces permiten establecer conexiones entre páginas, secciones, archivos y recursos externos, construyendo recorridos entre diferentes contenidos.

Las imágenes y otros medios forman parte del contenido y deben incorporarse considerando su función, ubicación, formato y descripción. Una imagen puede ser contenido fundamental, información complementaria o un recurso puramente decorativo.

Trabajar correctamente con rutas relativas y absolutas permite mantener relaciones entre archivos sin depender de una ubicación específica dentro de una computadora.

---

### Accesibilidad y metadatos

**Objetivo:** Incorporar información que permita que el contenido pueda ser comprendido por personas, navegadores, buscadores y otras tecnologías.

**Descripción:** Una estructura semántica proporciona una primera capa de accesibilidad, pero existen decisiones adicionales como establecer el idioma del documento, utilizar textos alternativos para imágenes, describir correctamente los enlaces y mantener una jerarquía coherente.

Los metadatos permiten proporcionar información sobre una página que no necesariamente aparece dentro del contenido principal: título, descripción, codificación, configuración del viewport y otros datos utilizados por navegadores y servicios externos.

La accesibilidad debe entenderse como una característica estructural del proyecto y no como una corrección que se agrega después de terminar el diseño.

---

## Bibliografía y recursos de referencia

- **Mozilla Developer Network (MDN).** Documentación y guías sobre HTML.  
  https://developer.mozilla.org/en-US/docs/Web/HTML
- **WHATWG.** *HTML Living Standard*. Especificación actual de HTML.  
  https://html.spec.whatwg.org/
- **W3C Web Accessibility Initiative.** Recursos sobre estructura, contenido y accesibilidad.  
  https://www.w3.org/WAI/
- **MDN.** Introducción a HTML.  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content
- **web.dev.** Recursos sobre HTML y accesibilidad.  
  https://web.dev/learn/html/
- **The A11Y Project.** Checklist y recursos prácticos sobre accesibilidad web.  
  https://www.a11yproject.com/

---

# Actividades

Estas actividades traducirán las decisiones tomadas durante las unidades anteriores a documentos que puedan ser interpretados por un navegador. El objetivo será construir primero **contenido estructurado y semántico**, sin utilizar CSS para resolver su apariencia.

## Actividad 1 · De información a HTML

### Objetivo

Traducir la estructura de información de un proyecto a elementos HTML semánticos.

### Instrucciones

Selecciona uno de los proyectos documentados durante la Unidad 3.

Identifica sus diferentes tipos de información.

Por ejemplo:

```text
Proyecto

Título
Año
Descripción
Categorías
Rol
Cliente
Imágenes
Créditos
Enlaces
```

Determina qué elementos HTML pueden representar cada parte.

Por ejemplo:

```html
<article>
  <header>
    <h1>Nombre del proyecto</h1>
    <p>2026</p>
  </header>

  <p>Descripción del proyecto.</p>

  <ul>
    <li>Diseño</li>
    <li>Desarrollo web</li>
  </ul>
</article>
```

No utilices CSS ni atributos destinados exclusivamente a modificar la apariencia.

Observa el documento directamente en el navegador.

### Entregable

Un archivo HTML que represente correctamente la información de un proyecto utilizando elementos semánticos.

---

## Actividad 2 · Página de proyecto

### Objetivo

Construir una vista completa de proyecto utilizando contenido real del portafolio.

### Instrucciones

Utiliza la estructura definida en la actividad anterior y agrega el contenido necesario.

Incluye cuando corresponda:

- Título.
- Año.
- Descripción.
- Rol.
- Cliente.
- Categorías.
- Imágenes.
- Video.
- Proceso.
- Colaboradores.
- Créditos.
- Enlaces relacionados.

Utiliza encabezados para representar jerarquías y elementos semánticos para dividir las diferentes partes del contenido.

Las imágenes relevantes deben incluir texto alternativo cuando corresponda.

El documento debe poder comprenderse correctamente **sin CSS**.

### Entregable

Una página HTML completa para uno de los proyectos del portafolio.

---

## Actividad 3 · Vistas principales

### Objetivo

Traducir la arquitectura de información definida previamente a las principales páginas del portafolio.

### Instrucciones

Recupera la arquitectura desarrollada durante la Unidad 3.

Por ejemplo:

```text
Portafolio
│
├── Inicio
├── Proyectos
│   └── Proyecto
├── Perfil
└── Contacto
```

Crea los documentos HTML necesarios para representar esa estructura.

Por ejemplo:

```text
portfolio/
│
├── index.html
├── about.html
├── contact.html
│
└── projects/
    ├── proyecto-01.html
    ├── proyecto-02.html
    └── proyecto-03.html
```

Adapta la estructura a tu propio proyecto.

Conecta las páginas utilizando enlaces.

Comprueba que sea posible recorrer el portafolio desde el navegador sin escribir manualmente las rutas.

### Entregable

Las principales vistas del portafolio construidas en HTML y conectadas mediante navegación.

---

## Actividad 4 · Revisión semántica y accesibilidad

### Objetivo

Revisar la estructura HTML para comprobar que el contenido mantiene significado, jerarquía y accesibilidad básica.

### Instrucciones

Revisa las páginas construidas.

Comprueba:

- Idioma del documento.
- `title` de cada página.
- Descripción general mediante metadatos.
- Uso correcto de `header`, `nav`, `main`, `section`, `article` y `footer`.
- Un `h1` principal claramente identificable.
- Jerarquía coherente de encabezados.
- Textos alternativos en imágenes cuando sean necesarios.
- Enlaces con textos comprensibles.
- Listas utilizadas cuando existe realmente una colección de elementos.
- Navegación funcional entre páginas.
- Rutas de archivos correctas.
- Ausencia de elementos utilizados únicamente para producir una apariencia determinada.

Observa también el sitio con los estilos predeterminados del navegador.

Pregúntate:

**¿La estructura permite comprender qué es cada contenido y qué relación tiene con los demás?**

### Entregable

Una versión revisada de las páginas HTML principales del portafolio.

Documenta brevemente:

```text
Problemas encontrados:

Cambios realizados:

Decisiones semánticas:

Elementos de accesibilidad incorporados:

Aspectos pendientes:
```

Al finalizar esta unidad, el portafolio debe existir como un conjunto de **documentos HTML estructurados, relacionados y navegables**, aunque todavía utilice la presentación predeterminada del navegador.

La siguiente etapa permitirá traducir el sistema visual definido anteriormente a reglas de presentación mediante **CSS**.