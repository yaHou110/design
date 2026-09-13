# طراحی کارت ویزیت و ست اداری | گروه نرم‌افزاری هیمورا

سایت تک‌صفحه‌ای نمونه‌کارها و سفارش طراحی **کارت ویزیت**، **سرنسخه A5** و **ست اداری**.
سایت کاملاً فارسی و راست‌به‌چپ (RTL) است و سفارش‌ها از طریق مودال سفارش و تماس تلفنی ثبت می‌شوند.

🌐 **نسخه آنلاین:** https://design-pi-olive.vercel.app

## پشته فناوری

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** برای استایل‌ها
- `lucide-react` برای آیکون‌ها و `lenis` برای اسکرول نرم
- هیچ بک‌اند، API Route یا متغیر محیطی لازم نیست؛ صفحه به‌صورت استاتیک بیلد و روی Vercel سرو می‌شود.

## اجرا روی سیستم محلی

پیش‌نیاز: Node.js 20 یا بالاتر. برای نصب وابستگی‌ها از `bun` استفاده شده (`bun.lock` در ریپو کامیت شده است)؛ `npm` هم کار می‌کند.

```bash
bun install
bun run dev
```

سپس http://localhost:3000 را باز کنید.

## دستورها

| دستور | کار |
| --- | --- |
| `bun run dev` | اجرای محیط توسعه |
| `bun run build` | بیلد پروداکشن |
| `bun run start` | اجرای خروجی بیلد |
| `bun run lint` | بررسی ESLint |
| `bun run clean` | پاک کردن پوشه `.next` |

## ساختار پروژه

```
app/          layout (متادیتا و JSON-LD)، صفحه اصلی و استایل‌های سراسری
components/   بخش‌های صفحه: DesignShowcase، OrderModal، Header، Footer،
              SEOFaqSection، HemooraLogo، WatermarkOverlay، SecurityShield،
              AppleLiquidGlassBackground، SmoothScroll
hooks/        use-mobile
lib/          ابزارهای کمکی (cn)
```

## استقرار

پروژه Vercel با نام `design` (تیم `yahou`) به شاخه `main` همین ریپو وصل است؛ هر push روی `main` به‌صورت خودکار یک دیپلوی پروداکشن می‌سازد.

- Production: https://design-pi-olive.vercel.app
- Alias: https://design-yahou.vercel.app

دیپلوی دستی:

```bash
vercel --prod
```

## تماس

گروه نرم‌افزاری هیمورا — ۰۹۳۵۴۴۶۷۲۶۹
