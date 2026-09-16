# Sistema de Gestión de ISP - TP 2: Interfaz Web y Responsive Design

Proyecto desarrollado para la cátedra de **Programación 4**.

---

## Integrantes del Grupo

- **Eduardo Albarracín**
- **Alexis Lencina**

---

## Descripción del Proyecto

Evolución de la maqueta estructural del sistema ISP hacia una interfaz web completa, responsive y moderna, aplicando estándares de CSS3, variables globales y optimización para motores de búsqueda (SEO).

---

## Tecnologías Utilizadas

- **HTML5 Semántico** (`header`, `nav`, `main`, `section`, `article`, `dl`, `table`, `form`, `footer`).
- **CSS3** (Flexbox, CSS Grid, Variables CSS, Box Model, Media Queries).
- **Git y GitHub** para control de versiones mediante ramas y Pull Requests.

---

## Decisiones de Diseño y Arquitectura CSS

### 1. ¿Qué variables CSS creamos?

Definidas en `:root` para garantizar coherencia visual:

- **Colores:** `--color-primary` (`#0a4d68`), `--color-secondary` (`#088395`), `--color-accent` (`#05bfdb`), `--color-fibra` (`#10b981`), `--color-bg` (`#f4f6f7`), `--color-text` (`#1e1e1e`).
- **Tipografía:** `--font-main` (`Segoe UI, Arial, sans-serif`).
- **Espaciados:** `--spacing-sm` (`0.5rem`), `--spacing-md` (`1rem`), `--spacing-lg` (`2rem`).

### 2. ¿Dónde utilizamos Flexbox?

- En la cabecera y el menú de navegación (`nav ul`), para distribuir y alinear los enlaces horizontalmente.
- En los formularios de alta de clientes y nuevo ticket de soporte (`form`), organizando los campos en columnas con espaciados uniformes.

### 3. ¿Dónde utilizamos Grid?

- En el panel de métricas y resumen de estado (`.grid-metricas` y `dl`), organizando las tarjetas de monitoreo y tickets en cuadrículas que se adaptan con `repeat(auto-fit, minmax(200px, 1fr))`.

### 4. ¿Cómo implementamos el Responsive Design?

- Tamaño base en `html { font-size: 62.5%; }` para cálculo accesible en `rem`.
- **Media Queries:**
  - **768px (Tablet):** el menú de navegación pasa de fila a columna y las cuadrículas se reorganizan a 1 columna.
  - **480px (Celular):** ajuste de tipografía en títulos y tablas, con botones ocupando el 100% del ancho para uso táctil.

---

## Estrategias de SEO Implementadas

1. `<title>` único y descriptivo por página.
2. `<meta name="description">` y `<meta name="keywords">` orientadas al servicio de ISP.
3. `<meta name="viewport">` para diseño adaptativo mobile-first.
4. Metadatos Open Graph (`og:title`, `og:description`, `og:type`) para redes sociales.
5. HTML semántico y jerarquía estricta de encabezados (`h1`, `h2`).

---

## TP 3: Refactorización con Bootstrap 5

### 1. Estrategia de Ramas

- `refactor/home-clientes`: Refactorización de Dashboard (`index.html`), módulo de altas (`clientes.html`) y Navbar institucional colapsable.
- `refactor/planes-soporte`: Refactorización del catálogo comercial (`planes.html`), mesa de ayuda (`soporte.html`) y microinteracciones de tarjetas.

### 2. Componentes y Utilidades de Bootstrap Incorporados

- **Layout & Grid:** Sistema de 12 columnas (`container`, `row`, `col-*`, espaciados con `g-3` y `g-4`).
- **Navegación:** `navbar`, `navbar-expand-lg`, `navbar-dark` y menú colapsable mediante `navbar-toggler` y JavaScript bundle.
- **Componentes:** `card` (para métricas y catálogo), `table` (`table-hover`, `table-responsive`), `badge` (estados contextuales) y `list-group` (`list-group-flush`).
- **Formularios:** `form-control`, `form-select`, `form-check`, etiquetas `form-label` y botones utilitarios (`btn-primary`, `btn-outline-primary`).
- **Iconografía:** Bootstrap Icons (v1.11.3) para enriquecer la lectura visual.

### 3. Preservación de Código Anterior

El código CSS puro desarrollado durante el TP 2 fue conservado en su totalidad dentro de `style.css` mediante bloques de comentarios multi-línea, agregando únicamente variables y transiciones complementarias para la identidad de ISP MANAGER.

## TP 4: Interactividad con JavaScript y Manipulación del DOM

### 1. Estrategia de Ramas y Git Flow
- `feature/interactividad-home-clientes`: Búsqueda en tiempo real sobre la tabla de infraestructura, simulación de tráfico en vivo, registro interactivo de clientes (`submit`), renderizado dinámico de filas (`createElement`/`appendChild`), contador reactivo y alertas temporales.
- `feature/interactividad-planes-soporte`: Mesa de tickets interactiva con resolución por delegación de eventos (`e.target.closest`), sincronización de contadores (abiertos vs. resueltos) y cotizador con switch de facturación mensual/anual mediante atributos `data-*`.

### 2. Conceptos Técnicos Implementados
- **Ciclo de vida:** Todo el código interactivo se ejecuta bajo el evento `DOMContentLoaded`.
- **Eventos:** Captura de eventos `input` (búsqueda reactiva), `submit` (prevención de recarga nativa con `e.preventDefault()`), `change` (toggle switch) y `click` (selección y botones).
- **Manipulación del DOM:** Creación e inyección de elementos en tablas (`tbody`), formateo de moneda con `toLocaleString('es-AR')`, manipulación de atributos y feedback visual mediante alertas temporales.
- **Delegación de eventos:** Control de resolución de tickets escuchando el evento directamente desde el contenedor padre para dar soporte a elementos insertados dinámicamente.
