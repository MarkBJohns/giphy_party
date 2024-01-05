console.log('Giphy Party!');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      GIF SEARCH FUNCTIONS

// ==============================================================

async function getRandom(){
    const result=await axios.get('https://api.giphy.com/v1/gifs/random?api_key=1yUohy63NtIDnPYTqgM8q3yZRYIH23QV&tag=&rating=g');
    const imageLink=result.data.data.images.fixed_height.url;
    const newGif=$('<img>').attr('src',`${imageLink}`);
    $('main').append(newGif);
}

async function getSearch(term){
    const result=await axios.get(`https://api.giphy.com/v1/gifs/random?api_key=1yUohy63NtIDnPYTqgM8q3yZRYIH23QV&tag=${term}&rating=g`);
    const imageLink=result.data.data.images.fixed_height.url;
    const newGif=$('<img>').attr('src',`${imageLink}`);
    $('main').append(newGif);
}

// ================================================================================================================

//      ADD GIFS TO THE PAGE

// ==============================================================

$(document).ready(function(){
    $('form').submit(function(e){
        e.preventDefault();
        const searchTerm=$('#search').val();
        if(searchTerm.trim()===''){
            getRandom();
        }else{
            getSearch(searchTerm);
        }
    })
});

// ==============================================================

//      CHANGING THE BUTTON TO REFLECT A SEARCH TERM OR NOT

// ==============================================================

$(document).ready(function(){
    $('#search').on('input',function(){
        let search=$('#search').val();
        if(search){
        $('#submit').val('Submit');
        }else{
            $('#submit').val('Random');
        }
    })
})

// ================================================================================================================

//      REMOVING THE GIFS

// ==============================================================

$(document).ready(function(){
    $('#remove').on('click',function(){
        $('main img').remove();
    })
});