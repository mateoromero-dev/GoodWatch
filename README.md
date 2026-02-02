<div align="center">
  <a href="README.md">🇪🇸 Español</a> | <a href="README.en.md">🇺🇸 English</a>
</div>

# 🎬 GoodWatch

Aplicación web para gestionar una lista personal de películas (vistas y pendientes), combinando datos locales con información en tiempo real de una API externa.

Desarrollado como desafío técnico para demostrar el uso de **Node.js**, arquitectura de servicios y consumo de APIs.

## 🚀 Características Principales

- **Arquitectura Híbrida:** Lectura de base de datos local (JSON) enriquecida dinámicamente con datos de la **OMDb API**.
- **Procesamiento de Datos:**
  - Filtrado por estado (Visto / Pendiente).
  - Búsqueda por texto (Título).
  - Ordenamiento por calificación personal.
- **Web Service:** API RESTful propia construida con Express.
- **Frontend:** Interfaz limpia y responsiva utilizando HTML5, CSS3 y Vanilla JavaScript (sin frameworks).

## 🛠️ Stack Tecnológico

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **HTTP Client:** Axios
- **Utilidades:** CORS, Dotenv, File System (fs)
- **Frontend:** HTML / CSS / JS
- **Testing:** Jest

## ⚙️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

### 1. Clonar el repositorio

```bash
git clone https://github.com/mateoromero-dev/GoodWatch
cd GoodWatch
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar Variables de Entorno

Este proyecto requiere una API Key de OMDb. El repositorio incluye un archivo de plantilla llamado `.env.example` para facilitar este proceso.

1. Obtén una clave gratuita en [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).
2. Activa la clave mediante el enlace que recibirás en tu correo.
3. Renombra el archivo `.env.example` a `.env` (o crea uno nuevo).
4. Edita el archivo `.env` y asigna tu clave a la variable:

```text
OMDB_API_KEY=tu_clave_aqui
```

### 4. Ejecutar el servidor

```bash
npm start
```

Verás un mensaje indicando que el servidor corre en el puerto **3000**.

### 5. Correr los Tests 🧪

Para validar la lógica de filtrado y ordenamiento:

```bash
npm test
```

### 6. Acceder a la aplicación

Abre tu navegador web y visita:
`http://localhost:3000`

## 📡 Documentación de la API

El backend expone los siguientes endpoints públicos:

| Método | Ruta                 | Descripción                                          | Parámetros (Query Params)                                          |
| :----- | :------------------- | :--------------------------------------------------- | :----------------------------------------------------------------- |
| `GET`  | `/api/movies`        | Retorna el listado completo de películas procesadas. | Ninguno                                                            |
| `GET`  | `/api/movies/search` | Realiza búsquedas, filtros y ordenamientos.          | `title` (texto), `status` ('watched'/'pending'), `sort` ('rating') |

### Ejemplo de consulta

```http
GET http://localhost:3000/api/movies/search?title=godfather&status=watched&sort=rating
```

## 📂 Estructura del Proyecto

```text
GoodWatch/
├── .env                  # Variables de entorno (API Key) - No incluido en repo
├── .env.example          # Plantilla de configuración
├── data/
│   └── movies.json       # Base de datos local (IDs y Calificaciones)
├── public/               # Frontend
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── favicon.ico
├── src/
│   ├── movieService.js
│   └── movieLogic.js
├── tests/
│   └── movieLogic.test.js
├── server.js
└── package.json
```

## 👤 Autor

**Mateo Romero**

- GitHub: [@mateoromero-dev](https://github.com/mateoromero-dev)

