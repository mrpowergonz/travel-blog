from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/consejos')
def about():
    return render_template('consejos.html')

@app.route('/empleos')
def blog():
    return render_template('empleos.html')

@app.route('/recursos')
def contact():
    return render_template('recursos.html')

if __name__ == '__main__':
    app.run(debug=True)
