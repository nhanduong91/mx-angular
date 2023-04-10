import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        loadChildren: async () =>
          (await import("@stackblitz-nx-angular/web/album/feature/list")).AlbumsModule
      }
    ])]
})
export class AlbumShellModule { }
