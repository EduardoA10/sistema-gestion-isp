# Sistema de Gestión de ISP

Proyecto desarrollado para la cátedra de **Programación 4**.

---

## 👥 Integrantes del Grupo
* **Eduardo Albarracín**
* **Alexis Lencina**


---

## 📌 Descripción del Proyecto
El sistema tiene como objetivo centralizar la administración y monitoreo de un Proveedor de Servicios de Internet (ISP). Permite gestionar la cartera de clientes/abonados, planes de conectividad y el estado general de la infraestructura de red.

---

## 🛠️ Alcance del Trabajo Práctico N° 1
En esta primera entrega se estableció la infraestructura de control de versiones y la maquetación semántica inicial del sitio mediante HTML5:

### 1. Estructura y Semántica HTML
* **`index.html` (Dashboard Principal):**
  * Cabecera y menú de navegación global (`<header>`, `<nav>`).
  * Resumen del estado de la red mediante listas de definiciones (`<dl>`).
  * Monitoreo y estado de nodos mediante tablas de datos (`<table>`, `<caption>`, `<th>`, `<td>`).
  * Pie de página del sistema (`<footer>`).

* **`clientes.html` (Gestión de Abonados):**
  * Tabla con la nómina de clientes activos y sus estados de conexión.
  * Formulario estructurado para el alta de nuevos clientes (`<form>`), organizado por módulos lógicos mediante `<fieldset>` y `<legend>`.
  * Validaciones nativas de HTML5 (`required`, `type="email"`, `type="number"`) y menú desplegable de selección de planes (`<select>`, `<option>`).

---

## 🌳 Estrategia de Ramas en Git
El flujo de trabajo colaborativo se organizó bajo las siguientes pautas:
* **`main`**: Rama de producción con versiones estables.
* **`dev`**: Rama principal de desarrollo e integración continua.
* **`feature/*`**: Ramas de trabajo temporales para el desarrollo de módulos específicos (ej. `feature/maquetacion-inicial`, `feature/modulo-clientes`).

---

## 🎨 Trabajo Práctico N° 2: Estilos, Responsive Design y SEO

Se incorporó el archivo `style.css`, aplicando diseño visual completo al sitio 
mediante Flexbox, Grid, variables CSS y diseño responsive.

### Tecnologías utilizadas
- HTML5 semántico
- CSS3 (Flexbox, Grid, Variables CSS, Media Queries)
- Git y GitHub para control de versiones

### ¿Dónde utilizamos Flexbox?
- En el menú de navegación (`nav ul`), para alinear los links horizontalmente 
  con espaciado uniforme.
- En el formulario de "Nuevo Ticket de Soporte" (`form`), organizando los 
  campos en columna para una lectura más clara.

### ¿Dónde utilizamos Grid?
- En el resumen de estado (`dl` de `soporte.html`), que muestra "Tickets 
  Abiertos" y "Tickets Resueltos" en columnas que se adaptan automáticamente 
  al ancho de pantalla (`grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`).

### ¿Qué variables CSS creamos?
Se definieron variables en `:root` para mantener consistencia visual en todo el sitio:
- Colores: `--color-primary`, `--color-secondary`, `--color-accent`, 
  `--color-bg`, `--color-white`, `--color-text`
- Tipografía: `--font-main`
- Espaciados: `--spacing-sm`, `--spacing-md`, `--spacing-lg`

### ¿Cómo implementamos el Responsive Design?
Mediante Media Queries en dos breakpoints:
- **768px (tablet):** el menú de navegación pasa de fila a columna, y el 
  grid de resumen pasa de varias columnas a una sola.
- **480px (celular):** se reduce el tamaño de fuente de títulos y tabla, y 
  el botón del formulario ocupa el 100% del ancho para facilitar el uso táctil.

### SEO
Se implementaron 5 estrategias de SEO:
1. `<title>` único y descriptivo por página.
2. `<meta name="description">` con palabras clave relevantes.
3. HTML semántico (`header`, `nav`, `main`, `section`, `footer`).
4. Jerarquía correcta de encabezados (`h1` único, `h2` por sección).
5. `<meta name="viewport">` para diseño mobile-friendly.