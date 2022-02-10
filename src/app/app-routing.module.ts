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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
