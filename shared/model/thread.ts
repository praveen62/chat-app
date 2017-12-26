export interface Thread {
  id: number;
  participants: {[key: number]: number};
  messageIds: number[];

}
