// api/meta-data-deletion.js
export default async function handler(req, res) {
  const method = req.method || 'GET';

  // Lee parámetros tanto por GET como por POST (Meta puede usar ambos)
  const q = req.query || {};
  let body = {};
  if (method === 'POST') {
    try { body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); }
    catch { body = {}; }
  }

  const user_id = q.user_id || body.user_id || null;
  const signed_request = q.signed_request || body.signed_request || null;

  // Aquí normalmente eliminarías en tu BD. Como el servidor está apagado,
  // solo registramos para procesar luego.
  console.log('META DATA DELETION', {
    user_id,
    signed_request,
    method,
    at: new Date().toISOString()
  });

  // Respuesta mínima que espera Meta (HTTP 200)
  return res.status(200).json({
    status: "received",
    user_id: user_id || null,
    message: "Deletion request acknowledged. Records will be purged per policy.",
    confirmation_url: "https://orocomcloud.github.io/politica-privacidad-WIFI-PRONATEL/"
  });
}
