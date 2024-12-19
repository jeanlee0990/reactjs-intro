const strings = ['apple', 'banana', 'kiwi', 'orange'];

function sortByLength(arr) {
    return arr.sort((a, b) => a.length - b.length);
}

const sortedStrings = sortByLength(strings);

window.onload = () => {
    document.getElementById('input-array').textContent = JSON.stringify(strings);
    document.getElementById('sorted-array').textContent = JSON.stringify(sortedStrings);
};
