import { Request, Response } from "express"
import { decode } from "jwt-simple"
import prisma from "../../Prisma/prismaFile";

export async function me(req: Request, res: Response) {
    return res.status(200).json({user: req.user})
}
