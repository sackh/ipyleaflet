// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.

const L = require('../leaflet.js');
const path = require('./Path.js');

const DEFAULT_LOCATION = [0.0, 0.0];

export class LeafletCircleMarkerModel extends path.LeafletPathModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'LeafletCircleMarkerView',
      _model_name: 'LeafletCircleMarkerModel',
      location: DEFAULT_LOCATION,
      draggable: true,
    };
  }
}

export class LeafletCircleMarkerView extends path.LeafletPathView {
  create_obj() {
    this.obj = L.circleMarker(this.model.get('location'), this.get_options());
    var draggable = this.model.get("draggable");
    if (draggable) {
      this.obj.on({
      mousedown: function () {
        map.on('mousemove', function (e) {
          this.obj.setLatLng(e.latlng);
        });
      }
    });
    this.map_view.obj.on('mouseup',function(e){
      this.map_view.obj.removeEventListener('mousemove');
    })
    }
  }

  model_events() {
    super.model_events();
    this.listenTo(
      this.model,
      'change:location',
      function() {
        this.obj.setLatLng(this.model.get('location'));
      },
      this
    );
  }
}
