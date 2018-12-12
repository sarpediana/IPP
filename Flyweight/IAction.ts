export interface IAction {
    move(location: [number, number]): void;
    shoot?(target: string, location: [number, number]): void;
    cure?(mate: string, location: [number, number]): void;
  }