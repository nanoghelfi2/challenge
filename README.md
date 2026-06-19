# Challenge iOL - Currency Converter

## Descripción

Aplicación frontend desarrollada en React para realizar conversiones entre monedas utilizando la API pública de VATComply.

La aplicación permite:

- Consultar monedas disponibles.
- Convertir montos entre distintas monedas.
- Intercambiar moneda origen y destino.
- Actualizar automáticamente el resultado al modificar el monto o las monedas seleccionadas.
- Mostrar la tasa de conversión directa e inversa entre las monedas seleccionadas.

---

## Tecnologías Utilizadas

- React 19
- Vite 8
- Tailwind CSS 4
- React Router
- Context API
- Fetch API
- React Hot Toast

---

## Instalación y Ejecución

### Instalar dependencias

```bash
npm install
```

### Ejecutar entorno de desarrollo

```bash
npm run dev
```

### Generar build de producción

```bash
npm run build
```

---

## Decisiones Técnicas

### React + Vite

Se eligió React por ser una librería madura y ampliamente adoptada para la construcción de interfaces basadas en componentes.

Vite fue seleccionado como herramienta de desarrollo y build debido a su simplicidad de configuración, velocidad de arranque y excelente experiencia de desarrollo mediante Hot Module Replacement (HMR).

---

### Organización Modular

Aunque el alcance del challenge es reducido, la aplicación fue organizada utilizando una estructura modular.

La carpeta `modules` agrupa toda la lógica específica del conversor de monedas (componentes, pantallas, servicios y contexto), mientras que los elementos reutilizables permanecen en directorios compartidos dentro de `src`.

Esta organización busca mantener una separación clara de responsabilidades y facilitar la incorporación de nuevas funcionalidades sin afectar significativamente la estructura existente.

---

### Estructura del Proyecto

```text
src/
├── api/
├── assets/
├── components/
├── hooks/
├── icons/
├── modules/
│   └── currency-converter/
├── routes/
├── styles/
└── utils/
```

#### api

Contiene la capa de acceso a datos.

Se implementó una abstracción simple para centralizar las llamadas HTTP y el procesamiento de respuestas, evitando que los componentes interactúen directamente con la API.

#### assets

Recursos estáticos de la aplicación, principalmente fuentes tipográficas.

#### components

Componentes reutilizables y desacoplados de cualquier dominio específico.

Por ejemplo:

- Select
- Input

Estos componentes reciben datos y callbacks mediante props, permitiendo su reutilización en distintos módulos.

#### hooks

Contiene hooks reutilizables compartidos por la aplicación.

Actualmente incluye el hook `useAsync`.

#### icons

Iconos SVG encapsulados como componentes React.

#### modules

Contiene funcionalidades agrupadas por dominio.

Actualmente existe un único módulo:

```text
currency-converter
```

Dentro del módulo se encuentran:

```text
components/
context/
screens/
services/
```

Toda la lógica específica del conversor se mantiene encapsulada dentro de este módulo.

#### routes

Contiene la configuración de rutas de la aplicación.

Aunque actualmente existe una única pantalla, se decidió mantener una capa de routing independiente para conservar una estructura consistente y facilitar futuras ampliaciones.

#### styles

Contiene estilos globales de la aplicación.

Incluye:

- Reset CSS.
- Definición de tipografías.
- Variables globales.
- Estilos compartidos.

#### utils

Funciones auxiliares reutilizables.

Actualmente contiene la abstracción de notificaciones utilizada por la aplicación.

---

### Context API

Se implementó un Context específico para el módulo de conversión.

Además de almacenar el estado compartido, concentra acciones relacionadas con el dominio, como:

- Obtención de monedas.
- Obtención de cotizaciones.
- Intercambio entre moneda origen y destino.

Esta aproximación evita prop drilling y permite desacoplar la lógica de negocio de los componentes de presentación.

Dado el tamaño de la aplicación, se consideró suficiente utilizar Context API sin incorporar soluciones más complejas de manejo global de estado.

---

### Hook useAsync

Se implementó un hook reutilizable llamado `useAsync` para encapsular el ciclo de vida de operaciones asíncronas.

El hook centraliza:

- Estado de carga.
- Manejo de errores.
- Almacenamiento de resultados.
- Ejecución de acciones asíncronas.

Su objetivo es reducir la duplicación de lógica asociada a llamadas asíncronas y proporcionar una interfaz consistente para futuras integraciones.

Esto evita repetir en múltiples componentes la combinación de:

```jsx
useEffect(...)
useState(...)
```

para manejar estados de loading, error y datos.

---

### Capa HTTP

Las llamadas HTTP fueron encapsuladas dentro de la carpeta `api`.

Se implementó:

```text
http.js
handleHttpResponse.js
```

`http.js` centraliza la comunicación con APIs externas.

`handleHttpResponse.js` normaliza las respuestas HTTP para que toda la aplicación trabaje con una estructura consistente.

Esta decisión facilita futuras extensiones como:

- Autenticación.
- Interceptación de errores.
- Logging.
- Reemplazo del proveedor HTTP.

---

### Componentes Reutilizables

Los controles básicos de interfaz fueron desarrollados como componentes reutilizables.

Por ejemplo:

- Select
- Input

Estos componentes reciben únicamente propiedades relacionadas con comportamiento y presentación:

```jsx
value;
onChange;
label;
options;
```

La lógica de negocio permanece fuera de estos componentes, favoreciendo su reutilización y mantenibilidad.

---

### Tailwind CSS

Se eligió Tailwind CSS por su velocidad de desarrollo y por permitir construir interfaces de forma consistente sin necesidad de mantener múltiples archivos de estilos específicos por componente.

Para el alcance del challenge permitió enfocarse en la funcionalidad y arquitectura manteniendo una solución simple y mantenible.

---

### Manejo de Errores y Notificaciones

Se incorporó una capa de notificaciones utilizando `react-hot-toast`.

Para desacoplar la librería del resto de la aplicación se creó un helper (`notify.js`) que expone una interfaz unificada para:

- Success
- Error
- Warning
- Info

Esto permite reemplazar la implementación interna sin afectar los componentes consumidores.

---

### Estados de Carga

Las operaciones asíncronas muestran indicadores visuales de carga utilizando el estado administrado por `useAsync`.

Esto brinda feedback inmediato al usuario durante la obtención de monedas y cotizaciones.

---

### Consumo de API

La aplicación utiliza la API pública VATComply.

https://www.vatcomply.com/documentation

Las monedas disponibles se obtienen una única vez al iniciar la aplicación.

Las cotizaciones se solicitan únicamente cuando cambia la moneda base seleccionada.

Las conversiones posteriores se calculan localmente utilizando las tasas ya obtenidas, reduciendo la cantidad de solicitudes realizadas y mejorando la experiencia de usuario.

---

### JavaScript

Se decidió utilizar JavaScript para mantener el foco del challenge en la resolución funcional y arquitectónica del problema.

La estructura propuesta permite una migración progresiva a TypeScript con cambios mínimos en caso de requerirse en una etapa posterior.

---
