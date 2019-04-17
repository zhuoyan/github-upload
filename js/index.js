var quote = function () {
  var that = {};
  that.init = function () {
    bind();
  };
  var bind = function () {
    event.generate();
    event.newQuote();
  };
  var event = {
    generate: function () {
      var theme = methods.randomColor();
      $('.quote-wrapper').animate({
        'color': theme,
        'backgroundColor': theme });

      $('.button').animate({
        'backgroundColor': theme });

      $.ajax({
        type: 'get',
        url: 'https://v1.hitokoto.cn/',
        success: function (data) {
          if (data && data !== null) {
            var title = data.hitokoto;
            var author = data.from;
            $('.quote-text span').text(title);
            $('.quote-author span').text(author);
          }
        } });


    },
    newQuote: function () {
      $('.new-quote').on('click', function () {
        event.generate();
      });
    } };

  var methods = {
    randomColor: function () {
      var bgColor = '#ffffff';
      var color = '#';
      var arr = '0123456789abcdef'.split('');
      for (var i = 0; i < 6; i++) {
        color += arr[Math.floor(Math.random() * 16)];
      }
      if (color === bgColor) {
        color = randomColor();
      }
      return color;
    } };

  return that;
};
quote().init();