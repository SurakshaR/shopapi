/**
 * UserRatings.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
tableName:"userRatings",
  attributes: {
    DOB: {
        type: 'date'
       // defaultsTo: '111-222-3333'
      },
      foodRate:{
        type: 'integer'
       // defaultsTo: '111-222-3333'
      },
      ambianceRate: {
        type:'integer'
       // defaultsTo: '111-222-3333'
      },
      serviceRate: {
        type:'integer'
       // defaultsTo: '111-222-3333'
      },
      priceRate:{
        type: 'integer'
       // defaultsTo: '111-222-3333'
      }
     
  },

  addUserRatings : function(obj,next)
  {
    console.log(obj)
  var responseObj = {
  "statusCode":-1,
  "messsage":null
};

UserRatings.create(obj).exec(function(err,repo)
{console.log(repo)
  if (err) {
    responseObj.message = err;
    next(responseObj);
} else if (!repo) {
    responseObj.statusCode = 2;
    responseObj.message = "Failed to insert record";
    next(responseObj);
} else if (repo.length === 0) {
    responseObj.statusCode = 2;
    responseObj.message = "Failed to insert record";
    next(responseObj);
} else {
    responseObj.statusCode = 0;
    responseObj.message = repo.length + "Record inserted successfully!";
    responseObj.successResult = repo;
    next(responseObj);
}
})
  },
  getUserRatings : function(next)
  {
    
  var responseObj = {
  "statusCode":-1,
  "messsage":null
};
var queryString = [{$match:{}},
  {
    $group:
      {
        _id: null,
        food: { $sum: "$foodRate" },
        ambiance: { $sum: "$ambianceRate" },
        service: { $sum: "$serviceRate" },
        price: { $sum: "$priceRate" },
        count:{$sum:1}
       
      }
  },
  {$project:{food: { $divide: [ "$food", "$count" ] },ambiance: { $divide: [ "$ambiance", "$count" ] },service: { $divide: [ "$service", "$count" ] },price: { $divide: [ "$price", "$count" ] }}}
];
// UserRatings.aggregate({}).exec(function(err,repo){
// next(repo)
// })
UserRatings.native(function(err, collection) {
 
  

  collection.aggregate(queryString).toArray(function(err, repo) {
   
    if (err) {
     
      responseObj.message = err;
      next(responseObj);
  } else if (!repo) {
      responseObj.statusCode = 2;
      responseObj.message = "Failed to fetch record";
      next(responseObj);
  } else if (repo.length === 0) {
      responseObj.statusCode = 2;
      responseObj.message = "Failed to fetch record";
      next(responseObj);
  } else {
      responseObj.statusCode = 0;
      responseObj.message = repo.length + "Record fetched successfully!";
      responseObj.successResult = repo;
      next(responseObj);
  }
  })
})

  },
  getUserFeedBack : function(next)
  {
    
  var responseObj = {
  "statusCode":-1,
  "messsage":null
};

UserRatings.find({feedback:{$ne:""},feedback:{$exists:true}}).exec(function(err,repo)
{console.log(repo)
  if (err) {
    responseObj.message = err;
    next(responseObj);
} else if (!repo) {
    responseObj.statusCode = 2;
    responseObj.message = "Failed to insert record";
    next(responseObj);
} else if (repo.length === 0) {
    responseObj.statusCode = 2;
    responseObj.message = "Failed to insert record";
    next(responseObj);
} else {
    responseObj.statusCode = 0;
    responseObj.message = repo.length + "Record inserted successfully!";
    responseObj.successResult = repo;
    next(responseObj);
}
})
  }
  

};

