import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ToastContainerComponent } from './shared/components/toast-container/toast-container.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, ToastContainerComponent, RouterLink, TranslateModule],
    template: `
    <div class="min-h-screen flex flex-col font-sans text-slate-900 relative overflow-hidden">
      <!-- Modern Background with subtle gradient and pattern -->
      <div class="fixed inset-0 -z-10">
        <!-- Base gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/40"></div>
        
        <!-- Subtle geometric pattern -->
        <div class="absolute inset-0 opacity-[0.03]" style="background-image: radial-gradient(circle at 1px 1px, rgb(71, 85, 105) 1px, transparent 0); background-size: 40px 40px;"></div>
        
        <!-- Floating gradient orbs for depth -->
        <div class="absolute top-0 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-br from-indigo-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      <header class="bg-white/80 border-b border-slate-200/50 sticky top-0 z-40 backdrop-blur-md shadow-sm">
        <div class="container mx-auto px-4 h-16 flex items-center justify-between">
          <div class="flex items-center gap-2 cursor-pointer" routerLink="/">
             <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">3D</div>
             <span class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">PrintShop</span>
          </div>
          
          <nav class="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a routerLink="/" class="hover:text-blue-600 transition-colors">{{ 'NAV.HOME' | translate }}</a>
            <a routerLink="/catalog" class="hover:text-blue-600 transition-colors">{{ 'NAV.CATALOG' | translate }}</a>
            <a routerLink="/contact" class="hover:text-blue-600 transition-colors">{{ 'NAV.CONTACT' | translate }}</a>
            <a routerLink="/cart" class="hover:text-blue-600 transition-colors">{{ 'NAV.CART' | translate }}</a>
          </nav>

          <div class="flex items-center gap-4">
            <!-- Language Switcher -->
            <div class="flex items-center bg-slate-100 rounded-lg p-1">
                <button (click)="switchLanguage('en')" 
                        class="px-2 py-1 text-xs font-bold rounded transition-colors"
                        [class.bg-white]="currentLang === 'en'"
                        [class.text-blue-600]="currentLang === 'en'"
                        [class.shadow-sm]="currentLang === 'en'"
                        [class.text-slate-500]="currentLang !== 'en'">EN</button>
                <button (click)="switchLanguage('es')" 
                        class="px-2 py-1 text-xs font-bold rounded transition-colors"
                        [class.bg-white]="currentLang === 'es'"
                        [class.text-blue-600]="currentLang === 'es'"
                        [class.shadow-sm]="currentLang === 'es'"
                        [class.text-slate-500]="currentLang !== 'es'">ES</button>
            </div>

            <a routerLink="/user/login" class="text-sm font-medium text-slate-600 hover:text-blue-600">{{ 'NAV.LOGIN' | translate }}</a>
            <a routerLink="/cart" class="relative p-2 text-slate-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </a>
          </div>
        </div>
      </header>
      
      <main class="flex-grow container mx-auto px-4 py-8">
        <router-outlet></router-outlet>
      </main>
      
      <footer class="bg-slate-900 text-slate-300 py-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-white font-bold text-lg mb-4">PrintShop</h3>
              <p class="text-sm text-slate-400">{{ 'FOOTER.DESCRIPTION' | translate }}</p>
            </div>
            <div>
              <h4 class="text-white font-medium mb-4">{{ 'FOOTER.SHOP' | translate }}</h4>
              <ul class="space-y-2 text-sm">
                <li><a href="#" class="hover:text-white">{{ 'FOOTER.FDM' | translate }}</a></li>
                <li><a href="#" class="hover:text-white">{{ 'FOOTER.SLA' | translate }}</a></li>
                <li><a href="#" class="hover:text-white">{{ 'FOOTER.FILAMENTS' | translate }}</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-medium mb-4">{{ 'FOOTER.SUPPORT' | translate }}</h4>
              <ul class="space-y-2 text-sm">
                <li><a routerLink="/contact" class="hover:text-white">{{ 'FOOTER.CONTACT' | translate }}</a></li>
                <li><a href="#" class="hover:text-white">{{ 'FOOTER.SHIPPING_POLICY' | translate }}</a></li>
                <li><a href="#" class="hover:text-white">{{ 'FOOTER.WARRANTY' | translate }}</a></li>
              </ul>
            </div>
            <div>
              <h4 class="text-white font-medium mb-4">{{ 'FOOTER.NEWSLETTER' | translate }}</h4>
              <input type="email" [placeholder]="'FOOTER.EMAIL_PLACEHOLDER' | translate" class="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500">
            </div>
          </div>
          <div class="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-slate-500">
            &copy; 2026 JP 3D Printer Shop. {{ 'FOOTER.RIGHTS' | translate }}
          </div>
        </div>
      </footer>
      
      <app-toast-container></app-toast-container>
    </div>
  `
})
export class AppComponent {
    private translate = inject(TranslateService);
    currentLang = 'en';

    constructor() {
        this.translate.addLangs(['en', 'es']);
        this.translate.setDefaultLang('en');

        const browserLang = this.translate.getBrowserLang();
        this.currentLang = browserLang?.match(/en|es/) ? browserLang : 'en';
        this.translate.use(this.currentLang);
    }

    switchLanguage(lang: string) {
        this.translate.use(lang);
        this.currentLang = lang;
    }
}