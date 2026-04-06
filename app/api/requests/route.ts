import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
    const body = await req.json();

    const { payloadMass, orbitType, deltaV, propellant, email } = body;

    if (!payloadMass || !orbitType || !deltaV || !email) {
        return Response.json({ error: 'Missing fields' }, { status: 400 });
    }

    const result = await prisma.request.create({
        data: {
            payloadMass,
            orbitType,
            deltaV,
            propellant,
            email,
        },
    });

    return Response.json(result);
}

export async function GET() {
    const requests = await prisma.request.findMany({
        orderBy: { createdAt: 'desc' },
    });

    return Response.json(requests);
}