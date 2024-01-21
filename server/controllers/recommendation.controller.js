
const { respondWithJSON, respondWithError } = require('../routes/responses');
const { createRecommendations } = require('../services/recommendation.service');

async function postRecs(req, res) {
    let data = '';
      
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', async () => {
        try {
            
            const { user_id, products } = JSON.parse(data);

            if (!products) {
                return respondWithError(res, 400, 'Invalid request. Missing required fields.');
            }


            createRecommendations(user_id, products)
            .then((recommendations) => {
                respondWithJSON(res, 201, recommendations);
            })

        } catch (error) {
            console.error('Error creating action:', error);
            respondWithError(res, 500, 'Internal Server Error');
        }
    });
}

module.exports = { postRecs };
