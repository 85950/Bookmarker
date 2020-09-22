const bookmarkName = document.getElementById('bookmarkName')
const bookmarkURL = document.getElementById('bookmarkURL')
const submitButton = document.getElementById('submitButton')
const bookmarkedField = document.getElementById('bookmarking')

function main(){
    submitButton.addEventListener('click', bookmark)
}

function bookmark(){
    let key = bookmarkName.value;
    let value = bookmarkURL.value;

    if (key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
};




for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key)
    console.log(value)
    
    bookmarkedField.innerHTML += `${key}`;
    var button = document.createElement('BUTTON')
    var deleteButton = document.createElement('button')
    deleteButton.innerHTML = `Delete`
    bookmarkedField.appendChild(deleteButton)
    deleteButton.setAttribute(`onclick`, "removeKey()")
    button.classList.add('bookmarkedButtons')
    deleteButton.classList.add('bookmarkedButtons')
    button.innerHTML = `Visit`
    bookmarkedField.appendChild(button)
    button.setAttribute('onclick', `window.location.href="${value}"`)
    bookmarkedField.innerHTML += `<br>`
    console.log(bookmarkedField)
    function removeKey(){
        localStorage.removeItem(key)
        location.reload();
    }
}

main()
