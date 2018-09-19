// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["M", "T", "W", "T", "F", "S", "S"],
    series: [[12, 17, 7, 17, 23, 18, 38]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      "Quy",
      "Ricky",
      "Daniel",
      "Gil",
      "Stan",
      "Iman",
      "Jesse",
      "Chuck",
      "Pat",
      "Lee",
      "Bhavik",
      "Manish",
      "Gourav",
      "Harry",
      "Tracy",
      "Peter",
      "Tien",
      "David",
      "Tuyen",
    ],
    series: [
	[7.0, 7.43, 2.6, 5.5, 2.5, 3.4, 3, 3.5, 2.0, 6, 6, 6, 6.5, 7.2, 7, 7.0, 7.5, 7.5, 7.8],
	[0.0, 0.00, 4.6, 2.5, 5.5, 3.4, 8, 3.5, 6.0, 0, 0, 0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0],
	[0.0, 0.00, 2.0, 2.0, 2.0, 3.0, 7, 3.0, 3.0, 0, 0, 0, 0.0, 0.0, 0, 0.0, 0.0, 0.0, 0.0]
	]
  },
  options: {
    stackBars: true,
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 25,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
// new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
var data = { 
	//labels: ['Billable', 'Unbillable', 'Internal'], 
	series: [1, 3, 8] 
};

var sum = function(a, b) { return a + b };

const dailyHoursPie = {
	data,
	options: {
		labelInterpolationFnc: function(value) {
    			return Math.round(value / data.series.reduce(sum) * 100) + '%';
		 }	
	},
};

module.exports = {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart,
  dailyHoursPie
};
