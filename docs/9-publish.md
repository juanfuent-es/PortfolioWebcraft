# Unidad 9 · Publicación

## Objetivo

Publicar el portafolio en internet utilizando herramientas profesionales de control de versiones y despliegue. Comprender la relación entre repositorio, servidor, dominio y sitio publicado, así como establecer un flujo que permita mantener y actualizar el proyecto después de su lanzamiento.

## Temas

### De local a producción

**Objetivo:** Comprender la diferencia entre desarrollar un sitio localmente y hacerlo accesible públicamente en internet.

**Descripción:** Durante el desarrollo, los archivos del portafolio existen principalmente dentro de una computadora y son interpretados localmente por el navegador. Publicar implica trasladar esos archivos a una infraestructura capaz de responder a solicitudes realizadas desde internet.

El sitio publicado se conoce como entorno de **producción**. Aunque puede contener los mismos archivos que el proyecto local, existe dentro de un contexto diferente: tiene una dirección pública, depende de un servidor y puede ser consultado desde otros dispositivos y ubicaciones.

Comprender esta transición permite reconocer que publicar no significa simplemente “subir una página”, sino conectar diferentes partes de un sistema para que el contenido pueda ser solicitado, enviado e interpretado mediante la web.

---

### Servidor, cliente y petición

**Objetivo:** Comprender de manera general cómo un navegador solicita y recibe los archivos que forman un sitio web.

**Descripción:** Cuando una persona visita una dirección web, el navegador funciona como **cliente** y realiza una petición a un servidor. El servidor localiza los recursos correspondientes y devuelve una respuesta que puede incluir HTML, CSS, JavaScript, imágenes, tipografías u otros archivos.

El navegador interpreta estos recursos y construye la experiencia que vemos en pantalla. Esta relación entre **cliente, petición, servidor y respuesta** constituye una de las bases del funcionamiento de la web.

No es necesario administrar infraestructura backend para publicar un portafolio estático, pero comprender este modelo permite entender dónde existe el sitio, por qué necesita alojamiento y qué ocurre cuando una persona escribe su dirección en un navegador.

---

### Repositorio y despliegue

**Objetivo:** Utilizar el repositorio como fuente del proyecto y conectarlo con un proceso de publicación.

**Descripción:** El repositorio construido durante el desarrollo contiene los archivos y el historial del proyecto. Un servicio de despliegue puede utilizar este repositorio para generar y publicar automáticamente una versión accesible desde internet.

Este proceso establece una relación entre **desarrollo local, Git, repositorio remoto y producción**. Una modificación puede realizarse localmente, registrarse mediante un commit, enviarse al repositorio y posteriormente convertirse en una nueva versión del sitio publicado.

El despliegue automatizado permite que publicar deje de ser una acción excepcional y se convierta en parte del flujo normal de mantenimiento del proyecto.

---

### Dominio y dirección web

**Objetivo:** Comprender cómo un dominio permite identificar y acceder a un sitio publicado.

**Descripción:** Un dominio proporciona una dirección legible mediante la cual las personas pueden acceder a un sitio. Puede utilizarse un dominio propio, un subdominio o la dirección proporcionada por el servicio de publicación.

El dominio no contiene necesariamente el sitio. Funciona como una referencia que permite localizar el servidor o servicio donde se encuentra publicado el proyecto. Esta relación se establece mediante el sistema de nombres de dominio o **DNS**.

Para un portafolio profesional, el dominio también forma parte de su identidad y permanencia. Mantener una dirección propia permite modificar posteriormente la infraestructura de publicación sin necesariamente cambiar la dirección desde la que las personas acceden al trabajo.

---

### Metadatos y representación externa

**Objetivo:** Definir cómo se identifica y presenta el portafolio cuando aparece fuera del propio sitio.

**Descripción:** Un sitio también comunica información cuando aparece en buscadores, pestañas del navegador, aplicaciones de mensajería o redes sociales. Los metadatos permiten proporcionar título, descripción, idioma, imagen de previsualización y otra información utilizada por estos servicios.

Elementos como `title`, `meta description` y metadatos Open Graph ayudan a construir una representación coherente del sitio fuera de sus propias páginas.

Esta información debe mantener relación con el posicionamiento desarrollado durante la Unidad 2. El nombre, título, tagline y descriptor pueden convertirse ahora en información concreta utilizada por navegadores, buscadores y plataformas externas.

---

### Revisión antes de publicar

**Objetivo:** Evaluar el sitio completo antes de considerarlo listo para su publicación.

**Descripción:** Publicar implica revisar el proyecto como un sistema completo. Un error pequeño puede no ser evidente durante el desarrollo, pero afectar rutas, imágenes, navegación o contenido cuando el sitio se encuentra en producción.

La revisión debe considerar contenido, estructura, presentación, interacción, diferentes tamaños de pantalla, enlaces, accesibilidad, ortografía, rendimiento y metadatos.

El objetivo no es alcanzar una versión perfecta o definitiva. Se busca establecer una **versión suficientemente completa, funcional y coherente para ser publicada**, identificando también aspectos que podrán continuar evolucionando.

---

### Mantenimiento y evolución

**Objetivo:** Comprender el portafolio como un proyecto vivo que puede actualizarse después de su publicación.

**Descripción:** Publicar no representa el final técnico del proyecto. Nuevos trabajos, cambios profesionales, información actualizada o mejoras del sistema harán necesario modificar el sitio con el tiempo.

Una estructura de información clara, componentes reutilizables, reglas visuales y control de versiones permiten incorporar cambios sin reconstruir el portafolio desde cero.

El mantenimiento forma parte del diseño del sistema. Un portafolio escalable debe permitir **agregar, modificar y retirar contenido** conservando la lógica construida durante el proyecto.

---

## Bibliografía y recursos de referencia

- **MDN Web Docs.** Introducción al funcionamiento de la web.  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works
- **MDN Web Docs.** Publicación de sitios web.  
  https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Publishing_your_website
- **GitHub Docs.** Documentación sobre GitHub Pages.  
  https://docs.github.com/en/pages
- **GitHub Docs.** Configuración de dominios personalizados para GitHub Pages.  
  https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site
- **Cloudflare Learning Center.** Recursos sobre DNS y funcionamiento de internet.  
  https://www.cloudflare.com/learning/dns/what-is-dns/
- **Open Graph Protocol.** Especificación de metadatos para representación de contenidos.  
  https://ogp.me/
- **Google Search Central.** Fundamentos sobre SEO y representación de sitios en buscadores.  
  https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **W3C Web Accessibility Initiative.** Recursos y herramientas para evaluación de accesibilidad.  
  https://www.w3.org/WAI/test-evaluate/

---

# Actividades

Estas actividades convertirán el proyecto desarrollado localmente en un sitio público. El objetivo será comprender el proceso completo de publicación y establecer un flujo que permita continuar modificándolo después del lanzamiento.

## Actividad 1 · Revisión de producción

### Objetivo

Realizar una revisión integral del portafolio antes de publicarlo.

### Instrucciones

Recorre todas las páginas del sitio y comprueba:

**Contenido**

- Títulos.
- Descripciones.
- Fechas.
- Créditos.
- Información de contacto.
- Ortografía.
- Proyectos seleccionados.

**Navegación**

- Enlaces internos.
- Enlaces externos.
- Navegación principal.
- Regreso al inicio.
- Rutas entre proyectos.

**Sistema visual**

- Tipografía.
- Color.
- Contraste.
- Espaciado.
- Imágenes.
- Consistencia entre páginas.

**Responsive**

Prueba diferentes dimensiones:

- Teléfono.
- Tablet.
- Laptop.
- Pantalla amplia.

**Interacción**

- Estados.
- Botones.
- Navegación.
- JavaScript.
- Teclado.
- Movimiento.

**Metadatos**

Comprueba al menos:

```text
Title
Description
Language
Viewport
Open Graph title
Open Graph description
Open Graph image
```

Registra los problemas encontrados antes de corregirlos.

### Entregable

Una lista de revisión que incluya:

1. Problemas encontrados.
2. Prioridad.
3. Correcciones realizadas.
4. Aspectos pendientes.

---

## Actividad 2 · Publicar el portafolio

### Objetivo

Conectar el repositorio con un servicio de publicación y hacer accesible el proyecto mediante internet.

### Instrucciones

Comprueba primero que la versión actual del proyecto se encuentre registrada correctamente en Git.

El flujo será:

```text
Proyecto local
      ↓
Git
      ↓
Commit
      ↓
GitHub
      ↓
Deploy
      ↓
Sitio público
```

Publica el proyecto utilizando el servicio definido para el curso.

Una vez publicado:

1. Abre la dirección desde tu computadora.
2. Comprueba las principales páginas.
3. Abre el sitio desde otro dispositivo.
4. Comprueba imágenes y recursos.
5. Revisa enlaces.
6. Revisa la consola del navegador para detectar errores.
7. Corrige cualquier problema específico de producción.

### Entregable

Una versión pública y funcional del portafolio.

Incluye:

```text
Repositorio:

URL pública:

Fecha de publicación:

Versión:
```

---

## Actividad 3 · Dominio y metadatos

### Objetivo

Configurar la dirección definitiva del portafolio y controlar cómo se representa fuera del sitio.

### Instrucciones

Si cuentas con un dominio propio, conecta el dominio o subdominio con el sitio publicado.

Comprueba:

```text
https://tudominio.com
```

Configura los metadatos principales de las páginas.

Por ejemplo:

```html
<title>Nombre · Título profesional</title>

<meta
  name="description"
  content="Descriptor del portafolio."
>
```

Agrega los metadatos necesarios para compartir el sitio.

Comprueba cómo aparece el portafolio cuando se comparte mediante diferentes plataformas.

Utiliza una imagen de previsualización adecuada y verifica que nombre, título y descripción correspondan con el posicionamiento definido previamente.

### Entregable

Un sitio publicado que incluya:

1. Dirección pública.
2. Dominio o subdominio, cuando corresponda.
3. Título.
4. Descripción.
5. Imagen de previsualización.
6. Metadatos principales.

---

## Actividad 4 · Actualización y mantenimiento

### Objetivo

Comprobar que el portafolio puede continuar evolucionando después de su publicación.

### Instrucciones

Realiza una modificación pequeña después de haber publicado el sitio.

Por ejemplo:

- Corregir un texto.
- Actualizar una descripción.
- Agregar una imagen.
- Modificar un enlace.
- Ajustar una regla visual.

Registra el cambio mediante Git.

```text
Modificar
    ↓
Revisar
    ↓
Commit
    ↓
Push
    ↓
Deploy
    ↓
Verificar
```

Comprueba que la modificación aparezca correctamente en producción.

Después identifica qué partes del portafolio necesitarán mantenimiento futuro.

Por ejemplo:

```text
Proyectos:
Agregar nuevos trabajos.

Perfil:
Actualizar experiencia y descripción.

Enlaces:
Revisar periódicamente.

Dependencias:
Mantener actualizadas cuando corresponda.

Dominio:
Renovar.

Contenido:
Revisar proyectos que dejan de representar la práctica.
```

### Entregable

Documenta:

```text
Cambio realizado:

Commit:

Resultado en producción:

Contenido que necesitará actualización:

Mantenimiento técnico:

Próxima revisión:
```

---

## Actividad 5 · Publicación final

### Objetivo

Presentar el portafolio como un sistema completo, publicado y preparado para continuar evolucionando.

### Instrucciones

Realiza una última revisión del recorrido construido durante el programa:

```text
Universo de información
        ↓
Identidad
        ↓
Arquitectura de información
        ↓
Sistema visual
        ↓
Entorno de desarrollo
        ↓
HTML
        ↓
CSS
        ↓
JavaScript
        ↓
Publicación
```

Comprueba que las decisiones tomadas durante las primeras unidades continúen siendo reconocibles en el resultado final.

Prepara una presentación breve en la que puedas explicar:

- Qué decidiste mostrar.
- Cómo organizaste tu contenido.
- Cómo definiste tu identidad.
- Qué reglas construyen tu sistema visual.
- Cómo tradujiste esas reglas a web.
- Qué interacciones incorporaste y por qué.
- Qué cambió durante el proceso.
- Qué aspectos quieres continuar desarrollando.

### Entregable

**Portafolio publicado**, acompañado por:

1. URL pública.
2. Repositorio.
3. Presentación breve del proyecto.
4. Documentación básica.
5. Lista de aspectos pendientes o futuras mejoras.

El resultado final no se entiende como un portafolio terminado de manera permanente, sino como una **primera versión pública de un sistema que puede mantenerse, modificarse y crecer conforme evoluciona la práctica profesional**.