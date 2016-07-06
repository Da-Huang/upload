$(document).ready(function() {
  $('.choose-file').change(function() {
    var filenames = '';
    var spantext = $(this).parent().find('span');
    if (this.files && this.files.length > 0) {
      var info = $('.file-info');
      var item = $('.file-info-item.template');
      $.each(this.files, function(i, file) {
        info.append(item.clone().removeClass('template').text(file.name));
      });
    } else {
      $('.file-info-item:not(template)').remove();
    }
  });

  $('#upload-file').click(function() {
    $('.choose-file').each(function() {
      $.each(this.files, function(i, file) {
        $.ajax({
          url: '/upload/upload.py',
          data: {'file': file},
          processData: false,
          type: 'post',
          contentType: 'multipart/form-data; charset=utf8',
        }).done(function(data) {
          alert(data);
        });
      });
    });
    return false;
  });
});
