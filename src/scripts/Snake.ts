interface SnakeOptions {
  boardSize: number;
  wrapperElement: HTMLElement | null;
}
interface SnakeInterface {
  boardSize: number;
  wrapper: HTMLElement | null;
  createBoard(wrapper: HTMLElement): void;
}
class Snake implements SnakeInterface {
  boardSize: number;
  wrapper: HTMLElement | null;
  constructor(options: SnakeOptions) {
    this.boardSize = options.boardSize;
    this.wrapper = options.wrapperElement;
    this.createBoard(this.wrapper);
  }
  createBoard(wrapper: HTMLElement | null) {
    console.log("Snake Class has been initialized");
    console.log(wrapper, this.boardSize);
  }
}
export default Snake;
