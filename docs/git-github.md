¿Qué es&nbsp;Git?

Git es un sistema de control de versiones.
Sirve para registrar el historial de un proyecto y poder:

Guardar cambios de forma ordenada

Volver a estados anteriores

Entender cómo evoluciona un proyecto

Git vive en tu computadora y funciona incluso sin internet.

Git no es “programar”.
Es una herramienta de proceso, como guardar versiones, pero de forma inteligente.

¿Qué es un&nbsp;repositorio?

Un repositorio es la carpeta del proyecto que Git está monitoreando.

Contiene:

Archivos del proyecto (HTML, CSS, imágenes, etc.)

El historial de cambios

Información de versiones

Tipos de repositorio

Repositorio local: está en tu computadora

Repositorio remoto: está en internet (por ejemplo, en GitHub)

¿Qué es&nbsp;GitHub?

GitHub es una plataforma en línea para alojar repositorios.

GitHub sirve para:

Respaldar proyectos

Compartir código

Trabajar en equipo

Entregar trabajos académicos

Mostrar proyectos públicamente

Relación Git – GitHub

Git: herramienta local que guarda versiones

GitHub: plataforma que almacena repositorios en la nube

¿Qué es&nbsp;SSH?

SSH (Secure Shell) es un método de conexión segura entre tu computadora y GitHub.

En lugar de escribir usuario y contraseña cada vez, SSH usa:

Un par de llaves digitales

Llave privada (se queda en tu computadora)

Llave pública (se registra en GitHub)

GitHub usa esa llave para reconocer que eres tú.

Crear una&nbsp;llave SSH (en tu computadora)

Estos pasos se hacen una sola vez.

Paso 1. Abrir la terminal

En macOS o Linux: Terminal

En Windows: Git Bash o Terminal de VS Code

Paso 2. Generar la llave SSH

Ejecuta el siguiente comando (usa el correo con el que te registraste en GitHub):

ssh-keygen -t ed25519 -C "tucorreo@ejemplo.com"


Si tu sistema no soporta ed25519, usa:

ssh-keygen -t rsa -b 4096 -C "tucorreo@ejemplo.com"

Paso 3. Confirmar ubicación

Cuando pregunte:

Enter a file in which to save the key


Presiona Enter para aceptar la ubicación por defecto.

Paso 4. Passphrase (opcional)

Puedes:

Presionar Enter para no usar passphrase

O escribir una para mayor seguridad

Copiar la&nbsp;llave pública

La llave pública es la que se registra en GitHub.

Copiarla desde la terminal
cat ~/.ssh/id_ed25519.pub


Copia todo el texto que aparece.

Registrar la llave en GitHub
Paso 1. Entrar a GitHub

Inicia sesión en GitHub

Paso 2. Ir a configuración

Foto de perfil (arriba a la derecha)

Settings

SSH and GPG keys

New SSH key

Paso 3. Agregar la llave

Title: nombre descriptivo (ej. “Laptop personal”)

Key type: Authentication Key

Key: pega la llave pública copiada

Guardar.

Identidad en git

Asigna valores de nombre y correo electrónico en tu cuenta de git para relacionar una identidad con los cambios

git config user.name "YOUR_NAME"

git config --global user.email "YOUR_EMAIL"

Flujo básico de trabajo con Git (comandos esenciales)

Este flujo describe el ciclo mínimo y más común para trabajar con Git desde la terminal, aplicable a proyectos individuales y académicos.

git status

Muestra el estado actual del repositorio.

Permite saber:

Qué archivos han sido modificados

Qué archivos están listos para guardarse (staged)

Qué archivos aún no están siendo rastreados por Git

Se usa constantemente para entender en qué punto del flujo se encuentra el proyecto.

git add

Agrega archivos al área de preparación (staging area).

Sirve para indicar qué cambios específicos se desean guardar en el siguiente commit.

Ejemplos:

git add index.html agrega un archivo específico

git add . agrega todos los cambios del proyecto

No guarda cambios todavía, solo los prepara.

git commit -m "mensaje"

Guarda un estado del proyecto con un mensaje descriptivo.

El commit:

Crea un punto en el historial

Permite volver a este estado más adelante

Documenta qué se hizo y por qué

El mensaje debe ser claro y breve, por ejemplo:

"estructura inicial del sitio"

"ajustes de tipografía y color"

git pull

Descarga los cambios más recientes desde el repositorio remoto (GitHub) y los integra al repositorio local.

Se usa para:

Mantener el proyecto actualizado

Evitar conflictos antes de seguir trabajando

Es recomendable ejecutarlo antes de comenzar a editar archivos.

git push

Envía los commits locales al repositorio remoto.

Sirve para:

Respaldar el proyecto en GitHub

Compartir avances

Entregar trabajos académicos

Después de hacer git push, los cambios quedan visibles en GitHub.

Flujo resumido paso a paso

Editar archivos en el proyecto

Revisar cambios con git status

Preparar cambios con git add

Guardar el estado con git commit -m

Sincronizar antes de subir con git pull

Enviar cambios a GitHub con git push

Este flujo se repite durante todo el desarrollo del proyecto y constituye la base del uso cotidiano de Git.




¿Qué papel juega&nbsp;Visual Studio Code?

Visual Studio Code es el espacio de trabajo donde:

Editas HTML y CSS

Ves archivos del proyecto

Usas Git de forma visual

Accedes a la terminal

VS Code se conecta automáticamente a Git y GitHub si:

Git está instalado

SSH está configurado

Flujo completo de trabajo

Editas archivos en Visual Studio Code

Git detecta cambios

Guardas un estado del proyecto (commit)

Envías cambios a GitHub (push)

El proyecto queda respaldado y sincronizado




Documentación y Bibliografía
Git (sistema de control de versiones)

Sitio oficial de Git
https://git-scm.com/

Tutorial oficial de Git para principiantes
https://git-scm.com/docs/gittutorial

GitHub (repositorios remotos y colaboración)

Sitio oficial de GitHub
https://github.com/

Documentación oficial de GitHub (español)
https://docs.github.com/es

Introducción oficial a GitHub (Hello World)
https://docs.github.com/es/get-started/start-your-journey/hello-world

Guía de inicio en GitHub
https://docs.github.com/es/get-started

Relación entre Git y GitHub
https://docs.github.com/es/get-started/using-git/about-git

SSH (conexión segura con GitHub)

Conectar con GitHub mediante SSH
https://docs.github.com/es/authentication/connecting-to-github-with-ssh

Generar una nueva llave SSH
https://docs.github.com/es/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

Agregar una llave SSH a la cuenta de GitHub
https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account

Configuración de identidad en Git

Configuración inicial de Git (nombre y correo)
https://git-scm.com/book/es/v2/Primeros-pasos-Configuración-inicial-de-Git

Visual Studio Code (editor y flujo de trabajo)

Sitio oficial de Visual Studio Code
https://code.visualstudio.com/

Documentación oficial de Visual Studio Code
https://code.visualstudio.com/docs

Control de versiones con Git en Visual Studio Code
https://code.visualstudio.com/docs/sourcecontrol/overview

Uso de GitHub dentro de Visual Studio Code
https://code.visualstudio.com/docs/sourcecontrol/github

Terminal integrada en Visual Studio Code
https://code.visualstudio.com/docs/terminal/basics