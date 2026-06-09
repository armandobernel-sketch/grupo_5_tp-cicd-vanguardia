import { NextRequest } from 'next/server';
import { InscripcionController } from '@/server/controllers/inscripcion.controller';

const controller = new InscripcionController();

export async function GET(req: NextRequest) {
  return controller.getAll(req);
}

export async function POST(req: NextRequest) {
  return controller.create(req);
}