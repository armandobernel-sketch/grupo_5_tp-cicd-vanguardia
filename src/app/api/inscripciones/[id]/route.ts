import { NextRequest } from 'next/server';
import { InscripcionController } from '@/server/controllers/inscripcion.controller';

const controller = new InscripcionController();

export async function DELETE(req: NextRequest, context: { params: { id: string } }) {
  return controller.delete(req, context);
}