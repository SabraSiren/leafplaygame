# LeafPlay

Сайт инди-игровой студии LeafPlay. Витрина игр, описания, демо и ссылки на магазины.

## Технологии и библиотеки

- **Next.js 16** — React-фреймворк (App Router)
- **React 19** — UI-библиотека
- **TypeScript** — типизация
- **SASS/SCSS** — стили, CSS-модули
- **next/font** — шрифты (Inter, Montserrat, Orbitron)
- **next/image** — оптимизация изображений
- **Turbopack** — сборка в dev-режиме
- **ESLint** — линтинг

## Функционал

### Главная страница
- Секция **Games** — карточки игр с превью (видео/изображение), ссылками на страницы
- Секция **About** — описание студии
- Секция **Contact** — контакты, ссылки на соцсети и магазины

### Страницы игр (`/games/[slug]`)
- Описание игры (GeoHell — структурированный текст; Dead Blok — краткий)
- **Play demo** — для GeoHell: встроенная демо-версия (iframe), предзагрузка при заходе на страницу
- Кнопка **Download** со ссылкой на Google Play / Steam
- Ссылка на политику конфиденциальности игры

### Политика конфиденциальности
- Общая страница `/privacy`
- Отдельные страницы `/games/[slug]/privacy` для каждой игры

### Другое
- Адаптивная вёрстка (600px — мобильный, 768px — планшет)
- Бургер-меню на мобильных
- Локализация (английский)
- SEO: sitemap.xml, robots.txt, метаданные, Open Graph

## Структура проекта

```
├── app/                 # App Router
│   ├── globals.scss     # Глобальные стили и переменные
│   ├── games/[slug]/    # Страницы игр и их политики
│   ├── privacy/         # Общая политика
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── layout/          # Header, Footer, Container, GamePageLayout
│   ├── sections/        # About, Contact, Games, Privacy
│   └── ui/              # PlayDemoButton
├── content/             # Данные игр, соцсетей, сайта
├── context/             # LocaleContext
├── demo/                # Демо-плеер и GeoHell iframe
├── lib/                 # routes
├── localization/        # Переводы (en)
└── styles/              # Общие стили, стили по играм (geohell, deadblok)
```

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер с Turbopack |
| `npm run build` | Сборка для продакшена |
| `npm run start` | Запуск продакшен-сервера |
| `npm run lint` | ESLint |

## Переменные окружения

Создайте `.env` на основе `.env.example`:

- `NEXT_PUBLIC_SITE_URL` — публичный URL сайта (sitemap, robots, Open Graph). На Vercel можно не задавать — подставится `VERCEL_URL`.

## Деплой

Проект настроен для деплоя на [Vercel](https://vercel.com). Поддерживаются последние версии Chrome, Safari, Edge и Firefox.
