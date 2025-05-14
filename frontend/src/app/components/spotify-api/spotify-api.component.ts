import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { FormsModule } from '@angular/forms';
import { Spotify } from '../../models/spotify';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spotify-api',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './spotify-api.component.html',
  styleUrl: './spotify-api.component.css'
})
export class SpotifyApiComponent {  
  
  searchResult: Spotify[];
  accessToken: string;
  searchText: string;
  pageNumber: number = 0;
  lastSearchType: string;

  constructor(private spotifyServices: SpotifyService) {}

  ngOnInit(){
    this.getToken();
  }

  getToken(){
    this.spotifyServices.getAccessToken().subscribe({
      next: (resp: any) => this.accessToken = resp.access_token,
      error: (e) => console.log(e)
    });
  }

  getTrack(page: number){
    this.pageNumber = page;

    if(this.searchText != ""){
      this.spotifyServices.getSongByTrack(this.searchText, this.accessToken, this.pageNumber).subscribe({
        next: (resp) => {
          if (resp.length != 0 || null) {
            this.searchResult = resp
          }else{
            this.pageNumber -= 1;
          }
        },
        error: (e) => console.log(e)
      })
    }else{
      this.searchResult = null;
    }

    this.lastSearchType = 'Track';
  }

  getArtist(page: number){
    this.pageNumber = page;

    if(this.searchText != ""){
      this.spotifyServices.getSongByArtist(this.searchText, this.accessToken, this.pageNumber).subscribe({
        next: (resp) => {
          if (resp.length != 0 || null) {
            this.searchResult = resp
          }else{
            this.pageNumber -= 1;
          }
        },
        error: (e) => console.log(e)
      })
    }else{
      this.searchResult = null;
    }

    this.lastSearchType = 'Artist';
  }

  getAlbum(page: number){
    this.pageNumber = page;

    if(this.searchText != ""){
      this.spotifyServices.getSongByAlbum(this.searchText, this.accessToken, this.pageNumber).subscribe({
        next: (resp) => {
          if (resp.length != 0 || null) {
            this.searchResult = resp
          }else{
            this.pageNumber -= 1;
          }
        },
        error: (e) => console.log(e)
      })
    }else{
      this.searchResult = null;
    }
    this.lastSearchType = 'Album';
  }

  prevPage(){
    this.pageNumber -= 1;

    switch (this.lastSearchType){
      case 'Track':{
        this.getTrack(this.pageNumber);
        break;
      }
      case 'Artist':{
        this.getArtist(this.pageNumber);
        break;
      }
      case 'Album':{
        this.getAlbum(this.pageNumber);
        break;
      }
       default:{
        console.log("No Such Type");
        break;
      }
    }
  }

  nextPage(){
    this.pageNumber += 1;

    switch (this.lastSearchType){
      case 'Track':{
        this.getTrack(this.pageNumber);
        break;
      }
      case 'Artist':{
        this.getArtist(this.pageNumber);
        break;
      }
      case 'Album':{
        this.getAlbum(this.pageNumber);
        break;
      }
       default:{
        console.log("No Such Type");
        break;
      }
    }
  }

}
