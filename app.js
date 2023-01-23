const axios = require('axios');
const { access_token, page_id } = require('./config');

const instaPublish = async (message, imageUrl) => {
    try {

        //CREAR CONTENEDOR----------- POST que se utiliza para crear un contenedor de medios en la página especificada
        const { data } = await axios.post(`https://graph.facebook.com/v15.0/${page_id}/media`, {
            access_token,
            message,
            image_url: imageUrl
        });

        //PUBLICAR CONTENEDOR----------- POST que se utiliza para publicar el contenedor de medios recién creado en la página especificada
        await axios.post(`https://graph.facebook.com/v15.0/${page_id}/media_publish`, {
            access_token,
            creation_id: data.id,
            published: true,
        });
        console.log("Subido correctamente!!");
        
    } catch (error) {
        console.log(error);
    }
}

instaPublish('Hello World', 'https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/');




