import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../environments/environment';
import { ToastService } from '../../core/services/toast.service';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, TranslateModule, ReactiveFormsModule],
    template: `
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-slate-900 mb-4">{{ 'CONTACT.TITLE' | translate }}</h1>
        <p class="text-lg text-slate-600 max-w-2xl mx-auto">{{ 'CONTACT.SUBTITLE' | translate }}</p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
            <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ 'CONTACT.INFO_TITLE' | translate }}</h2>
            
            <!-- Address -->
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-1">{{ 'CONTACT.ADDRESS' | translate }}</h3>
                <p class="text-slate-600">Av. de la Pau, 61</p>
                <p class="text-slate-600">46190 Riba-roja de Túria, Valencia</p>
                <p class="text-slate-600">España</p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-1">{{ 'CONTACT.PHONE' | translate }}</h3>
                <p class="text-slate-600">+34 961 234 567</p>
                <p class="text-slate-600">+34 961 987 654</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-1">{{ 'CONTACT.EMAIL' | translate }}</h3>
                <p class="text-slate-600">info&#64;jp3dprintshop.com</p>
                <p class="text-slate-600">support&#64;jp3dprintshop.com</p>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-slate-900 mb-1">{{ 'CONTACT.HOURS' | translate }}</h3>
                <p class="text-slate-600">{{ 'CONTACT.WEEKDAYS' | translate }}: 9:00 AM - 6:00 PM</p>
                <p class="text-slate-600">{{ 'CONTACT.WEEKEND' | translate }}: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl shadow-lg p-8 text-white">
            <h2 class="text-2xl font-bold mb-4">{{ 'CONTACT.SOCIAL_TITLE' | translate }}</h2>
            <p class="mb-6 opacity-90">{{ 'CONTACT.SOCIAL_SUBTITLE' | translate }}</p>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a href="#" class="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors backdrop-blur-sm">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h2 class="text-2xl font-bold text-slate-900 mb-6">{{ 'CONTACT.FORM_TITLE' | translate }}</h2>
          
          @if (submitted) {
            <div class="bg-green-50 border border-green-200 rounded-xl p-6 mb-6">
              <div class="flex items-start gap-3">
                <svg class="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 class="font-semibold text-green-900">{{ 'CONTACT.SUCCESS_TITLE' | translate }}</h3>
                  <p class="text-green-700 text-sm mt-1">{{ 'CONTACT.SUCCESS_MESSAGE' | translate }}</p>
                </div>
              </div>
            </div>
          }
          
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
            <!-- Name -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">{{ 'CONTACT.NAME' | translate }} *</label>
              <input 
                type="text" 
                formControlName="name"
                class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                [class.border-red-300]="contactForm.get('name')?.invalid && contactForm.get('name')?.touched"
                [class.border-slate-300]="!contactForm.get('name')?.invalid || !contactForm.get('name')?.touched"
                [placeholder]="'CONTACT.NAME_PLACEHOLDER' | translate">
              @if (contactForm.get('name')?.invalid && contactForm.get('name')?.touched) {
                <p class="text-red-600 text-sm mt-1">{{ 'CONTACT.NAME_REQUIRED' | translate }}</p>
              }
            </div>

            <!-- Email -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">{{ 'CONTACT.EMAIL' | translate }} *</label>
              <input 
                type="email" 
                formControlName="email"
                class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                [class.border-red-300]="contactForm.get('email')?.invalid && contactForm.get('email')?.touched"
                [class.border-slate-300]="!contactForm.get('email')?.invalid || !contactForm.get('email')?.touched"
                [placeholder]="'CONTACT.EMAIL_PLACEHOLDER' | translate">
              @if (contactForm.get('email')?.invalid && contactForm.get('email')?.touched) {
                <p class="text-red-600 text-sm mt-1">{{ 'CONTACT.EMAIL_INVALID' | translate }}</p>
              }
            </div>

            <!-- Subject -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">{{ 'CONTACT.SUBJECT' | translate }} *</label>
              <input 
                type="text" 
                formControlName="subject"
                class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                [class.border-red-300]="contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched"
                [class.border-slate-300]="!contactForm.get('subject')?.invalid || !contactForm.get('subject')?.touched"
                [placeholder]="'CONTACT.SUBJECT_PLACEHOLDER' | translate">
              @if (contactForm.get('subject')?.invalid && contactForm.get('subject')?.touched) {
                <p class="text-red-600 text-sm mt-1">{{ 'CONTACT.SUBJECT_REQUIRED' | translate }}</p>
              }
            </div>

            <!-- Message -->
            <div>
              <label class="block text-sm font-medium text-slate-700 mb-2">{{ 'CONTACT.MESSAGE' | translate }} *</label>
              <textarea 
                rows="5" 
                formControlName="message"
                class="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                [class.border-red-300]="contactForm.get('message')?.invalid && contactForm.get('message')?.touched"
                [class.border-slate-300]="!contactForm.get('message')?.invalid || !contactForm.get('message')?.touched"
                [placeholder]="'CONTACT.MESSAGE_PLACEHOLDER' | translate"></textarea>
              @if (contactForm.get('message')?.invalid && contactForm.get('message')?.touched) {
                <p class="text-red-600 text-sm mt-1">{{ 'CONTACT.MESSAGE_REQUIRED' | translate }}</p>
              }
            </div>

            <!-- Submit Button -->
            <button 
              type="submit" 
              [disabled]="submitting || contactForm.invalid"
              class="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:from-blue-700 enabled:hover:to-indigo-700 enabled:hover:shadow-xl enabled:hover:-translate-y-0.5 transform">
              @if (submitting) {
                <span class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ 'CONTACT.SENDING' | translate }}
                </span>
              } @else {
                {{ 'CONTACT.SEND' | translate }}
              }
            </button>
          </form>
        </div>
      </div>

      <!-- Map Section -->
      <div class="mt-12 bg-white rounded-2xl shadow-lg p-4 border border-slate-200">
        <div class="rounded-xl overflow-hidden h-96 w-full">
          <iframe
            src="https://www.google.com/maps?q=Av.+de+la+Pau+61,+46190+Riba-roja+de+T%C3%BAria,+Valencia,+España&output=embed"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div class="text-center mt-4">
          <p class="text-slate-500 font-medium">{{ 'CONTACT.MAP' | translate }}</p>
        </div>
      </div>
    </div>
  `
})
export default class ContactComponent implements OnInit {
  private translate = inject(TranslateService);
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);
  private toastService = inject(ToastService);

  contactForm!: FormGroup;
  submitting = false;
  submitted = false;

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const contactData = this.contactForm.value;

    this.http.post(`${environment.apiUrl}/contacts`, contactData).subscribe({
      next: () => {
        this.submitted = true;
        this.submitting = false;
        this.contactForm.reset();
        this.toastService.show(
          this.translate.instant('CONTACT.SUCCESS_MESSAGE'),
          'success'
        );
        
        // Reset submitted message after 5 seconds
        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      },
      error: (error) => {
        this.submitting = false;
        console.error('Error sending contact:', error);
        this.toastService.show(
          this.translate.instant('CONTACT.ERROR_MESSAGE'),
          'error'
        );
      }
    });
  }
}
