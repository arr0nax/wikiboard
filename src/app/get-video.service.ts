import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GetVideoService {

  constructor(private _http: Http) { }

  search(term):Observable<Response> {
      var random: Response;
      console.log(random);
      return this._http.get("https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + term + "&key=AIzaSyC8cr9_dKTKo8uAWw2RFFpAFh0Y80I5fTY").map((res:Response) => res.json());

  };


}
