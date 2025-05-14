import { Component } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { FormsModule } from '@angular/forms';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './books-api.component.html',
  styleUrl: './books-api.component.css'
})
export class BooksApiComponent {

  searchText: string;
  books: Book[];
  pageNumber: number;

  constructor(private bookServices: BooksService, private route: Router) {}

  getBooks(){
    if (this.searchText.length != 0 && this.searchText != null){
      this.bookServices.getBooks(this.searchText, this.pageNumber).subscribe({
        next: (resp) => {
          if (resp.length > 0){
            this.books = resp
          }else{
            this.pageNumber -= 1;
          }
        },
        error: (e) => console.log(e)
      })
    }else{
      console.log("Input Text is empty!!!")
    }
  }

  bookDetails(id: string){
    this.route.navigate(["view-book", id]);
  }

  prevPage(){
    this.pageNumber -= 1;
    this.getBooks();
  }

  nextPage(){
    this.pageNumber += 1;
    this.getBooks();
  }

}
