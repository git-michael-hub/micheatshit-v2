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
import { AngularElementComponent } from './feature/angular/concepts/angular-element/angular-element.component';
import { AfterNextRenderComponent } from './feature/angular/concepts/after-next-render/after-next-render.component';
import { AfterRenderComponent } from './feature/angular/concepts/after-render/after-render.component';
import { AngularDevToolsComponent } from './feature/angular/concepts/angular-devtools/angular-devtools.component';
import { AnnotationComponent } from './feature/angular/concepts/annotation/annotation.component';
import { AppShellComponent } from './feature/angular/concepts/app-shell/app-shell.component';
import { ArchitectComponent } from './feature/angular/concepts/architect/architect.component';
import { BindingComponent } from './feature/angular/concepts/binding/binding.component';
import { BootstrapComponent } from './feature/angular/concepts/bootstrap/bootstrap.component';
import { ControlFlowComponent } from './feature/angular/concepts/control-flow/control-flow.component';
import { BuilderComponent } from './feature/angular/concepts/builder/builder.component';
import { CustomElementComponent } from './feature/angular/concepts/custom-element/custom-element.component';
import { DeferrableViewsComponent } from './feature/angular/concepts/deferrable-views/deferrable-views.component';
import { HydrationComponent } from './feature/angular/concepts/hydration/hydration.component';
import { InputTransformComponent } from './feature/angular/concepts/input-transform/input-transform.component';
import { PartialHydrationComponent } from './feature/angular/concepts/partial-hydration/partial-hydration.component';
import { SignalComponentsComponent } from './feature/angular/concepts/signal-components/signal-components.component';
import { SsrComponent } from './feature/angular/concepts/ssr/ssr.component';
import { StyleUrlComponent } from './feature/angular/concepts/style-url/style-url.component';
import { ZonelessApplicationsComponent } from './feature/angular/concepts/zoneless-applications/zoneless-applications.component';
import { ClassDecoratorComponent } from './feature/angular/concepts/class-decorator/class-decorator.component';
import { SignalsComponent } from './feature/angular/concepts/signals/signals.component';
import { ViewTransitionsComponent } from './feature/angular/concepts/view-transitions/view-transitions.component';
import { UniversalComponent } from './feature/angular/concepts/universal/universal.component';
import { ViewHierarchyComponent } from './feature/angular/concepts/view-hierarchy/view-hierarchy.component';
import { StandaloneComponent } from './feature/angular/concepts/standalone/standalone.component';
import { ContentProjectionComponent } from './feature/angular/concepts/content-projection/content-projection.component';
import { ClassFieldDecoratorComponent } from './feature/angular/concepts/class-field-decorator/class-field-decorator.component';
import { CollectionComponent } from './feature/angular/concepts/collection/collection.component';
import { CliComponent } from './feature/angular/concepts/cli/cli.component';
import { ComponentComponent } from './feature/angular/concepts/component/component.component';
import { ConfigurationComponent } from './feature/angular/concepts/configuration/configuration.component';

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
        path: 'after-next-render',
        component: AfterNextRenderComponent
      },
      {
        path: 'after-render',
        component: AfterRenderComponent
      },
      {
        path: 'angular-element',
        component: AngularElementComponent
      },
      {
        path: 'annotation',
        component: AnnotationComponent
      },
      {
        path: 'app-shell',
        component: AppShellComponent
      },
      {
        path: 'architect',
        component: ArchitectComponent
      },
      {
        path: 'attribute-directive',
        component: AttributeDirectiveComponent
      },
      {
        path: 'binding',
        component: BindingComponent
      },
      {
        path: 'bootstrap',
        component: BootstrapComponent
      },
      {
        path: 'builder',
        component: BuilderComponent
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
        path: 'deferrable-views',
        component: DeferrableViewsComponent
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
        path: 'hydration',
        component: HydrationComponent
      },
      {
        path: 'input-transform',
        component: InputTransformComponent
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
        path: 'partial-hydration',
        component: PartialHydrationComponent
      },
      {
        path: 'signal-components',
        component: SignalComponentsComponent
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
        path: 'ssr',
        component: SsrComponent
      },
      {
        path: 'style-url',
        component: StyleUrlComponent
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
      },
      {
        path: 'angular-devtools',
        component: AngularDevToolsComponent
      },
      {
        path: 'control-flow',
        component: ControlFlowComponent,
      },
      {
        path: 'zoneless-applications',
        component: ZonelessApplicationsComponent
      },
      {
        path: 'class-decorator',
        component: ClassDecoratorComponent
      },
      {
        path: 'signals',
        component: SignalsComponent
      },
      {
        path: 'view-transitions',
        component: ViewTransitionsComponent
      },
      {
        path: 'universal',
        component: UniversalComponent,
      },
      {
        path: 'view-hierarchy',
        component: ViewHierarchyComponent,
      },
      {
        path: 'standalone',
        component: StandaloneComponent,
      },
      {
        path: 'content-projection',
        component: ContentProjectionComponent,
      },
      {
        path: 'custom-element',
        component: CustomElementComponent,
      },
      {
        path: 'class-field-decorator',
        component: ClassFieldDecoratorComponent
      },
      {
        path: 'collection',
        component: CollectionComponent
      },
      {
        path: 'cli',
        component: CliComponent
      },
      {
        path: 'component',
        component: ComponentComponent
      },
      {
        path: 'configuration',
        component: ConfigurationComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
