(function () {

  window.IE9 = (platform.name === 'IE' && platform.version === '9.0');

  NodeList.prototype.forEach = Array.prototype.forEach;
  HTMLCollection.prototype.forEach = Array.prototype.forEach;

  NodeList.prototype.on = function (event, listener) {
    this.forEach(function (el) {
      el.addEventListener(event, listener);
    });
  };

  window.chart = [];

  window.chartAnimate = function (chartId) {
    switch (chartId) {
      

      case 'chart1':
        // Initialize a Pie chart in the container with the ID chart1
        window.chart['chart1'] = new Chartist.Pie('#chart1', {
          series: [20, 80],
          labels: ['20%', '80%'],
          legends: ['AZIONARIO', 'OBBLIGAZIONARIO']
          }, {
            donut: true,
            donutWidth: 75,
            showLabel: true,
            plugins: [
                Chartist.plugins.legend({
                  clickable: false
                })
            ]
          }
        );
        
        window.chart['chart1'].on('draw', function(data) {
          if(data.type === 'label') {
            
            data.element.animate({
              opacity: {
                begin: data.index * 1000 + 500,
                dur: 400,
                from: 0,
                to: 1
              }
            });
            
          } else if(data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
              'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
              }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if(data.index !== 0) {
              animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
          }
        });
        
        
      case 'chart2':
        // Initialize a Pie chart in the container with the ID chart2
        window.chart['chart2'] = new Chartist.Pie('#chart2', {
          series: [6, 14, 44, 36],
          labels: ['6%', '14%', '44%', '36%']
          }, {
            donut: true,
            donutWidth: 75,
            showLabel: true
          }
        );
        
        window.chart['chart2'].on('draw', function(data) {
          if(data.type === 'label') {
            
            data.element.animate({
              opacity: {
                begin: data.index * 1000 + 500,
                dur: 400,
                from: 0,
                to: 1
              }
            });
            
          } else if(data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
              'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
              }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if(data.index !== 0) {
              animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
          }
        });


      case 'chart3':
        // Initialize a Line chart in the container with the ID chart3
        window.chart['chart3'] = new Chartist.Line('#chart3', {
          labels: ['mag 2010', 'giu 2010', 'lug 2010', 'ago 2010', 'set 2010', 'ott 2010', 'nov 2010', 'dic 2010', 'gen 2011', 'feb 2011', 'mar 2011', 'apr 2011', 'mag 2011', 'giu 2011', 'lug 2011', 'ago 2011', 'set 2011', 'ott 2011', 'nov 2011', 'dic 2011', 'gen 2012', 'feb 2012', 'mar 2012', 'apr 2012', 'mag 2012', 'giu 2012', 'lug 2012', 'ago 2012', 'set 2012', 'ott 2012', 'nov 2012', 'dic 2012', 'gen 2013', 'feb 2013', 'mar 2013', 'apr 2013', 'mag 2013', 'giu 2013', 'lug 2013', 'ago 2013', 'set 2013', 'ott 2013', 'nov 2013', 'dic 2013', 'gen 2014', 'feb 2014', 'mar 2014', 'apr 2014', 'mag 2014', 'giu 2014', 'lug 2014', 'ago 2014', 'set 2014', 'ott 2014', 'nov 2014', 'dic 2014', 'gen 2015', 'feb 2015', 'mar 2015', 'apr 2015', 'mag 2015', 'giu 2015', 'lug 2015', 'ago 2015', 'set 2015', 'ott 2015', 'nov 2015', 'dic 2015', 'gen 2016', 'feb 2016', 'mar 2016', 'apr 2016', 'mag 2016', 'giu 2016', 'lug 2016', 'ago 2016', 'set 2016'],
          series: [
            [101.69, 102.17, 104.36, 104.98, 106.91, 108.08, 106.84, 108.44, 108.92, 109.49, 109.59, 110.94, 110.96, 110.30, 110.45, 107.65, 104.48, 107.48, 105.58, 106.55, 109.66, 112.28, 112.38, 112.05, 109.65, 111.21, 113.04, 114.37, 116.24, 117.68, 118.79, 120.40, 122.18, 122.13, 122.47, 124.47, 124.13, 120.36, 121.67, 120.71, 122.57, 125.61, 125.77, 126.52, 127.15, 129.02, 129.73, 130.16, 131.52, 132.20, 131.82, 132.65, 131.93, 131.85, 132.23, 131.21, 133.23, 135.76, 136.44, 136.87, 136.92, 134.90, 135.33, 132.61, 130.54, 133.77, 134.08, 132.42, 129.62, 128.90, 131.19, 132.70, 133.04, 132.47, 134.43, 135.31, 135.05],
            [97.66, 97.89, 101.21, 101.31, 103.84, 105.25, 101.64, 103.46, 104.40, 105.18, 104.96, 107.27, 106.74, 106.44, 106.63, 105.88, 103.24, 105.61, 103.80, 104.70, 106.80, 107.83, 107.30, 107.08, 104.75, 106.32, 107.38, 108.93, 110.11, 110.28, 110.83, 111.16, 111.51, 110.71, 110.69, 112.69, 110.94, 108.90, 110.99, 110.24, 112.65, 114.82, 114.51, 114.28, 114.73, 116.72, 117.04, 118.08, 118.96, 119.59, 118.56, 119.58, 117.80, 117.60, 118.24, 117.29, 118.15, 119.12, 118.81, 119.32, 118.16, 116.83, 118.05, 116.29, 115.82, 117.92, 117.16, 116.47, 115.73, 116.52, 119.16, 120.08, 119.45, 120.55, 122.08, 121.89, 122.05]
          ],
          legends: ['KAIROS ALL-IN', 'PORTAFOGLIO BASE']
        }, {
          low: 80,
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return value.indexOf('gen') !== -1 ? value.split(' ')[1] : null;
            }
          }
        });

        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
          delays = 80,
          durations = 500;

        // Once the chart is fully created we reset the sequence
        window.chart['chart3'].on('created', function() {
          seq = 0;
        });

        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        window.chart['chart3'].on('draw', function(data) {
          seq++;

          if(data.type === 'line') {
            // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
            data.element.animate({
              opacity: {
                // The delay when we like to start the animation
                begin: seq * delays + 1000,
                // Duration of the animation
                dur: durations,
                // The value where the animation should start
                from: 0,
                // The value where it should end
                to: 1
              }
            });
          } else if(data.type === 'label' && data.axis === 'x') {
            data.element.animate({
              y: {
                begin: seq * delays,
                dur: durations,
                from: data.y + 100,
                to: data.y,
                // We can specify an easing function from Chartist.Svg.Easing
                easing: 'easeOutQuart'
              }
            });
          } else if(data.type === 'label' && data.axis === 'y') {
            data.element.animate({
              x: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 100,
                to: data.x,
                easing: 'easeOutQuart'
              }
            });
          } else if(data.type === 'point') {
            data.element.animate({
              x1: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              x2: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              }
            });
          } else if(data.type === 'grid') {
            // Using data.axis we get x or y which we can use to construct our animation definition objects
            var pos1Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '1'] - 30,
              to: data[data.axis.units.pos + '1'],
              easing: 'easeOutQuart'
            };

            var pos2Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '2'] - 100,
              to: data[data.axis.units.pos + '2'],
              easing: 'easeOutQuart'
            };

            var animations = {};
            animations[data.axis.units.pos + '1'] = pos1Animation;
            animations[data.axis.units.pos + '2'] = pos2Animation;
            animations['opacity'] = {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'easeOutQuart'
            };

            data.element.animate(animations);
          }
        });
        
        
         case 'chart4':
        // Initialize a Pie chart in the container with the ID chart4
        window.chart['chart4'] = new Chartist.Pie('#chart4', {
          series: [40, 45, 15],
          labels: ['40%', '45%', '15%']
          }, {
            donut: true,
            donutWidth: 125,
            showLabel: true
          }
        );

        window.chart['chart4'].on('draw', function(data) {
          if(data.type === 'label') {
            
            data.element.animate({
              opacity: {
                begin: data.index * 1000 + 500,
                dur: 400,
                from: 0,
                to: 1
              }
            });
            
          } else if(data.type === 'slice') {
            // Get the total path length in order to use for dash array animation
            var pathLength = data.element._node.getTotalLength();

            // Set a dasharray that matches the path length as prerequisite to animate dashoffset
            data.element.attr({
              'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
            });

            // Create animation definition while also assigning an ID to the animation for later sync usage
            var animationDefinition = {
              'stroke-dashoffset': {
                id: 'anim' + data.index,
                dur: 1000,
                from: -pathLength + 'px',
                to:  '0px',
                easing: Chartist.Svg.Easing.easeOutQuint,
                // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                fill: 'freeze'
              }
            };

            // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
            if(data.index !== 0) {
              animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
            }

            // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
            data.element.attr({
              'stroke-dashoffset': -pathLength + 'px'
            });

            // We can't use guided mode as the animations need to rely on setting begin manually
            // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
            data.element.animate(animationDefinition, false);
          }
        });
        
        
         case 'chart5':
        // Initialize a Line chart in the container with the ID chart5
        window.chart['chart5'] = new Chartist.Line('#chart5', {
          labels: ['mag 2010', 'giu 2010', 'lug 2010', 'ago 2010', 'set 2010', 'ott 2010', 'nov 2010', 'dic 2010', 'gen 2011', 'feb 2011', 'mar 2011', 'apr 2011', 'mag 2011', 'giu 2011', 'lug 2011', 'ago 2011', 'set 2011', 'ott 2011', 'nov 2011', 'dic 2011', 'gen 2012', 'feb 2012', 'mar 2012', 'apr 2012', 'mag 2012', 'giu 2012', 'lug 2012', 'ago 2012', 'set 2012', 'ott 2012', 'nov 2012', 'dic 2012', 'gen 2013', 'feb 2013', 'mar 2013', 'apr 2013', 'mag 2013', 'giu 2013', 'lug 2013', 'ago 2013', 'set 2013', 'ott 2013', 'nov 2013', 'dic 2013', 'gen 2014', 'feb 2014', 'mar 2014', 'apr 2014', 'mag 2014', 'giu 2014', 'lug 2014', 'ago 2014', 'set 2014', 'ott 2014', 'nov 2014', 'dic 2014', 'gen 2015', 'feb 2015', 'mar 2015', 'apr 2015', 'mag 2015', 'giu 2015', 'lug 2015', 'ago 2015', 'set 2015', 'ott 2015', 'nov 2015', 'dic 2015', 'gen 2016', 'feb 2016', 'mar 2016', 'apr 2016', 'mag 2016', 'giu 2016', 'lug 2016', 'ago 2016', 'set 2016'],
          series: [
            [100.63, 101.06, 102.83, 103.35, 104.74, 105.86, 104.91, 105.90, 106.20, 107.08, 106.67, 108.24, 108.28, 107.66, 107.40, 105.38, 104.31, 106.18, 105.00, 106.40, 108.81, 111.56, 111.71, 111.17, 109.32, 110.82, 112.53, 114.08, 115.53, 116.60, 117.82, 119.16, 121.00, 121.11, 122.02, 124.24, 124.24, 120.89, 122.91, 122.23, 124.43, 128.23, 129.06, 129.88, 132.69, 135.12, 136.14, 136.90, 138.59, 139.31, 139.61, 140.73, 139.51, 140.28, 141.61, 141.68, 144.27, 147.70, 148.59, 149.45, 149.30, 146.40, 147.77, 145.01, 142.68, 146.17, 146.60, 144.94, 141.34, 140.89, 144.10, 145.23, 146.28, 144.20, 147.50, 148.06, 147.72],
            [97.66, 97.89, 101.21, 101.31, 103.84, 105.25, 101.64, 103.46, 104.40, 105.18, 104.96, 107.27, 106.74, 106.44, 106.63, 105.88, 103.24, 105.61, 103.80, 104.70, 106.80, 107.83, 107.30, 107.08, 104.75, 106.32, 107.38, 108.93, 110.11, 110.28, 110.83, 111.16, 111.51, 110.71, 110.69, 112.69, 110.94, 108.90, 110.99, 110.24, 112.65, 114.82, 114.51, 114.28, 114.73, 116.72, 117.04, 118.08, 118.96, 119.59, 118.56, 119.58, 117.80, 117.60, 118.24, 117.29, 118.15, 119.12, 118.81, 119.32, 118.16, 116.83, 118.05, 116.29, 115.82, 117.92, 117.16, 116.47, 115.73, 116.52, 119.16, 120.08, 119.45, 120.55, 122.08, 121.89, 122.05]
          ],
          legends: ['PORTAFOGLIO BASE', 'KAIROS EXCELLENCE']
        }, {
          low: 80,
          axisX: {
            labelInterpolationFnc: function(value, index) {
              return value.indexOf('gen') !== -1 ? value.split(' ')[1] : null;
            }
          }
        });

        // Let's put a sequence number aside so we can use it in the event callbacks
        var seq = 0,
          delays = 80,
          durations = 500;

        // Once the chart is fully created we reset the sequence
        window.chart['chart5'].on('created', function() {
          seq = 0;
        });

        // On each drawn element by Chartist we use the Chartist.Svg API to trigger SMIL animations
        window.chart['chart5'].on('draw', function(data) {
          seq++;

          if(data.type === 'line') {
            // If the drawn element is a line we do a simple opacity fade in. This could also be achieved using CSS3 animations.
            data.element.animate({
              opacity: {
                // The delay when we like to start the animation
                begin: seq * delays + 1000,
                // Duration of the animation
                dur: durations,
                // The value where the animation should start
                from: 0,
                // The value where it should end
                to: 1
              }
            });
          } else if(data.type === 'label' && data.axis === 'x') {
            data.element.animate({
              y: {
                begin: seq * delays,
                dur: durations,
                from: data.y + 100,
                to: data.y,
                // We can specify an easing function from Chartist.Svg.Easing
                easing: 'easeOutQuart'
              }
            });
          } else if(data.type === 'label' && data.axis === 'y') {
            data.element.animate({
              x: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 100,
                to: data.x,
                easing: 'easeOutQuart'
              }
            });
          } else if(data.type === 'point') {
            data.element.animate({
              x1: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              x2: {
                begin: seq * delays,
                dur: durations,
                from: data.x - 10,
                to: data.x,
                easing: 'easeOutQuart'
              },
              opacity: {
                begin: seq * delays,
                dur: durations,
                from: 0,
                to: 1,
                easing: 'easeOutQuart'
              }
            });
          } else if(data.type === 'grid') {
            // Using data.axis we get x or y which we can use to construct our animation definition objects
            var pos1Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '1'] - 30,
              to: data[data.axis.units.pos + '1'],
              easing: 'easeOutQuart'
            };

            var pos2Animation = {
              begin: seq * delays,
              dur: durations,
              from: data[data.axis.units.pos + '2'] - 100,
              to: data[data.axis.units.pos + '2'],
              easing: 'easeOutQuart'
            };

            var animations = {};
            animations[data.axis.units.pos + '1'] = pos1Animation;
            animations[data.axis.units.pos + '2'] = pos2Animation;
            animations['opacity'] = {
              begin: seq * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: 'easeOutQuart'
            };

            data.element.animate(animations);
          }
        });
        


    }
  }

})();
