# RODAME Distribuidora — App de gestión (PWA)

App web instalable para gestionar venta de pescados y mariscos.
Módulos: Inicio, Catálogo (con costos, margen e import/export Excel),
Clientes, Ventas (con boleta y pago/crédito), Finanzas + Cobranza,
Reportes y WhatsApp masivo. Datos en el dispositivo, con sincronización
opcional en la nube (Supabase) para usar el iPhone y el PC con los mismos datos.

## Publicar en GitHub Pages (gratis, con HTTPS)
1. Crea un repositorio y sube estos archivos a la raíz (index.html, manifest.json, sw.js, icons/).
2. Settings → Pages → Deploy from a branch → main → /(root) → Save.
3. En ~2 min queda en https://TU-USUARIO.github.io/TU-REPO/.
4. iPhone (Safari): abre el link → botón Compartir → "Agregar a inicio".
   PC (Chrome/Edge): icono de instalar en la barra de direcciones.

## Sincronizar iPhone + PC (opcional, con Supabase)
En la app: Más → Ajustes → "Sincronización en la nube".
- Pega la URL del proyecto y la anon key (Supabase → Project Settings → API).
- Inventa un "código de espacio" y úsalo IGUAL en todos los dispositivos.
- La primera vez crea la tabla con el SQL que muestra la app (botón "Ver paso 1").
