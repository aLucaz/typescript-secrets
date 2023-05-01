type MessageData = Record<string, string>

function replaceKeywordsInMessageText (message: string, data: MessageData): string {
  const regex = new RegExp(':(' + Object.keys(data).join('|') + ')', 'g')
  return message.replace(
    regex,
    function ($1: string) {
      
      console.log($1)
      return data[$1]
    }
  )
}

const url = '/task/:module?taskId=:taskId#:hash'
const updatedUrl = replaceKeywordsInMessageText(url, {
  module: 'm1',
  taskId: 't1',
  hash: 'h1'
});

console.log(url)
console.log(updatedUrl)