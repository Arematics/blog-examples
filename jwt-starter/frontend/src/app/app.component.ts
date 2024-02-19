import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NullValidationHandler, OAuthService} from "angular-oauth2-oidc";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
  message: string | undefined;

  constructor(private oauthService: OAuthService, private http: HttpClient) {
    this.oauthService.configure({
      issuer: 'http://localhost:9000',
      redirectUri: 'http://localhost:4200',
      responseType: 'code',
      disableAtHashCheck: true,
      scope: 'openid profile',
      useSilentRefresh: false,
      showDebugInformation: true,
      clientId: 'public-client',
      requireHttps: false
    })
    this.oauthService.tokenValidationHandler = new NullValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndLogin().then(r => {
      this.http.get('http://localhost:9001/data', {responseType: 'json'}).subscribe((res: any) => {
        this.message = res.secret
      })
    });
  }
}
