# Sistema de Gestión de ISP - TP 2: Interfaz Web y Responsive Design

Proyecto desarrollado para la cátedra de **Programación 4**.

---

## Integrantes del Grupo
* **Eduardo Albarracín**
* **Alexis Lencina**

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