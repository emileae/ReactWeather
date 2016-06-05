// function getTempPromise (location){
//   return new Promise(function(resolve, reject){
//     resolve(79);
//     reject('City not found');
//   });
// };
//
// getTempPromise('Cape Town').then(function(temp){
//   console.log('temp: ', temp);
// }, function(err){
//   console.log('err: ', err);
// })

function addPromise(a,b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('not numbers');
    };
  });
};

addPromise(2,3).then(function(ans){
  console.log('resolve: ', ans);
}, function(err){
  console.log('reject', err);
});
addPromise(2,'abc').then(function(ans){
  console.log('resolve: ', ans);
}, function(err){
  console.log('reject', err);
});
