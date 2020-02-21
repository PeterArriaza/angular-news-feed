import { Component, ViewChild } from "@angular/core";
import { NewsFeedComponent } from "./news-feed/news-feed.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-news-feed";

  @ViewChild(NewsFeedComponent) newsFeed: NewsFeedComponent;
}
