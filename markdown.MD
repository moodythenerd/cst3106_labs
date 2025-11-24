# 🏥 Hospital Triage Web App — Design System
**Lab 10 — CST3106**  
**Prepared By:** Mahmoud Ahmed

---

# 1️⃣ Typography (Both Pages)

**Font Used:** Inter (Google Fonts)  
**Weights:**
- 400 — body text
- 600 — section titles
- 700 — main titles

This font was chosen for its readability and clean medical UI appearance.


---

# 2️⃣ Colour Palette (Both Pages)

| Element | Color | Hex |
|---------|--------|---------|
| Background Glow | Light Medical Blue | `#BBDEFB` |
| App Card / Container | Semi-Transparent White | `#FFFFFF` |
| Titles | Medical Red | `#C62828` |
| Submit Button | Medical Green | `#2E7D32` |
| Selection Buttons | Grey | `#E0E0E0` |

The palette creates a clean, calm medical interface.

---

# 3️⃣ USER PAGE DESIGN 

This page collects triage information from the patient.

---
## 3.1 Main Container
- Centered card-style layout
- Rounded corners
- Soft shadow
- Semi-transparent white background
- Enough padding to keep elements readable

 
![Container](screenshots/colors.png)

---


## 3.2 Injury Type Section
- Title “Injury Type”
- 5 grey rounded buttons
- Hover and selected (blue) states
- Responsive grid layout

 
![Injury Section](screenshots/injury-section.png)

---

## 3.3 Pain Level Section
- Same grid layout as Injury
- 5 pain level buttons (1–5)
- Selected button becomes highlighted


![Pain Level](screenshots/pain-level.png)

---

## 3.4 Submit Button
- Large full-width green button
- Hover effect
- Saves data into `localStorage`
- Redirects to Admin page


![Submit Button](screenshots/submit-button.png)

---

# 4️⃣ ADMIN PAGE DESIGN 

This page simulates a triage dashboard for hospital staff.

---
## 4.1 Admin Container
- Same style as User container
- Slightly wider for table
- Title + description


![Admin Page](screenshots/admin-page.png)

---
## 4.2 Patient Table
Columns:
- Injury
- Pain Level
- Attention Score
- Actions (+ / – / Remove)

Design:
- Grey header bar
- White table rows
- Thin borders
- Centered text


![Admin Table](screenshots/admin-table.png)

---

## 4.3 Admin Action Buttons
- **Increase (+)** — Blue
- **Decrease (–)** — Blue
- **Remove** — Red

All buttons:
- Rounded
- Hover states
- Consistent sizing


![Admin Buttons](screenshots/admin-buttons.png)
---

# 5️⃣ Layout Structure (Both Pages)

## User Page Flow
1. Title
2. Description
3. Injury Type selection
4. Pain Level selection
5. Submit Button

## Admin Page Flow
1. Title
2. Description
3. Patient table
4. Action buttons

---

# 6️⃣ Consistency

Consistency is maintained through:
- Same font family
- Same border-radius
- Shared color scheme
- Matching grid layout
- Same spacing + shadow rules
- Same container style


---



