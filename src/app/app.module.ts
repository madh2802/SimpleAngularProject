import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TasksComponent } from "./tasks/tasks.component";
import { CardComponent } from "./shared/card/card.component";
import { TaskComponent } from "./tasks/task/task.component";
import { CreateTaskComponent } from "./tasks/create-task/create-task.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[AppComponent,HeaderComponent,UserComponent,CardComponent,TasksComponent,TaskComponent, CreateTaskComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule,FormsModule]
})
export class AppModule {

}