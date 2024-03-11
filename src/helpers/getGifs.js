
export const getGifs = async(category) =>{


    const limit =10;

    const url = `https://api.giphy.com/v1/gifs/search?api_key=SXehuQA9r9CAeRi0BGgFJUG7aJCpBIJ4&q=${ category }&limit=${limit}&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch( url );

    const { data = [] } =await resp.json();

    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.fixed_width.url
    }))

    return gifs;

  }
