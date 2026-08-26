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