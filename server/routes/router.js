const actionController = require('../controllers/action.controller');
const recommendationController = require('../controllers/recommendation.controller');
const { responseWithText, respondWithError } = require('./responses');


function router(req, res) {
  const path = req.url;

  switch (path) {
    case '/action':
      if (req.method === 'POST') {
        actionController.postAction(req, res);
      } else {
        respondWithError(res, 405, 'Invalid method for /action');
      }
      break;

    case '/recommendation':
      if (req.method === 'POST') {
        recommendationController.postRecs(req, res);
      } else {
        respondWithError(res, 405, 'Invalid method for /action');
      }
      break;

    default:
      responseWithText(res, 200, 'Not Found');
  }
}

module.exports = router;
