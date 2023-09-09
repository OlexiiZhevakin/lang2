
import Title from '@/app/[locale]/components/title/Title';
import styles from './Head.module.scss';
import Image from 'next/image';
import { getTranslationsFromDatabase } from '@/app/[locale]/utils/databaseUtils';
import { useLocale } from 'next-intl';

const Head = async () => {
  const locale = useLocale();
  const t = await getTranslationsFromDatabase(locale, 'home');


  return(
    <section className={styles.head}>
      <div className={styles.background}>
        {/* <Image
          src="/img/head-bg.webp"
          fill
          quality={75}
          alt={t['home.head.alt']}
          priority
        /> */}
      </div>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.subtitle}>
            {t['head.subtitle1']}
          </p>
          <Title title={'title'}>
            {/* {t('head.title')} */}
            </Title>
          <p className={styles.subtitle}>
            
          </p>
        </div>
      </div>
    </section>
  )
}

export default Head;