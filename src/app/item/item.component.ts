import { Component, Input, OnInit } from '@angular/core';
import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';




@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {


  @Input()
  item:{
    url:string;
    title:string;
  }
  constructor(private youtube:YoutubeVideoPlayer) { }

  ngOnInit() {}

  view(link:any){
    console.log('https://www.youtube.com/watch?v='+link);
    window.open('https://www.youtube.com/watch?v='+link);
  }

/* 
  async streamVideo(videoId){    
    const info: any = await yt.info(videoId);
    this.streamUrl(info.formats[0].url);
  } */

 /*  private streamUrl(url:any){
    const options: StreamingVideoOptions={
      successCallback:()=>{

      },
      errorCallback:()=>{
        console.log("Error streaming");
      },
      orientation:"portrait",
      shouldAutoClose:true,
      controls:true,
    };
    this.streamingMedia.playVideo(url,options);
  } */

/* 
import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController } from '@ionic/angular';
import { ViewVideoPage } from '../view-video/view-video.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) {
  }
  playVideoLocal() {
    this.videoPlayer.play('file:///android_asset/www/assets/SampleVideo.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
  async viewVideo() {
    const modal = await this.modalCtrl.create({
      component: ViewVideoPage,
      componentProps: { url: 'https://www.youtube.com/embed/d1wdjO02s90' },
      cssClass: 'viewVideoModal'
    })
    return modal.present();
  }
  playVideoHosted() {
    this.videoPlayer.play('https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4').then(() => {
      console.log('video completed');
    }).catch(err => {
      console.log(err);
    });
  }
} */

/* 
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-view-video',
  templateUrl: './view-video.page.html',
  styleUrls: ['./view-video.page.scss'],
})
export class ViewVideoPage implements OnInit {
public videourl;

  constructor(
    private activeRoute:ActivatedRoute,
    public modalCtrl:ModalController,
    public navParms:NavParams,
    public  sanitizer:DomSanitizer
    ) { 
      console.log(' this.navParms', this.navParms.data.url)
        this.videourl = this.navParms.data.url
       console.log(this.videourl)
  }

  ngOnInit() {
  }

  dismiss(){
    this.modalCtrl.dismiss();
  }

} */

}

