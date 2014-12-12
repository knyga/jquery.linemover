/*
Oleksandr Knyga <oleksandrknyga@gmail.com>, 2014
 */
(function($) {

	$.fn.linemover = function(opts) {
		var options = $.extend({}, defaults, opts);

		this.each(function() {
			var that = this;
			var $this = $(this),
				$parent = $(this).parent();
			var isDown = false,
				parentWidth = $parent.width(),
				parentOffset = $parent.offset();
			var position = $this.width() / parentWidth;

			$parent.on('mousedown', function() {
				isDown = true;
				options.onStart.call(that);
			});
			$('body').on('mouseup', function() {
				isDown = false;
				options.onEnd.call(that);
			})
			.on('mousemove', function(e) {
				if(!isDown) {
					return;
				}

				position = Math.min(100, Math.round(100 * ((e.pageX - parentOffset.left) / parentWidth)));
				$this.css('width', position + '%');
				options.onChange.call(that, position);
			});
		});
	}

	var defaults = {
		onChange: $.noop,
		onStart: $.noop,
		onEnd: $.noop
	};

})(jQuery);