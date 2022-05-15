const categoriesList = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesList.length);
console.log('');

categoriesList.forEach((element) => {
    console.log(`Category: ${element.querySelector('H2').innerHTML}`);
    console.log(`Elements: ${element.lastElementChild.children.length}`);
    console.log('');
});