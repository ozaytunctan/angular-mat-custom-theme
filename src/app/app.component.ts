import {Component, Renderer2} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatSlideToggle, MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatCheckboxModule} from "@angular/material/checkbox";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatDividerModule, MatExpansionModule,
    MatButtonToggleModule, MatSlideToggle, MatCheckboxModule, MatButtonToggleModule, MatSlideToggleModule],
  template: `

    <section>

      Theme Change:
      <mat-button-toggle-group [value]="'light'"
                               (valueChange)="onToggleTheme($event)"
                               hideSingleSelectionIndicator>
        <mat-button-toggle color="primary" value="dark">Dark</mat-button-toggle>
        <mat-button-toggle color="accent" value="light">Light</mat-button-toggle>
      </mat-button-toggle-group>
    </section>

    <section>
      <mat-checkbox color="primary">Primary</mat-checkbox>
      <mat-checkbox color="accent">Accent</mat-checkbox>
      <mat-checkbox class="example-margin" color="warn">Warn</mat-checkbox>
      <mat-checkbox class="example-margin" [disabled]="true">Disabled</mat-checkbox>
    </section>


    <section>
      <div class="example-label">Basic</div>
      <div class="example-button-row">
        <button mat-button>Basic</button>
        <button mat-button color="primary">Primary</button>
        <button mat-button color="accent">Accent</button>
        <button mat-button color="warn">Warn</button>
        <button mat-button disabled>Disabled</button>
        <a mat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Raised</div>
      <div class="example-button-row">
        <button mat-raised-button>Basic</button>
        <button mat-raised-button color="primary">Primary</button>
        <button mat-raised-button color="accent">Accent</button>
        <button mat-raised-button color="warn">Warn</button>
        <button mat-raised-button disabled>Disabled</button>
        <a mat-raised-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Stroked</div>
      <div class="example-button-row">
        <button mat-stroked-button>Basic</button>
        <button mat-stroked-button color="primary">Primary</button>
        <button mat-stroked-button color="accent">Accent</button>
        <button mat-stroked-button color="warn">Warn</button>
        <button mat-stroked-button disabled>Disabled</button>
        <a mat-stroked-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Flat</div>
      <div class="example-button-row">
        <button mat-flat-button>Basic</button>
        <button mat-flat-button color="primary">Primary</button>
        <button mat-flat-button color="accent">Accent</button>
        <button mat-flat-button color="warn">Warn</button>
        <button mat-flat-button disabled>Disabled</button>
        <a mat-flat-button href="https://www.google.com/" target="_blank">Link</a>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Icon</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <button mat-icon-button aria-label="Example icon button with a vertical three dot icon">
            <mat-icon>more_vert</mat-icon>
          </button>
          <button mat-icon-button color="primary" aria-label="Example icon button with a home icon">
            <mat-icon>home</mat-icon>
          </button>
          <button mat-icon-button color="accent" aria-label="Example icon button with a menu icon">
            <mat-icon>menu</mat-icon>
          </button>
          <button mat-icon-button color="warn" aria-label="Example icon button with a heart icon">
            <mat-icon>favorite</mat-icon>
          </button>
          <button mat-icon-button disabled aria-label="Example icon button with a open in new tab icon">
            <mat-icon>open_in_new</mat-icon>
          </button>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
              <mat-icon>delete</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
              <mat-icon>bookmark</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab color="warn" aria-label="Example icon button with a home icon">
              <mat-icon>home</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-fab disabled aria-label="Example icon button with a heart icon">
              <mat-icon>favorite</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>
    <mat-divider></mat-divider>
    <section>
      <div class="example-label">Mini FAB</div>
      <div class="example-button-row">
        <div class="example-flex-container">
          <div class="example-button-container">
            <button mat-mini-fab color="primary" aria-label="Example icon button with a menu icon">
              <mat-icon>menu</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab color="accent" aria-label="Example icon button with a plus one icon">
              <mat-icon>plus_one</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">
              <mat-icon>filter_list</mat-icon>
            </button>
          </div>
          <div class="example-button-container">
            <button mat-mini-fab disabled aria-label="Example icon button with a home icon">
              <mat-icon>home</mat-icon>
            </button>
          </div>
        </div>
      </div>
    </section>

    <router-outlet/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-material-custom-theme';
  selectTheme = 'light-theme';

  constructor(private renderer: Renderer2) {
  }


  onToggleTheme(theme: string = 'light') {
    if (theme === 'light') {
      this.renderer.removeClass(document.body, 'dark-theme');
    } else {
      this.renderer.removeClass(document.body, 'light-theme');
    }

    this.renderer.addClass(document.body, `${theme}-theme`);
  }
}
