# Edbel Event Zone (ኤድቤል Event Zone) — Official Website

> **Premier Luxury Event Planning & Decor | Bole, Addis Ababa, Ethiopia**  
> *Phone / WhatsApp:* [+251 91 390 4484](tel:+251913904484) | *Alt:* +251 98 034 8026  
> *Official Facebook Page:* [facebook.com/EdbelEventZone](https://web.facebook.com/EdbelEventZone/)

---

## 🌟 Overview

This is the bespoke, modern, responsive website for **Edbel Event Zone**, an established event design and planning company based in Bole, Addis Ababa.

Built entirely from scratch, the application showcases **51 verified, authentic event setups** directly from the company's real work portfolio. No generic stock photos were used.

---

## 💎 Brand & Visual Identity

A light, quiet layout so the event photos carry the color. Design tokens live in `tailwind.config.js`.

- **Color Palette:**
  - *Surfaces:* white `#FFFFFF`, mist `#F4F6F2`, hairlines `#DDE2DB`
  - *Text:* ink `#18231D`, body `#48554D`
  - *Accent:* leaf green `#1E4A38` (the velvet drapes and turf in Edbel's own setups)
  - *Logo gold:* `#B9AA74`, used sparingly
- **Typography:**
  - *Headings & body:* `Jost` (echoes the geometric lettering in the logo)
  - *Amharic:* `Noto Sans Ethiopic`
- **Signature shape:** three arch-topped photos in the hero, after the triple-arch stages Edbel builds.
- **Logo files** (`public/assets/images/branding/`): `edbel-logo-ink.png` for light backgrounds, `edbel-logo-light.png` for dark ones.

---

## 🎪 Featured Services & Verified Portfolio Categories

1. **Luxury Wedding Planning & Grand Ballroom Decor**
   - 5-star hotel ballroom productions (triple floral arch domes, rain crystal chandeliers, mirrored dance floors).
2. **Traditional Ethiopian Engagements (ሽምግልና & ቀለበት)**
   - Elder Shimgilna throne setups, Kelbet ring ceremony backdrops, woven mesob heritage touches, custom Amharic neon typography.
3. **Romantic Proposals ("Will You Marry Me?")**
   - Penthouse skylines, twilight terraces, giant 3D red rose hearts, candle pillars, and fairy lights.
4. **Christenings & Religious Celebrations (ክርስትና)**
   - Custom neon crosses, pristine white marquee pavilions, sculptured 3D blooms, and family banquet seating.
5. **Milestone Birthdays & Themed Parties**
   - Adult black & gold galas, lavender & chrome villa setups, and children's themes (Hello Kitty, Bumblebee Honey, Pastel Rainbow).
6. **Corporate Galas & Banquet Dinners**
   - Long royal VIP dining tables, sequin runners, charger plates, and shimmering backdrops.
7. **Luxury Marquee Pavilions & Outdoor Venue Transformation**
   - All-weather marquee tent structures, artificial turf carpet, cascading ceiling drapery, and clear ghost seating.
8. **Graduations & Academic Celebrations**
   - Custom mortarboard neon displays, gold royal thrones, floral columns, and refined celebration staging.

---

## 🚀 Key Website Features

- **Hero:** plain headline, two actions (get a quote, see our work) and the phone number.
- **Services:** six event types; choosing one filters the gallery to that type.
- **51-Photo Gallery:** filter by event type; photos keep their real shape in a masonry layout.
- **Lightbox:** larger photo with its description, keyboard navigation (left/right/escape), and "Ask about this look", which carries the photo title into the quote form.
- **Quote Form:** name, phone, event type, date, venue and notes. The site has no server, so submitting opens WhatsApp with the details filled in for `+251 91 390 4484`.
- **Floating WhatsApp button** on every screen.
- **Responsive and accessible:** works from phone to desktop, with visible keyboard focus, labelled form fields and reduced-motion support.

Contact details and the list of event types are kept in one place: `src/data/contact.js`.

---

## 🛠 Tech Stack

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Image Pipeline:** Python Pillow optimization (cropping status bar borders, compressing for web)

---

## 💻 Running the Project Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```
