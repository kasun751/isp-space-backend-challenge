import { prisma } from '@/lib/prisma';

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;

    const updated = await prisma.request.update({
        where: { id },
        data: { status: 'REVIEWED' },
    });

    return Response.json(updated);
}