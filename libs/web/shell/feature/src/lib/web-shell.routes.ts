import { Route } from "@angular/router";

export const WebShellModule: Route[] = [
  {
    path: '',
    component: '',
    children: [
      {
        path: `albums`,
        loadChildren: async () =>
        (await import('@stackblitz-nx-angular/web/album/feature/shell')).AlbumShellModule
      }
    ]
  }
]
