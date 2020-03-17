'use strict';

describe('Feature Test:', function(){
  var plane;
  var airport;
  var weather;

  beforeEach(function(){
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      spyOn(Math, 'random').and.returnValue(0);
    })
    it('planes can be instructed to land at an airport', function(){
      spyOn(weather,'_isStormy').and.returnValue(false);
      plane.land(airport);
      expect(airport.planes()).toContain(plane);
    });

    it('planes can be instructed to takeoff', function(){
      spyOn(weather,'_isStormy').and.returnValue(false);
      plane.land(airport);
      plane.takeoff();
      expect(airport.planes()).not.toContain(plane)

    });
  });

  describe('under stormy conditions', function(){

    it('blocks takeoff when weather is stormy', function(){
        spyOn(Math,'random').and.returnValue(0);
        plane.land(airport)
        spyOn(weather,'_isStormy').and.returnValue(true);
        expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
        expect(airport.planes()).toContain(plane);

    });
    it('blocks landing when weather is stormy', function(){
        spyOn(Math,'random').and.returnValue(1);
        expect(function(){ plane.land(airport);}).toThrowError('cannot land during storm');
        expect(airport.planes()).not.toContain(plane);

    });
  });

});
