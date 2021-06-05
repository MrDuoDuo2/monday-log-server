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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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

        httpRequest(this.url, data);
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


function httpRequest(url,data) {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
        if (xmlhttp.status != 200) {
            console.error('[ERROR] Send message to Monday Log Server...failed');
        }
        var response =xmlhttp.response;
        console.log(response)
    }

    xmlhttp.onerror = function(){
        console.error("[ERROR] cURL Error (" + xmlhttp.error + "):" + xmlhttp.error)
    }

    xmlhttp.open("POST", url, false);
    // xmlhttp.setRequestHeader('user-agent', 'MondayLogClient/1.0 (+https://github.com/fifilyu/monday-log-server)');
    xmlhttp.setRequestHeader("content-type", "application/json");
    // xmlhttp.setRequestHeader("Origin","http://127.0.0.1:8000i");
    xmlhttp.send(JSON.stringify(data));
}