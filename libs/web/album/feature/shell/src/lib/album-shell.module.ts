import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterUtil } from '@stackblitz-nx-angular/web/shared/utils';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () =>
          (await import("@stackblitz-nx-angular/web/album/feature/list")).AlbumsModule
      },
      {
        path: `:${RouterUtil.Configuration.AlbumId}`,
        loadChildren: async () =>
          (await import('@stackblitz-nx-angular/web/album/feature/detail')).AlbumsModule
      }
    ])]
})
export class AlbumShellModule { }
