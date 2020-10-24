from flask import Flask, jsonify, request
from inference import sentiment_analysis
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)


@app.route('/sentiment-analysis', methods=['POST'])
@cross_origin()
def hello_world():
    data = request.json
    print(data)
    result = sentiment_analysis(data['text'])
    return jsonify(result)
