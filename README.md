# Challenge iOL

Aplicacion frontend hecha con React y Vite para un flujo de conversion de monedas.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4
- React Router

## Desarrollo

```bash
npm install
npm run dev
```

## Tailwind

El proyecto usa Tailwind CSS integrado con Vite.

- El plugin de Tailwind se carga desde `vite.config.js`
- Los estilos globales importan Tailwind desde `src/styles/styles.css`

## useAsync

Hay un hook reutilizable en `src/hooks/useAsync.jsx` para centralizar llamadas asincronas.

La idea es evitar repetir en cada componente:

- `useEffect` para disparar una carga inicial
- `useState` para `loading`, `error` y `data`

El hook expone:

- `execute` para ejecutar la accion asincrona
- `loading` para saber si la llamada sigue en curso
- `error` para capturar fallos
- `data` para guardar el resultado
- `updateData` para modificar el resultado guardado
