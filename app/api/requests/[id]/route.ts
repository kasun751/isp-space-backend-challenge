export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/prisma';

export async function PATCH(
    req: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;

        const updated = await prisma.request.update({
            where: { id },
            data: { status: 'REVIEWED' },
        });

        return Response.json(updated);
    } catch (error) {
        return Response.json(
            { error: 'Failed to update request status' },
            { status: 500 }
        );
    }
}