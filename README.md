# Чисто на място

Лендинг сайт за мобилно почистване на апартаменти, офиси, дивани и бани.

Стек: **Vite + React + TypeScript**. Готов за локален старт и деплой (Vercel / Netlify / Cloudflare Pages).

## Бърз старт

```bash
cd chisto-na-myasto
cp .env.example .env
npm install
npm run dev
```

Отвори адреса от терминала (обикновено `http://localhost:5173`).

## Какво е включено

- Hero с бранд и CTA
- Услуги, процес, примерни цени, зона, FAQ
- Форма за оферта (отваря имейл клиент с попълнено съобщение)
- Бутони за телефон, Viber и WhatsApp
- Sticky „Обади се“ на мобилен
- Конфигурация през `.env` (име, град, телефон, имейл, зона)

## Настройки

Редактирай `.env`:

| Променлива | Пример |
|---|---|
| `VITE_BRAND_NAME` | Чисто на място |
| `VITE_CITY` | София |
| `VITE_PHONE` | +359888123456 |
| `VITE_PHONE_DISPLAY` | 0888 123 456 |
| `VITE_VIBER` | +359888123456 |
| `VITE_WHATSAPP` | 359888123456 |
| `VITE_EMAIL` | hello@example.com |
| `VITE_COVERAGE` | София и околности |
| `VITE_RESPONSE_TIME` | оферта до 15 минути |

Текстове, пакети и FAQ са в `src/config.ts`.

## Скриптове

```bash
npm run dev      # локална разработка
npm run build    # production build → dist/
npm run preview  # преглед на build
npm run lint     # oxlint
```

## Деплой

1. Качи репото в GitHub.
2. Свържи го с Vercel/Netlify.
3. Добави същите `VITE_*` променливи в панела на хостинга.
4. Build команда: `npm run build`, publish директория: `dist`.

## Следващи стъпки (по желание)

- Смени Unsplash hero с твоя снимка в `src/components/Hero.tsx`
- Добави галерия преди/след
- Свържи формата към Formspree / Telegram bot / Google Sheet
- Добави Google Business Profile линк във футъра
