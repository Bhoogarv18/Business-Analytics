from flask import Flask, request, jsonify
from summarize2 import expect_recom

app = Flask(__name__)

@app.route('/generate_report', methods=['POST'])
def generate_report():
    if request.method == 'POST':
        data = request.json
        if 'text' in data:
            text = data['text']
            result = expect_recom(text)
            return jsonify({'result': result})
        else:
            return jsonify({'error': 'Text not found in request'}), 400
    else:
        return jsonify({'error': 'Only POST requests are allowed'}), 405
    