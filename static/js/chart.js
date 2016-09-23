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
        window.chart['chart1'] = new Chartist.Pie('#chart1',
          {
            series: [20, 80],
            labels: ['Azioni', 'Obbligazioni']
          }, {
            donut: true,
            showLabel: false,
            plugins: [
                Chartist.plugins.legend()
            ]
          }
        );

        window.chart['chart1'].on('draw', function(data) {
          if(data.type === 'slice') {
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
          series: [6, 6.50, 7.50, 44, 33.50],
          labels: ['6', '6.50', '7.50', '44', '33.50'],
          legends: ['AZIONARIO DIREZIONALE (β)', 'AZIONARIO NON DIREZIONALE (α)', 'AZIONARIO ALTERNATIVE (α)', 'OBBLIGAZIONARIO DIREZIONALE (β)', 'OBBLIGAZIONARIO NON DIREZIONALE (α)']
          }, {
            donut: true,
            showLabel: true,
            plugins: [
                Chartist.plugins.legend()
            ]
          }
        );

        window.chart['chart2'].on('draw', function(data) {
          if(data.type === 'slice') {
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
          labels: ['dic 09', 'gen 10', 'feb 10', 'mar 10', 'apr 10', 'mag 10', 'giu 10', 'lug 10', 'ago 10', 'set 10', 'ott 10', 'nov 10', 'dic 10', 'gen 11', 'feb 11', 'mar 11', 'apr 11', 'mag 11', 'giu 11', 'lug 11', 'ago 11', 'set 11', 'ott 11', 'nov 11', 'dic 11', 'gen 12', 'feb 12', 'mar 12', 'apr 12', 'mag 12', 'giu 12', 'lug 12', 'ago 12', 'set 12', 'ott 12', 'nov 12', 'dic 12', 'gen 13', 'feb 13', 'mar 13', 'apr 13', 'mag 13', 'giu 13', 'lug 13', 'ago 13', 'set 13', 'ott 13', 'nov 13', 'dic 13', 'gen 14', 'feb 14', 'mar 14', 'apr 14', 'mag 14', 'giu 14', 'lug 14', 'ago 14', 'set 14', 'ott 14', 'nov 14', 'dic 14', 'gen 15', 'feb 15', 'mar 15', 'apr 15', 'mag 15', 'giu 15', 'lug 15', 'ago 15', 'set 15', 'ott 15', 'nov 15', 'dic 15', 'gen 16', 'feb 16', 'mar 16', 'apr 16', 'mag 16', 'giu 16', 'lug 16', 'ago 16'],
          series: [
            [100.00, 100.40, 101.00, 103.69, 104.51, 101.69, 102.17, 104.36, 104.98, 106.91, 108.08, 106.84, 108.44, 108.92, 109.49, 109.59, 110.94, 110.96, 110.30, 110.45, 107.65, 104.48, 107.48, 105.58, 106.55, 109.66, 112.28, 112.38, 112.05, 109.65, 111.21, 113.04, 114.37, 116.24, 117.68, 118.79, 120.40, 122.18, 122.13, 122.47, 124.47, 124.13, 120.36, 121.67, 120.71, 122.57, 125.61, 125.77, 126.52, 127.15, 129.02, 129.73, 130.16, 131.52, 132.20, 131.82, 132.65, 131.93, 131.85, 132.23, 131.21, 133.23, 135.76, 136.44, 136.87, 136.92, 134.90, 135.33, 132.61, 130.54, 133.77, 134.08, 132.42, 129.62, 128.90, 131.19, 132.70, 133.04, 132.47, 134.43, 135.31],
            [100.00, 99.21, 99.41, 100.38, 99.85, 97.66, 97.89, 101.21, 101.31, 103.84, 105.25, 101.64, 103.46, 104.40, 105.18, 104.96, 107.27, 106.74, 106.44, 106.63, 105.88, 103.24, 105.61, 103.80, 104.70, 106.80, 107.83, 107.30, 107.08, 104.75, 106.32, 107.38, 108.93, 110.11, 110.28, 110.83, 111.16, 111.51, 110.71, 110.69, 112.69, 110.94, 108.90, 110.99, 110.24, 112.65, 114.82, 114.51, 114.28, 114.73, 116.72, 117.04, 118.08, 118.96, 119.59, 118.56, 119.58, 117.80, 117.60, 118.24, 117.29, 118.15, 119.12, 118.81, 119.32, 118.16, 116.83, 118.05, 116.29, 115.82, 117.92, 117.16, 116.47, 115.73, 116.52, 119.16, 120.08, 119.45, 120.55, 122.08, 121.89]
          ]
        }, {
          low: 80
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
          series: [20, 20, 45, 15],
          labels: ['AZIONARIO NON DIREZIONALE (α)', 'AZIONARIO ALTERNATIVE (α)', 'OBBLIGAZIONARIO NON DIREZIONALE (α)', 'ALTRO ALTERNATIVE (α)']
          }, {
            donut: true,
            showLabel: false,
            plugins: [
                Chartist.plugins.legend()
            ]
          }
        );

        window.chart['chart4'].on('draw', function(data) {
          if(data.type === 'slice') {
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
          labels: ['Apr 10', 'Lug 10', 'Ott 10', 'Gen 11', 'Apr 11', 'Lug 11', 'Ott 11', 'Gen 12' ],
          series: [
            [100, 101.35, 105.40, 104.56, 107.43, 106.79, 105.77, 106.96, 107.24],
            [100, 99.36, 106.42, 107.50, 98.43, 97.88, 103.78, 125.2, 121.8 ]
          ]
        }, {
          low: 80
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
