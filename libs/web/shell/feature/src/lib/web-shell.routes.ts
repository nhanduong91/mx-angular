import { Route } from "@angular/router";
import { LayoutComponent } from "@stackblitz-nx-angular/web/shell/ui/layout";

export const WebShellModule: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: `albums`,
        loadChildren: async () =>
        (await import('@stackblitz-nx-angular/web/album/feature/shell')).AlbumShellModule
      }
    ]
  }
]
