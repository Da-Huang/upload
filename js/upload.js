$(document).ready(function() {
  $('.choose-file').change(function() {
    $('.file-info-item:not(.template)').remove();
    var filenames = '';
    var spantext = $(this).parent().find('span');
    if (this.files && this.files.length > 0) {
      var info = $('.file-info');
      var item = $('.file-info-item.template');
      var i = 0;
      $.each(this.files, function(i, file) {
        item = item.clone().removeClass('template');
        item.attr('id', 'file-info-item-' + i++);
        item.find('.filename').text(file.name);
        info.append(item);
      });
    }
  });

  $('.upload-file').click(function() {
    $('.choose-file').each(function() {
      $.each(this.files, function(i, file) {
        var data = new FormData();
        data.append('file', file);
        $.ajax({
          url: '/upload/upload.py',
          data: data,
          type: 'post',
          processData: false,
          contentType: false,
          xhr: function() {
            myXhr = $.ajaxSettings.xhr();
            if (myXhr.upload){
              myXhr.upload.addEventListener('progress',
                  function(evt) {
                    if (evt.lengthComputable) {
                      var percentComplete = (evt.loaded / evt.total) * 100;
                      var pb = $('#file-info-item-' + i).find('.progress-bar');
                      pb.attr('aria-valuenow', percentComplete);
                      pb.attr('style', 'width:' + percentComplete + '%;');
                      pb.text(Math.round(percentComplete) + '%');
                    }
                  }, false);
            } else {
              console.log('Uploadress is not supported.');
            }
            return myXhr;
          }
        }).done(function(data) {
          console.log(data);
        });
      });
    });
    return false;
  });
});
