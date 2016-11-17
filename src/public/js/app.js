import $ from 'jquery';

$(document).ready(function () {
	$.fn.extend({
		tooltip: function () {
			$(this).mouseover(function (e) {
				var hoverText = $(this).attr('data-stuff');
				var x = $('<p>' + hoverText + '</p>')
				var a = $('<span class="tooltip"></span>');

				a.append(x);
				$(this).append(a);
			});

			$(this).mouseout(function (e) {
				$('body .tooltip').remove();
			});
		}
	});

	$('[data-toggle="tooltip"]').tooltip(); 
});
