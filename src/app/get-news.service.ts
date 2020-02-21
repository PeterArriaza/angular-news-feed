import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GetNewsService {
  API_KEY = "af28effcb90547f197975ef1061a2e3e";

  public getNews(category) {
    if (!category) {
      console.log("category", category);
    return this.httpClient.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.API_KEY}`
    )
    }
    else {
      console.log("category:", category);
      return this.httpClient.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${this.API_KEY}`);
    }
  }

  constructor(private httpClient: HttpClient) {}
}
