// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const widgets = require('@jupyter-widgets/base');
const L = require('../leaflet.js');
const layer = require('./Layer.js');
const T = require('tangram');

export class TangramModel extends layer.LeafletLayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'TangramView',
      _model_name: 'TangramModel',
      scene: '',
      attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors'
    };
  }
}

//TangramModel.serializers = {
//  ...widgets.WidgetModel.serializers,
//  layers: { deserialize: widgets.unpack_models }
//};

export class TangramView extends layer.LeafletLayerView {
  create_obj() {
    this.obj = T.leafletLayer(this.get_options())
//    this.obj = L.layerGroup();
//    this.layer_views = new widgets.ViewList(
//      this.add_layer_model,
//      this.remove_layer_view,
//      this
//    );
//    this.layer_views.update(this.model.get('layers'));
  }

//  remove_layer_view(child_view) {
//    this.obj.removeLayer(child_view.obj);
//    child_view.remove();
//  }
//
//  add_layer_model(child_model) {
//    return this.create_child_view(child_model).then(child_view => {
//      this.obj.addLayer(child_view.obj);
//      return child_view;
//    });
//  }

  model_events() {
//    this.listenTo(
//      this.model,
//      'change:layers',
//      function() {
//        this.layer_views.update(this.model.get('layers'));
//      },
//      this
//    );
  }
}
