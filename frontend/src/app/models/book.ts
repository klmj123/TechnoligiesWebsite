import { BookVolume } from "./book-volume";

export class Book {
    id: string;
    volumeInfo: BookVolume;

    constructor() {
        this.id = "";
        this.volumeInfo = new BookVolume();
    }
}
