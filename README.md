# 🎵 Zounk

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js">
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" alt="Spotify">
</div>

## 📖 Opis

**Zounk** to nowoczesna platforma do analizy i odkrywania muzyki, która wykorzystuje dane ze Spotify aby dostarczyć personalizowanych statystyk i rekomendacji muzycznych. Odkryj swoje top artystów, gatunki muzyczne i unikalne wzorce słuchania w pięknym, nowoczesnym interfejsie.

## ✨ Główne Funkcje

### 🎯 Personalizowane Statystyki
- **Top Artystów** - Zobacz swoich najczęściej słuchanych wykonawców
- **Analiza Gatunków** - Poznaj swoje ulubione gatunki i ich ewolucję
- **Trendy Słuchania** - Śledź zmiany w swoich muzycznych preferencjach

### 🤖 AI-powered Insights
- **Inteligentne Rekomendacje** - Odkryj nowych artystów dopasowanych do Twojego gustu
- **Analiza Audio Features** - Techniczne parametry Twojej muzyki
- **Predictive Analytics** - Przewidywanie przyszłych trendów

### 🎨 Nowoczesny Interfejs
- **Responsive Design** - Działa idealnie na wszystkich urządzeniach
- **Dark Mode** - Komfortowe użytkowanie w każdej warunkach
- **Modernistyczny UI** - Czysty, minimalistyczny design z zielonymi akcentami Spotify

### ⚡ Real-time Data
- **Aktualizacje na Żywo** - Statystyki zawsze aktualne
- **Szybkie Ładowanie** - Zoptymalizowana wydajność
- **Bezpieczne Połączenie** - Oficjalne Spotify API

## 🚀 Szybki Start

### Wymagania
- Node.js 18+ 
- Npm/Yarn/Pnpm
- Konto Spotify

### Instalacja

1. **Sklonuj repozytorium**
   ```bash
   git clone https://github.com/twoj-username/zounk.git
   cd zounk
   ```

2. **Zainstaluj zależności**
   ```bash
   npm install
   # lub
   yarn install
   ```

3. **Skonfiguruj zmienne środowiskowe**
   ```bash
   cp .env.example .env.local
   ```
   
   Edytuj `.env.local`:
   ```env
   SPOTIFY_CLIENT_ID=twoj_client_id
   SPOTIFY_CLIENT_SECRET=twoj_client_secret
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=twoj_secret_key
   ```

4. **Uruchom development server**
   ```bash
   npm run dev
   # lub
   yarn dev
   ```

5. **Otwórz przeglądarkę**
   ```
   http://localhost:3000
   ```

## 🔧 Konfiguracja Spotify API

1. **Stwórz aplikację na [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)**
2. **Dodaj redirect URI**: `http://localhost:3000/api/auth/callback/spotify`
3. **Skopiuj Client ID i Client Secret** do `.env.local`

## 📁 Struktura Projektu

```
zounk/
├── app/                    # Next.js App Router
│   ├── components/         # Reusable components
│   │   └── Nav.tsx        # Navigation component
│   ├── blog/              # Blog page
│   ├── kontakt/           # Contact page
│   ├── o-nas/             # About page
│   ├── stats/             # Statistics dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── lib/                   # Utility libraries
│   └── auth.ts           # Authentication config
├── public/               # Static assets
└── README.md
```

## 🛠️ Technologie

| Technologia | Opis |
|-------------|------|
| **Next.js 14** | React framework z App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first CSS framework |
| **NextAuth.js** | Authentication library |
| **Spotify API** | Music data and analytics |
| **Framer Motion** | Smooth animations |

## 🎨 Design System

### Kolory
- **Primary**: `#1DB954` (Spotify Green)
- **Dark**: `#0a0a0a` - `#171717`
- **Light**: `#ffffff` - `#f4f4f5`
- **Accent**: `#27272a` - `#3f3f46`

### Typografia
- **Font**: Geist Sans (Next.js default)
- **Weights**: 400, 700, 900
- **Headings**: Uppercase, italic, tracking-tighter

### Komponenty
- **Rounded corners**: `2.5rem` (40px)
- **Shadows**: Subtle with green accents
- **Transitions**: 300ms smooth animations

## 📱 Podgląd

### Home Page
- Hero section z CTA
- Features grid
- Community stats
- Quick navigation

### Statistics Dashboard
- Personalized music insights
- Interactive charts
- Real-time data updates
- Export functionality

### Modern Navigation
- Sticky header z backdrop blur
- Custom cursor na hover (plus sign)
- User authentication
- Responsive mobile menu

## 🤝 Współpraca

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. **Fork** the project
2. **Stwórz branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit** (`git commit -m 'Add some AmazingFeature'`)
4. **Push** (`git push origin feature/AmazingFeature`)
5. **Otwórz Pull Request**

## 📝 Roadmap

- [ ] **Mobile App** - React Native version
- [ ] **Social Features** - Share stats with friends
- [ ] **Advanced Analytics** - More detailed insights
- [ ] **Playlist Generator** - AI-powered playlists
- [ ] **Concert Integration** - Live music recommendations
- [ ] **API Access** - Public API for developers

## 🐛 Known Issues

- Mobile navigation needs improvement
- Some animations may be slow on older devices
- Spotify rate limiting on heavy usage

## 📄 Licencja

Ten projekt jest licencjonowany pod MIT License - zobacz [LICENSE](LICENSE) file dla szczegółów.

## 🙏 Podziękowania

- **Spotify** - Za amazing API i dane muzyczne
- **Vercel** - Za hosting i Next.js
- **Tailwind CSS** - Za amazing CSS framework
- **Wspólnocie** - Za wsparcie i feedback

## 📞 Kontakt

- **Project**: [Zounk](https://zounk.pl)
- **Author**: [Twoje Imię](https://github.com/twoj-username)
- **Email**: kontakt@zounk.pl

---

<div align="center">
  <p>Made with 🎵 and ❤️ by Zounk Team</p>
  <img src="https://img.shields.io/badge/Spotify%20Green-1DB954?style=flat-square" alt="Spotify Green">
</div>
