// ==========================================================================
// ISP MANAGER - Módulo de Interactividad y Manipulación del DOM
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  // ----------------------------------------------------------------------
  // 1. DASHBOARD (index.html): Búsqueda en tiempo real de nodos
  // ----------------------------------------------------------------------
  const inputBuscarNodo = document.getElementById("buscar-nodo");
  const tablaNodos = document.getElementById("tabla-nodos-body");

  if (inputBuscarNodo && tablaNodos) {
    inputBuscarNodo.addEventListener("input", (e) => {
      const criterio = e.target.value.toLowerCase().trim();
      const filas = tablaNodos.querySelectorAll("tr");

      filas.forEach((fila) => {
        const textoFila = fila.textContent.toLowerCase();
        fila.style.display = textoFila.includes(criterio) ? "" : "none";
      });
    });
  }

  // ----------------------------------------------------------------------
  // 2. DASHBOARD (index.html): Simulación de actualización de métricas
  // ----------------------------------------------------------------------
  const btnRefrescarMetricas = document.getElementById(
    "btn-refrescar-metricas",
  );
  const valorTrafico = document.getElementById("metrica-trafico");
  const badgeTiempo = document.getElementById("badge-tiempo-real");

  if (btnRefrescarMetricas && valorTrafico) {
    btnRefrescarMetricas.addEventListener("click", () => {
      // Genera una variación numérica realista entre 3.4 y 4.2 Gbps
      const nuevoTrafico = (Math.random() * (4.2 - 3.4) + 3.4).toFixed(1);
      valorTrafico.textContent = `${nuevoTrafico} Gbps`;

      if (badgeTiempo) {
        const ahora = new Date();
        const horaStr = ahora.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });
        badgeTiempo.innerHTML = `<i class="bi bi-clock-history me-1"></i> Actualizado ${horaStr}`;
      }
    });
  }

  // ----------------------------------------------------------------------
  // 3. CLIENTES (clientes.html): Alta dinámica en tabla y contador
  // ----------------------------------------------------------------------
  const formNuevoCliente = document.getElementById("form-nuevo-cliente");
  const tablaClientes = document.getElementById("tabla-clientes-body");
  const contadorClientes = document.getElementById("contador-clientes");
  const contenedorAlerta = document.getElementById("alerta-cliente-contenedor");

  // Contador base a partir de las filas renderizadas
  let totalClientes = tablaClientes
    ? tablaClientes.querySelectorAll("tr").length
    : 3;
  let proximoNumero = 1004;

  if (formNuevoCliente && tablaClientes) {
    formNuevoCliente.addEventListener("submit", (e) => {
      e.preventDefault(); // Previene el refresco del navegador

      const nombre = document.getElementById("nombre").value.trim();
      const dni = document.getElementById("dni").value.trim();
      const planSelect = document.getElementById("plan");
      const planTexto = planSelect.options[planSelect.selectedIndex].text;
      const ip =
        document.getElementById("ip").value.trim() || "DHCP Automático";

      // Creación dinámica de la fila en el DOM
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
                <td class="ps-3 fw-semibold text-secondary">#${proximoNumero}</td>
                <td class="fw-medium">${nombre}</td>
                <td>${dni}</td>
                <td><span class="badge text-bg-light border">${planTexto}</span></td>
                <td><code class="text-dark">${ip}</code></td>
                <td class="pe-3"><span class="badge text-bg-success-subtle text-success border border-success-subtle px-2 py-1">Habilitado</span></td>
            `;

      tablaClientes.appendChild(nuevaFila);

      totalClientes++;
      proximoNumero++;
      if (contadorClientes) {
        contadorClientes.textContent = `${totalClientes} registrados`;
      }

      // Inyección dinámica de notificación toast/alert
      if (contenedorAlerta) {
        contenedorAlerta.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Abonado <strong>${nombre}</strong> registrado correctamente con código <strong>#${proximoNumero - 1}</strong>.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                    </div>
                `;

        setTimeout(() => {
          contenedorAlerta.innerHTML = "";
        }, 4000);
      }

      formNuevoCliente.reset();
    });
  }

  // ----------------------------------------------------------------------
  // 4. CLIENTES (clientes.html): Filtro en vivo de abonados
  // ----------------------------------------------------------------------
  const inputBuscarCliente = document.getElementById("buscar-cliente");

  if (inputBuscarCliente && tablaClientes) {
    inputBuscarCliente.addEventListener("input", (e) => {
      const criterio = e.target.value.toLowerCase().trim();
      const filas = tablaClientes.querySelectorAll("tr");

      filas.forEach((fila) => {
        const texto = fila.textContent.toLowerCase();
        fila.style.display = texto.includes(criterio) ? "" : "none";
      });
    });
  }

  
  // ----------------------------------------------------------------------
  // 5. SOPORTE (soporte.html): Filtro en vivo de tickets
  // ----------------------------------------------------------------------
  const inputBuscarTicket = document.getElementById("buscar-ticket");
  const tablaTickets = document.getElementById("tabla-tickets-body");

  if (inputBuscarTicket && tablaTickets) {
    inputBuscarTicket.addEventListener("input", (e) => {
      const criterio = e.target.value.toLowerCase().trim();
      const filas = tablaTickets.querySelectorAll("tr");

      filas.forEach((fila) => {
        const texto = fila.textContent.toLowerCase();
        fila.style.display = texto.includes(criterio) ? "" : "none";
      });
    });
  }

  // ----------------------------------------------------------------------
  // 6. SOPORTE (soporte.html): Alta dinámica de tickets
  // ----------------------------------------------------------------------
  const formNuevoTicket = document.getElementById("form-nuevo-ticket");
  const contadorAbiertos = document.getElementById(
    "contador-tickets-abiertos",
  );
  const alertaTicket = document.getElementById("alerta-ticket-contenedor");

  let totalAbiertos = contadorAbiertos
    ? parseInt(contadorAbiertos.textContent, 10)
    : 8;
  let proximoTicket = 1025;

  if (formNuevoTicket && tablaTickets) {
    formNuevoTicket.addEventListener("submit", (e) => {
      e.preventDefault(); // Previene el refresco del navegador

      const cliente = document.getElementById("cliente").value.trim();
      const motivoSelect = document.getElementById("motivo");
      const motivoTexto =
        motivoSelect.options[motivoSelect.selectedIndex].text;

      // Creación dinámica de la fila en el DOM
      const nuevaFila = document.createElement("tr");
      nuevaFila.innerHTML = `
                <td class="ps-3 fw-medium">#${proximoTicket}</td>
                <td>${cliente}</td>
                <td>${motivoTexto}</td>
                <td class="pe-3">
                    <span class="badge text-bg-warning-subtle text-warning-emphasis border border-warning-subtle px-2 py-1">En proceso</span>
                    <button type="button" class="btn btn-sm btn-outline-success ms-2 btn-resolver-ticket">
                        <i class="bi bi-check2"></i> Resolver
                    </button>
                </td>
            `;

      tablaTickets.appendChild(nuevaFila);

      totalAbiertos++;
      proximoTicket++;
      if (contadorAbiertos) {
        contadorAbiertos.textContent = totalAbiertos;
      }

      // Inyección dinámica de notificación
      if (alertaTicket) {
        alertaTicket.innerHTML = `
                    <div class="alert alert-success alert-dismissible fade show shadow-sm" role="alert">
                        <i class="bi bi-check-circle-fill me-2"></i>
                        Ticket <strong>#${proximoTicket - 1}</strong> creado correctamente para <strong>${cliente}</strong>.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                    </div>
                `;

        setTimeout(() => {
          alertaTicket.innerHTML = "";
        }, 4000);
      }

      formNuevoTicket.reset();
    });
  }

  // ----------------------------------------------------------------------
  // 7. SOPORTE (soporte.html): Resolver ticket con delegación de eventos
  // ----------------------------------------------------------------------
  const contadorResueltos = document.getElementById(
    "contador-tickets-resueltos",
  );

  if (tablaTickets) {
    tablaTickets.addEventListener("click", (e) => {
      const boton = e.target.closest(".btn-resolver-ticket");
      if (!boton) return;

      const fila = boton.closest("tr");
      const celdaEstado = boton.parentElement;

      celdaEstado.innerHTML = `<span class="badge text-bg-success-subtle text-success border border-success-subtle px-2 py-1">Resuelto</span>`;

      totalAbiertos--;
      if (contadorAbiertos) contadorAbiertos.textContent = totalAbiertos;

      if (contadorResueltos) {
        const resueltosActual = parseInt(contadorResueltos.textContent, 10);
        contadorResueltos.textContent = resueltosActual + 1;
      }
    });
  }

  // ----------------------------------------------------------------------
  // 8. PLANES (planes.html): Selección visual de plan
  // ----------------------------------------------------------------------
  const botonesElegirPlan = document.querySelectorAll(".btn-elegir-plan");
  const alertaPlan = document.getElementById("alerta-plan-contenedor");

  botonesElegirPlan.forEach((boton) => {
    boton.addEventListener("click", () => {
      const tarjeta = boton.closest(".plan-card");
      const nombrePlan = tarjeta.dataset.plan;

      // Quita la selección previa de todas las tarjetas
      document.querySelectorAll(".plan-card").forEach((card) => {
        card.classList.remove("plan-seleccionado");
      });
      tarjeta.classList.add("plan-seleccionado");

      if (alertaPlan) {
        alertaPlan.innerHTML = `
                    <div class="alert alert-info alert-dismissible fade show shadow-sm" role="alert">
                        <i class="bi bi-info-circle-fill me-2"></i>
                        Seleccionaste el <strong>Plan ${nombrePlan}</strong>. Un asesor se pondrá en contacto para confirmar la instalación.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Cerrar"></button>
                    </div>
                `;

        setTimeout(() => {
          alertaPlan.innerHTML = "";
        }, 5000);
      }
    });
  });

  // ----------------------------------------------------------------------
  // 9. PLANES (planes.html): Toggle de facturación mensual / anual
  // ----------------------------------------------------------------------
  const toggleFacturacion = document.getElementById("toggle-facturacion");

  if (toggleFacturacion) {
    toggleFacturacion.addEventListener("change", (e) => {
      const esAnual = e.target.checked;
      const tarjetasPlan = document.querySelectorAll(".plan-card");

      tarjetasPlan.forEach((tarjeta) => {
        const precioTexto = tarjeta.querySelector(".precio-plan");
        const precio = esAnual
          ? tarjeta.dataset.precioAnual
          : tarjeta.dataset.precioMensual;

        const precioFormateado = Number(precio).toLocaleString("es-AR");
        precioTexto.textContent = `$${precioFormateado}`;
      });
    });
  }
});
