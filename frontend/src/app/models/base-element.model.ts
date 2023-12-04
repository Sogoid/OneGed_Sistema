export class BaseElement {
  id!: number;
}

export type CreateUser = Omit<BaseElement, 'id'>;
