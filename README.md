
# Política de Privacidad y Eliminación de Datos – PRONATEL WIFI LIBRE (Orocom S.A.C.)

Este repositorio contiene los documentos y endpoints necesarios para cumplir con los **requisitos de privacidad de Meta** respecto a la aplicación **PRONATEL WIFI LIBRE**.

---

## 📌 URLs oficiales

- **Política de Privacidad (HTML público):**  
  [https://orocomcloud.github.io/politica-privacidad-WIFI-PRONATEL/](https://orocomcloud.github.io/politica-privacidad-WIFI-PRONATEL/)

- **Condiciones del Servicio:**  
  [https://orocomcloud.github.io/politica-privacidad-WIFI-PRONATEL/](https://orocomcloud.github.io/politica-privacidad-WIFI-PRONATEL/)

- **Endpoint de eliminación de datos de usuario (Data Deletion Callback):**  
  [https://politica-privacidad-wifi-pronatel.vercel.app/api/meta-data-deletion](https://politica-privacidad-wifi-pronatel.vercel.app/api/meta-data-deletion)

---

## 📌 Descripción del endpoint de eliminación

El endpoint `/api/meta-data-deletion` recibe solicitudes desde los sistemas de Meta cuando un usuario pide eliminar sus datos asociados a la aplicación **PRONATEL WIFI LIBRE**.

### Parámetros admitidos
- `user_id` (string) → identificador del usuario dentro de la app.  
- `signed_request` (string, opcional) → parámetro firmado por Meta.

### Métodos
- **GET** (ejemplo):

