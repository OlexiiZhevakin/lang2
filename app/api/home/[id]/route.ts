//api/reviews/[id]/route.ts


import { query } from '@/db';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const sql = `SELECT * FROM home WHERE id = ?`;
  const results = await query(sql, [id]); // Поставьте id в квадратные скобки
  const home = JSON.parse(JSON.stringify(results[0])); // Преобразование из RowDataPacket

  return NextResponse.json(home);
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const sql = `DELETE FROM home WHERE id = ?`;
  await query(sql, [id]); // Поставьте id в квадратные скобки для передачи значения в SQL-запрос
  const response = {
    message: 'Home deleted successfully',
    id: id
  };

  return NextResponse.json(response);
}


export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  const { key_name, translation_text, language } = await req.json();

  const sql = `UPDATE home SET key_name = ?, translation_text = ?, language = ? WHERE id = ?`;
  const result = [key_name, translation_text, language, id];
  await query(sql, result);

  const response = {
    message: 'Home updated successfully',
    id: id
  };

  return NextResponse.json(response);
}
