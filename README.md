# Sistema de Gestión de ISP - TP 2: Interfaz Web y Responsive Design

Proyecto desarrollado para la cátedra de **Programación 4**.

---

## 👥 Integrantes del Grupo
* **Eduardo Albarracín**
* **Alexis Lencina**

---

## 📌 Descripción del Proyecto
Evolución de la maqueta estructural de ISP hacia una interfaz web completa, responsive y moderna, aplicando estándares de CSS3, variables globales y optimización para motores de búsqueda (SEO).

---

## 🛠️ Tecnologías y Metodologías Utilizadas
* **HTML5 Semántico:** Estructura limpia libre de divs innecesarios.
* **CSS3 Moderno:** Flexbox, CSS Grid, Box Model (`border-box`), y unidades relativas (`rem`, `%`, `vh`, `vw`, `fr`).
* **Control de Versiones:** Flujo Git con ramas `main`, `dev` y `feature/*` mediante Pull Requests.

---

## 📐 Decisiones de Diseño y Arquitectura CSS

### 1. Variables CSS (`:root`)
Se centralizó la paleta de colores y medidas en el selector raíz:
* `--color-primario` (`#0b2545`): Azul tecnológico de cabecera y títulos.
* `--color-panel` (`#13315c`): Superficie profunda para pie de página.
* `--color-acento` (`#00b4d8`): Cyan de interactividad y enlaces.
* `--color-fibra` (`#10b981`): Verde institucional para métricas operativas y estados activos.

### 2. ¿Dónde se utilizó Flexbox?
* En la cabecera (`.header-contenedor`) y el menú de navegación (`.nav-menu ul`) para distribuir espacialmente los elementos en una dimensión con alineación vertical y centrado.

### 3. ¿Dónde se utilizó CSS Grid?
* En el panel de métricas (`.grid-metricas`), utilizando un diseño bidimensional adaptable con `repeat(4, 1fr)` para distribuir las tarjetas de monitoreo.

### 4. ¿Cómo se implementó el Responsive Design?
* Se configuró el tamaño base en `html { font-size: 62.5%; }` para trabajar con medidas `rem` accesibles.
* Se aplicaron **Media Queries** con dos puntos de quiebre (*breakpoints*):
  * **Tablets ($\le$ 1024px):** El panel de métricas se reorganiza en 2 columnas (`grid-template-columns: repeat(2, 1fr)`).
  * **Móviles ($\le$ 768px):** El menú y las tarjetas pasan a una única columna vertical con distribución fluida.

---

## 🔍 Estrategias de SEO Implementadas
1. **Meta Viewport adaptativo:** Preparado para indexación *mobile-first*.
2. **Meta Descripción y Palabras Clave:** Información descriptiva para los motores de búsqueda.
3. **Open Graph (`og:`):** Enriquecimiento de metadatos para compartir en redes sociales.
4. **Estructura Jerárquica:** Correcta jerarquía de encabezados (`<h1>`, `<h2>`).
5. **Accesibilidad Semántica:** Uso de `<caption>`, `<dl>`, `<dt>`, `<dd>` y `<nav>` para facilitar el rastreo de contenido.