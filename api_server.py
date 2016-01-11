#!flask/bin/python
from flask import Flask, abort, make_response, request
from flask.ext.jsonpify import jsonify
import pytube
import json

app = Flask(__name__)

videos = [
	{
		'id' : 1,
		'title' : u'Video1',
		'url' : u'https://www.youtube.com/watch?v=nCD2hj6zJEc'
	},
	{
		'id' : 2,
		'title' : u'Video2',
		'url' : u'https://www.youtube.com/watch?v=1s74PBDvbcA'
	}
]
	
#Get all videos
@app.route('/vid/api/v1.0/videos', methods=['GET'])
def get_videos():
	return jsonify({'videos': videos})

#Search and return videos by keyword
@app.route('/vid/api/v1.0/vsearch', methods=['GET'])
def search_results():
	q = request.args.get('q')
	max_results = request.args.get('max_results') or 5
	results = pytube.youtube_search(q, max_results)
	return jsonify({'videos':results})

#Get particular id
@app.route('/vid/api/v1.0/videos/<int:vid>', methods=['GET'])
def get_video(vid):
	for video in videos:
		if video['id'] == vid:
			return jsonify({'video':video})
	abort(404)

#Post some video
@app.route('/vid/api/v1.0/videos', methods=['POST'])
def post_video():
	if not request.json or not 'title' in request.json:
		abort(400)
	pass

@app.route('/vid/api/v1.0/videos/<int:vid>', methods=['PUT'])
def update_video(vid):
	#Update video
	pass

@app.route('/vid/api/v1.0/videos/<int:vid>', methods=['DELETE'])
def delete_video(vid):
	#Delete video
	pass

@app.errorhandler(404)
def not_found(error):
	return make_response(jsonify({'error': 'Not found'}), 404)

@app.errorhandler(400)
def bad_request(error):
	return make_response(jsonify({'error': 'Bad Request'}), 400)

if __name__ == "__main__":
	app.run(debug=True)
