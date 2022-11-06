from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from bson.objectid import ObjectId
from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.qcwopa4.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/comments', methods=['GET'])
def show_comment():
    comment_list = list(db.comments.find({}))
    for comment in comment_list:
        comment['_id'] = str(comment['_id'])

    return jsonify({'comments': comment_list})

@app.route('/comments', methods=['POST'])
def post_comment():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    time_receive = request.form['time_give']
    password_receive = request.form['password_give']

    doc = {
        'comment': comment_receive,
        'name': name_receive,
        'time': time_receive,
        'password': password_receive,
    }

    db.comments.insert_one(doc)

    return jsonify({'msg': '작성 완료'})

@app.route('/comments/delete', methods=['POST'])
def delete_comment():
    comment_id_receive = request.form['comment_give']
    db.comments.delete_one({'_id': ObjectId(comment_id_receive)})

    return jsonify({'msg': '댓글 삭제 완료'})

@app.route('/comments/update', methods=['POST'])
def update_comment():
    comment_id_receive = ObjectId(request.form['comment_id_give'])
    comment_receive = request.form['comment_give']
    db.comments.update_one({'_id': comment_id_receive}, {'$set': {'comment': comment_receive}})

    return jsonify({'msg': '댓글 수정 완료'})

@app.route('/popup1')
def popup1():
    return render_template('Profile_SW.html')



@app.route("/comments_SW", methods=["POST"])
def comment_post1():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    time_receive = request.form['time_give']
    password_receive = request.form['password_give']

    doc = {
        'comment' : comment_receive,
        'name' : name_receive,
        'time' : time_receive,
        'password' : password_receive,
    }

    db.comments_SW.insert_one(doc)

    return jsonify({'msg': '작성 완료'})

@app.route('/update_commentSW', methods=['POST'])
def update_commentSW():
    comment_id_receive = ObjectId(request.form['comment_id_give'])
    comment_receive = request.form['comment_give']

    db.comments_SW.update_one({'_id': comment_id_receive}, {'$set': {'comment': comment_receive}})

    return jsonify({'msg': '방명록 수정 완료'})


@app.route("/delete_SW", methods=['POST'])
def delete_comment1():
    delete_receive = request.form['comment_give']
    db.comments_SW.delete_one({'_id': ObjectId(delete_receive)})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/comments_SW", methods=["GET"])
def comments_get1():
    comments = list(db.comments_SW.find({}))
    for comment in comments:
        comment['_id'] = str(comment['_id'])

    return jsonify({'comments': comments})

@app.route('/popup2')
def popup2():
    return render_template('Profile_SE.html')



@app.route("/comments_SE", methods=["POST"])
def comment_post2():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    time_receive = request.form['time_give']
    password_receive = request.form['password_give']

    doc = {
        'comment' : comment_receive,
        'name' : name_receive,
        'time' : time_receive,
        'password' : password_receive,
    }

    db.comments_SE.insert_one(doc)

    return jsonify({'msg': '작성 완료'})

@app.route('/update_commentSE', methods=['POST'])
def update_commentSE():
    comment_id_receive = ObjectId(request.form['comment_id_give'])
    comment_receive = request.form['comment_give']

    db.comments_SE.update_one({'_id': comment_id_receive}, {'$set': {'comment': comment_receive}})

    return jsonify({'msg': '방명록 수정 완료'})


@app.route("/delete_SE", methods=['POST'])
def delete_comment2():
    delete_receive = request.form['comment_give']
    db.comments_SE.delete_one({'_id': ObjectId(delete_receive)})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/comments_SE", methods=["GET"])
def comments_get2():
    comments = list(db.comments_SE.find({}))
    for comment in comments:
        comment['_id'] = str(comment['_id'])

    return jsonify({'comments': comments})

@app.route('/popup3')
def popup3():
    return render_template('Profile_YB.html')



@app.route("/comments_YB", methods=["POST"])
def comment_post3():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    time_receive = request.form['time_give']
    password_receive = request.form['password_give']

    doc = {
        'comment' : comment_receive,
        'name' : name_receive,
        'time' : time_receive,
        'password' : password_receive,
    }

    db.comments_YB.insert_one(doc)

    return jsonify({'msg': '작성 완료'})

@app.route('/update_commentYB', methods=['POST'])
def update_commentsYB():
    comment_id_receive = ObjectId(request.form['comment_id_give'])
    comment_receive = request.form['comment_give']

    db.comments_YB.update_one({'_id': comment_id_receive}, {'$set': {'comment': comment_receive}})

    return jsonify({'msg': '방명록 수정 완료'})


@app.route("/delete_YB", methods=['POST'])
def delete_comment3():
    delete_receive = request.form['comment_give']
    db.comments_YB.delete_one({'_id': ObjectId(delete_receive)})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/comments_YB", methods=["GET"])
def comments_get3():
    comments = list(db.comments_YB.find({}))
    for comment in comments:
        comment['_id'] = str(comment['_id'])

    return jsonify({'comments': comments})

@app.route('/popup4')
def popup4():
    return render_template('Profile_SJ.html')



@app.route("/comments_SJ", methods=["POST"])
def comment_post4():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    time_receive = request.form['time_give']
    password_receive = request.form['password_give']

    doc = {
        'comment' : comment_receive,
        'name' : name_receive,
        'time' : time_receive,
        'password' : password_receive,
    }

    db.comments_SJ.insert_one(doc)

    return jsonify({'msg': '작성 완료'})

@app.route('/update_commentSJ', methods=['POST'])
def update_commentsSJ():
    comment_id_receive = ObjectId(request.form['comment_id_give'])
    comment_receive = request.form['comment_give']

    db.comments_SJ.update_one({'_id': comment_id_receive}, {'$set': {'comment': comment_receive}})

    return jsonify({'msg': '방명록 수정 완료'})


@app.route("/delete_SJ", methods=['POST'])
def delete_comment4():
    delete_receive = request.form['comment_give']
    db.comments_SJ.delete_one({'_id': ObjectId(delete_receive)})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/comments_SJ", methods=["GET"])
def comments_get4():
    comments = list(db.comments_SJ.find({}))
    for comment in comments:
        comment['_id'] = str(comment['_id'])

    return jsonify({'comments': comments})

@app.route('/popup5')
def popup5():
    return render_template('Profile_YJ.html')



@app.route("/comments_YJ", methods=["POST"])
def comment_post5():
    comment_receive = request.form['comment_give']
    name_receive = request.form['name_give']
    time_receive = request.form['time_give']
    password_receive = request.form['password_give']

    doc = {
        'comment' : comment_receive,
        'name' : name_receive,
        'time' : time_receive,
        'password' : password_receive,
    }

    db.comments_YJ.insert_one(doc)

    return jsonify({'msg': '작성 완료'})

@app.route('/update_commentYJ', methods=['POST'])
def update_commentsYJ():
    comment_id_receive = ObjectId(request.form['comment_id_give'])
    comment_receive = request.form['comment_give']

    db.comments_YJ.update_one({'_id': comment_id_receive}, {'$set': {'comment': comment_receive}})

    return jsonify({'msg': '방명록 수정 완료'})


@app.route("/delete_YJ", methods=['POST'])
def delete_comment5():
    delete_receive = request.form['comment_give']
    db.comments_YJ.delete_one({'_id': ObjectId(delete_receive)})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/comments_YJ", methods=["GET"])
def comments_get5():
    comments = list(db.comments_YJ.find({}))
    for comment in comments:
        comment['_id'] = str(comment['_id'])

    return jsonify({'comments': comments})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
