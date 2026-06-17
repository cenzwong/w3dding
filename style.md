# Generic Style Specification & Design System: Wedding Collateral

This document establishes a scalable design system, typographic engine, color palette, and branding framework for high-end wedding collateral. By separating operational data from aesthetic implementation, it ensures a cohesive, unified visual identity across all physical print assets and digital guest touchpoints.

---

## 1. Brand Identity & Visual Assets

### 1.1 Core Creative Concept
The brand identity centers on a dual-narrative framework: **"Cinematic Romance & High-Contrast Modernity."** The editorial tone relies on a clear juxtaposition of classic, poetic, and high-gravity text layouts (for vows and readings) against highly geometric, bold, and minimal design layouts (for timelines and covers). This balance prevents the collateral from appearing overly traditional or modern, creating a structured aesthetic suited for prestigious, historic venues.

### 1.2 Design Language Guidelines
* **White Space as a Functional Element:** White space must never be viewed as empty space to fill. It serves as a visual boundary to isolate high-impact typographic components and structural data grids.
* **Asymmetry and Geometric Alignments:** Use stark, clean alignments for headers. Avoid mixing multiple decorative elements on a single asset; instead, rely on the clean execution of typography to anchor the design.
* **Graphic Accents and Borders:** Eliminate intricate illustrations, filigree, or complex floral patterns. Instead, utilize sharp, fine lines (0.5pt to 1pt rules) or subtle, desaturated background blocks to separate functional zones.

---

## 2. Color Palette & Applied System

The color architecture utilizes a primary monochrome foundation to deliver maximum contrast, paired with an accent spectrum designed to add warmth and a welcoming tone to guest-facing touchpoints.

```
+-------------------------------------------------------------------------+
|                                                                         |
|  PRIMARY MONOCHROME FOUNDATION                                          |
|  [ Stark White: #FFFFFF ]           [ Absolute Black: #000000 ]        |
|                                                                         |
+-------------------------------------------------------------------------+
|                                                                         |
|  ACCENT SPECTRUM: PASTEL TONES (柔和粉彩色調)                           |
|  [ Warm Cream ]   [ Soft Slate ]   [ Rose Ash ]   [ Pale Sage ]       |
|  #FDFBF7          #F4F5F7          #F5EBEA        #EAEFEA             |
|                                                                         |
+-------------------------------------------------------------------------+
```

### 2.1 Primary Monochrome Foundation
* **Stark White (`#FFFFFF`) / Light Ivory:** The absolute baseline canvas color for all print stock and digital backdrops. It maximizes layout contrast and preserves clean white space.
* **Absolute Black (`#000000`) / Deep Charcoal:** Used exclusively for high-impact display headers, functional metadata, timeline timestamps, and structural dividing lines.

### 2.2 Accent Spectrum: Pastel Tones (柔和粉彩色調)
To complement the monochrome foundation, the design system integrates desaturated, soft pastel accents. This palette ensures a clean, elegant, and non-intrusive aesthetic:
* **Warm Cream (`#FDFBF7`):** Recommended for full-bleed background tints on literary inserts or alternative multi-page booklet sheets.
* **Soft Slate (`#F4F5F7`):** Used for subtle background card elements, mapping grids, or logistical informational blocks.
* **Rose Ash (`#F5EBEA`) & Pale Sage (`#EAEFEA`):** Applied strictly as low-saturation highlights, border accents, or text colors for sub-headings and names.

---

## 3. Typographic Architecture & Content Hierarchy

To maintain clarity across multilingual layouts, all collateral must adhere to this tiered font pairing strategy.

### 3.1 Structural Foundations (English)
* **Tier 1: Display / High-Impact Headers**
    * **Classification:** Clean, geometric Sans-Serif (e.g., Montserrat, Helvetica Neue, or Avant Garde).
    * **Layout Rules:** All caps, tracking set to wide (+150 to +200), bold weight. Reserved for primary announcements, couple identifiers, and cover page anchors.
* **Tier 2: Narrative & Literary Prose**
    * **Classification:** Editorial Serif with clear historical or literary heritage (e.g., Garamond, Times New Roman, Baskerville).
    * **Layout Rules:** Regular weight, standard sentence case, italicized sub-headings. Reserved for vows, readings, poetry, and continuous narrative text blocks to convey gravity and formal elegance.
* **Tier 3: Metadata & Functional Details**
    * **Classification:** High-legibility, condensed Sans-Serif.
    * **Layout Rules:** Medium weight, compact tracking. Reserved for timestamps, location addresses, attribution lines, and small operational cues.

### 3.2 Structural Foundations (Traditional Chinese)
* **Standard Informational Content:** Modern, elegant Gothic / Sans-Serif (黑體) with uniform line weights (e.g., PingFang TC, Microsoft JhengHei). Ensures absolute readability at small scale across dense event timelines, menu descriptions, and logistics grids.
* **Formal Ceremonial Actions:** Classical Calligraphic / Regular Script (楷體). Reserved strictly for formal closing actions, honorific sign-offs, or structural signatures (e.g., "鞠躬").

---

## 4. Textual Logic, Tone & Formatting Rules

The communication blueprint operates under two distinct linguistic registers to balance logistical efficiency with ceremonial gravity.

### 4.1 Linguistic Registers
1.  **Functional / Informational Register:** Warm, inclusive, conversational, yet highly precise. Focuses on communal language to cultivate intimacy and clear structural expectations for guests.
2.  **Literary / Ceremonial Register:** Elevated, poetic, and cinematic. English prose leverages evocative imagery, while the corresponding Traditional Chinese text scales into formal, classical prose utilizing four-character idioms (四字成語) to ensure tonal weight and cross-lingual dignity.

### 4.2 Standard Formatting Constraints
* **Timestamps:** Represented strictly in lowercase with periods separating meridiem markers (e.g., `11:20 a.m.`, `2:15 p.m.`).
* **Date Formats:** Geometric minimalist interfaces must utilize the dot-separated numerical string `YYYY.MM.DD` or `DD.MM.YY`. Formal informational blocks must fully localize the date into traditional notation including the day of the week (e.g., `2026年6月29日(星期一)`).
* **Bilingual Alignment:**
    * *Titles & Headers:* Display Chinese text first, followed by the English translation on the same line using a vertical pipe divider (`|`) or via an immediate line break.
    * *Continuous Prose (Readings/Vows):* The complete English text block must be rendered in its entirety, followed by the complete translated Chinese block below it to prevent fragmented structural alignment.

---

## 5. Spatial Engineering & Component Layouts

### 5.1 Invitation Architecture
Invitations are partitioned into two distinct visual phases:
1.  **The Cover (Typographic-Led):** Minimalist, high-impact layout utilizing white space as a structural element. Isolates the core announcement hook, the names of the couple, and the date. Eliminates visual clutter to maximize contrast.
2.  **The Information Body (Linear Hierarchy):** Left-aligned or structured center-aligned grid. Contains:
    * *Context & Greeting:* Brief emotional opening block.
    * *Chronological Timeline:* Fixed tabular or clear vertical layout mapping timestamps directly to bold event names, followed by nested, small-text instructions.
    * *Logistical Clusters:* Explicitly isolated callouts with clear thematic borders or white-space padding for crucial guest details (e.g., Dietary Requirements, Dress Code, Parking/Transport, and RSVP).

### 5.2 Order of Service & Program Architecture
The ceremonial program enforces a sequential layout matching the physical event flow:
1.  **Liturgy/Event Schedule:** Interlocking timeline rows mapping structural movements alongside literary milestones.
2.  **Catering / Menu Component:** Distinct categorizations grouping beverages separate from savory or sweet food profiles, utilizing clear typography to delineate choices or pairing rules.
3.  **Interactive Media Component:** Centered, high-contrast QR Codes positioned alongside explicit, actionable commands guiding guest behavior (e.g., media uploads, digital guestbooks).
4.  **Acknowledgment Block:** Formal closing segment reserved for expressions of gratitude toward family, coordinators, and attendees, concluding with a formal calligraphic sign-off.

---

## 6. Architectural Rules for Scalable Implementation

When executing new collateral across the event lifecycle (e.g., table name cards, directional signage, digital landing pages, menus), enforce the following architectural rules:

* **Rule 1 (Thematic Consistency):** Adhere to the core stark monochrome base and use the **Pastel Tones** palette exclusively for design accents to maintain uniform brand constraints across different mediums.
* **Rule 2 (Architectural Harmony):** Typographic execution must mirror the physical venue properties. Historic or prestigious locations require structured serif fonts and classical Chinese scripts; modern industrial spaces require strict minimalist sans-serif architecture.
* **Rule 3 (Semantic Anchors):** Select a core conceptual thread or semantic domain during inception. All auxiliary text, signage headers, and speech transitions must draw vocabulary directly from this chosen framework to avoid narrative fragmentation.
* **Rule 4 (Bilingual Parity):** Every guest-facing asset must maintain complete bilingual parity. Do not truncate localized translations for spacing convenience; adjust typographic scaling or tracking parameters instead to fit the physical boundary constraints.
