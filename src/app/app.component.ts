import { Component, ViewChild, OnInit } from "@angular/core";
import { GetNewsService } from "./get-news.service";
// import { RouterModule } from '@angular/router';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "angular-news-feed";
  articles;
  constructor(private getNewsService: GetNewsService) {}

  ngOnInit(): void {
    this.getNewsService.getNews("").subscribe(data => {
      console.log(data);
      this.articles = data["articles"];
    });
  }

  getNews(category): void {
    this.getNewsService.getNews(category).subscribe(data => {
      console.log(data);
      this.articles = data["articles"];
    });
  }
}
