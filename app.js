console.log('Giphy Party!');
// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      RANDOM GIF

// ==============================================================

async function getRandom(){
    const result=await axios.get('https://api.giphy.com/v1/gifs/random?api_key=1yUohy63NtIDnPYTqgM8q3yZRYIH23QV&tag=&rating=g');
    const imageLink=result.data.data.images.fixed_height.url;
    $('img').attr('src',`${imageLink}`);
}