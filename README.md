# Swimlane Dashboard (Next.js + Zustand + dnd-kit)

## 📌 What I Achieved
This project is a **Swimlane Dashboard** built using **Next.js 15.5**.
The main goal was to create a responsive task board with drag-and-drop functionality and persistent state management.

Here’s what I successfully implemented:

- ✅ **Drag-and-Drop Tasks**
  Used **dnd-kit (0.0)** to allow tasks to be moved between swimlanes.
  Tasks remain in the same position even after refreshing the page.

- ✅ **Mock Data Fetching**
  Task data is fetched from a **JSON file (mock API)** on initial load.

- ✅ **Data Persistence**
  Tasks are stored in **localStorage** so updates are saved across page reloads.

- ✅ **Search Functionality**
  Implemented a **header search bar** that dynamically filters tasks as the user types.

- ✅ **Responsive & Pixel Perfect UI**
  Styled with **TailwindCSS**, ensuring the dashboard looks consistent and works across browsers.

---

## 🛠️ Tech Stack
- **Next.js 15.5** – React framework
- **TailwindCSS** – Utility-first styling
- **Zustand 5.0** – State management
- **dnd-kit 0.0** – Drag-and-drop functionality

---

## 🚀 Getting Started
Clone the repository and run the app locally:

```bash
# Clone the repo
git clone <repo-url>

# Install dependencies
npm install

# Run the development server
npm run dev
