import { prisma } from '@/lib/prisma';

export async function PATCH(
    req: Request,
    { params }: { params: { id: string } }
) {
    const updated = await prisma.request.update({
        where: { id: params.id },
        data: { status: 'REVIEWED' },
    });

    return Response.json(updated);
}