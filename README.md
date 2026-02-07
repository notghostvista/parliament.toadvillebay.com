# Parliament of ToadVille Bay

Official parliamentary website for ToadVille Bay featuring seating charts, member profiles, and provincial electoral information.

## Website

**Live:** https://parliament.toadvillebay.com

## Features

- 📊 **Seating Chart** - Interactive 203-seat parliamentary chamber
- 👥 **Member Profiles** - All MPs with province, district, and party affiliation
- 🗺️ **Provinces** - 13 provinces with municipal breakdown and seat allocation
- 🎭 **Parties** - Political party representation and statistics
- 🌙 **Dark Mode** - System preference detection
- 📱 **Responsive** - Mobile-friendly design

## Political System

- **Total Seats:** 203
- **Government:** Bloc ToadVille (108 seats)
- **Opposition:** 95 seats across 5 parties
- **Provinces:** 13 regional electoral divisions
- **Capital:** Distrito Federal (19 seats)

## Quick Start

Simply open `index.html` in a web browser or visit the live site above.

## File Structure

```
parliament-site/
├── index.html              # Homepage
├── seating.html            # Chamber seating visualization
├── members.html            # Member directory
├── parties.html            # Party information
├── provinces.html          # Provincial breakdown
├── member.html             # Individual member profile template
├── CNAME                   # Custom domain configuration
├── .nojekyll              # GitHub Pages configuration
├── assets/
│   ├── css/
│   │   └── styles.css     # Complete stylesheet with dark mode
│   ├── js/
│   │   ├── seating.js     # Seating chart logic & member data
│   │   └── members.js     # Members page script
│   └── Images/
│       ├── ToadVilleCOA.png      # Coat of Arms (favicon)
│       └── gabemedgutierrez.jpg  # PM profile photo
└── MemberProfile/
    └── gabrielmedranogutierrez.html  # PM profile page
```

## Deployment

Hosted on GitHub Pages with automatic deployment on push to main branch.

### Custom Domain Setup

1. Domain registered and DNS configured
2. GitHub Pages Points-to-Address: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. CNAME record: `parliament` → GitHub Pages domain
4. CNAME file configured in repository root

## Technical Stack

- **HTML5** - Structure
- **CSS3** - Styling with CSS custom properties and media queries
- **Vanilla JavaScript** - Interactive features
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - `prefers-color-scheme` media query

## Electoral System

### 13 Provinces (203 seats total)

| Province | Seats | Region |
|----------|-------|--------|
| Puerto Valle | 16 | Southern Coast |
| Texica | 16 | Central East |
| ToadVille Sur | 15 | Southern Interior |
| Mihajl | 21 | Northeast |
| Sonora | 21 | North |
| Amilpan | 15 | Northwest |
| Tepayán | 13 | West |
| National Preserve | 12 | Central |
| Sierra | 15 | Northeast Interior |
| Metepan | 16 | Central South |
| Distrito Federal | 19 | Capital |
| Tasiq Nunaat | 12 | Arctic North |
| Desierto Altos | 12 | Desert |

## Navigation

- **Home** - Welcome and overview
- **Chamber Seating** - Interactive seat selection with member details
- **Members** - Complete MP directory by province
- **Parties** - Political party breakdown
- **Provinces** - Electoral regions and municipalities

## License

© Parliament of ToadVille Bay 2026
