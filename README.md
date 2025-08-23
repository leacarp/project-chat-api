# 💬 Chat con El señor de la verdad - Vue 3 + TypeScript

¡Hola! Este es un chat interactivo donde puedes hacer preguntas y recibir respuestas de sí, no, o... ¡maybe! 🎲

## ✨ Características

- **Chat en tiempo real** con interfaz moderna y responsive
- **API Yes/No**: Utiliza la API de [yesno.wtf](https://yesno.wtf) para respuestas
- **Indicador de escritura**: Burbujas animadas mientras "El señor de la verdad" está pensando
- **Scroll automático**: La conversación se mantiene siempre visible
- **Validación inteligente**: Solo responde a preguntas reales (no solo "?")
- **Diseño moderno**: UI limpia con Tailwind CSS

## 🎯 Cómo funciona

1. **Escribe tu pregunta** en el campo de texto
2. **Termina con "?"** para que Dad responda
3. **El señor de la verdad pensará** (verás las burbujas animadas)
4. **Recibirás una respuesta**: Sí, No, o... ¡Maybe! 🎲

### ⚠️ Dato curioso
Cada **10,000 peticiones**, la API tiene una pequeña probabilidad de devolver "maybe" en lugar de sí/no. ¡Es raro pero puede pasar! 🍀

## 🚀 Tecnologías

- **Vue 3** - Framework progresivo
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **Tailwind CSS** - Framework de estilos
- **Composition API** - Arquitectura moderna de Vue

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd 04-chat-api

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🛠️ Scripts disponibles

```bash
# Desarrollo con hot-reload
npm run dev

# Build para producción
npm run build

# Ejecutar tests
npm run test:unit

# Linting
npm run lint
```

## 📁 Estructura del proyecto

```
src/
├── components/chat/
│   ├── ChatBubble.vue      # Burbujas de mensaje
│   ├── ChatMessages.vue    # Contenedor de mensajes
│   └── MessageBox.vue      # Input para escribir
├── composables/
│   └── useChat.ts          # Lógica del chat
├── interfaces/
│   ├── chat-message.interface.ts
│   └── yes-no-response.ts
└── views/
    └── IndecisionView.vue  # Vista principal
```

## 🎨 Características técnicas

### Scroll automático
El chat mantiene automáticamente el scroll en la parte inferior usando `watch` con `deep: true` para detectar nuevos mensajes.

### Validación de preguntas
```typescript
// Solo responde si hay contenido real + signo de interrogación
if (!text.endsWith('?') || text.trim().length <= 1) return;
```

### Indicador de escritura
Burbujas animadas que aparecen mientras la API está procesando la respuesta.

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el chat:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🙏 Agradecimientos

- [yesno.wtf](https://yesno.wtf) por la API de respuestas
- [Vue.js](https://vuejs.org/) por el increíble framework
- [Tailwind CSS](https://tailwindcss.com/) por los estilos

---

**¡Disfruta chateando con El señor de la verdad!** 👨‍👧‍👦

*¿Tienes una pregunta difícil? ¡El señor de la verdad siempre tiene una respuesta!* 😄
