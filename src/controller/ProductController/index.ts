import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default class ProductController {
  async index(request: Request, response: Response) {
    const products = await prisma.product.findMany({});
    return response.status(200).json(products);
  }

  async store(request: Request, response: Response) {
    const { name, unitaryPrice, quantity } = request.body;
    const product = await prisma.product.create({ data: { name, quantity, unitaryPrice } });
    return response.status(200).json(product);
  }

  async _update(request: Request, response: Response) {
    const id = request.params.id;
    const { name, unitaryPrice, quantity } = request.body;
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return response.status(404).json({ message: 'Product not found' });
    await prisma.product.update({ data: { name, unitaryPrice, quantity }, where: { id } });
    return response.status(200).json(product);
  }

  async _delete(request: Request, response: Response) {
    const id = request.params.id;
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) return response.status(404).json({ message: 'Product not found' });
    await prisma.product.delete({ where: { id } });
    return response.status(200).json({ message: 'Product deleted successfully' });
  }
}