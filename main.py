from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
from flask_cors import CORS
import json

# Create an instance of Flask
app = Flask(__name__)
CORS(app)

# Use flask_pymongo to set up mongo connection
app.config["MONGO_URI"] = "mongodb://localhost:27017/Project_2"
mongo = PyMongo(app)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Query all passengers
    results = mongo.db.Labor.find({},{"_id": 0 })

    listDump = []

    for r in results:
        listDump.append(r)

    return jsonify(listDump)

# @app.route("/api/states")
# def names():

#     # Query all passengers
#     results = mongo.db.Labor.find({},{"_id": 0 })

#     listDump = []

#     for r in results:
#         listDump.append(r)

#     return jsonify(listDump)

if __name__ == "__main__":
    app.run(debug=True)