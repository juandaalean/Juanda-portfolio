# Portfolio Backend (Next.js)

Esqueleto de portfolio profesional para desarrollador backend, preparado para desplegar en Vercel.

## Estructura minima

- Home
	- Quien eres (backend dev)
	- Stack (Node, Python, Go, etc.)
	- Intereses (APIs, microservicios, etc.)
- Proyectos (ruta: /proyectos)
	- Descripcion corta
	- Tecnologias usadas
	- Problema que resuelve
	- Link a GitHub
	- Link a API en vivo

## Ejecutar en local

Importante: el proyecto esta dentro de la carpeta backend-portfolio.

Si estas en JuandaPortfolio (carpeta padre), ejecuta:

```bash
cd backend-portfolio
npm install
npm run dev
```

Alternativa sin cambiar de carpeta:

```bash
npm --prefix backend-portfolio install
npm --prefix backend-portfolio run dev
```

Abre http://localhost:3000

## Si se cierra la sesion al lanzar npm run dev

En tu caso, los logs indican OOM killer en la sesion de Hyprland y cierre de la sesion grafica.

Este proyecto ya queda configurado para consumir menos en desarrollo:

- npm run dev usa webpack en lugar de Turbopack
- se limita heap de Node a 2 GB

Pasos recomendados:

1. Ejecuta desde backend-portfolio:
	npm run dev
2. Si vuelve a pasar, baja el limite a 1536 MB editando package.json.
3. Usa Node LTS (22) en lugar de Node 24.

Comando rapido para comprobar si hubo OOM:

journalctl -b --no-pager | rg -i "oom-kill|out of memory|killed process"

## Despliegue en Vercel

1. Sube este proyecto a GitHub.
2. Entra en Vercel y crea un proyecto nuevo desde ese repositorio.
3. Framework preset: Next.js (detector automatico).
4. Build command: npm run build
5. Output directory: .next
6. Pulsa Deploy.

Listo: cada push a la rama principal dispara un redeploy automatico.

## Personalizacion rapida

- Edita datos de Home en app/page.tsx
- Edita proyectos y links en app/proyectos/page.tsx
- Ajusta colores y tipografia en app/globals.css
