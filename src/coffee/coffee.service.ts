import { Injectable, NotFoundException } from '@nestjs/common';

type Coffee = {
  id: number;
  name: string;
  price: number;
};

@Injectable()
export class CoffeeService {
  private coffees: Coffee[] = [
    { id: 1, name: 'Ice Latte', price: 2.43 },
    { id: 2, name: 'Green Tea', price: 2.5 },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === id);

    if (!coffee) {
      throw new NotFoundException('Coffee not found');
    }

    return coffee;
  }

  create(data: Omit<Coffee, 'id'>) {
    const coffee: Coffee = {
      id: Date.now(),
      ...data,
    };

    this.coffees.push(coffee);
    return coffee;
  }

  update(id: number, data: Partial<Omit<Coffee, 'id'>>) {
    const coffee = this.findOne(id);

    Object.assign(coffee, data);

    return coffee;
  }

  remove(id: number) {
    const coffee = this.findOne(id);

    this.coffees = this.coffees.filter((coffee) => coffee.id === id);

    return coffee;
  }
}
