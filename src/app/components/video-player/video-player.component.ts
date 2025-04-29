import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Plyr from 'plyr';


@Component({
  selector: 'app-video-player',
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  @Input() videoSourceList: { src: string; mimeType?: string }[] = [];
  @Input() src?: string;
  @Input() width?: number;
  @Input() height?: number;
  @Input() poster?: string;
  @Input() controls?: boolean;
  @Input() autoplay?: boolean;
}
