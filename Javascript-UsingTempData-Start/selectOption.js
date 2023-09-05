
const categories = [
    {
        id: 0,
        name: 'Ayaqqabi',
        subcategories: ['Snickers', 'Casual', 'klassik']
    },

    {
        id: 1,
        name: 'Paltar',
        subcategories: ['Gundelik', 'Ziyafet']
    },

    {
        id: 2,
        name: 'Kastyum',
        subcategories: []
    }
];




let mainSelect = document.getElementById("selectMain");
let subCategory = document.getElementById('selectDown');

for (let i = 0; i < categories.length; i++) {
    categoryName = categories[i].name
    //console.log(names);
    let newElement = document.createElement('option');
    newElement.textContent = categoryName;
    newElement.value = categories[i].id;
    mainSelect.appendChild(newElement);
}

function showSubCategories(e) {
    id = e.value;
    let subcategories = categories[id].subcategories;
    subCategory.innerHTML = '<option>Alt Kateqoriya Secin</option>';
    for (let i = 0; i < subcategories.length; i++) {
        categoryName = subcategories[i]
        //console.log(names);
        let newElement = document.createElement('option');
        newElement.textContent = categoryName;
        subCategory.appendChild(newElement);
    }

}


let result = document.querySelector('.result')
function addSpan() {
    let newSpan = document.createElement('span');
    newSpan.textContent = mainSelect.options[mainSelect.selectedIndex].text 
    result.appendChild(newSpan);

    let newSpanSub = document.createElement('span');
    newSpanSub.textContent = subCategory.options[subCategory.selectedIndex].text 
    result.appendChild(newSpanSub);
}