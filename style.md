# Generic Style Specification & Design System: Wedding Stationery

This document establishes a scalable, generic design system and style framework for high-end wedding collateral. It separates operational layout logic from aesthetic implementation, ensuring a consistent cross-media visual identity.

---

## 1. Typographic Architecture & Content Hierarchy

To ensure a balanced presentation across complex, multilingual layouts, collateral must adhere to a strict tiered font pairing strategy.

### 1.1 Structural Foundations (English)
* **Tier 1: Display / High-Impact Headers**
    * **Classification:** Clean, geometric Sans-Serif (e.g., Montserrat, Helvetica Neue, or Avant Garde).
    * **Layout Logic:** Uppercase, tracked (expanded letter-spacing), heavy weight. Reserved for primary announcements, couple identifiers, and cover page focus anchors.
* **Tier 2: Narrative & Literary Prose**
    * **Classification:** Editorial Serif with historical or literary heritage (e.g., Garamond, Times New Roman, Baskerville).
    * **Layout Logic:** Regular weight, standard sentence case, italicized sub-headings. Reserved for vows, readings, poetry, and continuous narrative text blocks to convey gravity and formal elegance.
* **Tier 3: Metadata & Functional Details**
    * **Classification:** High-legibility, condensed Sans-Serif.
    * **Layout Logic:** Medium weight, compact tracking. Reserved for timestamps, location addresses, attribution lines, and granular operational cues.

### 1.2 Structural Foundations (Traditional Chinese)
* **Standard Informational Content:** Modern, elegant Gothic / Sans-Serif (黑體) with uniform line weights (e.g., PingFang TC, Microsoft JhengHei). Ensures absolute readability at small scale across dense event timelines, menu descriptions, and logistics grids.
* **Formal Ceremonial Actions:** Classical Calligraphic / Regular Script (楷體). Reserved strictly for formal closing actions, honorific sign-offs, or structural sign-off expressions (e.g., "鞠躬").

---

## 2. Textual Logic, Tone & Formatting Rules

The communication blueprint operates under two distinct linguistic registers to balance logistical efficiency with ceremonial gravity.

### 2.1 Linguistic Registers
1.  **Functional / Informational Register:** Warm, inclusive, conversational, yet highly precise. Focuses on communal language to cultivate intimacy and clear structural expectations for guests.
2.  **Literary / Ceremonial Register:** Elevated, poetic, and cinematic. English prose leverages evocative imagery, while the corresponding Traditional Chinese text scales into formal, classical prose utilizing four-character idioms (四字成語) to ensure tonal weight and cross-lingual dignity.

### 2.2 Standard Formatting Constraints
* **Timestamps:** Represented strictly in lowercase with periods separating meridiem markers (e.g., `11:20 a.m.`, `2:15 p.m.`).
* **Date Formats:** Geometric minimalist interfaces must utilize the dot-separated numerical string `YYYY.MM.DD` or `DD.MM.YY`. Formal informational blocks must fully localize the date into traditional notation including the day of the week (e.g., `2026年6月29日(星期一)`).
* **Bilingual Alignment:** * *Titles & Headers:* Display Chinese text first, followed by the English translation on the same line using a vertical pipe divider (`|`) or via an immediate line break.
    * *Continuous Prose (Readings/Vows):* The complete English text block must be rendered in its entirety, followed by the complete translated Chinese block below it to prevent fragmented structural alignment.

---

## 3. Spatial Engineering & Component Layouts

### 3.1 Invitation Architecture
Invitations are partitioned into two distinct visual phases:
1.  **The Cover (Typographic-Led):** Minimalist, high-impact layout utilizing white space as a structural element. Isolates the core announcement hook, the names of the couple, and the date. Eliminates visual clutter to maximize contrast.
2.  **The Information Body (Linear Hierarchy):** Left-aligned or structured center-aligned grid. Contains:
    * *Context & Greeting:* Brief emotional opening block.
    * *Chronological Timeline:* Fixed tabular or clear vertical layout mapping timestamps directly to bold event names, followed by nested, small-text instructions.
    * *Logistical Clusters:* Explicitly isolated callouts with clear thematic borders or white-space padding for crucial guest details (e.g., Dietary Requirements, Dress Code, Parking/Transport, and RSVP).

### 3.2 Order of Service & Program Architecture
The ceremonial program enforces a sequential layout matching the physical event flow:
1.  **Liturgy/Event Schedule:** Interlocking timeline rows mapping structural movements alongside literary milestones.
2.  **Catering / Menu Component:** Distinct categorizations grouping beverages separate from savory or sweet food profiles, utilizing clear typography to delineate choices or pairing rules.
3.  **Interactive Media Component:** Centered, high-contrast QR Codes positioned alongside explicit, actionable commands guiding guest behavior (e.g., media uploads, digital guestbooks).
4.  **Acknowledgment Block:** Formal closing segment reserved for expressions of gratitude toward family, coordinators, and attendees, concluding with a formal calligraphic sign-off.

---

## 4. Architectural Rules for Scalable Implementation

When executing new collateral across the event lifecycle (e.g., table name cards, directional signage, digital landing pages, menus, or menus), enforce the following architectural rules:

* **Rule 1 (Thematic Consistency):** Establish a rigid primary color foundation (e.g., stark monochrome or deep corporate tones) paired with a defined accent color profile (e.g., desaturated pastel tones) to dictate the visual system.
* **Rule 2 (Architectural Harmony):** Typographic execution must mirror the physical venue properties. Historic or prestigious locations require structured serif fonts and classical Chinese scripts; modern industrial spaces require strict minimalist sans-serif architecture.
* **Rule 3 (Semantic Anchors):** Select a core conceptual thread or semantic domain during inception. All auxiliary text, signage headers, and speech transitions must draw vocabulary directly from this chosen framework to avoid narrative fragmentation.
* **Rule 4 (Bilingual Parity):** Every guest-facing asset must maintain complete bilingual parity. Do not truncate localized translations for spacing convenience; adjust typographic scaling or tracking parameters instead to fit the physical boundary constraints.
