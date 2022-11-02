from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

from pymongo import MongoClient
client = MongoClient('mongodb+srv://test:sparta@cluster0.qcwopa4.mongodb.net/?retryWrites=true&w=majority')
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/popup1')
def popup1():
    return render_template('Profile_SW.html')

@app.route('/popup2')
def popup2():
    return render_template('Profile_SE.html')

@app.route('/popup3')
def popup3():
    return render_template('Profile_YB.html')


@app.route('/popup4')
def popup4():
    return render_template('Profile_SJ.html')

@app.route('/popup5')
def popup5():
    return render_template('Profile_YJ.html')

@app.route("/comments_SW", methods=["POST"])
def comment_post1():
    comment_receive = request.form['comment_give']
    doc = {
        'comment' : comment_receive,
    }
    db.comments_SW.insert_one(doc)

    return jsonify({'msg': '작성 완료!'})

@app.route("/comments_SE", methods=["POST"])
def comments_post2():
    comment_receive = request.form['comment_give']
    doc = {
        'comment': comment_receive,
    }
    db.comments_SE.insert_one(doc)

    return jsonify({'msg': '작성 완료!'})

@app.route("/comments_YB", methods=["POST"])
def comments_post3():
    comment_receive = request.form['comment_give']
    doc = {
        'comment': comment_receive,
    }
    db.comments_YB.insert_one(doc)

    return jsonify({'msg': '작성 완료!'})

@app.route("/comments_SJ", methods=["POST"])
def comments_post4():
    comment_receive = request.form['comment_give']
    doc = {
        'comment': comment_receive,
    }
    db.comments_SJ.insert_one(doc)

    return jsonify({'msg': '작성 완료!'})

@app.route("/comments_YJ", methods=["POST"])
def comments_post5():
    comment_receive = request.form['comment_give']
    doc = {
        'comment': comment_receive,
    }
    db.comments_YJ.insert_one(doc)

    return jsonify({'msg': '작성 완료!'})

@app.route("/delete_SW", methods=['POST'])
def delete_comment1():
    delete_receive = request.form['comment_give']
    db.comments_SW.delete_one({'comment': delete_receive})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/delete_SE", methods=['POST'])
def delete_comment2():
    delete_receive = request.form['comment_give']
    db.comments_SE.delete_one({'comment': delete_receive})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/delete_YB", methods=['POST'])
def delete_comment3():
    delete_receive = request.form['comment_give']
    db.comments_YB.delete_one({'comment': delete_receive})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/delete_SJ", methods=['POST'])
def delete_comment4():
    delete_receive = request.form['comment_give']
    db.comments_SJ.delete_one({'comment': delete_receive})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/delete_YJ", methods=['POST'])
def delete_comment5():
    delete_receive = request.form['comment_give']
    db.comments_YJ.delete_one({'comment': delete_receive})
    return jsonify({'msg': '삭제 완료!'})

@app.route("/comments_SW", methods=["GET"])
def comments_get1():
    comments_list = list(db.comments_SW.find({}, {'_id': False}))
    return jsonify({'comments': comments_list})

@app.route("/comments_SE", methods=["GET"])
def comments_get2():
    comments_list = list(db.comments_SE.find({}, {'_id': False}))
    return jsonify({'comments': comments_list})

@app.route("/comments_YB", methods=["GET"])
def comments_get3():
    comments_list = list(db.comments_YB.find({}, {'_id': False}))
    return jsonify({'comments': comments_list})

@app.route("/comments_SJ", methods=["GET"])
def comments_get4():
    comments_list = list(db.comments_SJ.find({}, {'_id': False}))
    return jsonify({'comments': comments_list})

@app.route("/comments_YJ", methods=["GET"])
def comments_get5():
    comments_list = list(db.comments_YJ.find({}, {'_id': False}))
    return jsonify({'comments': comments_list})

if __name__ == '__main__':
    app.run('0.0.0.0', port=5005, debug=True)
