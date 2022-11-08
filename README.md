# Practica con React-router-dom v6.4

Proyecto simple practicando las nuevas funcionalidades de esta version.

### Enrutamiento de lado del cliente

Esto permite que la aplicacion actualice la URL desde un click en un enlace sin realizar una solicitud de otro documento del lado del servidor. En vez de eso, la aplicacion muestra una nueva interfaz y realiza solicitudes de datos 'fetch' para actualizar la pagina con nueva informacion.

Para utilizar las rutas anidadas con JSX es necesario usar `createRoutesFromElements()`

```js
// src/App.jsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
```

### Segmentos dinamicos

Los segmentos dinamicos ahora pueden ser analizados por las nuevas API

```javascript
<Route path = "/project/:projectId/task/:taskId" />
// path /project/abc/task/4
<Route loader={({params})=>{
  params.projectId // abc
  params.taskId //4
}}
actions {({params})=>{
  params.projectId // abc
  params.taskId //4
}}
/>
```

## Tecnologias

1. React
2. React-router-dom@6.4

## Instalacion

1. Clonar el proyecto
2. Ejecutar el comando `npm install`
3. Ejecutar el comando `npm run dev`
4. Abrir el navegador en el puerto http://localhost:5173/
