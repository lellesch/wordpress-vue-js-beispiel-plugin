# Mein Vue Plugin

**Mein Vue Plugin** ist ein Beispiel-WordPress-Plugin, das eine **Options-Seite** im Admin-Bereich hinzufügt und mithilfe von **Vue.js 3** und **Hash-Routing** eine interaktive Benutzeroberfläche bietet. Es enthält zwei Seiten: eine **Startseite** und eine **Counter-Seite**, die über Vue Router gesteuert werden.

---

## Funktionen

- Einbindung von **Vue.js 3** in WordPress.
- Verwendung von **Vue Router** mit **Hash-basierten URLs** (kompatibel mit WordPress).
- Eine einfache **Startseite**.
- Eine **Counter-Seite**, die einen Zähler mit Hoch- und Runterzählen-Funktion bereitstellt.
- Moderne Vue 3 **Composition API** mit `<script setup>`.

---

## Technologien

- WordPress Plugin-API
- Vue.js 3
- Vue Router 4 (Hash-Routing)
- Webpack 5
- Babel

---

## Installation

1. **Plugin-Ordner hochladen**:  
   Kopiere den Plugin-Ordner `mein-vue-plugin` in den WordPress-Plugin-Ordner:  
   ```
   wp-content/plugins/mein-vue-plugin
   ```

2. **Plugin aktivieren**:  
   Aktiviere das Plugin im WordPress-Admin-Bereich unter **Plugins**.

3. **Options-Seite öffnen**:  
   Navigiere im Admin-Menü zu **Vue Options**.

---

## Entwicklung

### Projektstruktur

```plaintext
/mein-vue-plugin
├── mein-vue-plugin.php    # Haupt-Plugin-Datei
├── package.json           # NPM-Abhängigkeiten
├── webpack.config.js      # Webpack-Konfiguration
├── build/                 # Kompiliertes Vue-Bundle
├── src/                   # Quellcode der Vue-App
│   ├── index.js           # Einstiegspunkt der Vue-App
│   ├── App.vue            # Hauptkomponente
│   ├── components/        # Wiederverwendbare Komponenten
│   │   ├── Counter.vue    # Counter-Komponente
│   └── views/             # Seiten für Vue Router
│       ├── HomeView.vue   # Startseite
│       └── CounterView.vue# Counter-Seite
```

---

### Lokale Entwicklung

1. Installiere die Abhängigkeiten:

   ```bash
   npm install
   ```

2. Starte den Entwicklungsmodus mit automatischem Reload:

   ```bash
   npm run dev
   ```

3. Baue die App für die Produktion:

   ```bash
   npm run build
   ```

---

## Routen

| **Route**        | **Beschreibung**         |
|-------------------|--------------------------|
| `/`              | Startseite               |
| `/counter`       | Counter-Seite            |

**Beispiel-URLs** (Hash-Routing):  
- `http://deineseite/wp-admin/admin.php?page=vue-options#`  
- `http://deineseite/wp-admin/admin.php?page=vue-options#/counter`

---

## Screenshots

### Startseite  
![Startseite](screenshot-home.png)

### Counter-Seite  
![Counter-Seite](screenshot-counter.png)

---

## Credits

- Vue.js 3: [https://vuejs.org](https://vuejs.org)
- Vue Router 4: [https://router.vuejs.org](https://router.vuejs.org)
- WordPress: [https://wordpress.org](https://wordpress.org)

---

## Lizenz

Dieses Projekt ist unter der **MIT-Lizenz** lizenziert.  
