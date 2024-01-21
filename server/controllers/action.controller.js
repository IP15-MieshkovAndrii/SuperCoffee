const sequelize = require('../config/db');
const Action  = require('../models/action.model');
const { respondWithJSON, respondWithError } = require('../routes/responses');

async function postAction(req, res) {
    let data = '';
      
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', () => {
        try {
            const { user_id, product_id, action_type } = JSON.parse(data);

            if (!user_id || !product_id || !action_type) {
                return respondWithError(res, 400, 'Invalid request. Missing required fields.');
            }

            sequelize.sync()
                .then(() => {
                    Action.create({
                        user_id,
                        product_id,
                        action_type,
                    }).then(newAction => {
                        respondWithJSON(res, 201, newAction);
                    }).catch((error) => {
                        console.error('Failed to create a new record : ', error);
                    });
                
                }).catch((error) => {
                    console.error('Unable to create table : ', error);
                });
            
        } catch (error) {
            console.error('Error creating action:', error);
            respondWithError(res, 500, 'Internal Server Error');
        }
    });
}

module.exports = { postAction };
