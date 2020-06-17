$(function(){
  function buildHTML(message){
    if ( message.image ) {
      let html =
        `<div class="Main-chat__message-list--chat-block">
          <div class="Main-chat__message-list--chat-block--form">
            <div class="Main-chat__message-list--chat-block--form--name">
              ${message.user_name}
            </div>
            <div class="Main-chat__message-list--chat-block--form--date">
              ${message.created_at}
            </div>
          </div>
          <div class="Main-chat__message-list--chat-block--message">
            <p class="Main-chat__message-list--chat-block--message--content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Main-chat__message-list--chat-block">
        <div class="Main-chat__message-list--chat-block--form">
          <div class="Main-chat__message-list--chat-block--form--name">
            ${message.user_name}
          </div>
          <div class="Main-chat__message-list--chat-block--form--date">
            ${message.created_at}
          </div>
        </div>
        <div class="Main-chat__message-list--chat-block--message">
          <p class="Main-chat__message-list--chat-block--message--content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $('.submit-btn').removeAttr('data-disable-with');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Main-chat__message-list').append(html);      
      $('.new_message')[0].reset();
      $('.Main-chat__message-list').animate({ scrollTop: $('.Main-chat__message-list')[0].scrollHeight});
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});