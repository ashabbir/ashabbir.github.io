 $(function() {
            var itemWidth = $("#container li").width();
            // hide 50% of each window
            var itemPosition = itemWidth * 20 / 100;
            // slide each window 60% if its width    
            var itemMove = itemWidth * 65 / 100;        

            // move windows below eachother
            $("#container li").each(function(i) {
                $(this).attr("id", i).css("z-index", 100 - i).css("left", itemPosition * i);
            });

            $("#container li").click(function(e) {
                var currentID = parseInt($(".current").attr("id"));
                var clickedID = parseInt($(this).attr("id"));

            if (currentID != clickedID) {
                e.preventDefault();
                    var currentZ = 99;
                    var current = $(this);
                    setTimeout(function() { $(".current").removeClass("current"); current.css("z-index", currentZ).addClass("current"); }, 500);

                    if (clickedID > currentID) {
                    var i = 1;
                    var total = clickedID - currentID + 1;
                    for (j = clickedID - 1; j >= 0; j = j - 1) {
                        $("#" + j).animate({ "left": "-=" + itemMove * (i) + "px" }, 500);
                        $("#" + j).animate({ "left": "+=" + itemMove * (i) + "px" }, 300);
                        i = i + 1;
                    }
                    var i = 1;
                    setTimeout(function() {
                        for (j = clickedID - 1; j >= 0; j = j - 1) {
                            $("#" + j).css("z-index", total - i);
                            i = i + 1;
                        }
                    }, 500);
                    }
                    else {
                        var i = 1;
                        var total = $("#container li").length;
                        for (j = clickedID + 1; j <= total; j = j + 1) {
                            $("#" + j).animate({ "left": "+=" + itemMove * i + "px" }, 500);
                            $("#" + j).animate({ "left": "-=" + itemMove * i + "px" }, 300);
                            $("#" + j).css("z-index", currentZ - i);
                            i = i + 1;
                        }
                    }
                }
            });
        });
$(function() {

		var data = [ ["January", 10], ["February", 8], ["March", 4], ["April", 13], ["May", 17], ["June", 9] ];

		$.plot("#placeholder1", [ data ], {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		});
  $.plot("#placeholder2", [ data ], {
			series: {
				bars: {
					show: true,
					barWidth: 0.6,
					align: "center"
				}
			},
			xaxis: {
				mode: "categories",
				tickLength: 0
			}
		});

	});
