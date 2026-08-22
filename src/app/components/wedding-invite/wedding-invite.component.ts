import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var $: any; // jQuery

@Component({
  selector: 'app-wedding-invite',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wedding-invite.component.html',
  styleUrls: ['./wedding-invite.component.css']
})
export class WeddingInviteComponent implements OnInit, AfterViewInit {
  timeLeft: any = {};
  weddingDate = new Date('2024-04-21T11:00:00').getTime();

  ngOnInit(): void {
    this.startCountdown();
  }

  ngAfterViewInit(): void {
    this.initializeSakura();
    this.initializeAudio();
  }

  private startCountdown(): void {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.weddingDate - now;

      if (distance < 0) {
        clearInterval(timer);
        this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return;
      }

      this.timeLeft = {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    }, 1000);
  }

  private initializeSakura(): void {
    if (typeof $ !== 'undefined' && ($('.sakura-falling') as any).sakura) {
      try {
        ($('.sakura-falling') as any).sakura();
      } catch (e) {
        console.log('Sakura animation plugin not loaded');
      }
    }
  }

  private initializeAudio(): void {
    const audio = document.getElementById('my_audio') as HTMLAudioElement;
    if (audio) {
      audio.play().catch(err => console.log('Audio autoplay prevented:', err));
    }
  }
}
