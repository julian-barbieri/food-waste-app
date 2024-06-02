import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TransactionEntity } from './entities/transaction.entity';

@Controller('transactions')
@ApiTags('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Post()
  create(@Body() createTransactionDto: CreateTransactionDto) {
    return this.transactionService.create(createTransactionDto);
  }

  //GET ALL
  @Get()
  @ApiOkResponse({
    type: TransactionEntity,
    isArray: true,
    description: 'List all transactions',
  })
  async findAll(): Promise<TransactionEntity[]> {
    const transactions = await this.transactionService.findAll();
    return transactions.map((transaction) => new TransactionEntity(transaction));
  }

  //GET ALL
  @Get('/orders/:id')
  @ApiOkResponse({
    type: TransactionEntity,
    isArray: true,
    description: 'List all transactions not delivered by user id',
  })
  @ApiNotFoundResponse({
    description: 'Transaction not found',
  })
  async findAllNotDeliveredById(@Param('id') id: string): Promise<TransactionEntity[]> {
    const transactions = await this.transactionService.findAllNotDeliveredById(id);
    if (!transactions) {
      throw new NotFoundException(`Transaction with id = ${id} not found`);
    }
    return transactions.map((transaction) => new TransactionEntity(transaction));
  }

    //GET BY ID
    @Get(':id')
    @ApiOkResponse({
      type: TransactionEntity,
      description: 'Get transaction by id',
    })
    @ApiNotFoundResponse({
      description: 'Transaction not found',
    })
    async findOne(@Param('id') id: string): Promise<TransactionEntity> {
      const transaction = await this.transactionService.findOne(id);
      if (!transaction) {
        throw new NotFoundException(`Transaction with id = ${id} not found`);
      }
      return new TransactionEntity(transaction);
    }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionService.remove(+id);
  }
}
