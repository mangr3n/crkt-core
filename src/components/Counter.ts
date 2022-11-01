import { FunctionComponent } from "../FunctionComponent";


export class Counter extends FunctionComponent {
  value:number;

  constructor(initialValue:number) {
    super((v, next) => {
      this.value++;
      const result = this.value;
      next(result);
    });
    this.value = initialValue;
  }
}