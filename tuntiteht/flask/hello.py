import json

from flask import Flask, Response

app = Flask(__name__)
@app.route('/hello/<kertaa>')
def sanohello(kertaa):
    try:
        #args = request.args
        kertaa = int(kertaa)
        sano = "Hello world! "
        sum = sano * kertaa
        response = {
            "sano": sano,
            "kertaa": kertaa,
            "sum": sum,
            "status": 200
        }
        return sum
    
    except ValueError:
        response = {
            "message": "invalid number as addend!!!! virheelinne syöte",
            "status": 400
        }
        json_response = json.dumps(response)
        http_response = Response(request=json_response, status=400, mimetype="application/json")
        return http_response

@app.errorhandler(404)
def page_not_found(error_code):
    response = {
        "message": "invalid endpoint:/ virheellinen päätepiste, sivua ei löydy",
        "status": 404
    }
    json_response = json.dumps(response)
    http_response = Response(response=json_response, status=404, mimetype="application/json")
    return http_response

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=3000, use_reloader=True)