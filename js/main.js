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
});
