const query2obj = (qparams) => {
    var qparams = qparams.replace('?','');
    qparams = qparams.split('&');

    for(let a in qparams){
        qparams[a] = qparams[a].split('=');
    }

    for(let a in qparams){
        qparams[a] = {
            [qparams[a][0]]: qparams[a][1]
        }
    }

    let obj = {}
    for(let a of qparams){
        obj = Object.assign({}, obj, a);
    }

    return obj;
}

export default query2obj;