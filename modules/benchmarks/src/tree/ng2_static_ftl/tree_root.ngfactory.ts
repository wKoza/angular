/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */

import * as import10 from '@angular/common/src/directives/ng_if';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import5 from '@angular/core/src/di/injector';
import * as import9 from '@angular/core/src/linker/component_factory';
import * as import11 from '@angular/core/src/linker/template_ref';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/view_container';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import8 from '@angular/core/src/metadata/view';
import * as import0 from '@angular/core/src/render/api';

import {maxDepth} from '../util';

import {checkBinding} from './ftl_util';
import * as import3 from './tree';
import * as import12 from './tree';
import * as import13 from './tree_branch.ngfactory';

var renderType_TreeRootComponent_Host: import0.RenderComponentType =
    import4.createRenderComponentType('', 0, import8.ViewEncapsulation.None, [], {});
class _View_TreeRootComponent_Host0 extends import1.AppView<any> {
  _el_0: any;
  /*private*/ _appEl_0: import2.ViewContainer;
  _TreeRootComponent_0_4: import3.TreeRootComponent;
  _TreeRootComponent_0_4_View: any;
  constructor(
      viewUtils: import4.ViewUtils, parentView: import1.AppView<any>, parentIndex: number,
      parentElement: any) {
    super(
        _View_TreeRootComponent_Host0, renderType_TreeRootComponent_Host, import6.ViewType.HOST,
        viewUtils, parentView, parentIndex, parentElement,
        import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector: string): import9.ComponentRef<any> {
    this._el_0 = import4.selectOrCreateRenderHostElement(
        this.renderer, 'tree', import4.EMPTY_INLINE_ARRAY, rootSelector, (null as any));
    this._appEl_0 = new import2.ViewContainer(0, (null as any), this, this._el_0);
    this._TreeRootComponent_0_4_View =
        new _View_TreeRootComponent0(this.viewUtils, this, 0, this._el_0);
    this._TreeRootComponent_0_4 = new import3.TreeRootComponent();
    this._TreeRootComponent_0_4_View.create(this._TreeRootComponent_0_4, (null as any));
    this.init([].concat([this._el_0]), [this._el_0], []);
    return new import9.ComponentRef_(0, this, this._el_0, this._TreeRootComponent_0_4);
  }
  detectChangesInternal(): void {
    this._TreeRootComponent_0_4_View.detectChangesInternal(this.throwOnChange);
  }
  destroyInternal(): void { this._TreeRootComponent_0_4_View.destroyInternal(); }
  injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any {
    if (((token === import3.TreeRootComponent) && (0 === requestNodeIndex))) {
      return this._TreeRootComponent_0_4;
    }
    return notFoundResult;
  }
}
export const TreeRootComponentNgFactory: import9.ComponentFactory<import3.TreeRootComponent> =
    new import9.ComponentFactory<import3.TreeRootComponent>(
        'tree', _View_TreeRootComponent_Host0, import3.TreeRootComponent);
const styles_TreeRootComponent: any[] = [];
var renderType_TreeRootComponent: import0.RenderComponentType = import4.createRenderComponentType(
    '/Users/tbosch/projects/conf-demos/ngc-demo/src/ng2_static/root_tree.ts class TreeRootComponent - inline template',
    0, import8.ViewEncapsulation.None, styles_TreeRootComponent, {});
class _View_TreeRootComponent0 extends import1.AppView<import3.TreeRootComponent> {
  _anchor_0: any;
  /*private*/ _appEl_0: import2.ViewContainer;
  _TemplateRef_0_5: any;
  _NgIf_0_6: import10.NgIf;
  /*private*/ _expr_0: any;
  constructor(
      viewUtils: import4.ViewUtils, parentView: import1.AppView<any>, parentIndex: number,
      parentElement: any) {
    super(
        _View_TreeRootComponent0, renderType_TreeRootComponent, import6.ViewType.COMPONENT,
        viewUtils, parentView, parentIndex, parentElement,
        import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector: string): import9.ComponentRef<any> {
    const parentRenderNode: any = this.renderer.createViewRoot(this.parentElement);
    this._anchor_0 = this.renderer.createTemplateAnchor(parentRenderNode, (null as any));
    this._appEl_0 = new import2.ViewContainer(0, (null as any), this, this._anchor_0);
    this._TemplateRef_0_5 = new import11.TemplateRef_(this, 0, this._anchor_0);
    this._NgIf_0_6 = new import10.NgIf(this._appEl_0.vcRef, this._TemplateRef_0_5);
    this.init([], [this._anchor_0], []);
    return (null as any);
  }

  createEmbeddedViewInternal(nodeIndex: number): import1.AppView<any> {
    if (nodeIndex === 0) {
      return new _View_TreeRootComponent1(this.viewUtils, this, 0, this._anchor_0);
    }
  }

  injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any {
    if (((token === import11.TemplateRef) && (0 === requestNodeIndex))) {
      return this._TemplateRef_0_5;
    }
    if (((token === import10.NgIf) && (0 === requestNodeIndex))) {
      return this._NgIf_0_6;
    }
    return notFoundResult;
  }
  detectChangesInternal(): void {
    const currVal_0: any = (this.context.data.left != (null as any));
    if (checkBinding(this.throwOnChange, this._expr_0, currVal_0)) {
      this._NgIf_0_6.ngIf = currVal_0;
      this._expr_0 = currVal_0;
    }
    this._appEl_0.detectChangesInNestedViews(this.throwOnChange);
  }
}
class _View_TreeRootComponent1 extends import1.AppView<any> {
  _el_0: any;
  _TreeComponent0_0_4View: any;
  constructor(
      viewUtils: import4.ViewUtils, parentView: import1.AppView<any>, parentIndex: number,
      parentElement: any) {
    super(
        _View_TreeRootComponent1, renderType_TreeRootComponent, import6.ViewType.EMBEDDED,
        viewUtils, parentView, parentIndex, parentElement,
        import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector: string): import9.ComponentRef<any> {
    this._el_0 = this.renderer.createElement((null as any), 'tree0', (null as any));
    this._TreeComponent0_0_4View = new import13.View_TreeTreeComponent(maxDepth - 1, this._el_0);
    this.init([].concat([this._el_0]), [this._el_0], []);
    return (null as any);
  }
  destroyInternal() { this._TreeComponent0_0_4View.destroyInternal(); }
  detectChangesInternal(): void {
    this._TreeComponent0_0_4View.updateData(this.parentView.context.data);
    this._TreeComponent0_0_4View.detectChangesInternal(this.throwOnChange);
  }
  visitRootNodesInternal(cb: any, context: any) { cb(this._el_0, context); }
}
