import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../services/books.service';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './view-book.component.html',
  styleUrl: './view-book.component.css'
})
export class ViewBookComponent {

  bookId: string;
  book: Book;

  constructor(private route: ActivatedRoute, private bookServices: BooksService){}

  ngOnInit(){
    this.bookId = this.route.snapshot.params['id'];
    this.book = new Book();
    this.getBookById();
  }

  getBookById(){
    this.bookServices.getBookById(this.bookId).subscribe({
      next: (resp) => {
        this.book = resp;
        this.book.volumeInfo.description = this.book.volumeInfo?.description.replace(/[^\x20-\x7E]/g, "");
      },
      error: (e) => console.log(e)
    })
  }

}
