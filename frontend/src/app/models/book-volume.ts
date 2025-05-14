interface imageLinks{
    smallThumbnail: string;
    thumbnail: string;
}

export class BookVolume {
    title: string;
    authors: Array<String>;
    publisher: string;
    description: string;
    averageRating: number;
    ratingsCount: number;
    imageLinks: imageLinks;
    pageCount: string;
    previewLink: string;
}
