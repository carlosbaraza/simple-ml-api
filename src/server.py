from flask import Flask, jsonify, request
from inference import sentiment_analysis, text_generation
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app)


@app.route('/sentiment-analysis', methods=['POST'])
@cross_origin()
def sentiment_analysis_post():
    data = request.json
    result = sentiment_analysis(data['text'])
    return jsonify(result)


@app.route('/text-generation', methods=['POST'])
@cross_origin()
def text_generation_post():
    data = request.json
    result = text_generation(data['text'])
    return jsonify(result)
