import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetVideoService {

  constructor(private _http: Http) { }

  search(term) {
      var url = 'https://www.googleapis.com/youtube/v3/search';
      var params = {
          part: 'snippet',
          key: 'AIzaSyC8cr9_dKTKo8uAWw2RFFpAFh0Y80I5fTY',
          q: term
      };

      this._http.get(url + "/q=" + params.q + "&key=" + params.key).map((res:Response) => res.json());
      );
  }


}
