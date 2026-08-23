# Wedding Invite Component (`WeddingInviteComponent`)

The `WeddingInviteComponent` is a dedicated standalone component hosting an interactive digital wedding invitation application. It is maintained at a dedicated internal route (`/wedding-invite`) for private access and personalized use.

---

## 🏛️ Architecture & Component Details

- **Type**: Standalone Angular Component (`standalone: true`)
- **Selector**: `app-wedding-invite`
- **Route**: `/wedding-invite`
- **Imports**: `CommonModule`, `RouterLink`

---

## 🌟 Key Features

1. **Live Countdown Timer**:
   - Real-time days, hours, minutes, and seconds countdown calculator running on an active interval.
2. **Audio Streaming Player**:
   - Embedded HTML5 audio player referencing background music (`assets/wedding/mp3/song.mp3`).
3. **Sakura Particle Falling Effect**:
   - Dynamic floral animation overlay using jQuery Sakura plugin with graceful fallbacks.
4. **Interactive Action Buttons**:
   - Venue Google Maps integration (`SEE THE VENUE`).
   - Direct download link for the invitation PDF card.
5. **Back Navigation**:
   - Floating header pill button linking back to the main portfolio (`/`).

---

## 📁 Asset Dependencies

Assets for this component are located in `src/assets/wedding/`:
- `src/assets/wedding/img/` — Decoration graphics (`left.png`, `right.png`, etc.)
- `src/assets/wedding/mp3/` — Background audio (`song.mp3`)
- `src/assets/wedding/invitation/` — Invitation PDF documents

---

## 🛠️ How to Customize

### Updating Date & Time
In `wedding-invite.component.ts`:
```typescript
weddingDate = new Date('YYYY-MM-DDTHH:mm:ss').getTime();
```

### Updating Venue & Text
In `wedding-invite.component.html`:
- Update groom & bride names.
- Update date, time, and hall address in `<span class="place">`.
- Update the Google Maps URL in `<a href="...">`.
