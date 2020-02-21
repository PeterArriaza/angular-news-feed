import { Component, OnInit } from "@angular/core";
import { GetNewsService } from "../get-news.service";

@Component({
  selector: "app-news-feed",
  templateUrl: "./news-feed.component.html",
  styleUrls: ["./news-feed.component.css", "../app.component.css"]
})
export class NewsFeedComponent implements OnInit {
  articles;
  constructor(private getNewsService: GetNewsService) {}

  ngOnInit(): void {
    this.getNewsService.getNews().subscribe(data => {
      console.log(data);
      this.articles = data["articles"];
    });
  }

  getTechNews(): void {
    this.getNewsService.getTechNews().subscribe(data => {
      console.log(data);
      this.articles = data["articles"];
    });
  }
}
