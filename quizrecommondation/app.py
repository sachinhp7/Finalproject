# pip install scikit-learn==1.3.2
# pip install numpy
# pip install flask



# Load the model




# load packages==============================================================
from flask import Flask, render_template, request
import pickle
import numpy as np

import pickle
#save files



app = Flask(__name__)

# Load the scaler, label encoder, model, and class names=====================
scaler = pickle.load(open("Models/scaler.pkl", 'rb'))
model = pickle.load(open("Models/model.pkl", 'rb'))
class_names = ['Algebra', 'Set', 'Indices']

# Recommendations ===========================================================
def Recommendations(part_time_job,
                    math_score, history_score, physics_score,
                    total_score):
    # Encode categorical variables

    part_time_job_encoded = 1 if part_time_job else 0

    # Create feature array
    feature_array = np.array([[part_time_job_encoded, math_score, history_score, physics_score,
                               total_score]])

    # Scale features
    scaled_features = scaler.transform(feature_array)

    # Predict using the model
    probabilities = model.predict_proba(scaled_features)

    # Get top five predicted classes along with their probabilities
    top_classes_idx = np.argsort(-probabilities[0])[:3]
    top_classes_names_probs = [(class_names[idx], probabilities[0][idx]) for idx in top_classes_idx]

    return top_classes_names_probs


@app.route('/')
def home():
    return render_template('home.html')


@app.route("/recommend")
def recommend():
    return render_template('recommend.html')

@app.route('/pred', methods=['POST','GET'])
def pred():
    if request.method == 'POST':

        part_time_job = request.form['part_time_job'] == 'true'

        math_score = int(request.form['math_score'])
        history_score = int(request.form['history_score'])
        physics_score = int(request.form['physics_score'])

        total_score = float(request.form['total_score'])

        recommendations = Recommendations(part_time_job,  math_score, history_score, physics_score,

                                          total_score)

        return render_template('results.html', recommendations=recommendations)
    return render_template('home.html')







if __name__ == '__main__':
    app.run(debug=True)