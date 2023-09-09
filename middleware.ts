

// middlewares/nextIntlMiddleware.js
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['uk', 'en', 'de', 'ru'],
  defaultLocale: 'uk'
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
