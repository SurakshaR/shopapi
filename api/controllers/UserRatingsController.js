/**
 * UserRatingsController
 *
 * @description :: Server-side logic for managing userratings
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    addUserRatings: function(req, res) {
        console.log('its here')
        //req.body
       
    
        UserRatings.addUserRatings(req.body, function(response) {
                    res.setHeader('Access-Control-Allow-Origin', '*')
                    res.json(response);
                });
        
            },

            getUserRatings: function(req, res) {
                console.log('its here')
                //req.body
               
            
                UserRatings.getUserRatings(function(response) {
                            res.setHeader('Access-Control-Allow-Origin', '*')
                            res.json(response);
                        });
                
                    },
                    getUserFeedBack: function(req, res) {
                        console.log('its here')
                        //req.body
                       
                    
                        UserRatings.getUserFeedBack(function(response) {
                                    res.setHeader('Access-Control-Allow-Origin', '*')
                                    res.json(response);
                                });
                        
                            }

};

