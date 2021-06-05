const LogType =
{
    Error: 0,
    Warn: 1,
    Info: 2,
    Debug: 3,
    Trace: 4,
    BeginCheckpoint: 5,
    EndCheckpoint: 6,
    Variable: 7,
    Input: 8,
    Output: 9,
}

export class MondayLog {
    constructor(url, charset, location) {
        this.url = url;
        this.charset = charset;
        this.location = location;
    }


    beginCheckpoint(checkpoint, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": null,
            "LogType": LogType.BeginCheckpoint,
            "Checkpoint": checkpoint,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }

    endCheckpoint(checkpoint, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": null,
            "LogType": LogType.EndCheckpoint,
            "Checkpoint": checkpoint,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }

    variable(name, value, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": null,
            "LogType": LogType.Variable,
            "Checkpoint": null,
            "VarName": name,
            "VarValue": value,
        };

        httpRequest(this.url, json_encode(data));
    }

    input(name, value, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": null,
            "LogType": LogType.Input,
            "Checkpoint": null,
            "VarName": name,
            "VarValue": value,
        };

        httpRequest(this.url, json_encode(data));
    }

    output(name, value, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": null,
            "LogType": LogType.Output,
            "Checkpoint": null,
            "VarName": name,
            "VarValue": value,
        };

        httpRequest(this.url, json_encode(data));
    }

    error(message, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": message,
            "LogType": LogType.Error,
            "Checkpoint": null,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }

    warn(message, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": message,
            "LogType": LogType.Warn,
            "Checkpoint": null,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }

    info(message, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": message,
            "LogType": LogType.Info,
            "Checkpoint": null,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }

    debug(message, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": message,
            "LogType": LogType.Debug,
            "Checkpoint": null,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }

    trace(message, location = null) {
        let data = {
            "Location": is_null(location) ? this.location : location,
            "Message": message,
            "LogType": LogType.Trace,
            "Checkpoint": null,
            "VarName": null,
            "VarValue": null,
        };

        httpRequest(this.url, json_encode(data));
    }
}


function is_null(data) {
    return data == null;
}

function json_encode(data) {
    return JSON.stringify(data);
}

// function iconv(text)
// {
//     return this.charset == 'UTF-8' ? text : iconv(this.charset, "UTF-8//TRANSLIT//IGNORE", text);
// }

function httpRequest(url, data) {
    console.log(data);
    return fetch(url, {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
          'user-agent': 'Mozilla/4.0 MDN Example',
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, cors, *same-origin
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // *client, no-referrer
    }).then(response => {
        if (response.status != 200) {
            throw new Exception('[ERROR] Send message to Monday Log Server...failed');
        }
    }).catch(error => {
        console.error("[ERROR] cURL Error (" + error + "):" + error)
    })
}

// function httpRequest(url,data) {
//     var xmlhttp;
//     xmlhttp = new XMLHttpRequest();

//     xmlhttp.onload = function () {
//         if (xmlhttp.response.status != 200) {
//             throw new Exception('[ERROR] Send message to Monday Log Server...failed');
//         }
//     }

//     xmlhttp.onerror = function(){
//         console.error("[ERROR] cURL Error (" + xmlhttp.error + "):" + xmlhttp.error)
//     }

//     xmlhttp.open("POST", url, true);
//     xmlhttp.setRequestHeader('yser-agent', 'MondayLogClient/1.0 (+https://github.com/fifilyu/monday-log-server)');
//     xmlhttp.setRequestHeader("content-type", "application/json; charset=utf-8");
//     xmlhttp.send(data);
// }