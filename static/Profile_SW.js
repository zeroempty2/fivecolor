
function open_box() {
    $('#comment-box').show();
}
function close_box() {
    $('#comment-box').hide();
}

// ProfileSW
function show_commentsSW() {
    $.ajax({
        type: 'GET',
        url: '/comments_SW',
        data: {},
        success: function (response) {
            let rows = response['comments']
            let length = rows.length;
            $('#total-comment').text('방명록 ' + length);

            for (let i = 0; i < rows.length; i++) {
                let comment_id = rows[i]['_id'];
                let comment = rows[i]['comment']
                let name = rows[i]['name']
                let time = rows[i]['time']
                let password = rows[i]['password']


                let temp_html = `<blockquote class="blockquote mb-0">
                                    <p id="${comment_id}">${comment}</p>
                                    <form class="hidden-comment"><textarea id="${comment_id}-hidden">${comment}</textarea> 
                                    <div class="form-floating">
                                        <div id="${comment_id}-original">
                                        <input <p id=password value="${password}"></p>
                                        </div>
                                        <div id="${comment_id}-password">
                                    <input  id="password_update" type="password" maxlength="4"  class="form-control" placeholder="password" aria-describedby="basic-addon1">
                                        </div>
                                    </div>
                                        <footer class="blockquote-footer">${name} (${time})</footer>
                                        <button onclick="register_updated_comment('${comment_id}-hidden')" type="button" id="${comment_id}-register-btn" class="btn3 btn-outline-dark">등록</button>
                                        <button onclick="update_comment('${comment_id}','${password}')" type="button" id="${comment_id}-update-btn" class="btn2 btn-outline-warning">수정</button>
                                        <button onclick="delete_comment('${comment_id}')" type="button" id="${comment_id}-delete-btn" class="btn4 btn-outline-danger">삭제</button>
                                        <button onclick="delete_comment_hidden('${comment_id}')" type="button" id="${comment_id}-delete" class="btn6 btn-outline-danger">삭제</button>
                                    </form>
                                </blockquote>
                                <hr>`;
                $('#comment_box').prepend(temp_html)
                 document.getElementById(comment_id + '-hidden').style.display = 'none';//댓글 수정창 숨기기
                document.getElementById(comment_id + '-password').style.display = 'none';
                document.getElementById(comment_id + '-register-btn').style.display = 'none';//댓글 수정확인버튼 숨기기
                document.getElementById(comment_id + '-original').style.display = 'none';
                document.getElementById(comment_id + '-delete').style.display = 'none';


            }
        }
    });
}
function update_comment(comment_id) {
    document.getElementById(comment_id).style.display = 'none';
    document.getElementById(comment_id + '-hidden').style.display = 'block';
    document.getElementById(comment_id + '-update-btn').style.display = 'none';
    document.getElementById(comment_id + '-register-btn').style.display = 'block';
    document.getElementById(comment_id + '-delete-btn').style.display = 'none';
    document.getElementById(comment_id + '-password').style.display = 'block';
    document.getElementById(comment_id + '-delete').style.display = 'none';

}

function delete_comment(comment_id) {
    document.getElementById(comment_id).style.display = 'none';
    document.getElementById(comment_id + '-hidden').style.display = 'none';
    document.getElementById(comment_id + '-update-btn').style.display = 'none';
    document.getElementById(comment_id + '-register-btn').style.display = 'none';
    document.getElementById(comment_id + '-delete-btn').style.display = 'none';
    document.getElementById(comment_id + '-password').style.display = 'block';
    document.getElementById(comment_id + '-delete').style.display = 'block';
}




function register_updated_comment(comment_id_hidden) {
    let comment = document.getElementById(comment_id_hidden).value;
    let pwd1 = $('#password').val();
    let pwd2 = $('#password_update').val();
    if ( pwd1 != '' && pwd2 == '' ) {
            null;
        } else if (pwd1 != "" || pwd2 != "") {
            if (pwd1 == pwd2) {
                $.ajax({
                    type: 'POST',
                    url: '/update_commentSW',
                    data: {comment_id_give: comment_id_hidden.slice(0, -7), comment_give: comment},
                    success: function (response) {
                        alert(response['msg'])
                        window.location.reload();
                    },
                });
            } else {
                alert("비밀번호가 일치하지 않습니다.");

            }
        }


    document.getElementById(comment_id).style.display = 'block';
    document.getElementById(comment_id + '-hidden').style.display = 'none';
    document.getElementById(comment_id + '-update-btn').style.display = 'block';
    document.getElementById(comment_id + '-register-btn').style.display = 'none';
    document.getElementById(comment_id + '-delete-btn').style.display = 'block';
    document.getElementById(password + '-password').style.display = 'none';
}

function save_commentSW() {
    let comment_SW = $('#comment').val()
    let name_SW = $('#name').val()
    let time_SW = new Date().toLocaleString('ko-KR')
    let password_SW = $('#pwd').val()
    $.ajax({
        type: 'POST',
        url: '/comments_SW',
        data: {comment_give: comment_SW, name_give: name_SW, time_give: time_SW, password_give: password_SW},
        success: function (response) {
            alert(response['msg'])
            window.location.reload();
        }
        });
}

function delete_comment_hidden(comment_id) {
    let pwd1 = $('#password').val();
    let pwd2 = $('#password_update').val();
    if (pwd1 != '' && pwd2 == '') {
        null;
    } else if (pwd1 != "" || pwd2 != "") {
        if (pwd1 == pwd2) {
            $.ajax({
                type: 'POST',
                url: '/delete_SW',
                data: {comment_give: comment_id},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload();
                }
            });
        } else {
            alert("비밀번호가 일치하지 않습니다.");

        }
    }

}

