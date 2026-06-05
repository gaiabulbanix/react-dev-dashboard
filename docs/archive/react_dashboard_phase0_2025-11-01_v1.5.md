# React Dev Dashboard — Phase 0 Roadmap (v1.5)

**Version:** 1.5 — November 2025  
**Project:** React Dev Dashboard Onboarding  
**Developer:** Gorby  
**Assistant Context:** Encouraging, straightforward tone; forward-thinking; no burnout pacing; emphasizes hands-on learning with minimal AI code generation; uses microsteps and reflections to reinforce understanding.

---

## 🧩 Phase 0 Overview
This phase is your **React foundation** — learning React by building functional, interactive UI components that mirror how real-world dashboards work. Each step reinforces one concept and builds toward a complete, modular React front end.

We’re continuing directly from **Phase 0.1 — Step 4.0.8 (Dynamic Lists)**.

Key goals for this phase:
- Solidify understanding of **state, props, JSX, and rendering**.
- Build a reusable pattern for list-based data (add, remove, filter, edit).
- Introduce **`useEffect`**, **composition**, and **refactoring**.
- End with a **mini-project checkpoint** — a small, functional dashboard module.

---

## ⚙️ Phase 0.1 — Interactive Lists & Component Logic

### Step 4.0.8 — Dynamic Lists (Adding Items)
**Status:** ✅ Completed  
**Concepts:** Controlled input, spread operator, list rendering, re-render cycle.  
**Mini reflection:** Learned how React syncs input state with the DOM using `onChange`, and how `setState` triggers a re-render with updated Virtual DOM diffing.

### Step 4.0.9 — Removing & Filtering Items
**Goal:** Add item removal and filtering logic to understand state immutability.

**Tasks:**
1. Extend the fruit list with a **Remove** button next to each `<li>`.
2. Add a **filter input** (e.g., type to only show fruits matching the text).
3. Ensure React re-renders correctly when items are removed or filtered.
4. Reflection prompt: How does React know which items to remove? How does `key` help?

**Next Concepts:** Array filtering, state updates with `filter()`, diffing efficiency.

---

### Step 4.1 — React Lifecycle & `useEffect`
**Goal:** Introduce how React performs actions *after* rendering.

**Concepts:**
- `useEffect(() => {...}, [])` for mounting logic.
- Understanding dependency arrays.
- Using `useEffect` for small side effects (e.g., logging, saving to localStorage).

**Tasks:**
1. Log every time the fruit list updates.
2. Save fruits to localStorage on change; reload them on startup.
3. Reflection prompt: When does React decide to re-run effects?

---

### Step 4.2 — Component Composition & Props Flow
**Goal:** Learn to break large components into smaller, reusable parts.

**Concepts:**
- Parent-to-child data flow.
- Passing callback props (e.g., `onAdd`, `onRemove`).
- Keeping state “lifted” in the parent.

**Tasks:**
1. Split the `Counter`/Fruit list into 3 components:
   - `<FruitList>` — displays items.
   - `<AddFruitForm>` — handles input and add logic.
   - `<DashboardSection>` — parent component managing all state.
2. Use props to send data and functions between them.
3. Reflection prompt: When should state live in the parent vs. the child?

---

### Step 4.3 — Mini Project: Interactive List Module
**Goal:** Consolidate everything from Phase 0.1 into a small module you can showcase.

**Project Brief:** Build a **Task Tracker** or **Skill Tracker** module.
- Core features: add, remove, filter, and persist to localStorage.
- Stretch goals: color coding, completion toggle, or sorting.
- Deliverable: 3–4 connected React components with clear data flow.

**Reflection prompts:**
- How does React’s one-way data flow simplify debugging?
- What surprised you most about React’s re-render cycle?
- What patterns (e.g., `map()`, controlled inputs) are now second nature?

---

## 🧠 Phase Reflections — After Completion
- How does React’s Virtual DOM differ from manually editing the DOM in vanilla JS?
- What role do hooks play in managing component behavior over time?
- Which React concepts felt intuitive vs. abstract (and why)?

---

## 🪄 Next Phase Preview — Phase 1: State Management & Effects
- Deep dive into `useEffect` and dependency control.
- Context basics: passing data globally without prop drilling.
- Integrate React Dev Dashboard components into a unified interface.
- Early design system setup with shared state and modular components.

---

**End of Phase 0 v1.5**  
Iteration designed to solidify React fundamentals, refine component patterns, and maintain momentum through consistent microsteps.