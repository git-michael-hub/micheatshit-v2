import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlossaryComponent } from './feature/angular/components/glossary/glossary.component';
import { AotComponent } from './feature/angular/concepts/aot/aot.component';
import { AttributeDirectiveComponent } from './feature/angular/concepts/attribute-directive/attribute-directive.component';
import { CaseTypesComponent } from './feature/angular/concepts/case-types/case-types.component';
import { ChangeDetectionComponent } from './feature/angular/concepts/change-detection/change-detection.component';
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
import { RouterOutletComponent } from './feature/angular/concepts/router-outlet/router-outlet.component';
import { RouterComponent } from './feature/angular/concepts/router/router.component';
import { RoutingComponentComponent } from './feature/angular/concepts/routing-component/routing-component.component';
import { StructuralDirectiveComponent } from './feature/angular/concepts/structural-directive/structural-directive.component';
import { SubscriberComponent } from './feature/angular/concepts/subscriber/subscriber.component';
import { TemplateFormComponent } from './feature/angular/concepts/template-form/template-form.component';
import { TemplateComponent } from './feature/angular/concepts/template/template.component';
import { GlossaryPageComponent } from './feature/angular/pages/glossary-page/glossary-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular',
    pathMatch: 'full'
  },
  {
    path: 'angular',
    component: GlossaryPageComponent,
    children: [
      {
        path: 'aot',
        component: AotComponent
      },
      {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
      },
      {
        path: 'case-types',
        component: CaseTypesComponent
      },
      {
        path: 'change-detection',
        component: ChangeDetectionComponent
      },
      {
        path: 'di',
        component: DependencyInjectionComponent
      },
      {
        path: 'directive',
        component: DirectiveComponent
      },
      {
        path: 'dynamic-component-loading',
        component: DynamicComponentLoadingComponent
      },
      {
        path: 'form-control',
        component: FormControlComponent
      },
      {
        path: 'form-model',
        component: FormModelComponent
      },
      {
        path: 'form-validation',
        component: FormValidationComponent
      },
      {
        path: 'lazy-loading',
        component: LazyLoadingComponent
      },
      {
        path: 'hooks',
        component: LifecycleHookComponent
      },
      {
        path: 'observable',
        component: ObservableComponent
      },
      {
        path: 'pipe',
        component: PipeComponent
      },
      {
        path: 'reactive-form',
        component: ReactiveFormComponent
      },
      {
        path: 'resolver',
        component: ResolverComponent
      },
      {
        path: 'route-guard',
        component: RouteGuardComponent
      },
      {
        path: 'router',
        component: RouterComponent
      },
      {
        path: 'router-outlet',
        component: RouterOutletComponent
      },
      {
        path: 'routing-component',
        component: RoutingComponentComponent
      },
      {
        path: 'structural-directive',
        component: StructuralDirectiveComponent
      },
      {
        path: 'subscriber',
        component: SubscriberComponent
      },
      {
        path: 'template',
        component: TemplateComponent
      },
      {
        path: 'template-form',
        component: TemplateFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
