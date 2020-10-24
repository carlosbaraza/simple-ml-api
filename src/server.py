from flask import Flask, jsonify, request
from inference import sentiment_analysis, text_generation, summarize, t5_task
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


@app.route('/summarize', methods=['POST'])
@cross_origin()
def summarize_post():
    data = request.json
    result = summarize(data['text'])
    print(result)
    return jsonify(result)


@app.route('/t5-task', methods=['POST'])
@cross_origin()
def t5_task_post():
    data = request.json
    result = t5_task(data['task'])
    return jsonify(result)
