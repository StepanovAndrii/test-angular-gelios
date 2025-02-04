import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  scrollTo(id: string, leveling: ScrollLogicalPosition): void {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: leveling
        });
      }
    }
  }

  scrollToTop(): void {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
