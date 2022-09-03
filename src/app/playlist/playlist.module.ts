import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlaylistPageRoutingModule } from './playlist-routing.module';

import { PlaylistPage } from './playlist.page';
import { ItemComponent } from '../item/item.component';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
import { SearchFilterPipe } from '../shared/search-filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlaylistPageRoutingModule,
  ],
  declarations: [PlaylistPage,ItemComponent,SearchFilterPipe],
  providers: [YoutubeVideoPlayer]
})
export class PlaylistPageModule {}
