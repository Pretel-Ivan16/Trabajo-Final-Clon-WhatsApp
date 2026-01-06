# Clon WhatsApp

## 📋 Descripción General

En el progreso de toda la cursada aprendimos lo que es ser un Developer Web Full Stack y todas las herramientas para el desarrollo de una web. En las primeras clases dimos una breve introducción para todo aquel que recién se adentraban al mundo de la programación. Seguimos con HTML, explicando y ordenando las diversas etiquetas que nos da. Continuamos con CSS para dar estilos a nuestro HTML a través de selectores. Vimos JavaScript para dar funcionalidades a nuestra página web. Por último utilizamos la biblioteca de React para utilizar el DOM virtual que nos proporciona para dar facilidades de uso en el DOM tradicional de JS.

---

## 🥸☝️ Aclaraciones:

- Recuperatorio Proyecto de Clon De WhatsApp creado y estilizado a base de WhatsApp Web (NO WhatsApp Windows).
- Proyecto desarrollado con las tecnologias y herramientas vistas en clases.
- Para el Clon de WhatsApp la biblioteca usada fue React.
- Asistencia en clases 24/30. Clases vistas 30/30.
- Árbol de directorios y archivos creado por mí, basado en lo que se vió en clases.
- Componentes creados con los principios SOLID, particularmente con la S de Single Responsability.
- Íconos de la página agregados con libreria de Bootstrap.
- Usuarios, chats y mensajes traidos de la serie de SUITS.
- Conversaciones creadas con IA para agilizar otras tareas.
- Proyecto asistido con Copilot, compañeros y clases vistas.
- Control de builds y deploys por Vite.
- Error 404 de vercel corregido con la ayuda de un amigo programador.
- Readme.md estilizado con Copilot.

## ¿Por qué el TP no se pudo entregar a tiempo?

- Error 404 de vercel (Problema N°9).

## 🏗️ Estructura del Proyecto

```
src/
├── app.jsx                         # Componente principal de la aplicación
├── main.jsx                        # Punto de entrada de React
├── global.css                      # Estilos globales y variables CSS
├── components/                     # Componentes reutilizables
│   ├── ChatDownload/               # Modal de descarga de chats
│   ├── ChatList/                   # Lista de chats
│   ├── Layout/                     # Layout principal
│   ├── Message/                    # Componente de mensaje individual
│   ├── SearchBar/                  # Barra de búsqueda
│   ├── Sidebar/                    # Barra lateral de navegación
│   ├── ThemeToggle/                # Botón para cambiar tema
│   └── ThemeWrapper/               # Proveedor de tema
├── context/                        # Context API para estado global
│   ├── AppContext.jsx              # Contexto principal de la app
│   └── ChatContext.jsx             # Contexto de gestión de chats
├── screens/                        # Pantallas principales
│   ├── ChatScreen/                 # Pantalla de chat abierto
│   │   ├── components/
│   │   ├── hooks/
│   │   └── css/
│   └── LoadingScreen/              # Pantalla de carga
├── data/                           # Datos mockup
│   └── mockChats.js                # Datos de prueba
└── Assets/                         # Recursos estáticos
    ├── icons/                      # Iconos del proyecto
    └── Images/                     # Imágenes y fondos
```

---

## � Descripción de Archivos

### Archivos Raíz

- **app.jsx** - Componente raíz que estructura la aplicación. Contiene el Layout principal y gestiona la navegación entre ChatScreen y LoadingScreen.
- **main.jsx** - Punto de entrada de la aplicación React. Monta el componente App en el DOM y aplica estilos globales.
- **global.css** - Hoja de estilos global que define:
  - Variables CSS para tema oscuro/claro
  - Reset de estilos (margin, padding, box-sizing)
  - Layout principal de la aplicación (flex)
  - Media queries globales

### Componentes (src/components/)

#### ChatDownload/

- **ChatDownload.jsx** - Modal para descargar o exportar chats. Interfaz con botones de acción y información visual.
- **css/styles.css** - Estilos del modal, responsive para móviles y tablets.

#### ChatList/

- **ChatList.jsx** - Componente que renderiza la lista completa de chats usando datos del mockup.
- **ChatListItem.jsx** - Componente individual que representa un chat con avatar, nombre, último mensaje y badges.
- **css/styles.css** - Estilos de la lista, items, avatares, estados de lectura y media queries.

#### Layout/

- **Layout.jsx** - Componente envolvente que estructura la interfaz con sidebar, chat list y chat screen.

#### Message/

- **Message.jsx** - Componente individual que renderiza un mensaje con su contenido, timestamp y estado de lectura.
- **css/styles.css** - Estilos de burbujas de chat, diferenciando mensajes propios y ajenos.

#### SearchBar/

- **SearchBar.jsx** - Componente de búsqueda con input dinámico y botones de acción. Filtra chats en tiempo real.
- **css/styles.css** - Estilos del buscador, iconos y estados de focus/hover.

#### Sidebar/

- **Sidebar.jsx** - Barra lateral estrecha con botones de navegación, avatar del usuario y menú.
- **css/styles.css** - Estilos de botones, iconos escalables y responsive en diferentes breakpoints.

#### ThemeToggle/

- **ThemeToggleButton.jsx** - Botón que alterna entre modo oscuro/claro. Interactúa con ThemeWrapper.
- **css/style.css** - Estilos minimalistas del botón con hover y focus.

#### ThemeWrapper/

- **ThemeWrapper.jsx** - Componente Context Provider que gestiona el estado del tema. Implementa localStorage para persistencia.

### Contexto (src/context/)

- **AppContext.jsx** - Contexto global para estado de la aplicación (usuario actual, configuraciones generales).
- **ChatContext.jsx** - Contexto para gestionar chats (lista de chats, chat seleccionado, búsqueda).

### Pantallas (src/screens/)

#### ChatScreen/

- **ChatScreen.jsx** - Pantalla principal que muestra el chat abierto. Gestiona el flujo de mensajes.
- **components/ChatHeader.jsx** - Header del chat con nombre, avatar, acciones y botón retroceso mobile.
- **components/MessagesList.jsx** - Contenedor scrolleable que renderiza los mensajes del chat.
- **components/MessageComposer.jsx** - Input y botón para enviar mensajes.
- **hooks/useChatNavigation.js** - Hook personalizado para manejar navegación entre chats.
- **hooks/useEscapeKey.js** - Hook para cerrar chat con tecla ESC en móvil.
- **hooks/useMessageComposer.js** - Hook para gestionar el estado del input y envío de mensajes.
- **css/styles.css** - Estilos de la pantalla de chat, header, input y composer.

#### LoadingScreen/

- **LoadingScreen.jsx** - Pantalla de carga con spinner animado y mensaje.
- **css/styles.css** - Estilos del spinner y animación de rotación.

### Datos (src/data/)

- **mockChats.js** - Archivo con datos de prueba (mock) de chats, usuarios y mensajes para desarrollo sin backend.

### Recursos (src/Assets/)

- **icons/** - Carpeta con iconos personalizados (actualmente usando Bootstrap Icons).
- **Images/** - Carpeta con imágenes de fondo:
  - FondoWhatsApp.jpg - Fondo para modo claro
  - FondoWhatsAppDark.jpg - Fondo para modo oscuro

### Configuración Raíz

- **package.json** - Dependencias del proyecto (React, Vite, React Router, Bootstrap Icons) y scripts.
- **vite.config.js** - Configuración de Vite con plugin de React y middlewareMode.
- **eslint.config.js** - Reglas de linting para mantener código limpio.
- **vercel.json** - Configuración de despliegue en Vercel.
- **index.html** - Archivo HTML principal que monta la aplicación React.

---

## �🚀 Funcionalidades Implementadas

### ✅ Completadas

1. **Sistema de Temas (Tema Oscuro/Claro)**

   - Variables CSS dinámicas para ambos temas
   - Toggle button para cambiar entre temas
   - Persistencia del tema seleccionado
   - Paleta de colores consistente:
     - Modo claro: fondos blancos con acentos verdes
     - Modo oscuro: fondos oscuros con acentos verdes WhatsApp

2. **Componente de Chat Principal**

   - Visualización de mensajes
   - Burbujas de chat con estilos diferenciados (propio/otro usuario)
   - Mostrar estado de lectura
   - Composer de mensajes con input y botón enviar
   - Header dinámico con información del chat

3. **Lista de Chats**

   - Visualización de chats disponibles
   - Avatar, nombre y último mensaje
   - Indicador de mensajes no leídos
   - Información de hora del último mensaje
   - Clickeable para abrir chat

4. **Barra de Búsqueda**

   - Búsqueda de chats en tiempo real
   - Botones de acción en header
   - Filtrado dinámico de chats

5. **Sidebar/Navegación**

   - Menú lateral con botones principales
   - Diviador visual
   - Avatar del usuario
   - Responsive en diferentes tamaños

6. **Responsividad**

   - Layout adaptable a mobile (< 700px)
   - Ocultamiento de panel de chats en móvil cuando hay chat abierto
   - Breakpoints definidos (500px, 300px, 699px)
   - Botón de retroceso en móvil

7. **Pantalla de Carga**

   - Spinner animado
   - Mensaje de carga
   - Estilos con temas integrados

8. **Modal de Descarga**
   - Interfaz para descargar chats
   - Botones de acción
   - Responsive en tablets y móviles

---

## ⚙️ Stack Tecnológico

| Tecnología       | Versión | Uso                                    |
| ---------------- | ------- | -------------------------------------- |
| React            | 19.2.0  | Framework principal                    |
| Vite             | 7.2.4   | Build tool y dev server                |
| React Router DOM | 7.11.0  | Enrutamiento                           |
| Bootstrap Icons  | 1.13.1  | Iconografía                            |
| ESLint           | 9.39.1  | Linting                                |
| CSS3             | -       | Estilos (Variables CSS, Flexbox, Grid) |

---

## 📝 Bitácora de Desarrollo

### Fase 1: Configuración Inicial

#### Tareas Realizadas

- ✅ Inicialización del proyecto con Vite.
- ✅ Instalación de dependencias (React, React Router, Bootstrap Icons).
- ✅ Estructura de carpetas base.

#### Problemas Encontrados y Soluciones

**Problema 1: Configuración de Vite con React**

- **Síntoma:** Errores en hot module replacement (HMR).
- **Causa:** Configuración incompleta de @vitejs/plugin-react
- **Solución:** Agregada configuración completa en vite.config.js con plugin de React y middlewareMode.

**Problema 2: Variables CSS no aplicándose correctamente**

- **Síntoma:** Estilos inconsistentes entre componentes.
- **Causa:** Scope incorrecto de variables CSS.
- **Solución:** Definir todas las variables en global.css con selectores .light-mode y .dark-mode, heredadas por todos los componentes.

---

### Fase 2: Componentes Base

#### Tareas Realizadas

- ✅ Crear componente ThemeWrapper con Context.
- ✅ Implementar ThemeToggleButton.
- ✅ Desarrollar componente Sidebar.
- ✅ Crear componente SearchBar con buscador funcional.
- ✅ Implementar ChatList y ChatListItem.
- ✅ Desarrollar componentes de Message.
- ✅ Crear ChatScreen con subcomponentes (ChatHeader, MessagesList, MessageComposer).

#### Problemas Encontrados y Soluciones

**Problema 3: Tema no persistiendo en recarga**

- **Síntoma:** Al recargar la página, volvía al tema por defecto.
- **Causa:** No había localStorage implementado en ThemeWrapper.
- **Solución:** Agregar lógica de localStorage para guardar y restaurar el tema al montar el componente.

**Problema 4: Scroll en mensajes trabado en móvil**

- **Síntoma:** El Scroll no funcionaba en dispositivos iOS.
- **Causa:** Falta de propiedad -webkit-overflow-scrolling.
- **Solución:** Agregar `-webkit-overflow-scrolling: touch;` al contenedor de mensajes.

**Problema 5: Overflow de contenido en componentes**

- **Síntoma:** Los textos largos rompían el layout.
- **Causa:** Sin límites de ancho en elementos flex.
- **Solución:** Usar `min-width: 0;` en contenedores flex con overflow.
- **Aplicado en:** ChatScreen, SearchBar, ChatList items.

---

### Fase 3: Estilos y Responsividad

#### Tareas Realizadas

- ✅ Implementación de sistema completo de dark theme / light theme .
- ✅ Media queries para breakpoints: 699px, 500px, 300px.
- ✅ Ajustes de tamaños con clamp().
- ✅ Responsive.
- ✅ Touch-friendly button.

#### Problemas Encontrados y Soluciones

**Problema 6: Botones muy pequeños en móvil**

- **Síntoma:** Difícil de hacer click en botones en dispositivos móviles.
- **Causa:** Tamaños fijos sin escalado responsive.
- **Solución:** Cambiar a uso de clamp() y media queries:
  ```css
  .button-sidebar {
    width: 44px; /* Desktop */
  }
  @media (max-width: 500px) {
    .button-sidebar {
      width: 40px;
    }
  }
  ```

**Problema 7: Iconos distorsionados en diferentes pantallas**

- **Síntoma:** Tamaños de iconos inconsistentes.
- **Causa:** Font-size fijo sin adaptación responsive.
- **Solución:** Usar clamp() para escalado automático:
  ```css
  font-size: clamp(14px, 3.5vw, 18px);
  ```

---

### Fase 4: Organización de Estilos

#### Tareas Realizadas

- ✅ Reorganizar todas las hojas de estilo.
- ✅ Mover todas las media queries al final de cada archivo CSS.
- ✅ Consolidar estilos relacionados.
- ✅ Mejorar legibilidad del código CSS.
- ✅ Crear estructura consistente en todos los archivos.

#### Archivos Reorganizados

1. `src/global.css` - Estilos globales y media queries
2. `src/screens/ChatScreen/css/styles.css` - Estilos del chat
3. `src/components/ChatDownload/css/styles.css` - Modal de descarga
4. `src/components/Sidebar/css/styles.css` - Barra lateral
5. `src/components/SearchBar/css/styles.css` - Buscador
6. `src/components/ChatList/css/styles.css` - Lista de chats

#### Problemas Encontrados y Soluciones

**Problema 8: Media queries esparcidas en los archivos CSS**

- **Síntoma:** Difícil de mantener y actualizar responsive design.
- **Causa:** Media queries intercaladas con estilos base.
- **Solución:** Reorganizar todos los archivos CSS moviendo todas las media queries al final.
  - Estructura final: Estilos base → Estados (hover, focus) → Media queries.
  - Mejora la legibilidad y facilita el mantenimiento.

---

## 🔧 Configuraciones Importantes

### Variables CSS Globales (global.css)

**Tema Claro:**

```css
--fondo-principal: #ffffff
--texto-principal: #222222
--panel-secundario: #fafafa
--color-acento: #3dcd66
--burbuja-propia: #d3fab5
--burbuja-otra: #ffffff
```

**Tema Oscuro:**

```css
--fondo-principal: #0b141a
--texto-principal: #e9edef
--panel-secundario: #090f13
--color-acento: #25d366
--burbuja-propia: #004c3f
--burbuja-otra: #0f1c24
```

### Breakpoints Responsivos

- **699px:** Cambio principal (Mostrar/ocultar paneles)
- **500px:** Reducir espaciados y tamaños
- **300px:** Dispositivos muy pequeños

---

### Fase 5: Despliegue y Deploy

#### Tareas Realizadas

- ✅ Configurar despliegue en Vercel
- ✅ Resolver problemas de routing en producción
- ✅ Implementar rewrites para SPA

#### Problemas Encontrados y Soluciones

**Problema 9: Error 404 al recargar página en Vercel**

- **Síntoma:** Al recargar la página en cualquier ruta (ej: `/chat/chat-2`), aparecía error 404: NOT_FOUND
- **Causa:** Vercel intentaba buscar archivos físicos en el servidor en lugar de servir `index.html` para que React Router manejara la ruta
- **Solución:** Implementar tres configuraciones complementarias:

  1. **Archivo `vercel.json`** - Configurar rewrites de Vercel:

     ```json
     {
       "rewrites": [
         {
           "source": "/(.*)",
           "destination": "/index.html"
         }
       ]
     }
     ```

  2. **Archivo `public/_redirects`** - Fallback para Netlify/Vercel:

     ```
     /* /index.html 200
     ```

  3. **Configuración `vite.config.js`** - Agregar middlewareMode:
     ```javascript
     export default defineConfig({
       plugins: [react()],
       server: {
         middlewareMode: true,
       },
     });
     ```

- **Resultado:** Todas las rutas se redirigen a `index.html`, permitiendo que React Router maneje la navegación en el cliente sin errores 404

---

## 🐛 Problemas Resueltos - Resumen

| #   | Problema                      | Categoría     | Estado      |
| --- | ----------------------------- | ------------- | ----------- |
| 1   | Configuración HMR de Vite     | Build         | ✅ Resuelto |
| 2   | Variables CSS no propagándose | Estilos       | ✅ Resuelto |
| 3   | Tema no persistiendo          | Funcionalidad | ✅ Resuelto |
| 4   | Scroll lento en móvil         | Performance   | ✅ Resuelto |
| 5   | Overflow de contenido         | Layout        | ✅ Resuelto |
| 6   | Botones pequeños en móvil     | Usabilidad    | ✅ Resuelto |
| 7   | Iconos distorsionados         | Responsividad | ✅ Resuelto |
| 8   | Media queries desorganizadas  | Mantenimiento | ✅ Resuelto |
| 9   | Error 404 en Vercel           | Deploy        | ✅ Resuelto |

---

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Inicia servidor de desarrollo (http://localhost:5173)

# Producción
npm run build            # Build optimizado para producción
npm run preview          # Previsualizar build de producción

# Calidad
npm run lint             # Ejecutar ESLint
npm run lint --fix       # Auto-reparar problemas de ESLint
```

---

## 📚 Aprendizajes Clave

1. **Context API:** Excelente para estado global sin librerías externas
2. **CSS Variables:** Facilitan cambios de tema dinámicos
3. **Responsive Design:** Mobile-first approach reduce media queries
4. **Flexbox Layout:** Ideal para interfaces de chat
5. **Vite:** Increíblemente rápido comparado con Create React App
6. **React Router v7:** Mejor integración con data loading

---

## 🔗 Enlaces Útiles

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vite.dev)
- [React Router](https://reactrouter.com)
- [Bootstrap Icons](https://icons.getbootstrap.com)
- [MDN CSS Variables](https://developer.mozilla.org/es/docs/Web/CSS/--*)

---
