# DigitalMango Landing Page

Una landing page moderna y profesional para DigitalMango, una agencia de desarrollo web.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante con animaciones fluidas
- **Responsive**: Optimizado para todos los dispositivos
- **Animaciones**: Efectos de scroll y hover impactantes
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── layout/           # Componentes de layout
│   │   ├── Navigation.tsx
│   │   └── ThemeProvider.tsx
│   ├── sections/         # Secciones de la página
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/              # Componentes UI reutilizables
│       └── [shadcn/ui components]
├── styles/              # Archivos CSS
│   ├── globals.css
│   └── components/
├── lib/                 # Utilidades y configuraciones
│   └── utils.ts
├── hooks/               # Custom hooks
│   └── use-mobile.tsx
└── app/                 # Páginas Next.js
    ├── layout.tsx
    ├── page.tsx
    └── globals.css
```

## 🛠️ Tecnologías

- **Next.js 14**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de estilos
- **Framer Motion**: Animaciones
- **shadcn/ui**: Componentes UI
- **Lucide React**: Iconos

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [url-del-repositorio]
   cd digitalmango-landing
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 📦 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run start` - Servidor de producción
- `npm run lint` - Linting del código

## 🎨 Personalización

### Colores
Los colores principales están definidos en `tailwind.config.ts`:
- **Primario**: Naranja (#f97316)
- **Secundario**: Amarillo (#eab308)
- **Acento**: Verde (#22c55e)

### Animaciones
Las animaciones están implementadas con Framer Motion en cada sección.

### Contenido
El contenido se puede editar directamente en los archivos de componentes en `src/components/sections/`.

## 📱 Responsive Design

El sitio está optimizado para:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: < 768px

## 🚀 Deployment

El proyecto está configurado para deployment en:
- Vercel (recomendado)
- Netlify
- Cualquier hosting que soporte Next.js

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. 