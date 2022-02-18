import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardModule } from "./component/dashboard/dashboard.module";

const routes: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import("./component/dashboard/dashboard.module").then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: "create-new",
    loadChildren: () =>
      import("./component/create-new/create-new.module").then(
        (m) => m.CreateNewModule
      ),
  },{
    path: "message-box",
    loadChildren: () =>
      import("./component/message-box/message-box.module").then(
        (m) => m.MessageBoxModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
