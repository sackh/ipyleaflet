// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const widgets = require('@jupyter-widgets/base');
const L = require('../leaflet.js');
const control = require('./Control.js');
const SelectArea = require('leaflet-area-select');


export class LeafletSelectControlModel extends control.LeafletControlModel {
  defaults(){
    return{
      _view_name: 'LeafletSelectControlView',
      _model_name: 'LeafletSelectControlModel',
      shiftKey: false,
      ctrlKey: true,
      autoDisable: false,
    };
  }
}



export class LeafletSelectControlView extends control.LeafletControlView {
  create_obj() {
    console.log(SelectArea);
    var map = this.map_view.obj;
    console.log(map);
    map.selectArea.enable();
//    this.obj = L.Map.SelectArea(this.get_options());
  }

  leaflet_events() {}
}
