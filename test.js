function replaceKeywordsInMessageText(message, data) {
    var regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g');
    return message.replace(regex, function (m, $1) {
        console.log(m);
        console.log($1);
        return data[$1] || m;
    });
}
var url = '/task/:module?taskId=:taskId#:hash';
var updatedUrl = replaceKeywordsInMessageText(url, {
    module: 'm1',
    taskId: 't1',
    hash: 'h1'
});
console.log(url);
console.log(updatedUrl);
