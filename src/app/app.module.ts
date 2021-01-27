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
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NevigationComponent } from './nevigation/nevigation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
  declarations: [	
    AppComponent,
    ExampleComponent,
      MyComponentComponent,
      PeopleCreateComponent,
      PeopleDetailsComponent,
      PeopleListComponent,
      DepartmentComponent,
      WarehouseComponent,
      DashboardComponent,
      NevigationComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule, //建立新项目时，只要添加了，系统默认
    FormsModule, //如果上面引入了，这里一定要申明一下
    HttpClientModule, BrowserAnimationsModule, MatGridListModule,MatTableModule,MatCheckboxModule,MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, LayoutModule, MatToolbarModule, MatSidenavModule, MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
