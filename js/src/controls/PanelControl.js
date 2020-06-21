// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const widgets = require('@jupyter-widgets/base');
const L = require('../leaflet.js');
const control = require('./Control.js');

export class LeafletPanelControlModel extends control.LeafletControlModel {
  defaults(){
    return{
      _view_name: 'LeafletPanelControlView',
      _model_name: 'LeafletPanelControlModel',
      base_layers: null,
      overlays: null,
      collapsible_groups: false,
      collapsed: false,
    };
  }
}

LeafletPanelControlModel.serializers = {
  ...control.LeafletControlModel.serializers,
  base_layers: { deserialize: widgets.unpack_models },
  overlays: { deserialize: widgets.unpack_models },
};


export class LeafletPanelControlView extends control.LeafletControlView {
  create_obj() {
      var base_layers = this.model.get('base_layers');
      var overlays = this.model.get('overlays');
      console.log('START....');
      console.log(base_layers[0]['layer']);
      console.log(overlays[0]['layer']);
      var layers_promise = this.create_child_view(base_layers[0]['layer']);
      var overlays_promise = this.create_child_view(overlays[0]['layer']);

      return Promise.all([layers_promise, overlays_promise]).then(result => {
        const base_layers_view = result[0];
        const overlays_view = result[1];
        base_layers[0]['layer'] = base_layers_view.obj;
        overlays[0]['layer'] = overlays_view.obj;
        const options = this.get_options();
        options.base_layers = base_layers;
        options.overlays = overlays;
        this.obj = L.Control.PanelLayers(options.base_layers, options.overlays);
      });

//      const options = this.get_options();
//      this.obj = L.Control.PanelLayers(options);
//    const base_layers = this.model.get('base_layers');
//    const overlays = this.model.get('overlays');
//
//    const base_layers_promise = this.create_child_view(base_layers);
//    const overlays_promise = this.create_child_view(overlays);
//
//    return Promise.all([base_layers_promise, overlays_promise]).then(result => {
//    const base_layers_view = result[0];
//    const overlays_view = result[1];
//
//    const options = this.get_options();
//    options.base_layers = base_layers_view.obj;
//    options.overlays = overlays_view.obj;
//    this.obj = L.Control.PanelLayers(options);
//});
  }
}