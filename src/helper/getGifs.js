export const getGifs = async (category) =>{
    const apiUrl=`https://api.giphy.com/v1/gifs/search?api_key=hQZ6FSpTrJJ1COuGVe0j2f9ZptzJ1Ak4&q=${encodeURI(category)}&limit=10`
    const resp = await fetch ( apiUrl );
    const { data } = await resp.json();
    const gifs = data.map( img  => {
        return {
            id: img.id,
            title: img.title,
            url:img.images?.downsized_medium.url
        }
    })
    return gifs;
}