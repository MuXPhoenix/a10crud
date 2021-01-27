import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PeopleCreateComponent } from './components/people-create/people-create.component';
import { PeopleDetailsComponent } from './components/people-details/people-details.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { DepartmentComponent } from './components/department/department.component';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; //这个必须不要忘了
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [	
    AppComponent,
    ExampleComponent,
      MyComponentComponent,
      PeopleCreateComponent,
      PeopleDetailsComponent,
      PeopleListComponent,
      DepartmentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, //建立新项目时，只要添加了，系统默认
    FormsModule, //如果上面引入了，这里一定要申明一下
    HttpClientModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
