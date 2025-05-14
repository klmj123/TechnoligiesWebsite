import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Spotify } from '../models/spotify';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  baseURL: string = "https://api.spotify.com/v1"

  clientId: string = 'placeholder';
  clientSecretId: string = 'placeholder';

  constructor(private httpClient: HttpClient) { }

  getAccessToken(): Observable<Object>{
    const headers = new HttpHeaders({
      'Content-Type' : 'application/x-www-form-urlencoded'
    })

    return this.httpClient.post('https://accounts.spotify.com/api/token',
       'grant_type=client_credentials&client_id=' + this.clientId + '&client_secret=' + this.clientSecretId,
        {headers} )
  }

  getSongByTrack(searchText: string, accessToken: string,page: number): Observable<Spotify[]>{
    page = page * 20;
    const headers = new HttpHeaders({
      'Authorization': `Bearer  ${accessToken}`
    })

    return this.httpClient.get(`${this.baseURL}/search?offset=${page}&limit=20&q=${searchText}&type=track`, {headers}).pipe(
      map((resp:any)=> {
        return resp.tracks?.items.map((item:any) => ({
          name: item.name,
          artists: item.artists.map((artist: any) => artist.name),
          album: item.album.name,
          spotifyURL: item.external_urls.spotify,
          image: item.album.images[0]?.url ?? 'No Image'
        }))
      })
    );
  }

  getSongByArtist(searchText: string, accessToken: string, page: number): Observable<Spotify[]>{
    page = page * 20;
    const headers = new HttpHeaders({
      'Authorization': `Bearer  ${accessToken}`
    })

    return this.httpClient.get(`${this.baseURL}/search?offset=${page}&limit=20&q=${searchText}&type=artist`, {headers}).pipe(
      map((resp:any)=> {
        return resp.artists?.items.map((item:any) => ({
          name: 'N/A',
          artists: item.name,
          album: 'N/A',
          spotifyURL: item.external_urls.spotify,
          image: item.images[0]?.url ?? 'No Image'
        }))
      })
    );
  }

  getSongByAlbum(searchText: string, accessToken: string, page: number): Observable<Spotify[]>{
    page = page * 20;
    const headers = new HttpHeaders({
      'Authorization': `Bearer  ${accessToken}`
    })

    return this.httpClient.get(`${this.baseURL}/search?offset=${page}&limit=20&q=${searchText}&type=album`, {headers}).pipe(
      map((resp:any)=> {
        return resp.albums?.items.map((item:any) => ({
          name: 'N/A',
          artists: item.artists.map((artist: any) => artist.name),
          album: item.name,
          spotifyURL: item.external_urls.spotify,
          image: item.images[0]?.url ?? 'No Image'
        }))
      })
    );
  }
}
