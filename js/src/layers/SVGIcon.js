// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const L = require('../leaflet.js');
const layer = require('./Layer.js');

export class LeafletSVGIconModel extends layer.LeafletUILayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletSVGIconView',
      _model_name: 'LeafletSVGIconModel',
      color: 'rgb(0,102,255)',
      icon_size: [32, 48],
      fill_color: null,
      fill_opacity: 0.4,
      font_color: 'rgb(0, 0, 0)',
      font_opacity: '1',
      font_size: null,
      circle_text: '',
      circle_anchor: null,
      circle_color: null
    };
  }
}

export class LeafletSVGIconView extends layer.LeafletUILayerView {
  create_obj() {
    this.obj = L.divIcon.svgIcon(this.get_options());
  }
}
