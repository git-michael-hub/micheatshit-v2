import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstLetterColorDirective } from './utils/directives/first-letter-color.directive';
import { NavbarComponent } from './core/navbar/navbar.component';
import { GlossaryComponent } from './feature/angular/components/glossary/glossary.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { ObjToArrPipe } from './utils/pipes/obj-to-arr.pipe';
import { BypassStringIndexPipe } from './utils/pipes/bypass-string-index.pipe';
import { GlossaryPageComponent } from './feature/angular/pages/glossary-page/glossary-page.component';
import { BoxWidgetDirective } from './utils/directives/box-widget.directive';
import { AotComponent } from './feature/angular/concepts/aot/aot.component';
import { ApfComponent } from './feature/angular/concepts/apf/apf.component';
import { AnnotationComponent } from './feature/angular/concepts/annotation/annotation.component';
import { AppShellComponent } from './feature/angular/concepts/app-shell/app-shell.component';
import { ArchitectComponent } from './feature/angular/concepts/architect/architect.component';
import { AttributeDirectiveComponent } from './feature/angular/concepts/attribute-directive/attribute-directive.component';
import { BindingComponent } from './feature/angular/concepts/binding/binding.component';
import { BootstrapComponent } from './feature/angular/concepts/bootstrap/bootstrap.component';
import { BuilderComponent } from './feature/angular/concepts/builder/builder.component';
import { CaseTypesComponent } from './feature/angular/concepts/case-types/case-types.component';
import { ChangeDetectionComponent } from './feature/angular/concepts/change-detection/change-detection.component';
import { HighlightModule, HighlightOptions, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { CopyDirective } from './utils/directives/copy.directive';
import { DependencyInjectionComponent } from './feature/angular/concepts/dependency-injection/dependency-injection.component';
import { DirectiveComponent } from './feature/angular/concepts/directive/directive.component';
import { DynamicComponentLoadingComponent } from './feature/angular/concepts/dynamic-component-loading/dynamic-component-loading.component';
import { FormControlComponent } from './feature/angular/concepts/form-control/form-control.component';
import { FormModelComponent } from './feature/angular/concepts/form-model/form-model.component';
import { FormValidationComponent } from './feature/angular/concepts/form-validation/form-validation.component';
import { LazyLoadingComponent } from './feature/angular/concepts/lazy-loading/lazy-loading.component';
import { LifecycleHookComponent } from './feature/angular/concepts/lifecycle-hook/lifecycle-hook.component';
import { ObservableComponent } from './feature/angular/concepts/observable/observable.component';
import { PipeComponent } from './feature/angular/concepts/pipe/pipe.component';
import { ReactiveFormComponent } from './feature/angular/concepts/reactive-form/reactive-form.component';
import { ResolverComponent } from './feature/angular/concepts/resolver/resolver.component';
import { RouteGuardComponent } from './feature/angular/concepts/route-guard/route-guard.component';
import { RouterComponent } from './feature/angular/concepts/router/router.component';
import { RouterOutletComponent } from './feature/angular/concepts/router-outlet/router-outlet.component';
import { RoutingComponentComponent } from './feature/angular/concepts/routing-component/routing-component.component';
import { StructuralDirectiveComponent } from './feature/angular/concepts/structural-directive/structural-directive.component';
import { SubscriberComponent } from './feature/angular/concepts/subscriber/subscriber.component';
import { TemplateComponent } from './feature/angular/concepts/template/template.component';
import { TemplateFormComponent } from './feature/angular/concepts/template-form/template-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLetterColorDirective,
    NavbarComponent,
    GlossaryComponent,
    SidebarComponent,
    ObjToArrPipe,
    BypassStringIndexPipe,
    GlossaryPageComponent,
    BoxWidgetDirective,
    AotComponent,
    ApfComponent,
    AnnotationComponent,
    AppShellComponent,
    ArchitectComponent,
    AttributeDirectiveComponent,
    BindingComponent,
    BootstrapComponent,
    BuilderComponent,
    CaseTypesComponent,
    ChangeDetectionComponent,
    CopyDirective,
    DependencyInjectionComponent,
    DirectiveComponent,
    DynamicComponentLoadingComponent,
    FormControlComponent,
    FormModelComponent,
    FormValidationComponent,
    LazyLoadingComponent,
    LifecycleHookComponent,
    ObservableComponent,
    PipeComponent,
    ReactiveFormComponent,
    ResolverComponent,
    RouteGuardComponent,
    RouterComponent,
    RouterOutletComponent,
    RoutingComponentComponent,
    StructuralDirectiveComponent,
    SubscriberComponent,
    TemplateComponent,
    TemplateFormComponent,
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    AppRoutingModule,
    HighlightModule,
    HighlightPlusModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
