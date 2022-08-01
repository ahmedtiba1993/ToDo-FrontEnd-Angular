/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { SimpleEmailExampleControllerService } from './services/simple-email-example-controller.service';
import { AuthenticationControllerService } from './services/authentication-controller.service';
import { GroupeTodoControllerService } from './services/groupe-todo-controller.service';
import { StatistiqueControllerService } from './services/statistique-controller.service';
import { TodoControllerService } from './services/todo-controller.service';
import { UtilisateurControllerService } from './services/utilisateur-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    BasicErrorControllerService,
    SimpleEmailExampleControllerService,
    AuthenticationControllerService,
    GroupeTodoControllerService,
    StatistiqueControllerService,
    TodoControllerService,
    UtilisateurControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
