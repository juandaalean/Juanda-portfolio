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
npm run dev
```

App disponible en `http://localhost:3000`.

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
