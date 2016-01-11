#!/usr/bin/python

from apiclient.discovery import build
from apiclient.errors import HttpError
from oauth2client.tools import argparser
import pprint

pp = pprint.PrettyPrinter(indent=4)

# Set DEVELOPER_KEY to the API key value from the APIs & auth > Registered apps
# tab of
#   https://cloud.google.com/console
# Please ensure that you have enabled the YouTube Data API for your project.

with open('secret', 'r') as f:
	data = f.read()
	key = data.split('\n')[0].split()[0]

DEVELOPER_KEY = key
YOUTUBE_API_SERVICE_NAME = "youtube"
YOUTUBE_API_VERSION = "v3"

#def youtube_search(options):
def youtube_search(q, max_results):
	youtube = build(YOUTUBE_API_SERVICE_NAME, YOUTUBE_API_VERSION,
		developerKey=DEVELOPER_KEY)

	# Call the search.list method to retrieve results matching the specified
	# query term.
	search_response = youtube.search().list(
		q=q,
		part="id,snippet",
		maxResults=max_results
		).execute()

	videos = []

	# Add each result to the appropriate list, and then display the lists of
	# matching videos, channels, and playlists.
	for i, search_result in enumerate(search_response.get("items", [])):
		if search_result["id"]["kind"] != "youtube#video":
			del(search_response["items"][i])

	return search_response.get("items", [])


if __name__ == "__main__":
	argparser.add_argument("--q", help="Search term", default="Google")
	argparser.add_argument("--max-results", help="Max results", default=1)
	args = argparser.parse_args()

	try:
		youtube_search(args.q, args.max_results)
	except HttpError, e:
		print "An HTTP error %d occurred:\n%s" % (e.resp.status, e.content)
