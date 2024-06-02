import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TransactionService {
  constructor(private prisma: PrismaService) {}

  create(createTransactionDto: CreateTransactionDto) {
    return 'This action adds a new transaction';
  }

  //GET ALL
  findAll() {
    return this.prisma.transaction.findMany({
      include: {
        user: true,
        product:{
          include: {
            store: {
              include: {
                user: true
              }
            }
        }}
      }
    });
  }

  //GET ACTIVE TRANSACTIONS by ID

  findAllNotDeliveredById(id: string) {
    return this.prisma.transaction.findMany({
      where: { 
        delivered: false,
        userId: id,
      },
      include: {
        user: true,
        product:{
          include: {
            store: {
              include: {
                user: true
              }
            }
        }}
      }
    });
  }

  findOne(id: string) {
    return this.prisma.transaction.findUnique({
      where: { id },
    });
  }

  update(id: number, updateTransactionDto: UpdateTransactionDto) {
    return `This action updates a #${id} transaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} transaction`;
  }
}
