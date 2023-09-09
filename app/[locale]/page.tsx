import HomePage from "./home/page";
import { getTranslationsFromDatabase } from "./utils/databaseUtils"
import { useLocale } from 'next-intl';

export default async function Home() {
  const locale = useLocale();
  // const t = await getTranslationsFromDatabase(locale);

  return (
    <>
    <HomePage/>
      {/* <h1>{t['components.help.link']}</h1> */}
    </>
  )
}
