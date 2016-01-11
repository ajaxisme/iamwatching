import pymongo
from pymongo import MongoClient

client = MongoClient('mongodb://localhost:27017')

#Database name
db = client.vdb

#Collection name
collection = db.videos

#Insert an entry
video = {
		'id': 3,
		'title': 'video3',
		'url': 'url3'
		}
video_id = collection.insert_one(video).inserted_id
print str(video_id) + ' inserted'

#Find One document in the collection
print collection.find_one()
print collection.find_one({'id':3})

#Find all documents
for video in collection.find():
	print video

#Counting
print collection.count()

#Updating a document
result = collection.update_one({'id': 3},{"$set":{"title":"video4"}})

#Delete a document
result = collection.delete_many({'id': 3})
