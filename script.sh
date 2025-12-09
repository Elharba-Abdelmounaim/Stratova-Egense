#!/bin/bash

# اسم المشروع
PROJECT_NAME="stratova-frontend-test"

# إنشاء المشروع Next.js جديد (TypeScript + App Router)
npx create-next-app@latest $PROJECT_NAME --typescript --app

cd $PROJECT_NAME || exit

# إنشاء هيكلة المجلدات
mkdir -p components
mkdir -p public/images/team
mkdir -p public/images/services
mkdir -p app/about
mkdir -p app/services
mkdir -p app/team
mkdir -p app/contact
mkdir -p utils
mkdir -p styles

# إنشاء ملفات Components الأساسية
touch components/Header.tsx
touch components/Footer.tsx
touch components/Hero.tsx
touch components/WhatsAppButton.tsx
touch components/SEOHead.tsx

# إنشاء Components إضافية
touch components/ServicesCard.tsx
touch components/AboutSection.tsx
touch components/TeamCard.tsx
touch components/ContactForm.tsx
touch components/ScrollToTop.tsx

# إنشاء ملفات Pages الأساسية
touch app/page.tsx
touch app/about/page.tsx
touch app/services/page.tsx
touch app/team/page.tsx
touch app/contact/page.tsx

# إنشاء Layout عام
touch app/layout.tsx

# إنشاء ملفات Utils
touch utils/constants.ts
touch utils/fetcher.ts

# إنشاء ملف CSS عام
touch styles/globals.css

# إنشاء ملف README
touch README.md

echo "✅ Full project structure created successfully!"
echo "Next steps:"
echo "1. Add your components code inside components/ folder."
echo "2. Add your page content inside app/*/page.tsx."
echo "3. Add global styles in styles/globals.css."
echo "4. Run 'npm run dev' to start the development server."
