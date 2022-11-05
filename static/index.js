$(document).ready(function(){
    show_comment();
});

function show_comment() {
    $.ajax({
        type: 'GET',
        url: '/comments',
        data: {},
        success: function (response) {
            let rows = response['comments'];
            let length = rows.length;
            $('#total-comment').text('댓글 ' + length);

            for (let i = 0; i < rows.length; i++) {
                let comment_id = rows[i]['_id'];
                let comment = rows[i]['comment'];
                let name = rows[i]['name'];
                let time = rows[i]['time'];

                let temp_html = `<blockquote class="blockquote mb-0">
                                    <p id="${comment_id}">${comment}</p>
                                    <form class="hidden-comment"><textarea id="${comment_id}-hidden">${comment}</textarea>
                                        <footer class="blockquote-footer">${name} (${time})</footer>
                                        <button onclick="update_comment('${comment_id}')" type="button" id="${comment_id}-update-btn" class="btn btn-outline-warning">수정</button>
                                        <button onclick="register_updated_comment('${comment_id}-hidden')" type="button" id="${comment_id}-register-btn" class="btn btn-outline-dark">등록</button>
                                        <button onclick="delete_comment('${comment_id}')" type="button" id="${comment_id}-delete-btn" class="btn btn-outline-danger">삭제</button>
                                    </form>
                                </blockquote>
                                <hr>`;
                $('#comments-box').prepend(temp_html);
                document.getElementById(comment_id + '-hidden').style.display = 'none';
                document.getElementById(comment_id + '-register-btn').style.display = 'none';
            }
        },
    });
}

function post_comment() {
    let comment = $('#comment').val();
    let name = $('#name').val();
    let time = new Date().toLocaleString();

    $.ajax({
        type: 'POST',
        url: '/comments',
        data: {comment_give: comment, name_give: name, time_give: time},
        success: function (response) {
            console.log(response);
            window.location.reload();
        },
    });
}

function update_comment(comment_id) {
    document.getElementById(comment_id).style.display = 'none';
    document.getElementById(comment_id + '-hidden').style.display = 'block';
    document.getElementById(comment_id + '-update-btn').style.display = 'none';
    document.getElementById(comment_id + '-register-btn').style.display = 'block';
    document.getElementById(comment_id + '-delete-btn').style.display = 'none';
}

function register_updated_comment(comment_id_hidden) {
    let comment = document.getElementById(comment_id_hidden).value;
    $.ajax({
        type: 'POST',
        url: '/comments/update',
        data: {comment_id_give: comment_id_hidden.slice(0, -7), comment_give: comment},
        success: function (response) {
            window.location.reload();
        },
    });

    document.getElementById(comment_id).style.display = 'block';
    document.getElementById(comment_id + '-hidden').style.display = 'none';
    document.getElementById(comment_id + '-update-btn').style.display = 'block';
    document.getElementById(comment_id + '-register-btn').style.display = 'none';
    document.getElementById(comment_id + '-delete-btn').style.display = 'block';
}

function delete_comment(comment_id) {
    $.ajax({
        type: 'POST',
        url: '/comments/delete',
        data: {comment_id_give: comment_id},
        success: function (response) {
            window.location.reload();
        },
    });
}

function open_box() {
    $('#comment-box').show();
}

function close_box() {
    $('#comment-box').hide();
}

function show_member1(){
    window.open("/popup1" ,"_blank", "width=2600,height=2100");
}

function show_member2(){
    window.open("/popup2" , "_blank", "width=2600,height=2100");
}

function show_member3(){
    window.open("/popup3" , "_blank", "width=2600,height=2100");
}

function show_member4(){
    window.open("/popup4" , "_blank", "width=2600,height=2100");
}

function show_member5(){
    window.open("/popup5" , "_blank", "width=2600,height=2100");
}