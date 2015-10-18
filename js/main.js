(function($) {

  $.hover_caption = {
    defaults: {
      caption_font_size: '18px',
      caption_color: 'white',
      caption_bold: true,
      caption_default: "Click for screenshots."
    }
  }

    $.fn.extend({
        hover_caption: function(config) {

      var config = $.extend({}, $.hover_caption.defaults, config);

        return this.each(function() {

          var image = $(this);

          // set variable for wrapper div
          var width = image.width();
          var height = image.height();

          // variables for caption
          var caption_padding = width * .07; // dynamic margin depending on img width

          //  set caption to title attr if set
          var caption = image.attr('title') ? image.attr('title') : config.caption_default;

          // add necessary html and css
          image
            .css({
              'z-index': '-1',
              'position': 'relative'
            })
           .wrap('<div>')
           .parent()
            .css({
              'width': width,
              'height': height
            })
            .find('p')
            .addClass('hover_caption') // use this hook for additional styling
            .css({
              'padding': caption_padding,
              'color': config.caption_color,
              'width': width,
              'font-size': config.caption_font_size,
              'position': 'absolute',
              'margin': 0
            })
            .hide();

            if (config.caption_bold) { image.css('font-weight', 'bold') };

            // add hover event to toggle message
            $('pics').hover(function() {
              $(this).addClass('hover_caption').find('p').show();
            }, function() {
              $(this).removeClass('hover_caption').find('p').hide();
            });

          })
        }
    })

})(jQuery);