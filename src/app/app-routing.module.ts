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
import { EagerLoadingComponent } from './feature/angular/concepts/eager-loading/eager-loading.component';
import { EcmascriptComponent } from './feature/angular/concepts/ecmascript/ecmascript.component';
import { ElementComponent } from './feature/angular/concepts/element/element.component';
import { FormControlComponent } from './feature/angular/concepts/form-control/form-control.component';
import { FormModelComponent } from './feature/angular/concepts/form-model/form-model.component';
import { FormValidationComponent } from './feature/angular/concepts/form-validation/form-validation.component';
import { ImmutabilityComponent } from './feature/angular/concepts/immutability/immutability.component';
import { InjectableComponent } from './feature/angular/concepts/injectable/injectable.component';
import { InjectorComponent } from './feature/angular/concepts/injector/injector.component';
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
import { TemplateExpressionComponent } from './feature/angular/concepts/template-expression/template-expression.component';
import { TemplateReferenceVariableComponent } from './feature/angular/concepts/template-reference-variable/template-reference-variable.component';
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
import { DataBindingComponent } from './feature/angular/concepts/data-binding/data-binding.component';
import { DeclarableComponent } from './feature/angular/concepts/declarable/declarable.component';
import { DecoratorComponent } from './feature/angular/concepts/decorator/decorator.component';
import { DiTokenComponent } from './feature/angular/concepts/di-token/di-token.component';
import { DslComponent } from './feature/angular/concepts/dsl/dsl.component';
import { EntryPointComponent } from './feature/angular/concepts/entry-point/entry-point.component';
import { InterpolationComponent } from './feature/angular/concepts/interpolation/interpolation.component';
import { IvyComponent } from './feature/angular/concepts/ivy/ivy.component';
import { JavascriptComponent } from './feature/angular/concepts/javascript/javascript.component';
import { JitComponent } from './feature/angular/concepts/jit/jit.component';
import { LibraryComponent } from './feature/angular/concepts/library/library.component';
import { ModuleComponent } from './feature/angular/concepts/module/module.component';
import { InputComponent } from './feature/angular/concepts/input/input.component';
import { NgccComponent } from './feature/angular/concepts/ngcc/ngcc.component';
import { NpmPackageComponent } from './feature/angular/concepts/npm-package/npm-package.component';
import { NgcComponent } from './feature/angular/concepts/ngc/ngc.component';
import { RuleComponent } from './feature/angular/concepts/rule/rule.component';
import { SchematicComponent } from './feature/angular/concepts/schematic/schematic.component';
import { SchematicsCliComponent } from './feature/angular/concepts/schematics-cli/schematics-cli.component';
import { ScopedPackageComponent } from './feature/angular/concepts/scoped-package/scoped-package.component';
import { ServiceComponent } from './feature/angular/concepts/service/service.component';
import { TargetComponent } from './feature/angular/concepts/target/target.component';
import { UnidirectionalDataFlowComponent } from './feature/angular/concepts/unidirectional-data-flow/unidirectional-data-flow.component';
import { ViewComponent } from './feature/angular/concepts/view/view.component';
import { ViewEngineComponent } from './feature/angular/concepts/view-engine/view-engine.component';
import { WebComponentComponent } from './feature/angular/concepts/web-component/web-component.component';
import { WorkspaceComponent } from './feature/angular/concepts/workspace/workspace.component';
import { WorkspaceConfigurationComponent } from './feature/angular/concepts/workspace-configuration/workspace-configuration.component';
import { ZoneComponent } from './feature/angular/concepts/zone/zone.component';
import { RxjsGlossaryComponent } from './feature/rxjs/components/glossary/glossary.component';
import { RxjsGlossaryPageComponent } from './feature/rxjs/pages/glossary-page/glossary-page.component';
import { NgGlossaryPageComponent } from './feature/angular/pages/glossary-page/glossary-page.component';


const angular_children: any[] = [
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
    path: 'data-binding',
    component: DataBindingComponent
  },
  {
    path: 'declarable',
    component: DeclarableComponent
  },
  {
    path: 'decorator',
    component: DecoratorComponent
  },
  {
    path: 'di',
    component: DependencyInjectionComponent
  },
  {
    path: 'di-token',
    component: DiTokenComponent
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
    path: 'eager-loading',
    component: EagerLoadingComponent
  },
  {
    path: 'ecmascript',
    component: EcmascriptComponent
  },
  {
    path: 'element',
    component: ElementComponent
  },
  {
    path: 'entry-point',
    component: EntryPointComponent
  },
  {
    path: 'angular-devtools',
    component: AngularDevToolsComponent
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
    path: 'immutability',
    component: ImmutabilityComponent
  },
  {
    path: 'injectable',
    component: InjectableComponent
  },
  {
    path: 'injector',
    component: InjectorComponent
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
    path: 'library',
    component: LibraryComponent
  },
  {
    path: 'lifecycle-hook',
    component: LifecycleHookComponent
  },
  {
    path: 'module',
    component: ModuleComponent
  },
  {
    path: 'observable',
    component: ObservableComponent
  },
  {
    path: 'observer',
    loadChildren: () => import('./feature/angular/concepts/observer/observer.module').then(m => m.ObserverModule)
  },
  {
    path: 'output',
    loadChildren: () => import('./feature/angular/concepts/output/output.module').then(m => m.OutputModule)
  },
  {
    path: 'partial-hydration',
    loadChildren: () => import('./feature/angular/concepts/partial-hydration/partial-hydration.module').then(m => m.PartialHydrationModule)
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'platform',
    loadChildren: () => import('./feature/angular/concepts/platform/platform.module').then(m => m.PlatformModule)
  },
  {
    path: 'polyfill',
    loadChildren: () => import('./feature/angular/concepts/polyfill/polyfill.module').then(m => m.PolyfillModule)
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
    path: 'rule',
    component: RuleComponent
  },
  {
    path: 'schematic',
    component: SchematicComponent
  },
  {
    path: 'schematics-cli',
    component: SchematicsCliComponent
  },
  {
    path: 'scoped-package',
    component: ScopedPackageComponent
  },
  {
    path: 'signals',
    component: SignalsComponent
  },
  {
    path: 'signal-components',
    component: SignalComponentsComponent
  },
  {
    path: 'ssr',
    component: SsrComponent
  },
  {
    path: 'standalone',
    component: StandaloneComponent
  },
  {
    path: 'structural-directive',
    component: StructuralDirectiveComponent
  },
  {
    path: 'style-url',
    component: StyleUrlComponent
  },
  {
    path: 'target',
    component: TargetComponent
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
    path: 'template-expression',
    component: TemplateExpressionComponent
  },
  {
    path: 'template-form',
    component: TemplateFormComponent
  },
  {
    path: 'template-input-variable',
    loadChildren: () => import('./feature/angular/concepts/template-input-variable/template-input-variable.module').then(m => m.TemplateInputVariableModule)
  },
  {
    path: 'template-reference-variable',
    loadChildren: () => import('./feature/angular/concepts/template-reference-variable/template-reference-variable.module').then(m => m.TemplateReferenceVariableModule)
  },
  {
    path: 'tree',
    loadChildren: () => import('./feature/angular/concepts/tree/tree.module').then(m => m.TreeModule)
  },
  {
    path: 'typescript',
    loadChildren: () => import('./feature/angular/concepts/typescript/typescript.module').then(m => m.TypescriptModule)
  },
  {
    path: 'universal',
    component: UniversalComponent
  },
  {
    path: 'view-hierarchy',
    component: ViewHierarchyComponent
  },
  {
    path: 'view-transitions',
    component: ViewTransitionsComponent
  },
  {
    path: 'web-component',
    component: WebComponentComponent
  },
  {
    path: 'workspace',
    component: WorkspaceComponent
  },
  {
    path: 'workspace-configuration',
    component: WorkspaceConfigurationComponent
  },
  {
    path: 'zoneless-applications',
    component: ZonelessApplicationsComponent
  },
  {
    path: 'component',
    component: ComponentComponent
  },
  {
    path: 'configuration',
    component: ConfigurationComponent
  },
  {
    path: 'content-projection',
    component: ContentProjectionComponent
  },
  {
    path: 'control-flow',
    component: ControlFlowComponent
  },
  {
    path: 'class-decorator',
    component: ClassDecoratorComponent
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
    path: 'custom-element',
    component: CustomElementComponent
  },
  {
    path: 'dsl',
    component: DslComponent
  },
  {
    path: 'input',
    component: InputComponent
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'ivy',
    component: IvyComponent
  },
  {
    path: 'javascript',
    component: JavascriptComponent
  },
  {
    path: 'jit',
    component: JitComponent
  },
  {
    path: 'hooks',
    component: LifecycleHookComponent
  },
  {
    path: 'ngcc',
    component: NgccComponent
  },
  {
    path: 'ngmodule',
    component: ModuleComponent
  },
  {
    path: 'npm-package',
    component: NpmPackageComponent
  },
  {
    path: 'ngc',
    component: NgcComponent
  },
  {
    path: 'project',
    loadChildren: () => import('./feature/angular/concepts/project/project.module').then(m => m.ProjectModule)
  },
  {
    path: 'provider',
    loadChildren: () => import('./feature/angular/concepts/provider/provider.module').then(m => m.ProviderModule)
  },
  {
    path: 'service',
    loadChildren: () => import('./feature/angular/concepts/service/service.module').then(m => m.ServiceModule)
  },
  {
    path: 'token',
    loadChildren: () => import('./feature/angular/concepts/token/token.module').then(m => m.TokenModule)
  },
  {
    path: 'transpile',
    loadChildren: () => import('./feature/angular/concepts/transpile/transpile.module').then(m => m.TranspileModule)
  },
  {
    path: 'tsconfig',
    loadChildren: () => import('./feature/angular/concepts/tsconfig.module').then(m => m.TsconfigModule)
  },
  {
    path: 'typescript-configuration',
    loadChildren: () => import('./feature/angular/concepts/tsconfig.module').then(m => m.TsconfigModule)
  },
  {
    path: 'unidirectional-data-flow',
    component: UnidirectionalDataFlowComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'view-engine',
    component: ViewEngineComponent
  },
  {
    path: 'zone',
    component: ZoneComponent
  },
  {
    path: '',
    redirectTo: 'aot',
    pathMatch: 'full'
  }
];

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular19',
    pathMatch: 'full'
  },
  {
    path: 'angular',
    component: NgGlossaryPageComponent,
    children: [...angular_children]
  },
  {
    path: 'angular19',
    component: NgGlossaryPageComponent,
    children: [...angular_children]
  },
  {
    path: 'rxjs',
    component: RxjsGlossaryPageComponent,
    children: [
      {
        path: '',
        component: AotComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
