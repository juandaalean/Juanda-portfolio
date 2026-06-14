# Backend Developer Portfolio (Next.js)

Plantilla de portfolio profesional enfocada en perfil backend, construida con Next.js y lista para deploy en Vercel.

## Descripcion

Este proyecto muestra:

- Presentacion profesional (perfil, stack e intereses).
- Seccion de proyectos con enfoque tecnico.
- Estructura simple para personalizacion rapida.

URL de mi portfolio: https://juanda-portfolio.vercel.app/es

## Stack

- Next.js
- React
- TypeScript
- CSS global
- Resend (envío de emails del formulario de contacto)
- Zod (validación de datos)

## Estructura

- `/` Home con informacion personal/profesional.
- `/proyectos` Listado de proyectos con:
  - descripcion breve,
  - tecnologias usadas,
  - problema que resuelve,
  - enlace al repositorio,
  - enlace a demo/API en vivo.

## Uso local

```bash
npm install
cp .env.example .env.local
npm run dev
```

App disponible en `http://localhost:3000`.

## Formulario de contacto

El formulario de la sección *Contacto* envía los mensajes directamente a tu correo usando una Server Action de Next.js y el proveedor [Resend](https://resend.com).

1. Crea una cuenta en [resend.com](https://resend.com) y genera una API key.
2. Añade un dominio verificado (o usa el sandbox `onboarding@resend.dev` para pruebas).
3. Configura las variables en `.env.local` (mira `.env.example`):
   - `RESEND_API_KEY`: tu API key de Resend.
   - `CONTACT_TO_EMAIL`: dirección que recibe los mensajes.
   - `CONTACT_FROM_EMAIL`: remitente verificado (`Portfolio <hola@tudominio.com>`).
4. En producción (Vercel, etc.) define esas mismas variables en el panel de env vars.

Si `RESEND_API_KEY` no está definida, el formulario sigue funcionando en modo desarrollo: los envíos se imprimen en la consola del servidor y se muestra un aviso al usuario.

La acción valida los datos con Zod, aplica rate-limit por IP (5 envíos / 10 min) e incluye un campo *honeypot* oculto para mitigar spam.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Deploy

Proyecto compatible con deploy directo en Vercel sin configuracion especial adicional.

## Personalizacion

- Contenido principal: `app/page.tsx`
- Proyectos y enlaces: `app/proyectos/page.tsx`
- Estilos globales: `app/globals.css`

## Licencia

Uso libre como base para portfolio personal.
