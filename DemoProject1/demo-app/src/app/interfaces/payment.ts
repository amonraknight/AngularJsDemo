export interface Payment {
    code: number;
    message: string;
    data: {
      id: number;
      serial: string;
    };
}
