import { Component } from "@angular/core";
import { Http, URLSearchParams, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  apiRoot: string = "http://httpbin.org";

  constructor(private http: Http) { }

  doGET() {
    console.log("GET");
    const url = `${this.apiRoot}/get`;
    const search = new URLSearchParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    this.http.get(url, {search}).subscribe(res => console.log(res));
  }

  doPOST() {
    console.log("POST");
    const url = `${this.apiRoot}/post`;
    const search = new URLSearchParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    this.http.post(url, {moo: "foo", goo: "loo"}, {search})
      .subscribe(res => console.log(res));
  }

  doPUT() {
    console.log("PUT");
    const url = `${this.apiRoot}/put`;
    const search = new URLSearchParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    this.http.put(url, {moo: "foo", goo: "loo"}, {search})
      .subscribe(res => console.log(res));
  }

  doDELETE() {
    console.log("DELETE");
    const url = `${this.apiRoot}/delete`;
    const search = new URLSearchParams();
    search.set("foo", "moo");
    search.set("limit", "25");
    this.http.delete(url, {search}).subscribe(res => console.log(res));
  }

  doGETAsPromise() {
    console.log("GET AS PROMISE");
    const url = `${this.apiRoot}/get`;
    this.http.get(url)
      .toPromise()
      .then(res => console.log(res));
  }

  doGETAsPromiseError() {
    console.log("GET AS PROMISE ERROR");
    const url = `${this.apiRoot}/post`;
    this.http.get(url)
      .toPromise()
      .then(
        res => console.log(res),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }

  doGETAsObservableError() {
    console.log("GET AS OBSERVABLE ERROR");
    const url = `${this.apiRoot}/post`;
    this.http.get(url).subscribe(
      res => console.log(res),
      msg => console.log(`Error: ${msg.status} ${msg.statusText}`)
    );
  }

  doGETWithHeaders() {
    console.log("GET WITH HEADERS");
    const headers = new Headers();
    headers.append("Authorization", btoa("username:password"));
    const opts = new RequestOptions();
    opts.headers = headers;
    const url = `${this.apiRoot}/get`;
    this.http.get(url, opts).subscribe(
      res => console.log(res),
      msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
    );
  }
}
