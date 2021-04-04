console.log('This is drag and drop utility');

// const imgBox = document.querySelector('.imgBox');
// const whiteBoxes = document.getElementsByClassName('whiteBox');

// // Event listeners for draggable element imgBox
// imgBox.addEventListener('dragstart', (e) => {
//     console.log('DragStart has been triggered');
//     e.target.className += ' hold';
//     setTimeout(() => {
//         e.target.className = 'hide';
//     }, 0);

// });

// imgBox.addEventListener('dragend', (e) => {
//     console.log('DragEnd has been triggered');
//     e.target.className = 'imgBox';
// });

// for (whiteBox of whiteBoxes) {
//     whiteBox.addEventListener('dragenter', (e) => {
//         console.log('DragEnter has been triggered');
//         e.target.className += ' dashed'; 
//     })

//     whiteBox.addEventListener('dragover', (e) => {
//         e.preventDefault();
//         console.log('DragOver has been triggered');
//     });

   

//     whiteBox.addEventListener('dragleave', (e) => {
//         console.log('DragLeave has been triggered');
//         e.target.className = 'whiteBox';
//     })

//     whiteBox.addEventListener('drop', (e) => {
//         console.log('Drop has been triggered');
//         e.target.append(imgBox);
//     })
// }

let whiteboxes=document.querySelectorAll('.whitebox');
// console.log(whiteboxes);

let imgbox=document.getElementById('imgBox');
// imgbox.addEventListener('dragstart',(e)=>{

// console.log("Drag Started");

// });
// const imgBox = document.querySelector('.imgBox');
// console.log(imgBox);
imgbox.addEventListener('dragstart',(e)=>{
    console.log("Drag Event Triggers star");
    e.target.className+=' drgstart';
    // e.target.className += ' hold';
    setTimeout((e) => {
        e.target.className='hide';
    }, 0);
 

});
imgbox.addEventListener('dragend',()=>{
    console.log("Drag Event End");

});

for(whiteboxe of whiteboxes){
    whiteboxe.addEventListener('dragenter',()=>{
        console.log('Dragenter');


    });
    whiteboxe.addEventListener('dragover',(e)=>{
    
    
        console.log('Dragover');
        e.preventDefault();

    });
    whiteboxe.addEventListener('dragleave',()=>{
        console.log('Drag leave');
        e.target.className = 'whitebox';


    });
    whiteboxe.addEventListener('drop',(e)=>{
        console.log('droped');
        // e.target.appned(imgbox);
        e.target.append(imgBox);

    });
}