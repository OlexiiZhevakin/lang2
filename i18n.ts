
import { getRequestConfig } from 'next-intl/server';
import { getTranslationsFromDatabase } from './app/[locale]/utils/databaseUtils';// Путь к вашему файлу с функцией

export default getRequestConfig(async ({ locale }) => {
  const homeTranslations = await getTranslationsFromDatabase(locale, 'home');
  // const aboutTranslations = await getTranslationsFromDatabase(locale, 'about');
  // Добавьте здесь другие таблицы по мере необходимости

  // Объедините все переводы в один объект
  const translations = {
    ...homeTranslations,
    // ...aboutTranslations,
    // Добавьте здесь другие переводы по мере необходимости
  };

  return {
    messages: translations
  };
});
