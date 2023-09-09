//api/reviews/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/db';
// import  json  from 'next';



export async function GET(req: NextRequest) {
  try {
    const translations = await query('SELECT * FROM home', []) as any[];
    

    const formattedTranslationsHome = translations.map((translation) => ({
      // id: review.review_id,
      ...translation,
    }));

    const total = formattedTranslationsHome.length;
    const headers = {
      'Content-Range': `reviews 0-${total - 1}/${total}`,
      'Access-Control-Expose-Headers': 'Content-Range',
    };

    return NextResponse.json(formattedTranslationsHome, { headers });
  } catch (error) {
    console.error('Error fetching translations:', error);
    return NextResponse.error();
  }
}

export const POST = async (req: NextRequest) => {
  try {
    const { key_name, translation_text, language } = await req.json();

    // Выполните SQL-запрос INSERT для вставки нового отзыва в базу данных
    const sql = `
      INSERT INTO home (key_name, translation_text, language)
      VALUES (?, ?, ?)
    `;
    const params = [key_name, translation_text, language];
    const result = await query(sql, params);

    // Извлекаем id созданного отзыва из результата запроса
    const createdTransaltionId = result.insertId;

    // Возвращаем успешный ответ в виде объекта с ключом 'id' на верхнем уровне
    return NextResponse.json({ id: createdTransaltionId });
  } catch (error) {
    console.error('Error creating review:', error);
    return NextResponse.error();
  }
};


// export { getTranslationHome as GET };
// export { createTranslationHome as POST };

