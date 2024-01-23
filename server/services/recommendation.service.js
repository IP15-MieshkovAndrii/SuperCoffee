const sequelize = require('../config/db');
const Action = require('../models/action.model');
const { formatData } = require('../utils/recommendation.functions');
const natural = require('natural');
const TfIdf = natural.TfIdf;
const tokenizer = new natural.WordTokenizer();

const createRecommendations = async (id, products) => {
    const formatProducts = formatData(products);
    let recommendations = [];
    let userActions;
    let result = [];

    try {
        await sequelize.sync();
        let actions;

        if (id) {
            actions = await Action.findAll({
                where: {
                    user_id: id,
                },
            });
        } else {
            actions = await Action.findAll();
        }

        userActions = actions;


        const productActionsMatrix = {};

        userActions.forEach((action) => {
            const { product_id, action_type } = action;
            if (!productActionsMatrix[product_id]) {
                productActionsMatrix[product_id] = [];
            }

            productActionsMatrix[product_id].push(action_type);
        });

        const tfidf = new TfIdf();
        formatProducts.forEach((product) => {
            if (productActionsMatrix[product.id]) {
                const actions = productActionsMatrix[product.id].join(' ');
                tfidf.addDocument(tokenizer.tokenize(actions), { product });
            }
        });

        const userPreferences = userActions.map((action) => action.action_type).join(' ');
        const userVector = tokenizer.tokenize(userPreferences);

        tfidf.tfidfs(userVector, (index, measure, { product }) => {
            recommendations.push({ product, score: measure });
        });

        recommendations.sort((a, b) => b.score - a.score);


        let recs = recommendations.slice(0, 3);
        let recProducts = [];

        if (recs.length && recs.length > 0) {
            recs.forEach((rec) => {
                recProducts.push(products.find((product) => product.id === rec.product.id));
            });
        }
        while (recProducts.length < 3) {
            const sortedProducts = products.sort((a, b) => b.updated - a.updated);
            const remainingProducts = sortedProducts.filter((product) => !recProducts.includes(product.id));
            if (remainingProducts.length > 0) {
                recProducts.push(remainingProducts[0]);
            } else {
                break;
            }
        }

        result = recProducts;
    } catch (error) {
        console.error('Error in createRecommendations:', error);
    }


    return result;
};

module.exports = { createRecommendations };
