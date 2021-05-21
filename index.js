






function Search(){
    const BaseLink = 'https://www.roblox.com/games/?keyword='
    const TextArea = document.getElementById("Search").value
    const KeyWord = TextArea
    
   const hello = BaseLink.concat(KeyWord)
   document.getElementById("link").href = hello
    
}

