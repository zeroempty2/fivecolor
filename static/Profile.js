
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
            for (let i = 0; i < rows.length; i++) {
                let comment = rows[i]['comment']

                let temp_html = `<div class="card">
                                    <div class="card-body">
                                            <blockquote class="blockquote mb-0">
                                                        <p>${comment}</p>
                                                        <button onclick="delete_commentSW('${comment}')" type="button"  class="btn2 btn-outline-danger">삭제</button>
                                            </blockquote>
                                        <hr class="line">
                                    </div>
                                 </div>`
                $('#comment_box').prepend(temp_html)
            }
        }
    });
}
function save_commentSW() {
    let comment_SW = $('#comment').val()

    $.ajax({
        type: 'POST',
        url: '/comments_SW',
        data: {comment_give: comment_SW},
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
        });
}
function delete_commentSW(comment){
    $.ajax({
        type: 'POST',
        url: '/delete_SW',
        data: {comment_give:comment},
        success: function (response) {
            alert(response['msg'])
            window.location.reload()
        }
        });
}

//ProfileSE
function show_commentsSE() {
        $.ajax({
            type: 'GET',
            url: '/comments_SE',
            data: {},
            success: function (response) {
                let rows = response['comments']
                for (let i = 0; i < rows.length; i++) {
                    let comment = rows[i]['comment']

                    let temp_html = `<div class="card">
                                        <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                            <p>${comment}</p>
                                                            <button onclick="delete_commentSE('${comment}')" type="button"  class="btn2 btn-outline-danger">삭제</button>
                                                </blockquote>
                                            <hr class="line">
                                        </div>
                                     </div>`
                    $('#comment_box').prepend(temp_html)
                }
            }
        });
    }
    function save_commentSE(){
        let comment_SE = $('#comment').val()

        $.ajax({
                type: 'POST',
                url: '/comments_SE',
                data: { comment_give : comment_SE},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
    }
    function delete_commentSE(comment){
        $.ajax({
            type: 'POST',
            url: '/delete_SE',
            data: {comment_give:comment},
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
            }
            });
    }

//ProfileYB
function show_commentsYB() {
        $.ajax({
            type: 'GET',
            url: '/comments_YB',
            data: {},
            success: function (response) {
                let rows = response['comments']
                for (let i = 0; i < rows.length; i++) {
                    let comment = rows[i]['comment']

                    let temp_html = `<div class="card">
                                        <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                            <p>${comment}</p>
                                                            <button onclick="delete_commentYB('${comment}')" type="button"  class="btn2 btn-outline-danger">삭제</button>
                                                </blockquote>
                                            <hr class="line">
                                        </div>
                                     </div>`
                    $('#comment_box').prepend(temp_html)
                }
            }
        });
    }
    function save_commentYB(){
        let comment_YB = $('#comment').val()

        $.ajax({
                type: 'POST',
                url: '/comments_YB',
                data: { comment_give : comment_YB},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
    }
    function delete_commentYB(comment){
        $.ajax({
            type: 'POST',
            url: '/delete_YB',
            data: {comment_give:comment},
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
            }
            });
    }

//ProfileYJ
function show_commentsYJ() {
        $.ajax({
            type: 'GET',
            url: '/comments_YJ',
            data: {},
            success: function (response) {
                let rows = response['comments']
                for (let i = 0; i < rows.length; i++) {
                    let comment = rows[i]['comment']

                    let temp_html = `<div class="card">
                                        <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                            <p>${comment}</p>
                                                            <button onclick="delete_commentYJ('${comment}')" type="button"  class="btn2 btn-outline-danger">삭제</button>
                                                </blockquote>
                                            <hr class="line">
                                        </div>
                                     </div>`
                    $('#comment_box').prepend(temp_html)
                }
            }
        });
    }
    function save_commentYJ(){
        let comment_YJ = $('#comment').val()

        $.ajax({
                type: 'POST',
                url: '/comments_YJ',
                data: { comment_give : comment_YJ},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
    }
    function delete_commentYJ(comment){
        $.ajax({
            type: 'POST',
            url: '/delete_YJ',
            data: {comment_give:comment},
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
            }
            });
    }

// ProfileSJ
function show_commentsSJ() {
        $.ajax({
            type: 'GET',
            url: '/comments_SJ',
            data: {},
            success: function (response) {
                let rows = response['comments']
                for (let i = 0; i < rows.length; i++) {
                    let comment = rows[i]['comment']

                    let temp_html = `<div class="card">
                                        <div class="card-body">
                                                <blockquote class="blockquote mb-0">
                                                            <p>${comment}</p>
                                                            <button onclick="delete_commentSJ('${comment}')" type="button"  class="btn2 btn-outline-danger">삭제</button>
                                                </blockquote>
                                            <hr class="line">
                                        </div>
                                     </div>`
                    $('#comment_box').prepend(temp_html)
                }
            }
        });
    }
    function save_commentSJ(){
        let comment_SJ = $('#comment').val()

        $.ajax({
                type: 'POST',
                url: '/comments_SJ',
                data: { comment_give : comment_SJ},
                success: function (response) {
                    alert(response['msg'])
                    window.location.reload()
                }
            });
    }
    function delete_commentSJ(comment){
        $.ajax({
            type: 'POST',
            url: '/delete_SJ',
            data: {comment_give:comment},
            success: function (response) {
                alert(response['msg'])
                window.location.reload()
            }
            });
    }